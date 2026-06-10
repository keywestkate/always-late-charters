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
      name: "What is the minimum age for a fishing charter in the Florida Keys?",
      acceptedAnswer: { "@type": "Answer", text: "Always Late Charters welcomes children of all ages. Captain Lucas has fished with kids as young as 3 years old. Young children are lifejacketed, supervised closely, and we use lightweight spinning rods sized appropriately for small hands. Trips can be structured around child attention spans — if the kids are done at 3 hours, that is fine. We work around your family, not the other way around." },
    },
    {
      "@type": "Question",
      name: "How do you prevent seasickness on a family fishing charter?",
      acceptedAnswer: { "@type": "Answer", text: "For reef and nearshore trips, the calm waters of Florida Bay and the shallow reef keep motion minimal. For offshore trips with families, we monitor sea conditions closely and will reschedule in rough weather rather than put kids through a rough day. Our specific seasickness prevention protocol: (1) Eat a light, non-greasy meal 2 hours before departure. (2) Take Dramamine or Bonine the night before and morning of. (3) Stay in the center of the boat, look at the horizon. (4) Stay hydrated with water — no alcohol for adults before departure. (5) Ginger chews or candies work well for children. Captain Lucas will recommend canceling or modifying any trip where conditions could make the family uncomfortable." },
    },
    {
      "@type": "Question",
      name: "Do you provide fishing gear and tackle for kids?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. All rods, reels, tackle, bait, and terminal gear are included for every angler on the boat. We carry light spinning rods perfect for children and first-time anglers — smaller, lighter, and easier to manage than standard charter gear. Captain Lucas will bait hooks, remove fish, and teach casting technique. You literally bring nothing but yourselves, snacks, sunscreen, and excitement." },
    },
    {
      "@type": "Question",
      name: "What fish will my kids catch on a family fishing trip in Marathon, FL?",
      acceptedAnswer: { "@type": "Answer", text: "Yellowtail Snapper are the perfect family fish — they bite aggressively, fight well on light tackle, and are safe to handle. Kids also regularly catch Mangrove Snapper, Grunts, Porgies, and on lucky days, small Grouper or Cobia. We target species that bite frequently so children stay engaged. Nothing beats a child's face when they reel in their first real fish on a real fishing boat." },
    },
  ],
};

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

export default function FamilyFishingPage() {
  return (
    <>
      <SchemaMarkup pageType="FishingCharter" />
      <Script id="faq-schema-family" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 0) }} />

      <div style={{ overflowX: "hidden" }}>
        <SiteNav activePage="/family" />

        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "65vh", backgroundColor: NAVY }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #060E1A 0%, #0A192F 60%, #0d2a4a 100%)" }} />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 20% 60%, #C9A96E 0%, transparent 55%)" }} />
          <div className="relative z-10 text-center px-6 lg:px-14 pt-28 pb-20 max-w-4xl mx-auto">
            <div className="flex justify-center mb-8"><Eyebrow light>For All Ages · Marathon, FL</Eyebrow></div>
            <h1 className="text-white leading-[0.88] mb-8"
              style={{ ...serif, fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 300 }}>
              Family Fishing
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Charters.</em>
            </h1>
            <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: GOLD }} />
            <p className="text-[15px] leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ ...sans, color: "rgba(255,255,255,0.55)" }}>
              Captain Lucas has been putting families on fish in Marathon for over 20 years —
              patient with beginners, great with kids, focused on making every person on the boat feel the thrill of a real catch.
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

        {/* Why families */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: CREAM }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-10"><Eyebrow>Why Families Choose Us</Eyebrow></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="leading-[0.9] mb-8"
                  style={{ ...serif, fontSize: "clamp(2.2rem, 3.8vw, 3.8rem)", fontWeight: 300, color: NAVY }}>
                  Fishing Trips Built
                  <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>for Families.</em>
                </h2>
                <p className="text-[15px] leading-[1.92] mb-6" style={{ ...sans, color: `${NAVY}90` }}>
                  A charter designed for families is different from one designed for serious anglers. The pace is different.
                  The tackle is different. The patience required is different. Captain Lucas has been doing this his entire life
                  and genuinely loves introducing children to the Florida Keys.
                </p>
                <p className="text-[15px] leading-[1.92] mb-6" style={{ ...sans, color: `${NAVY}80` }}>
                  We target the shallow reef and nearshore waters where the boat stays calm, the fish bite frequently,
                  and everyone stays engaged. Nobody gets bored, nobody gets seasick, and everyone catches fish.
                </p>
                <p className="text-[15px] leading-[1.92]" style={{ ...sans, color: `${NAVY}70` }}>
                  All gear is provided and sized appropriately. We handle the messy parts so the family
                  can focus on the fun parts.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {[
                  { label: "Kids of All Ages Welcome", desc: "We've had anglers as young as 3 on the boat. Lightweight spinning rods, close supervision, lifejackets. Captain Lucas is in no rush — if a child needs a break, we take one." },
                  { label: "Steady Bite", desc: "We fish the reef for Yellowtail Snapper, Mangrove Snapper, and Grunts — species that bite constantly and keep the energy high for kids." },
                  { label: "Everything Included", desc: "Rods, reels, bait, tackle, fuel, fish cleaning. You bring nothing but your family and snacks. No hidden costs, no equipment rental fees." },
                  { label: "Flexible Duration", desc: "Half-day, three-quarter day, and full-day options. If the kids are done early, that is completely fine — we plan around your family's energy, not a rigid schedule." },
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

        {/* Seasickness protocol */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: NAVY }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-10"><Eyebrow light>Parent&apos;s Guide</Eyebrow></div>
            <h2 className="text-white leading-[0.9] mb-12"
              style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300 }}>
              Seasickness Prevention
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Protocol.</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Light Meal", desc: "Light, non-greasy meal 2 hours before departure. Avoid heavy, fried, or acidic foods the morning of the trip." },
                { step: "02", title: "Medication", desc: "Dramamine or Bonine taken the night before AND morning of. Children: Dramamine chewables are available over the counter." },
                { step: "03", title: "Positioning", desc: "Stay in the center of the boat, not the bow. Keep eyes on the horizon — focus on a fixed point in the distance." },
                { step: "04", title: "Hydration", desc: "Water throughout the trip. Dehydration dramatically worsens motion sickness." },
                { step: "05", title: "Ginger", desc: "Ginger chews or ginger candies work remarkably well for children and adults alike. Pack some before you leave." },
              ].map(s => (
                <div key={s.step} className="pt-6 border-t" style={{ borderColor: `${GOLD}30` }}>
                  <div className="text-[28px] font-light mb-3" style={{ ...serif, color: `${GOLD}40` }}>{s.step}</div>
                  <div className="text-[11px] tracking-[0.3em] uppercase mb-3" style={{ ...sans, color: GOLD }}>{s.title}</div>
                  <p className="text-[13px] leading-relaxed" style={{ ...sans, color: "rgba(255,255,255,0.50)" }}>{s.desc}</p>
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
              Family Trip
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>FAQs.</em>
            </h2>
            <Accordion items={faqSchema.mainEntity} light />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 px-6 lg:px-14 text-center" style={{ backgroundColor: NAVY }}>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-8"><Eyebrow light>Book a Family Trip</Eyebrow></div>
            <h2 className="text-white leading-[0.9] mb-6"
              style={{ ...serif, fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300 }}>
              Make a Memory
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>That Lasts.</em>
            </h2>
            <p className="text-[15px] leading-relaxed mb-10" style={{ ...sans, color: "rgba(255,255,255,0.50)" }}>
              Half-day and full-day family trips available year-round. Call Captain Lucas to check availability.
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
