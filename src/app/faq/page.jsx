"use client";

import { useState } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
const sans  = { fontFamily: "'Jost', system-ui, sans-serif" };

const TEAL   = "#0E9AA7";
const GOLD   = "#C9A96E";
const TEXT   = "#1A1A18";
const MUTED  = "#6B6B60";
const BG     = "#F7F5F1";
const BG_ALT = "#FFFFFF";
const BG_PAN = "#ECEAE5";

const PHONE     = "305-743-2444";
const PHONE_TEL = "tel:+13057432444";

const faqSections = [
  {
    category: "Before You Book",
    items: [
      { q: "Do I need a fishing license?",
        a: "No — and this is one of the biggest benefits of booking a licensed charter. Always Late Charters operates under a USCG federal charter vessel fishing permit, which covers every passenger on the boat. You do not need to purchase a personal saltwater fishing license for any trip. Captain Lucas also handles all size and bag limit compliance in real time. You focus on fishing. He handles the regulations." },
      { q: "How many people can come on the boat?",
        a: "Always Late Charters runs 100% private charters — your group only, no strangers. The boat comfortably accommodates up to 6 anglers. All trip types are available for groups of 1 to 6. Families, couples, bachelor parties, corporate groups — call to discuss your group size and Captain Lucas will design the right trip." },
      { q: "What is the cancellation policy?",
        a: "Cancellations due to weather are always rescheduled at no charge — Captain Lucas will never take you out in unsafe conditions. For personal cancellations, please give at least 48 hours notice. Call Captain Lucas directly to reschedule or cancel at 305-743-2444." },
      { q: "What is the difference between a half-day and full-day charter?",
        a: "Half-day trips run approximately 4–5 hours and are ideal for families, beginners, and reef fishing. Full-day trips run 8+ hours and are required for offshore trips targeting Mahi-Mahi and Tuna in the Gulf Stream, as it takes time to reach productive offshore water. Captain Lucas will recommend the right duration based on your target species and group." },
    ]
  },
  {
    category: "On the Boat",
    items: [
      { q: "What should we bring on the boat?",
        a: "Keep it simple: reef-safe sunscreen, polarized sunglasses, a hat, comfortable non-slip shoes (no black-soled soles), snacks, and non-alcoholic beverages. Captain Lucas provides all rods, reels, tackle, live and cut bait, ice, and fish cleaning at the dock. Everything fishing-related is taken care of — just show up and reel." },
      { q: "How do you handle seasickness?",
        a: "Prevention is everything. Our top tips: (1) Take Dramamine or Bonine the night before AND the morning of departure — not just the morning of. (2) Eat a light, non-greasy meal 2 hours before the trip. (3) Stay in the center of the boat and keep your eyes on the horizon. (4) Stay hydrated with water — avoid alcohol before departure. (5) Ginger chews work well for children. For families with young children, we target the calmer reef and nearshore waters to minimize motion. Captain Lucas will always recommend modifications or rescheduling if conditions are rough." },
      { q: "Is everything included in the charter price?",
        a: "Yes. All rods, reels, tackle, live and cut bait, ice, and fuel are included. Captain Lucas cleans and bags your fish at the dock at no additional charge. The only things you need to bring are food, drinks, sunscreen, and yourself." },
    ]
  },
  {
    category: "After the Trip",
    items: [
      { q: "What happens to the fish we catch?",
        a: "Every keeper gets cleaned and filleted by Captain Lucas at the dock upon return. Your catch goes home on ice in bags, ready for the pan or the freezer. Marathon has some of the best restaurants in the Keys that will cook your catch for you that same night — ask Captain Lucas for recommendations. On shark trips, all sharks are released alive. We photograph every fish before it goes back." },
      { q: "What species are running right now?",
        a: "The Florida Keys offer year-round fishing. Mahi-Mahi peak spring through summer. Blackfin Tuna run fall through spring. Yellowtail Snapper and Grouper are available almost every month. Wahoo are best in cooler months. Sailfish peak November through February. Captain Lucas will tell you exactly what's biting when you call — he's on the water every day and will give you an honest, real-time report." },
    ]
  },
  {
    category: "Family & Kids",
    items: [
      { q: "What is the minimum age for a fishing charter?",
        a: "Always Late Charters welcomes children of all ages. Captain Lucas has fished with kids as young as 3 years old. Young children are lifejacketed, supervised closely, and we use lightweight spinning rods sized for small hands. Trips are structured around your family's energy level — if the kids are done early, that is perfectly fine." },
      { q: "Do you provide gear for kids?",
        a: "Yes. All rods, reels, tackle, and bait are provided for every angler on the boat including children. Captain Lucas will bait hooks, remove fish, and teach casting technique. You bring nothing but yourselves, snacks, sunscreen, and excitement." },
    ]
  },
];

function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-b" style={{ borderColor: `${TEXT}12` }}>
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between py-5 text-left gap-6"
            aria-expanded={open === i}>
            <span className="text-[15px] font-light leading-snug"
              style={{ ...sans, color: open === i ? TEAL : TEXT }}>{item.q}</span>
            <span className="flex-shrink-0 text-xl font-light mt-0.5 transition-transform duration-300"
              style={{ color: GOLD, transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
          </button>
          {open === i && (
            <div className="pb-6 text-[14px] leading-[1.88]" style={{ ...sans, color: MUTED }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <SiteNav activePage="/faq" />

        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "46vh" }}>
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #0a1a2a 0%, #0a3d62 100%)" }} />
          <div className="relative z-10 text-center px-6 pt-28 pb-16 max-w-3xl mx-auto">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-3"
              style={{ ...sans, color: GOLD }}>Before You Go</p>
            <h1 className="text-white leading-[0.88] mb-6"
              style={{ ...serif, fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 300 }}>
              Common
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Questions.</em>
            </h1>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto"
              style={{ ...sans, color: "rgba(255,255,255,0.60)" }}>
              Everything you need to know before your trip with Always Late Charters out of Marathon, FL.
            </p>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: BG_ALT }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

              {/* Left — sticky nav */}
              <div className="lg:sticky lg:top-24 self-start">
                <p className="text-[10px] tracking-[0.3em] uppercase mb-6"
                  style={{ ...sans, color: GOLD }}>Categories</p>
                <div className="flex flex-col gap-2">
                  {faqSections.map(s => (
                    <a key={s.category}
                      href={`#${s.category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-[12px] tracking-[0.18em] uppercase py-2 border-l pl-4 transition-all duration-200"
                      style={{ ...sans, color: MUTED, borderColor: `${TEXT}15` }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = TEAL; e.currentTarget.style.borderColor = TEAL; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = MUTED; e.currentTarget.style.borderColor = `${TEXT}15`; }}>
                      {s.category}
                    </a>
                  ))}
                </div>

                <div className="mt-12 border-t pt-8" style={{ borderColor: `${TEXT}10` }}>
                  <p className="text-[10px] tracking-[0.3em] uppercase mb-3"
                    style={{ ...sans, color: MUTED }}>Still have questions?</p>
                  <a href={PHONE_TEL} className="text-[15px] font-light transition-colors duration-300"
                    style={{ ...sans, color: TEXT }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = TEXT)}>
                    {PHONE}
                  </a>
                  <p className="text-[11px] mt-1" style={{ ...sans, color: MUTED }}>Captain Lucas answers his own phone.</p>
                </div>
              </div>

              {/* Right — accordion by section */}
              <div className="lg:col-span-2 flex flex-col gap-14">
                {faqSections.map(s => (
                  <div key={s.category} id={s.category.toLowerCase().replace(/\s+/g, "-")}>
                    <h2 className="mb-6 pb-3 border-b"
                      style={{ ...serif, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 300, color: TEXT, borderColor: `${TEXT}10` }}>
                      {s.category}
                    </h2>
                    <Accordion items={s.items} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 lg:py-24 px-6 lg:px-14 text-center" style={{ backgroundColor: BG_PAN }}>
          <div className="max-w-xl mx-auto">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ ...sans, color: GOLD }}>Ready?</p>
            <h2 className="leading-[0.9] mb-6"
              style={{ ...serif, fontSize: "clamp(2.2rem, 3.8vw, 3.5rem)", fontWeight: 300, color: TEXT }}>
              Book Your
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Charter Today.</em>
            </h2>
            <a href="/booking"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase px-10 py-4 transition-all duration-300"
              style={{ ...sans, backgroundColor: GOLD, color: "#1A1A18" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#b8924e"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = GOLD; e.currentTarget.style.color = "#1A1A18"; }}>
              Book Now
            </a>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
