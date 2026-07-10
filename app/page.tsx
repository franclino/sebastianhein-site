import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap row">
          <a className="brand" href="#top" aria-label="Sebastian Hein — home">
            <span className="glyph">SH</span>
            <span>
              Sebastian Hein
              <small>on-chain + AI systems</small>
            </span>
          </a>
          <nav>
            <a href="#build">Work</a>
            <a href="#system">System</a>
            <a href="#proof">Proof</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="tools">
            <ThemeToggle />
            <a className="btn primary" href="#contact">
              Book a call
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero" aria-label="Introduction">
          <div className="veil" />
          <div className="wrap grid">
            <div>
              <span className="eyebrow">Autonomous on-chain + AI systems</span>
              <h1>
                One builder — from the <span className="accent">smart contract</span> to the{" "}
                <span className="accent">pixel</span>.
              </h1>
              <p className="lede">
                I design, build, audit, deploy, and operate autonomous on-chain + AI systems end-to-end — Chainlink /
                oracle integration, Solidity contracts, quant strategy, AI-agent orchestration, and 24/7 production ops —
                and I build the verification machinery that keeps them honest.
              </p>
              <div className="cta">
                <a className="btn primary" href="#system">
                  See the system
                </a>
                <a className="btn" href="#contact">
                  Book a call →
                </a>
              </div>
              <p className="microcopy">
                Systems engineer <b>+</b> creative technologist · Remote, Mallorca · invoiced in USD/USDC
              </p>
            </div>

            <div
              className="receipt"
              role="img"
              aria-label="Build statistics: 148,000 lines of code, 950 commits, 12+ Arbitrum contracts, 7 Chainlink CRE workflows, 100+ AI-agent modules, live Hyperliquid perps."
            >
              <div className="bar">
                <i className="g" />
                <i />
                <i />
                <span>~/capitalMagic — git log</span>
              </div>
              <div className="body">
                <div className="cmd">$ git log --author=&quot;Sebastian Hein&quot; --stat</div>
                <hr />
                <div>
                  <span className="val">148,000</span> lines of code <span className="cmd">· solo</span>
                </div>
                <div>
                  <span className="val">950</span> commits <span className="cmd">· 94 active days · 8 months</span>
                </div>
                <div>
                  <span className="val">12+</span> Solidity contracts <span className="cmd">· Arbitrum One</span>
                </div>
                <div>
                  <span className="k">7</span> Chainlink CRE workflows <span className="cmd">· on-DON</span>
                </div>
                <div>
                  <span className="val">100+</span> AI-agent modules <span className="cmd">· Groq / Anthropic</span>
                </div>
                <div>
                  <span className="val">live</span> Hyperliquid perps <span className="cmd">· fail-closed</span>
                </div>
                <hr />
                <div>
                  <span className="ok">✔</span> verified on-chain <span className="cmd">· no return %s quoted</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT I BUILD */}
        <section id="build">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">What I build</span>
              <h2>Three disciplines most teams hire three people for.</h2>
              <p className="lede">
                The rare part isn&apos;t any one piece — it&apos;s that all of it lives in one person, held to a
                verification culture strict enough that I built the audit which caught my own overfit.
              </p>
            </div>
            <div className="pillars">
              <article className="card">
                <span className="tag">01 · On-chain</span>
                <h3>On-chain engineering</h3>
                <p>Contracts and oracle plumbing that pass institutional-grade review.</p>
                <ul>
                  <li>Chainlink CRE / oracle integration ⭐</li>
                  <li>Solidity dev + adversarial security audit</li>
                  <li>DeFi treasury &amp; capital automation</li>
                  <li>CCIP cross-chain flows</li>
                </ul>
              </article>
              <article className="card">
                <span className="tag">02 · Autonomous</span>
                <h3>Autonomous AI + quant</h3>
                <p>Systems that run themselves — and prove they should before they touch capital.</p>
                <ul>
                  <li>Multi-agent LLM orchestration (100+ modules)</li>
                  <li>Algo-trading on Hyperliquid perps</li>
                  <li>Walk-forward OOS + Deflated-Sharpe validation ⭐</li>
                  <li>Edge SRE on a Raspberry Pi production stack</li>
                </ul>
              </article>
              <article className="card">
                <span className="tag">03 · Design</span>
                <h3>Design / creative tech</h3>
                <p>I make systems that look like something — 15 years in light &amp; live production behind it.</p>
                <ul>
                  <li>3D WebGL data-art &amp; live dashboards</li>
                  <li>Blender cinematics of the data model</li>
                  <li>Custom design systems</li>
                  <li>The top-of-range justifier, never a cheaper add-on</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* THE SYSTEM */}
        <section id="system">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">The system · capitalMagic</span>
              <h2>A ~148K-LOC autonomous system, one operator.</h2>
              <p className="lede">
                Data flows one way, every stage is gated, and every layer is one I designed, built, and operate solo.
              </p>
            </div>
            <div className="flowcap">
              <b>flow →</b> execution · on-chain · consensus · intelligence · ops · verification
            </div>
            <div className="modules">
              <div className="mod">
                <span className="dot" />
                <span className="n">01 / EXECUTION</span>
                <span className="t">Hyperliquid perps</span>
                <span className="d">Automated perps bots with exchange-side stops + isolated sub-account margin firewalls.</span>
              </div>
              <div className="mod">
                <span className="dot" />
                <span className="n">02 / ON-CHAIN</span>
                <span className="t">Arbitrum contracts</span>
                <span className="d">12+ Solidity contracts — capital allocation, distribution, tax, oracle, CCIP.</span>
              </div>
              <div className="mod">
                <span className="dot" />
                <span className="n">03 / CONSENSUS</span>
                <span className="t">Chainlink CRE</span>
                <span className="d">7 on-DON workflows, TypeScript→WASM, median consensus.</span>
              </div>
              <div className="mod">
                <span className="dot" />
                <span className="n">04 / INTELLIGENCE</span>
                <span className="t">AI-agent layer</span>
                <span className="d">100+ modules, cost-tiered LLM routing, guardian audits.</span>
              </div>
              <div className="mod">
                <span className="dot" />
                <span className="n">05 / OPS</span>
                <span className="t">Raspberry Pi 5</span>
                <span className="d">systemd + git-CD, fail-closed deploys, Tailscale-only edge stack.</span>
              </div>
              <div className="mod">
                <span className="dot" />
                <span className="n">06 / VERIFY</span>
                <span className="t">Validation harness</span>
                <span className="d">Walk-forward OOS + Deflated Sharpe gate every change.</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* PROOF */}
        <section id="proof">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Proof · the receipts</span>
              <h2>Rigor you can inspect.</h2>
            </div>
            <div className="proof-grid">
              <div>
                <p className="quote">
                  &quot;I built the statistical audit that caught my <span className="accent">own</span>{" "}
                  over-optimistic backtest — then shipped the fixes.&quot;
                </p>
                <div className="chips">
                  <span className="chip">Walk-forward OOS</span>
                  <span className="chip">Deflated Sharpe · Bailey &amp; López de Prado 2014</span>
                  <span className="chip">52 / 78-agent audits · 0 crit/high</span>
                  <span className="chip">Fail-closed deploy</span>
                  <span className="chip">Verify-on-chain rule</span>
                  <span className="chip warn">Backtest P&amp;L = simulation projections, not returns</span>
                </div>
              </div>
              <div className="receipt2" aria-label="On-chain proof">
                <div className="row2">
                  <span>Network</span>
                  <b>Arbitrum One · 42161</b>
                </div>
                <div className="row2">
                  <span>Contracts live</span>
                  <b>12+</b>
                </div>
                <div className="row2">
                  <span>Solidity</span>
                  <b>0.8.20 · OpenZeppelin v5</b>
                </div>
                <div className="row2">
                  <span>Security audits</span>
                  <b>52 / 78-agent · 0 crit/high</b>
                </div>
                <div className="row2">
                  <span>CRE workflows</span>
                  <b>7 · on-DON</b>
                </div>
                <div className="row2">
                  <span>Claim policy</span>
                  <b>on-chain before stated</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* SERVICES */}
        <section id="services">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Work with me</span>
              <h2>One builder replaces a small team.</h2>
              <p className="lede">
                Every engagement is scoped and quoted to the build — tell me what you&apos;re shipping. Remote,
                worldwide, invoiced in USD/USDC.
              </p>
            </div>
            <div className="svc">
              <article className="card">
                <span className="tag">Wedge</span>
                <h3>CRE / Chainlink Integration Sprint</h3>
                <div className="price">
                  Fixed-scope <small>engagement</small>
                </div>
                <p>Data Feeds + CCIP + on-DON automation, wired, hardened, and reviewed.</p>
              </article>
              <article className="card">
                <span className="tag">Pre-launch</span>
                <h3>Contract + Adversarial Audit</h3>
                <div className="price">
                  Fixed-scope <small>engagement</small>
                </div>
                <p>Solidity authorship plus a multi-agent adversarial security review.</p>
              </article>
              <article className="card">
                <span className="tag">HIP-3</span>
                <h3>Perps Automation &amp; Risk Layer</h3>
                <div className="price">
                  Project <small>+ monthly retainer</small>
                </div>
                <p>Exchange-side risk, sub-account firewalls, and on-chain execution for perps teams.</p>
              </article>
            </div>
            <div className="svc-note">
              <b>Also:</b> fractional-CTO · smart-contract security · quant validation · AI multi-agent automation ·
              creative-tech data-viz.
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="wrap box">
            <div>
              <span className="eyebrow">Contact</span>
              <h2>Wiring up Chainlink CRE, hardening a contract, or need a solo team for a DeFi build?</h2>
              <p className="lede">
                I take on a small number of engagements. Tell me what you&apos;re shipping — I&apos;ll send a receipt,
                not a pitch.
              </p>
              <div className="cta" style={{ marginTop: 24 }}>
                <a className="btn primary" href="https://cal.com/sebastianhein">
                  Book a call — cal.com/sebastianhein
                </a>
              </div>
            </div>
            <div className="links">
              <a href="mailto:hello@sebastianhein.dev">
                <b>Email</b> hello@sebastianhein.dev
              </a>
              <a href="https://x.com/sebastianhein369">
                <b>X</b> @sebastianhein369
              </a>
              <a href="https://www.linkedin.com/in/sebastianhein369/">
                <b>LinkedIn</b> /in/sebastianhein369
              </a>
              <a href="https://github.com/sebastianhein369">
                <b>GitHub</b> /sebastianhein369
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap row">
          <span>© 2026 Sebastian Hein · Sóller, Mallorca · DE · EN · ES</span>
          <span>From the smart contract to the pixel.</span>
        </div>
      </footer>
    </>
  );
}
