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
      name: "What wildlife can I expect to see on an eco tour in Marathon, FL?",
      acceptedAnswer: { "@type": "Answer", text: "The Florida Keys backcountry is one of the most biodiverse marine ecosystems in North America. On a typical eco tour out of Marathon, you may encounter bottlenose dolphins, West Indian manatees, American crocodiles (rare but present), hawksbill and loggerhead sea turtles, roseate spoonbills, great white herons, osprey, American bald eagles, bonefish, permit, tarpon, barracuda, stingrays, nurse sharks, and an enormous variety of reef fish visible in the crystal-clear shallows. Wildlife encounters depend on season and conditions — Captain Lucas reads the ecosystem daily and knows where each species concentrates at each time of year." },
    },
    {
      "@type": "Question",
      name: "Can you take me to a sandbar in the Florida Keys?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. The Florida Keys backcountry is laced with shallow sandbars accessible only by shallow-draft vessels. Always Late Charters can take you to remote sandbars in Florida Bay — ideal for snorkeling in crystal-clear water, wading, swimming, and picnicking in complete solitude. Many sandbars are surrounded by starfish, conch, and small rays visible through the water. Captain Lucas knows sandbar locations that see almost no other boat traffic — the Florida Keys experience most visitors never get." },
    },
    {
      "@type": "Question",
      name: "Are eco tours good for families and non-fishers?",
      acceptedAnswer: { "@type": "Answer", text: "Eco tours are specifically designed for families, non-fishers, photographers, wildlife enthusiasts, and anyone who wants to experience the real Florida Keys beyond the beaches. No fishing license, no fishing knowledge, and no prior boating experience required. Children love the wildlife encounters, the sandbar stops, and the freedom of exploring the backcountry by boat. These are also excellent for couples who want a private, scenic experience — a sunset eco tour in the backcountry is one of the most romantic experiences in the Keys." },
    },
    {
      "@type": "Question",
      name: "How long are eco tours and what time of day do you depart?",
      acceptedAnswer: { "@type": "Answer", text: "Eco tours run 2 to 4 hours depending on what you want to see and do. Morning departures (7–9am) offer the best wildlife activity, calmest water, and best light for photography. Afternoon departures work well for sandbar visits. Sunset eco tours (3 hours before sunset) offer extraordinary light and the day's final bird activity. Captain Lucas will design your tour around your interests and available time. Call to discuss options." },
    },
  ],
};

const wildlife = [
  { name: "Bottlenose Dolphins",     season: "Year-round",    note: "Common in open bay and channels" },
  { name: "West Indian Manatees",    season: "Oct–Apr peak",  note: "Warm-water refuges in winter months" },
  { name: "Sea Turtles",             season: "Apr–Oct",       note: "Loggerhead & Hawksbill nesting season" },
  { name: "Roseate Spoonbill",       season: "Year-round",    note: "Wading shallows of Florida Bay" },
  { name: "American Bald Eagle",     season: "Nov–Mar",       note: "Nesting pairs in upper Keys/Bay" },
  { name: "Osprey",                  season: "Year-round",    note: "Fishing from the air along channels" },
  { name: "Tarpon",                  season: "Apr–Jul peak",  note: "Rolling near bridges and channels" },
  { name: "Nurse Sharks",            season: "Year-round",    note: "Resting in sandy shallows" },
  { name: "American Crocodile",      season: "Year-round",    note: "Rare sighting — Florida Bay mangroves" },
];

function Accordion({ items, light = false }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border-b" style={{ borderColor: light ? `${GOLD}30` : `${GOLD}25` }}>
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between py-5 text-left gap-6"
            aria-expanded={open === i}>
            <span className="text-[15px] font-light leading-snug"
              style={{ ...sans, color: light ? (open === i ? GOLD : `${NAVY}90`) : (open === i ? GOLD : "rgba(255,255,255,0.85)") }}>
              {item.name}
            </span>
            <span className="flex-shrink-0 text-xl font-light mt-0.5 transition-transform duration-300"
              style={{ color: GOLD, transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
          </button>
          {open === i && (
            <div className="pb-6 text-[14px] leading-[1.88]"
              style={{ ...sans, color: light ? `${NAVY}70` : "rgba(255,255,255,0.50)" }}>
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

export default function EcoToursPage() {
  return (
    <>
      <SchemaMarkup pageType="TouristTrip" />
      <Script id="faq-schema-eco-tours" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 0) }} />

      <div style={{ overflowX: "hidden" }}>
        <SiteNav activePage="/eco-tours" />

        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "65vh", backgroundColor: NAVY }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #060E1A 0%, #0A2A1F 60%, #0d3028 100%)" }} />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 50% 30%, #C9A96E 0%, transparent 55%)" }} />
          <div className="relative z-10 text-center px-6 lg:px-14 pt-28 pb-20 max-w-4xl mx-auto">
            <div className="flex justify-center mb-8"><Eyebrow light>Florida Keys Backcountry</Eyebrow></div>
            <h1 className="text-white leading-[0.88] mb-8"
              style={{ ...serif, fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 300 }}>
              Eco Tours &amp;
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Wildlife Charters.</em>
            </h1>
            <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: GOLD }} />
            <p className="text-[15px] leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ ...sans, color: "rgba(255,255,255,0.55)" }}>
              The real Florida Keys exist in the backcountry — a vast, shallow ecosystem of mangroves, seagrass flats,
              and crystal-clear sandbars teeming with wildlife most visitors never see.
              Captain Lucas has been exploring every channel, flat, and cove off Marathon for over 20 years.
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

        {/* What you'll experience */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: CREAM }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-10"><Eyebrow>The Experience</Eyebrow></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="leading-[0.9] mb-8"
                  style={{ ...serif, fontSize: "clamp(2.2rem, 3.8vw, 3.8rem)", fontWeight: 300, color: NAVY }}>
                  The Backcountry
                  <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Nobody Shows You.</em>
                </h2>
                <p className="text-[15px] leading-[1.92] mb-6" style={{ ...sans, color: `${NAVY}90` }}>
                  The Florida Keys are bisected — the Atlantic side holds the reef, the Gulf side holds the backcountry.
                  Florida Bay, the largest body of water in Everglades National Park, stretches north from Marathon in a
                  labyrinth of shallow flats, mangrove islands, and hidden channels.
                </p>
                <p className="text-[15px] leading-[1.92] mb-6" style={{ ...sans, color: `${NAVY}80` }}>
                  These waters are accessible only by shallow-draft boats — the kind that can float in 18 inches of
                  crystal-clear water above a white sand bottom. Captain Lucas runs a vessel purpose-built for this ecosystem.
                </p>
                <p className="text-[15px] leading-[1.92]" style={{ ...sans, color: `${NAVY}70` }}>
                  Whether you want dolphins, manatees, sea turtles, a deserted sandbar, or just the silence of a place
                  with no roads and no crowds — this is where we take you.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {[
                  { label: "Sandbar Stops", desc: "Remote sandbars with no other visitors — snorkel in 2–4 feet of clear water over white sand, wade, swim, and picnic surrounded by starfish and stingrays." },
                  { label: "Dolphin Encounters", desc: "Bottlenose dolphins are resident in Florida Bay year-round. Captain Lucas knows their ranges and feeding patterns — close, natural encounters with wild dolphins in their habitat." },
                  { label: "Birding & Photography", desc: "The backcountry holds some of the best wading bird photography in the eastern US. Roseate Spoonbills, Great White Herons, and Ospreys working the shallows in golden-hour light." },
                  { label: "Sunset Eco Tours", desc: "A 3-hour private tour timed to reach a remote sandbar or mangrove channel at sunset. One of the most spectacular experiences available in the Florida Keys." },
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

        {/* Wildlife grid */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: NAVY }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-10"><Eyebrow light>Species Guide</Eyebrow></div>
            <h2 className="text-white leading-[0.9] mb-12"
              style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300 }}>
              What Lives
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Out There.</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {wildlife.map(w => (
                <div key={w.name} className="p-5 border" style={{ borderColor: `${GOLD}18`, backgroundColor: `${GOLD}05` }}>
                  <div className="text-white font-light mb-1" style={{ ...sans, fontSize: "14px" }}>{w.name}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ ...sans, color: GOLD }}>{w.season}</div>
                  <div className="text-[12px]" style={{ ...sans, color: "rgba(255,255,255,0.38)" }}>{w.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: CREAM }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-10"><Eyebrow>Common Questions</Eyebrow></div>
            <h2 className="leading-[0.9] mb-12"
              style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: NAVY }}>
              Eco Tour
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>FAQs.</em>
            </h2>
            <Accordion items={faqSchema.mainEntity} light />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 px-6 lg:px-14 text-center" style={{ backgroundColor: NAVY }}>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-8"><Eyebrow light>Book an Eco Tour</Eyebrow></div>
            <h2 className="text-white leading-[0.9] mb-6"
              style={{ ...serif, fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300 }}>
              Explore the
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Real Florida Keys.</em>
            </h2>
            <p className="text-[15px] leading-relaxed mb-10" style={{ ...sans, color: "rgba(255,255,255,0.50)" }}>
              2–4 hour private tours. Morning, afternoon, and sunset departures. Call Captain Lucas to design yours.
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
