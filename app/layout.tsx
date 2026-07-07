import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://sebastianhein.dev";
const DESCRIPTION =
  "One builder — from the smart contract to the pixel. I design, build, audit, deploy, and operate autonomous on-chain + AI systems end-to-end: Chainlink CRE / oracle integration, Solidity/DeFi, quant strategy, AI-agent orchestration, and 24/7 production ops.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Sebastian Hein — Autonomous on-chain + AI systems",
    template: "%s · Sebastian Hein",
  },
  description: DESCRIPTION,
  keywords: [
    "Chainlink CRE",
    "Solidity",
    "DeFi",
    "Arbitrum",
    "smart contract engineer",
    "AI agents",
    "quant trading",
    "Hyperliquid",
    "creative technologist",
  ],
  authors: [{ name: "Sebastian Hein" }],
  openGraph: {
    type: "website",
    url: SITE,
    title: "Sebastian Hein — Autonomous on-chain + AI systems",
    description: DESCRIPTION,
    siteName: "Sebastian Hein",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sebastian Hein — capitalMagic system map" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sebastianhein369",
    creator: "@sebastianhein369",
    title: "Sebastian Hein — Autonomous on-chain + AI systems",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  alternates: { canonical: SITE },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sebastian Hein",
  jobTitle: "Autonomous Systems Engineer & Creative Technologist",
  url: SITE,
  address: { "@type": "PostalAddress", addressLocality: "Sóller", addressRegion: "Mallorca", addressCountry: "ES" },
  knowsLanguage: ["de", "en", "es"],
  knowsAbout: ["Chainlink CRE", "Solidity", "DeFi", "Smart contract security", "AI agent orchestration", "Quantitative trading"],
  sameAs: ["https://x.com/sebastianhein369", "https://www.linkedin.com/in/sebastian-hein-262711420/", "https://github.com/sebastianhein369"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </body>
    </html>
  );
}
