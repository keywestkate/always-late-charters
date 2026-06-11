"use client";

import { useState } from "react";
import Script from "next/script";
import SchemaMarkup from "@/components/SEO";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const serif  = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
const sans   = { fontFamily: "'Jost', system-ui, sans-serif" };
const ACCENT = "#8B7355";
const TEXT   = "#1A1A18";
const MUTED  = "#6B6B60";
const BG     = "#F7F5F1";
const BG_ALT = "#FFFFFF";
const BG_PAN = "#ECEAE5";
const PHONE     = "305-743-2444";
const PHONE_TEL = "tel:+13057432444";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far offshore do you go on a deep sea fishing charter out of Marathon, FL?",
      acceptedAnswer: { "@type": "Answer", text: "Most offshore trips run 20–45 miles from Captain Hook's Marina in Marathon, depending on sea conditions, target species, and time of year. The Gulf Stream's warm blue water typically runs closest to the Keys in summer (20–25 miles) and pushes farther out in winter (35–50 miles). Captain Lucas makes the call each morning based on current satellite sea surface temperature charts, wind, and sea state — we go where the fish are, not where the GPS says to go." },
    },
    {
      "@type": "Question",
      name: "What fish can you catch offshore in Marathon, Florida Keys?",
      acceptedAnswer: { "@type": "Answer", text: "The primary offshore targets out of Marathon are Mahi-Mahi (Dolphin), Blackfin Tuna, Wahoo, Sailfish, Swordfish (deep drop at night), Kingfish, and Cobia. Mahi-Mahi are present on weed lines and floating debris year-round, with peak action in spring and summer. Blackfin Tuna school on the current edges from fall through spring. Wahoo are most active in cooler months. Sailfish peak November through February. The offshore grounds off Marathon are among the most productive in the Florida Keys." },
    },
    {
      "@type": "Question",
      name: "What is the difference between a half-day and full-day offshore fishing charter?",
      acceptedAnswer: { "@type": "Answer", text: "A half-day offshore charter (5–6 hours) typically covers 15–20 miles from shore — enough to reach the reef edge and nearshore weed lines, but not deep enough to reliably find blue water Mahi-Mahi in all seasons. Full-day charters (8–10 hours) allow us to push 30–45 miles to the heart of the Gulf Stream where the big weed lines form and where tournament-class Mahi, Tuna, and Wahoo live. For serious offshore fishing, a full day is the recommendation — the travel time alone justifies the extra hours." },
    },
    {
      "@type": "Question",
      name: "Do you provide all the fishing gear and equipment?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — everything is included. We provide all rods, reels, terminal tackle, lures, live bait (rigged and ready), and ice. The vessel is fully stocked with safety equipment, first aid, and electronics. All you need to bring is valid photo ID, sunscreen, polarized sunglasses, food, non-alcoholic beverages, and a camera. Fish cleaning and bagging is included at the dock upon return." },
    },
  ],
};

function Label({ children }) {
  return <p className="text-[10px] tracking-[0.28em] uppercase mb-4" style={{ ...sans, color: ACCENT }}>{children}</p>;
}

function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-b" style={{ borderColor: `${TEXT}12` }}>
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between py-5 text-left gap-6" aria-expanded={open === i}>
            <span className="text-[15px] font-light leading-snug"
              style={{ ...sans, color: open === i ? ACCENT : TEXT }}>{item.name}</span>
            <span className="flex-shrink-0 text-xl font-light mt-0.5 transition-transform duration-300"
              style={{ color: ACCENT, transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
          </button>
          {open === i && (
            <div className="pb-6 text-[14px] leading-[1.88]" style={{ ...sans, color: MUTED }}>
              {item.acceptedAnswer.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function OffshorePage() {
  return (
    <>
      <SchemaMarkup pageType="FishingCharter" />
      <Script id="faq-schema-offshore" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 0) }} />
      <div style={{ overflowX: "hidden" }}>
        <SiteNav activePage="/offshore" />

        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "60vh" }}>
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #0a3d62 0%, #0e6b8a 60%, #0e9aa7 100%)" }} />
          <div className="absolute inset-0 opacity-15"
            style={{ backgroundImage: "radial-gradient(circle at 75% 40%, #8B7355 0%, transparent 55%)" }} />
          <div className="relative z-10 text-center px-6 lg:px-14 pt-28 pb-20 max-w-4xl mx-auto">
            <Label>Marathon, Florida Keys</Label>
            <h1 className="text-white leading-[0.88] mb-8"
              style={{ ...serif, fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 300 }}>
              Offshore Deep Sea
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Fishing Charters.</em>
            </h1>
            <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: "rgba(255,255,255,0.30)" }} />
            <p className="text-[15px] leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ ...sans, color: "rgba(255,255,255,0.65)" }}>
              The Gulf Stream runs within 20 miles of Marathon — carrying blue water, weed lines, and the best
              pelagic fishing in the Florida Keys. Mahi-Mahi, Blackfin Tuna, Wahoo, Sailfish.
            </p>
            <a href={PHONE_TEL}
              className="inline-flex items-center gap-3 text-white text-[12px] tracking-[0.28em] uppercase px-10 py-4 transition-all duration-300"
              style={{ ...sans, backgroundColor: ACCENT }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7a6347")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}>
              Call to Book · {PHONE}
            </a>
          </div>
        </section>

        {/* Gulf Stream */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: BG_ALT }}>
          <div className="max-w-screen-lg mx-auto">
            <Label>Understanding Offshore Fishing</Label>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="leading-[0.9] mb-8"
                  style={{ ...serif, fontSize: "clamp(2.2rem, 3.8vw, 3.8rem)", fontWeight: 300, color: TEXT }}>
                  The Gulf Stream
                  <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>is Right There.</em>
                </h2>
                <p className="text-[15px] leading-[1.92] mb-6" style={{ ...sans, color: MUTED }}>
                  The Florida Current runs just 20–40 miles off Marathon, carrying warm blue water from the tropics
                  along with the species that follow it. When you cross from green water to blue, everything changes.
                </p>
                <p className="text-[15px] leading-[1.92]" style={{ ...sans, color: MUTED }}>
                  Floating sargassum weed lines concentrate bait, and the bait concentrates Mahi-Mahi, Tuna, and Wahoo.
                  Captain Lucas reads the satellite charts every morning and knows exactly where to look.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {[
                  { label: "Trolling for Mahi & Wahoo", desc: "High-speed trolling along weed lines and color breaks. When Mahi are on a school, the action can be non-stop." },
                  { label: "Live-Baiting for Tuna",      desc: "Blackfin Tuna school on current edges and respond aggressively to live pilchards on light tackle. Pound-for-pound one of the best fighters in the ocean." },
                  { label: "Kite Fishing for Sailfish",  desc: "The kite presents live bait at the surface with a natural presentation that triggers Sailfish into a full-speed surface strike. Peak: November through February." },
                ].map(t => (
                  <div key={t.label} className="pl-6 border-l" style={{ borderColor: `${ACCENT}40` }}>
                    <p className="text-[9px] tracking-[0.35em] uppercase mb-2" style={{ ...sans, color: ACCENT }}>{t.label}</p>
                    <p className="text-[13px] leading-relaxed" style={{ ...sans, color: MUTED }}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Half vs Full Day */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: BG }}>
          <div className="max-w-screen-lg mx-auto">
            <Label>Trip Options</Label>
            <h2 className="leading-[0.9] mb-12"
              style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: TEXT }}>
              Half-Day vs.
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Full Day.</em>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { label: "Half-Day · 5–6 Hours", items: ["20–25 miles offshore","Reef edge and nearshore weed lines","Best for families, first-timers, limited time","Mahi, Kingfish, Cobia in season","Departs 7am, returns by 1pm"] },
                { label: "Full Day · 8–10 Hours", items: ["30–45 miles offshore — deep blue water","Heart of the Gulf Stream and major weed lines","Best for serious anglers and larger groups","Mahi, Blackfin Tuna, Wahoo, Sailfish","Departs 6:30am, returns by 4–5pm"] },
              ].map(t => (
                <div key={t.label} className="p-8 border" style={{ borderColor: `${TEXT}12`, backgroundColor: BG_ALT }}>
                  <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ ...sans, color: ACCENT }}>{t.label}</p>
                  <ul className="flex flex-col gap-3">
                    {t.items.map(item => (
                      <li key={item} className="flex items-start gap-3 text-[14px]" style={{ ...sans, color: MUTED }}>
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: BG_PAN }}>
          <div className="max-w-screen-lg mx-auto">
            <Label>What&apos;s Included</Label>
            <h2 className="leading-[0.9] mb-12"
              style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: TEXT }}>
              Everything You
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Need On Board.</em>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {["All Rods & Reels","Live & Cut Bait","Lures & Terminal Tackle","Ice & Fish Bags",
                "Fish Cleaning & Filleting","USCG Safety Equipment","Garmin Electronics","Experienced Guide"].map(item => (
                <div key={item} className="pt-5 border-t" style={{ borderColor: `${TEXT}12` }}>
                  <div className="w-5 h-px mb-4" style={{ backgroundColor: ACCENT }} />
                  <p className="text-[13px] font-light" style={{ ...sans, color: TEXT }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: BG_ALT }}>
          <div className="max-w-screen-lg mx-auto">
            <Label>Common Questions</Label>
            <h2 className="leading-[0.9] mb-12"
              style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: TEXT }}>
              Offshore Charter
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>FAQs.</em>
            </h2>
            <Accordion items={faqSchema.mainEntity} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 px-6 lg:px-14 text-center" style={{ backgroundColor: BG }}>
          <div className="max-w-xl mx-auto">
            <Label>Book Now</Label>
            <h2 className="leading-[0.9] mb-6"
              style={{ ...serif, fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300, color: TEXT }}>
              Book Your Offshore
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Adventure.</em>
            </h2>
            <p className="text-[15px] leading-relaxed mb-10" style={{ ...sans, color: MUTED }}>
              Half-day and full-day options available. Call Captain Lucas to check availability.
            </p>
            <a href={PHONE_TEL}
              className="inline-flex items-center gap-3 text-white text-[12px] tracking-[0.28em] uppercase px-12 py-4 transition-all duration-300"
              style={{ ...sans, backgroundColor: ACCENT }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7a6347")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}>
              Call · {PHONE}
            </a>
            <p className="mt-5 text-[11px] tracking-[0.2em] uppercase" style={{ ...sans, color: MUTED }}>
              Captain Hook&apos;s Marina · 11800 Overseas Hwy · Marathon, FL 33050
            </p>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
