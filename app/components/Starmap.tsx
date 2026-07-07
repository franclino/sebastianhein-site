"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight data-pulse "starmap" hero — a stand-in for the real 360KB
 * Three.js scene (scripts/visualizer/viz_server.py in the capitalMagic repo).
 * See 11_Website-Build-Plan.md § "Grade-A upgrade path" for how to swap in
 * the real React Three Fiber scene + a bundled mindmap.json pulse snapshot.
 *
 * Perf + a11y: caps DPR, pauses when off-screen, and honours reduced-motion
 * by drawing a single static frame (no animation loop).
 */
export default function Starmap() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);

    let W = 0,
      H = 0,
      raf = 0,
      spawnTimer = 0,
      vis = true;
    type Node = { x: number; y: number; vx: number; vy: number; r: number; tw: number };
    type Pulse = { a: number; b: number; t: number; sp: number };
    let nodes: Node[] = [];
    let edges: [number, number][] = [];
    const pulses: Pulse[] = [];

    function build() {
      nodes = [];
      edges = [];
      const count = Math.max(28, Math.min(80, Math.round((W * H) / 16000)));
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: Math.random() * 1.5 + 0.6,
          tw: Math.random() * Math.PI * 2,
        });
      }
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const dx = nodes[a].x - nodes[b].x;
          const dy = nodes[a].y - nodes[b].y;
          if (dx * dx + dy * dy < 150 * 150) edges.push([a, b]);
        }
      }
    }

    function size() {
      const r = cv!.getBoundingClientRect();
      W = r.width;
      H = r.height;
      cv!.width = Math.floor(W * DPR);
      cv!.height = Math.floor(H * DPR);
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      build();
    }

    function drawStatic() {
      ctx!.clearRect(0, 0, W, H);
      for (const e of edges) {
        const p = nodes[e[0]],
          q = nodes[e[1]];
        ctx!.strokeStyle = "rgba(90,120,155,0.06)";
        ctx!.beginPath();
        ctx!.moveTo(p.x, p.y);
        ctx!.lineTo(q.x, q.y);
        ctx!.stroke();
      }
      for (const nd of nodes) {
        ctx!.fillStyle = "rgba(150,170,200,0.4)";
        ctx!.beginPath();
        ctx!.arc(nd.x, nd.y, nd.r, 0, 6.283);
        ctx!.fill();
      }
    }

    function frame() {
      ctx!.clearRect(0, 0, W, H);
      ctx!.lineWidth = 1;
      for (const e of edges) {
        const p = nodes[e[0]],
          q = nodes[e[1]];
        ctx!.strokeStyle = "rgba(90,120,155,0.06)";
        ctx!.beginPath();
        ctx!.moveTo(p.x, p.y);
        ctx!.lineTo(q.x, q.y);
        ctx!.stroke();
      }
      for (const nd of nodes) {
        nd.x += nd.vx;
        nd.y += nd.vy;
        nd.tw += 0.02;
        if (nd.x < 0 || nd.x > W) nd.vx *= -1;
        if (nd.y < 0 || nd.y > H) nd.vy *= -1;
        const a = 0.35 + Math.sin(nd.tw) * 0.25;
        ctx!.fillStyle = `rgba(150,170,200,${a.toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(nd.x, nd.y, nd.r, 0, 6.283);
        ctx!.fill();
      }
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pu = pulses[k],
          A = nodes[pu.a],
          B = nodes[pu.b];
        pu.t += pu.sp;
        if (pu.t >= 1) {
          pulses.splice(k, 1);
          continue;
        }
        const x = A.x + (B.x - A.x) * pu.t,
          y = A.y + (B.y - A.y) * pu.t;
        const g = ctx!.createRadialGradient(x, y, 0, x, y, 7);
        g.addColorStop(0, "rgba(52,229,212,0.95)");
        g.addColorStop(1, "rgba(52,229,212,0)");
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(x, y, 7, 0, 6.283);
        ctx!.fill();
        ctx!.fillStyle = "#8bfff2";
        ctx!.beginPath();
        ctx!.arc(x, y, 1.6, 0, 6.283);
        ctx!.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    function spawn() {
      if (!vis || edges.length === 0 || pulses.length >= 7) return;
      const e = edges[(Math.random() * edges.length) | 0];
      pulses.push({ a: e[0], b: e[1], t: 0, sp: 0.006 + Math.random() * 0.01 });
    }

    size();
    window.addEventListener("resize", size);

    if (reduce) {
      drawStatic();
    } else {
      const io = new IntersectionObserver(
        (en) => {
          vis = en[0].isIntersecting;
          if (vis && !raf) raf = requestAnimationFrame(frame);
          else if (!vis && raf) {
            cancelAnimationFrame(raf);
            raf = 0;
          }
        },
        { threshold: 0.02 }
      );
      io.observe(cv);
      raf = requestAnimationFrame(frame);
      spawnTimer = window.setInterval(spawn, 900);

      return () => {
        window.removeEventListener("resize", size);
        if (raf) cancelAnimationFrame(raf);
        clearInterval(spawnTimer);
        io.disconnect();
      };
    }

    return () => {
      window.removeEventListener("resize", size);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" />;
}
