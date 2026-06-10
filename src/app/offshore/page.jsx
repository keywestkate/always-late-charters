"use client";

import { useState } from "react";
import Script from "next/script";
import SchemaMarkup from "@/components/SEO";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// ─── Design tokens ────────────────────────────────────────────────────────────
const serif = { fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif" };
const sans  = { fontFamily: "'Jost', system-ui, -apple-system, sans-serif" };
const GOLD  = "#C9A96E";
const NAVY  = "#0A192F";
const CREAM = "#F2EDE4";
const PHONE     = "305-743-2444";
const PHONE_TEL = "tel:+13057432444";

// ─── SEO schema (unchanged) ───────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does an offshore fishing charter in Marathon FL cost?",
      acceptedAnswer: { "@type": "Answer", text: "Offshore fishing charters in Marathon, FL with Always Late Charters range from approximately $950 for a half-day trip to $1,850 for a full-day Gulf Stream adventure. Pricing covers up to 6 passengers and includes all rods, reels, tackle, bait, ice, and fish cleaning. No fishing license is required — our federal charter permit covers all passengers." },
    },
    {
      "@type": "Question",
      name: "What is the best time of year for offshore fishing in the Florida Keys?",
      acceptedAnswer: { "@type": "Answer", text: "The Florida Keys offer exceptional offshore fishing year-round, but peak seasons vary by species. Mahi-Mahi (Dolphin) run strongest from March through July, often schooling under floating weed lines in the Gulf Stream. Wahoo peak in the fall and winter months. Sailfish are most active from November through April. Yellowfin and Blackfin Tuna are available throughout the year, with concentrations near the reef edge in cooler months. There is genuinely no bad month to fish offshore out of Marathon." },
    },
    {
      "@type": "Question",
      name: "What is the difference between a half-day and full-day offshore charter?",
      acceptedAnswer: { "@type": "Answer", text: "A half-day offshore charter (approximately 5 hours) covers 10–20 miles offshore, targeting nearshore pelagics like Blackfin Tuna, Kingfish, and Mahi-Mahi near the reef edge. It is ideal for families, first-time offshore anglers, or groups with limited time. A full-day charter (8–10 hours) pushes 30–50 miles into the true Gulf Stream, where Blue Marlin, Sailfish, Wahoo, and Yellowfin Tuna are consistently found. Serious anglers targeting trophy billfish should always choose the full-day option." },
    },
    {
      "@type": "Question",
      name: "Is offshore fishing in the Florida Keys good for beginners?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Captain Lucas Ponzoa has guided hundreds of first-time offshore anglers and is known for his patient, encouraging teaching style. All gear is provided, and Captain Lucas will walk you through every step — from how to hold the rod to fighting and landing the fish. Many of our most loyal repeat customers caught their first-ever offshore fish on an Always Late Charters trip. The half-day trip is the recommended starting point for beginners." },
    },
  ],
};

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border-b" style={{ borderColor: `${GOLD}25` }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between py-5 text-left gap-6 transition-colors duration-200"
            aria-expanded={open === i}
          >
            <span className="text-[15px] font-light leading-snug" style={{ ...sans, color: open === i ? GOLD : "rgba(255,255,255,0.85)" }}>
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
      <span className="text-[10px] tracking-[0.42em] uppercase" style={{ ...sans, color: light ? GOLD : "#8A7355" }}>
        {children}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function OffshoreFishingPage() {
  return (
    <>
      <SchemaMarkup pageType="FishingCharter" />
      <Script id="faq-schema-offshore" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 0) }} />

      <div style={{ fontFamily: "'Jost', system-ui, sans-serif", overflowX: "hidden" }}>
        <SiteNav activePage="/offshore" />

        {/* ── Hero ── */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "65vh", backgroundColor: NAVY }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A192F 0%, #0d2a4a 50%, #0A192F 100%)" }} />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #C9A96E 0%, transparent 60%)" }} />
          <div className="relative z-10 text-center px-6 lg:px-14 pt-28 pb-20 max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <Eyebrow light>Marathon, Florida Keys</Eyebrow>
            </div>
            <h1 className="text-white leading-[0.88] mb-8"
              style={{ ...serif, fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 300 }}>
              Offshore Fishing
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>Charters.</em>
            </h1>
            <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: GOLD }} />
            <p className="text-[15px] leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ ...sans, color: "rgba(255,255,255,0.55)" }}>
              Captain Lucas Ponzoa runs offshore trips from Captain Hook's Marina directly into the Gulf Stream —
              one of the most productive stretches of blue water on the Atlantic seaboard.
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

        {/* ── Gulf Stream copy ── */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: CREAM }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-10"><Eyebrow>The Gulf Stream Advantage</Eyebrow></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="leading-[0.9] mb-8"
                  style={{ ...serif, fontSize: "clamp(2.2rem, 3.8vw, 3.8rem)", fontWeight: 300, color: NAVY }}>
                  Why Marathon Offshore
                  <br />
                  <em style={{ fontStyle: "italic", fontWeight: 400 }}>Is World-Class.</em>
                </h2>
                <p className="text-[15px] leading-[1.92] mb-6" style={{ ...sans, color: `${NAVY}90` }}>
                  The Gulf Stream passes closer to the Florida Keys than anywhere else on the Eastern Seaboard.
                  From Marathon, Captain Lucas can reach the Stream's productive edge in under an hour on a full-day trip.
                </p>
                <p className="text-[15px] leading-[1.92]" style={{ ...sans, color: `${NAVY}75` }}>
                  The Stream acts as a biological conveyor belt — concentrating baitfish, floating miles of Sargassum weed
                  lines that become feeding stations for pelagic predators, and creating sharp temperature breaks where
                  Mahi-Mahi, Tuna, and Wahoo stack up.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  { name: "Mahi-Mahi", season: "Mar – Jul peak", desc: "Spectacularly acrobatic when hooked. School under weed lines and debris. 10–30 lbs routinely; bull Mahi exceeding 50 lbs on full-day trips." },
                  { name: "Wahoo", season: "Fall & Winter", desc: "Speed demons capable of 60 mph bursts. High-speed trolling along temperature breaks. Violent, searing runs that test every knot." },
                  { name: "Blackfin & Yellowfin Tuna", season: "Year-round", desc: "Blackfin 5–20 lbs near the reef edge. Yellowfin 30–100+ lbs in deep water — some of the most demanding fights in the ocean." },
                  { name: "Sailfish & Blue Marlin", season: "Nov – Apr (Sail)", desc: "Consistent Sailfish fishery on the Atlantic coast. Blue Marlin targeted on full-day deep trips. Trophy-class encounters." },
                ].map((s) => (
                  <div key={s.name} className="pl-6 border-l" style={{ borderColor: `${GOLD}40` }}>
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <span className="text-lg font-light" style={{ ...serif, color: NAVY }}>{s.name}</span>
                      <span className="text-[9px] tracking-[0.3em] uppercase flex-shrink-0" style={{ ...sans, color: GOLD }}>{s.season}</span>
                    </div>
                    <p className="text-[13px] leading-relaxed" style={{ ...sans, color: `${NAVY}70` }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Half-day vs Full-day ── */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: NAVY }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-12"><Eyebrow light>Trip Options</Eyebrow></div>
            <h2 className="text-white leading-[0.9] mb-14"
              style={{ ...serif, fontSize: "clamp(2.2rem, 3.8vw, 3.8rem)", fontWeight: 300 }}>
              Half-Day or Full-Day —
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Which Is Right for You?</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  duration: "~5 Hours",
                  title: "Half-Day Offshore",
                  price: "From $950",
                  items: ["10–20 miles offshore", "Reef edge & nearshore Gulf Stream", "Blackfin Tuna, Mahi, Kingfish", "Best for families & first-timers", "Up to 6 passengers"],
                  highlight: false,
                },
                {
                  duration: "~10 Hours",
                  title: "Full-Day Offshore",
                  price: "From $1,850",
                  badge: "Most Popular",
                  items: ["30–50 miles offshore", "True Gulf Stream blue water", "Mahi, Wahoo, Yellowfin, Sailfish, Marlin", "Best for serious anglers", "Up to 6 passengers"],
                  highlight: true,
                },
              ].map((opt) => (
                <div key={opt.title} className="p-8 border"
                  style={{ borderColor: opt.highlight ? GOLD : "rgba(255,255,255,0.10)", background: opt.highlight ? `${GOLD}08` : "rgba(255,255,255,0.03)" }}>
                  {opt.badge && (
                    <div className="text-[8px] tracking-[0.45em] uppercase mb-3" style={{ ...sans, color: GOLD }}>{opt.badge}</div>
                  )}
                  <div className="text-[9px] tracking-[0.38em] uppercase mb-2" style={{ ...sans, color: "rgba(255,255,255,0.35)" }}>{opt.duration}</div>
                  <h3 className="text-white text-2xl font-light mb-5" style={serif}>{opt.title}</h3>
                  <ul className="space-y-3 mb-8">
                    {opt.items.map(item => (
                      <li key={item} className="flex items-center gap-3 text-[13px]" style={{ ...sans, color: "rgba(255,255,255,0.60)" }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-3xl font-light" style={{ ...serif, color: GOLD }}>{opt.price}</div>
                </div>
              ))}
            </div>

            {/* E-E-A-T callout */}
            <div className="mt-12 p-7 border-l-4" style={{ borderColor: GOLD, backgroundColor: `${GOLD}08` }}>
              <p className="text-[14px] leading-[1.88]" style={{ ...sans, color: "rgba(255,255,255,0.60)" }}>
                <span className="font-medium" style={{ color: "rgba(255,255,255,0.90)" }}>Guided by 20+ years of local expertise. </span>
                Captain Lucas Ponzoa is a 3rd-generation Florida Keys fisherman holding a USCG OUPV License. He monitors
                sea surface temperature charts, current reports, and live bait conditions every morning before departure —
                and adjusts the plan in real time to put you on the best bite available that day.
              </p>
            </div>
          </div>
        </section>

        {/* ── What's included ── */}
        <section className="py-20 lg:py-24 px-6 lg:px-14" style={{ backgroundColor: CREAM }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-10"><Eyebrow>What&apos;s Included</Eyebrow></div>
            <h2 className="leading-[0.9] mb-12"
              style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: NAVY }}>
              Everything Provided.
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>No Hidden Costs.</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { label: "Tackle & Bait", desc: "Heavy-duty offshore rods and reels, premium terminal tackle, rigged ballyhoo, live bait when available, and trolling lures." },
                { label: "Fish Cleaning", desc: "Ice, fish cleaning, and bagging at the dock included on every trip. Take your catch straight to dinner — no extra charge." },
                { label: "No License Needed", desc: "Our federal charter vessel permit covers all passengers on board. Zero paperwork required from you." },
              ].map(item => (
                <div key={item.label} className="pl-7 border-l" style={{ borderColor: `${GOLD}35` }}>
                  <div className="text-[9px] tracking-[0.38em] uppercase mb-3" style={{ ...sans, color: GOLD }}>{item.label}</div>
                  <p className="text-[14px] leading-[1.85]" style={{ ...sans, color: `${NAVY}75` }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: NAVY }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-12"><Eyebrow light>Common Questions</Eyebrow></div>
            <h2 className="text-white leading-[0.9] mb-12"
              style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300 }}>
              Offshore Fishing
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>FAQs.</em>
            </h2>
            <Accordion items={faqSchema.mainEntity} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-24 px-6 lg:px-14 text-center" style={{ backgroundColor: CREAM }}>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-8"><Eyebrow>Book Now</Eyebrow></div>
            <h2 className="leading-[0.9] mb-6"
              style={{ ...serif, fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300, color: NAVY }}>
              Ready to Hit
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>the Gulf Stream?</em>
            </h2>
            <p className="text-[15px] leading-relaxed mb-10" style={{ ...sans, color: `${NAVY}70` }}>
              Call or text Captain Lucas directly. Trips book fast in peak season.
            </p>
            <a href={PHONE_TEL}
              className="inline-flex items-center gap-3 text-white text-[12px] tracking-[0.32em] uppercase px-12 py-4 transition-all duration-300"
              style={{ ...sans, backgroundColor: NAVY }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = NAVY)}>
              Call · {PHONE}
            </a>
            <p className="mt-5 text-[11px] tracking-[0.2em] uppercase" style={{ ...sans, color: `${NAVY}45` }}>
              Captain Hook's Marina · 11800 Overseas Hwy · Marathon, FL 33050
            </p>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
