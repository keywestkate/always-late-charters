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

const faqItems = [
  {
    name: "What sharks can I catch off Marathon, Florida?",
    answer: "The waters off Marathon hold Bull Sharks, Blacktip Sharks, Spinner Sharks, Lemon Sharks, Nurse Sharks, and occasional Tiger Sharks and Hammerheads. Blacktips and Spinners are the most commonly targeted species — aggressive, acrobatic fighters that jump repeatedly during the fight. Bull Sharks are larger, more powerful, and one of the most respected adversaries in inshore fishing. Captain Lucas targets the species most active based on season and conditions.",
  },
  {
    name: "What size sharks can I expect to catch?",
    answer: "Blacktip and Spinner Sharks typically run 50–150 lbs in the waters off Marathon, with occasional fish over 200 lbs. Bull Sharks average 200–300 lbs, with larger individuals well documented in this area. Lemon Sharks reach 250+ lbs. The fight on a 150-lb Blacktip is remarkable — they are one of the fastest, most acrobatic sharks in Florida waters. All sharks are released alive — we practice catch-and-release on this trip.",
  },
  {
    name: "Is shark fishing dangerous?",
    answer: "On a professionally run charter, shark fishing is safe. Captain Lucas handles all leader work and boat-side procedures — clients fight the fish from the rod, and the captain manages the shark for tagging, photography, and release. We do not bring sharks aboard. We do not encourage inexperienced clients to touch the fish. The experience is intense, exciting, and completely controlled. USCG licensed, fully insured.",
  },
  {
    name: "Do we keep the sharks?",
    answer: "No. Always Late Charters practices mandatory catch-and-release on all shark trips. This is non-negotiable. The shark fishery in the Florida Keys is under significant pressure, and Captain Lucas is committed to releasing every shark in good condition. We will photograph and measure your catch — you leave with the photos, the memory, and the knowledge you helped protect a wild population.",
  },
];

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
              {item.answer}
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

export default function SharkFishingPage() {
  return (
    <>
      <SchemaMarkup pageType="FishingCharter" />

      <div style={{ overflowX: "hidden" }}>
        <SiteNav activePage="/shark" />

        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "65vh", backgroundColor: NAVY }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #06000A 0%, #120A1F 60%, #0A192F 100%)" }} />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 70% 40%, #C9A96E 0%, transparent 55%)" }} />
          <div className="relative z-10 text-center px-6 lg:px-14 pt-28 pb-20 max-w-4xl mx-auto">
            <div className="flex justify-center mb-8"><Eyebrow light>High-Adrenaline · Marathon, FL</Eyebrow></div>
            <h1 className="text-white leading-[0.88] mb-8"
              style={{ ...serif, fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 300 }}>
              Shark Fishing
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Charters.</em>
            </h1>
            <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: GOLD }} />
            <p className="text-[15px] leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ ...sans, color: "rgba(255,255,255,0.55)" }}>
              Bull, Blacktip, Spinner, Tiger, and Hammerhead sharks patrol the offshore waters of Marathon.
              Captain Lucas runs targeted shark trips for those who want the most powerful, adrenaline-driven experience the Florida Keys can offer.
              All sharks released.
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

        {/* The experience */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: CREAM }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-10"><Eyebrow>What to Expect</Eyebrow></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="leading-[0.9] mb-8"
                  style={{ ...serif, fontSize: "clamp(2.2rem, 3.8vw, 3.8rem)", fontWeight: 300, color: NAVY }}>
                  Florida Keys
                  <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Shark Fishing.</em>
                </h2>
                <p className="text-[15px] leading-[1.92] mb-6" style={{ ...sans, color: `${NAVY}90` }}>
                  Shark fishing in Marathon is not a guaranteed experience — it requires reading current lines, working structure,
                  and deploying the right bait presentation at the right depth. Captain Lucas targets the zones where Blacktips,
                  Spinners, and Bulls are actively feeding based on time of year and water conditions.
                </p>
                <p className="text-[15px] leading-[1.92] mb-6" style={{ ...sans, color: `${NAVY}80` }}>
                  Blacktip and Spinner Sharks are among the most acrobatic fish in Florida — they leap and spin when hooked,
                  providing a visual spectacle alongside the pure power of a 100-lb fish on heavy tackle.
                </p>
                <p className="text-[15px] leading-[1.92]" style={{ ...sans, color: `${NAVY}70` }}>
                  All sharks are caught, photographed, measured, and released alive. Captain Lucas is trained in proper
                  shark handling to ensure the fish leaves in fighting condition.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {[
                  { label: "Target Species", desc: "Blacktip, Spinner, Bull, Lemon, Nurse Sharks. Occasional Tiger Shark and Hammerhead encounters in deeper water." },
                  { label: "Tackle & Setup", desc: "Heavy spinning and conventional tackle rated for 80–150 lb fish. Live and cut bait deployed with chum slicks to draw sharks to the boat. Captain Lucas handles all leader work." },
                  { label: "100% Catch & Release", desc: "No sharks are kept. Every fish is photographed boat-side and released alive. You leave with photos, not carcasses." },
                  { label: "Safety Protocol", desc: "USCG licensed. Fully insured. Captain handles all close-contact work. Clear briefing before every shark trip. Safe, exciting, professional." },
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

        {/* Species */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: NAVY }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-10"><Eyebrow light>Species Guide</Eyebrow></div>
            <h2 className="text-white leading-[0.9] mb-12"
              style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300 }}>
              Sharks We&apos;re
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Targeting.</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: "Blacktip Shark",   avg: "50–150 lbs",  note: "Most acrobatic — jumps and spins when hooked. Peak: spring & fall." },
                { name: "Spinner Shark",    avg: "50–100 lbs",  note: "Similar to Blacktip, spectacular aerial display. Warm months." },
                { name: "Bull Shark",       avg: "200–350 lbs", note: "Most powerful inshore shark. Raw strength fight. Year-round." },
                { name: "Lemon Shark",      avg: "100–250 lbs", note: "Sluggish fighter but impressive size. Year-round in channels." },
                { name: "Nurse Shark",      avg: "100–200 lbs", note: "Bottom feeder, surprising fight. Year-round shallows." },
                { name: "Tiger / Hammer",   avg: "200+ lbs",    note: "Occasional offshore encounters. Not reliably targeted." },
              ].map(s => (
                <div key={s.name} className="p-5 border" style={{ borderColor: `${GOLD}18`, backgroundColor: `${GOLD}05` }}>
                  <div className="text-white font-light mb-1" style={{ ...sans, fontSize: "14px" }}>{s.name}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ ...sans, color: GOLD }}>{s.avg}</div>
                  <div className="text-[12px]" style={{ ...sans, color: "rgba(255,255,255,0.38)" }}>{s.note}</div>
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
              Shark Fishing
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>FAQs.</em>
            </h2>
            {/* Inline accordion on cream bg */}
            <div className="space-y-3">
              {faqItems.map((item, i) => {
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
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 px-6 lg:px-14 text-center" style={{ backgroundColor: NAVY }}>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-8"><Eyebrow light>Book a Shark Charter</Eyebrow></div>
            <h2 className="text-white leading-[0.9] mb-6"
              style={{ ...serif, fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300 }}>
              Ready for the
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Ultimate Fight?</em>
            </h2>
            <p className="text-[15px] leading-relaxed mb-10" style={{ ...sans, color: "rgba(255,255,255,0.50)" }}>
              Full-day shark charters. Call Captain Lucas to check availability and discuss the right trip for your group.
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
