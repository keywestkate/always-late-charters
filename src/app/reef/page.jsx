"use client";

import { useState } from "react";
import Script from "next/script";
import SchemaMarkup from "@/components/SEO";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif" };
const sans  = { fontFamily: "'Jost', system-ui, -apple-system, sans-serif" };
const GOLD  = "#C9A96E";
const NAVY  = "#0A192F";
const CREAM = "#F2EDE4";
const PHONE     = "305-743-2444";
const PHONE_TEL = "tel:+13057432444";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between reef fishing and wreck fishing in the Florida Keys?",
      acceptedAnswer: { "@type": "Answer", text: "Reef fishing targets fish living on and around the natural coral structures of the Florida Reef Tract — primarily Yellowtail Snapper, Mangrove Snapper, and Hogfish in 15–60 feet of water. Wreck fishing targets fish using artificial or historic shipwrecks as habitat, typically in 60–120 feet. Wrecks concentrate larger Grouper, Amberjack, and Snapper in extraordinary numbers because the structure creates a complete ecosystem. Always Late Charters combines both on most trips, reading conditions each day to maximize your catch." },
    },
    {
      "@type": "Question",
      name: "What fish can you catch reef fishing in Marathon, FL?",
      acceptedAnswer: { "@type": "Answer", text: "The Florida Reef Tract off Marathon produces Yellowtail Snapper, Mangrove Snapper, Mutton Snapper, Black Grouper, Gag Grouper, Hogfish, Amberjack, Cobia, Permit, and Flounder. Species availability varies by season and depth. Yellowtail Snapper are present year-round in large numbers. Hogfish are most active in cooler months. Grouper seasons are regulated by FWC, and Captain Lucas stays current on all closures to ensure every trip fishes legally within open seasons." },
    },
    {
      "@type": "Question",
      name: "Is reef fishing good for beginners and families?",
      acceptedAnswer: { "@type": "Answer", text: "Reef and wreck fishing is one of the best charter options for beginners and families. The inshore and nearshore reef waters around Marathon are calmer than the open ocean, seasickness risk is lower, and the fish bite steadily throughout the trip. Yellowtail Snapper in particular are aggressive, plentiful biters that provide exciting action on light tackle for anglers of any age. Captain Lucas provides patient instruction for first-timers and sizes tackle to the angler." },
    },
    {
      "@type": "Question",
      name: "Do I need a fishing license for a reef charter in the Florida Keys?",
      acceptedAnswer: { "@type": "Answer", text: "No. Always Late Charters operates under a federal charter vessel fishing permit, which covers all passengers on board. You do not need a personal saltwater fishing license for any trip. Captain Lucas also handles all size and bag limit compliance in real time — you focus on fishing, he handles the regulations." },
    },
  ],
};

function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border-b" style={{ borderColor: `${GOLD}25` }}>
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between py-5 text-left gap-6"
            aria-expanded={open === i}>
            <span className="text-[15px] font-light leading-snug"
              style={{ ...sans, color: open === i ? GOLD : "rgba(255,255,255,0.85)" }}>
              {item.name}
            </span>
            <span className="flex-shrink-0 text-xl font-light mt-0.5 transition-transform duration-300"
              style={{ color: GOLD, transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
          </button>
          {open === i && (
            <div className="pb-6 text-[14px] leading-[1.88]" style={{ ...sans, color: "rgba(255,255,255,0.50)" }}>
              {item.acceptedAnswer.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-7 h-px flex-shrink-0" style={{ backgroundColor: GOLD }} />
      <span className="text-[10px] tracking-[0.42em] uppercase" style={{ ...sans, color: light ? GOLD : "#8A7355" }}>{children}</span>
    </div>
  );
}

export default function ReefFishingPage() {
  return (
    <>
      <SchemaMarkup pageType="FishingCharter" />
      <Script id="faq-schema-reef" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 0) }} />

      <div style={{ overflowX: "hidden" }}>
        <SiteNav activePage="/reef" />

        {/* ── Hero ── */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "65vh", backgroundColor: NAVY }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #060E1A 0%, #0A192F 60%, #0d2a4a 100%)" }} />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 80% 50%, #C9A96E 0%, transparent 55%)" }} />
          <div className="relative z-10 text-center px-6 lg:px-14 pt-28 pb-20 max-w-4xl mx-auto">
            <div className="flex justify-center mb-8"><Eyebrow light>Marathon, Florida Keys</Eyebrow></div>
            <h1 className="text-white leading-[0.88] mb-8"
              style={{ ...serif, fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 300 }}>
              Reef &amp; Wreck
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Fishing Charters.</em>
            </h1>
            <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: GOLD }} />
            <p className="text-[15px] leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ ...sans, color: "rgba(255,255,255,0.55)" }}>
              The Florida Reef Tract runs the entire length of the Keys — the third-largest barrier reef system in the world.
              Captain Lucas has fished every ledge, coral head, and shipwreck off Marathon for over 20 years.
            </p>
            <a href={PHONE_TEL}
              className="inline-flex items-center gap-3 text-white text-[12px] tracking-[0.32em] uppercase px-10 py-4 transition-all duration-300"
              style={{ ...sans, backgroundColor: GOLD }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b8924e")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}>
              Call to Book · {PHONE}
            </a>
          </div>
        </section>

        {/* ── Reef vs Wreck ── */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: CREAM }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-10"><Eyebrow>Understanding Your Options</Eyebrow></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="leading-[0.9] mb-8"
                  style={{ ...serif, fontSize: "clamp(2.2rem, 3.8vw, 3.8rem)", fontWeight: 300, color: NAVY }}>
                  Reef Fishing vs.
                  <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Wreck Fishing.</em>
                </h2>
                <p className="text-[15px] leading-[1.92] mb-6" style={{ ...sans, color: `${NAVY}90` }}>
                  <strong style={{ color: NAVY }}>Reef fishing</strong> targets the natural coral structure of the Florida Reef Tract in 15–60 feet of water.
                  Yellowtail Snapper, Mangrove Snapper, Hogfish, and smaller Grouper dominate this zone.
                  Ideal for steady, varied action with species that are exceptional table fare.
                </p>
                <p className="text-[15px] leading-[1.92] mb-6" style={{ ...sans, color: `${NAVY}80` }}>
                  <strong style={{ color: NAVY }}>Wreck fishing</strong> targets artificial and historic shipwrecks in 60–120 feet.
                  The USS Thunderbolt, deliberately sunk off Marathon as an artificial reef, is one of the most productive
                  wreck sites in the Middle Keys — stacked with Snapper and Grouper at every depth layer.
                </p>
                <p className="text-[15px] leading-[1.92]" style={{ ...sans, color: `${NAVY}70` }}>
                  Captain Lucas combines both on most charters, rotating between structure types based on what the fish are doing that day.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {[
                  { label: "Chumming for Yellowtail", desc: "Captain Lucas deploys a steady chum slick to pull Yellowtail up from the bottom. On a hot slick, 20–40 Yellowtail in an afternoon is realistic — some of the finest eating fish in the ocean." },
                  { label: "Bottom Fishing for Grouper & Hogfish", desc: "Heavy gear worked tight to the bottom. Grouper are ambush predators — the fight is a controlled power struggle to turn the fish before it finds the reef. Hogfish, prized by chefs across the Keys, caught on slow presentations near sandy patches." },
                  { label: "Live-Baiting for Amberjack & Cobia", desc: "Amberjack are the bullies of the wreck ecosystem — large, relentless fighters. Cobia cruise visually near the surface and can be sight-fished. A 40-pound Cobia on spinning tackle is one of the most satisfying fights in the Keys." },
                ].map(t => (
                  <div key={t.label} className="pl-6 border-l" style={{ borderColor: `${GOLD}40` }}>
                    <div className="text-[9px] tracking-[0.35em] uppercase mb-2" style={{ ...sans, color: GOLD }}>{t.label}</div>
                    <p className="text-[13px] leading-relaxed" style={{ ...sans, color: `${NAVY}70` }}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Species table ── */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: NAVY }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-10"><Eyebrow light>Species Guide</Eyebrow></div>
            <h2 className="text-white leading-[0.9] mb-12"
              style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300 }}>
              What We&apos;re
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Targeting.</em>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ borderBottom: `1px solid ${GOLD}40` }}>
                    {["Species", "Depth", "Best Season", "Technique"].map(h => (
                      <th key={h} className="text-left py-3 pr-6 text-[9px] tracking-[0.38em] uppercase"
                        style={{ ...sans, color: GOLD }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Yellowtail Snapper",   "20–60 ft",  "Year-round",        "Chumming, light tackle"],
                    ["Mangrove Snapper",     "20–80 ft",  "Year-round",        "Bottom fishing, live shrimp"],
                    ["Black & Gag Grouper",  "60–120 ft", "Open seasons vary", "Heavy bottom, live bait"],
                    ["Hogfish",              "30–80 ft",  "Oct–Mar peak",      "Slow bottom, cut squid"],
                    ["Greater Amberjack",    "80–120 ft", "Year-round",        "Live bait, jigging"],
                    ["Cobia",                "40–100 ft", "Spring & Fall",     "Live bait, sight fishing"],
                    ["Mutton Snapper",       "40–100 ft", "Spring–Summer",     "Live pinfish, bottom"],
                  ].map(([species, depth, season, technique], i) => (
                    <tr key={species} style={{ borderBottom: `1px solid rgba(255,255,255,0.05)` }}>
                      <td className="py-4 pr-6 font-light" style={{ ...sans, color: "rgba(255,255,255,0.85)" }}>{species}</td>
                      <td className="py-4 pr-6 text-[13px]" style={{ ...sans, color: "rgba(255,255,255,0.45)" }}>{depth}</td>
                      <td className="py-4 pr-6 text-[13px]" style={{ ...sans, color: "rgba(255,255,255,0.45)" }}>{season}</td>
                      <td className="py-4 pr-6 text-[13px]" style={{ ...sans, color: "rgba(255,255,255,0.45)" }}>{technique}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 p-7 border-l-4" style={{ borderColor: GOLD, backgroundColor: `${GOLD}08` }}>
              <p className="text-[14px] leading-[1.88]" style={{ ...sans, color: "rgba(255,255,255,0.60)" }}>
                <span className="font-medium" style={{ color: "rgba(255,255,255,0.90)" }}>Local knowledge that cannot be replicated. </span>
                Captain Lucas Ponzoa grew up fishing these exact reefs and wrecks. He knows which coral heads hold Hogfish
                in winter, which wreck produces the biggest Grouper in summer, and how the current shift at each tide
                affects where the Yellowtail stack. That knowledge — built over 20+ years, three generations deep — is
                what you are booking.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: CREAM }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-10"><Eyebrow>Common Questions</Eyebrow></div>
            <h2 className="leading-[0.9] mb-12"
              style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: NAVY }}>
              Reef &amp; Wreck
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>FAQs.</em>
            </h2>
            {/* FAQ on cream — adjust colors */}
            <div className="space-y-3">
              {faqSchema.mainEntity.map((item, i) => {
                const [isOpen, setIsOpen] = useState(false);
                return (
                  <div key={i} className="border-b" style={{ borderColor: `${GOLD}30` }}>
                    <button onClick={() => setIsOpen(v => !v)}
                      className="w-full flex items-start justify-between py-5 text-left gap-6"
                      aria-expanded={isOpen}>
                      <span className="text-[15px] font-light leading-snug"
                        style={{ ...sans, color: isOpen ? GOLD : `${NAVY}90` }}>{item.name}</span>
                      <span className="flex-shrink-0 text-xl font-light mt-0.5 transition-transform duration-300"
                        style={{ color: GOLD, transform: isOpen ? "rotate(45deg)" : "none" }}>+</span>
                    </button>
                    {isOpen && (
                      <div className="pb-6 text-[14px] leading-[1.88]" style={{ ...sans, color: `${NAVY}70` }}>
                        {item.acceptedAnswer.text}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-24 px-6 lg:px-14 text-center" style={{ backgroundColor: NAVY }}>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-8"><Eyebrow light>Book Now</Eyebrow></div>
            <h2 className="text-white leading-[0.9] mb-6"
              style={{ ...serif, fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300 }}>
              Book Your Reef
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>&amp; Wreck Charter.</em>
            </h2>
            <p className="text-[15px] leading-relaxed mb-10" style={{ ...sans, color: "rgba(255,255,255,0.50)" }}>
              Half-day and full-day options available. Call Captain Lucas to check availability.
            </p>
            <a href={PHONE_TEL}
              className="inline-flex items-center gap-3 text-white text-[12px] tracking-[0.32em] uppercase px-12 py-4 transition-all duration-300"
              style={{ ...sans, backgroundColor: GOLD }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b8924e")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}>
              Call · {PHONE}
            </a>
            <p className="mt-5 text-[11px] tracking-[0.2em] uppercase" style={{ ...sans, color: "rgba(255,255,255,0.25)" }}>
              Captain Hook&apos;s Marina · 11800 Overseas Hwy · Marathon, FL 33050
            </p>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
