"use client";

import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
const sans  = { fontFamily: "'Jost', system-ui, sans-serif" };

const BLUE   = "#0A3D62";
const TEAL   = "#0E9AA7";
const GOLD   = "#C9A96E";
const TEXT   = "#1A1A18";
const MUTED  = "#6B6B60";
const BG     = "#F7F5F1";
const BG_ALT = "#FFFFFF";
const BG_PAN = "#ECEAE5";

const PHONE     = "305-743-2444";
const PHONE_TEL = "tel:+13057432444";
const MARINA    = "Captain Hook's Marina";
const ADDRESS   = "11800 Overseas Hwy, Marathon, FL 33050";

function Label({ children }) {
  return (
    <p className="text-[10px] tracking-[0.3em] uppercase mb-3"
      style={{ ...sans, color: GOLD }}>{children}</p>
  );
}

function ArrowRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="4" y1="12" x2="20" y2="12" /><polyline points="14 6 20 12 14 18" />
    </svg>
  );
}

const trips = [
  { name: "Offshore Deep Sea",  href: "/offshore", desc: "Mahi-Mahi · Blackfin Tuna · Wahoo · Sailfish — Gulf Stream blue water, 20–45 miles out.", color: BLUE },
  { name: "Reef & Wreck",       href: "/reef",     desc: "Yellowtail Snapper · Grouper · Hogfish — the Florida Reef Tract and historic shipwrecks.", color: TEAL },
  { name: "Family Trips",       href: "/family",   desc: "Kid-friendly reef fishing for all ages. Non-stop action. Everything included.", color: GOLD },
  { name: "Shark Fishing",      href: "/shark",    desc: "Bull · Blacktip · Spinner Sharks. High-adrenaline. 100% catch-and-release.", color: "#8B3A3A" },
  { name: "Eco Tours",          href: "/eco-tours",desc: "Dolphins · Sandbars · Manatees · Sunset. Private backcountry Florida Bay tours.", color: "#2E7D52" },
];

export default function BookingPage() {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <SiteNav activePage="/booking" />

        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "52vh" }}>
          <div className="absolute inset-0">
            <img src="/always-late-charters-marathon-key-florida-boat-seavee-capt.jpg"
              alt="Always Late Charters boat at Captain Hook's Marina, Marathon FL"
              className="w-full h-full object-cover" style={{ objectPosition: "center 70%" }} />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, rgba(10,61,98,0.45) 0%, rgba(10,61,98,0.30) 60%, rgba(10,61,98,0.50) 100%)" }} />
          </div>
          <div className="relative z-10 text-center px-6 pt-28 pb-16 max-w-3xl mx-auto">
            <Label>Book Your Charter</Label>
            <h1 className="text-white leading-[0.88] mb-6"
              style={{ ...serif, fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 300 }}>
              Reserve Your Day
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>on the Water.</em>
            </h1>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto"
              style={{ ...sans, color: "rgba(255,255,255,0.65)" }}>
              100% private charters. Your group only. Departing from {MARINA}, {ADDRESS}.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: BG_ALT }}>
          <div className="max-w-screen-lg mx-auto">
            <Label>How to Book</Label>
            <h2 className="leading-[0.9] mb-14"
              style={{ ...serif, fontSize: "clamp(2rem, 3.8vw, 3.8rem)", fontWeight: 300, color: TEXT }}>
              Simple.
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Three Steps.</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { n: "01", title: "Choose Your Trip",    body: "Browse the trip types below. Each page has full details on what to expect, what's included, half-day vs full-day options, and what species are in season." },
                { n: "02", title: "Call or Book Online", body: "Call Captain Lucas directly at 305-743-2444 for a real-time fishing report and availability check — or use the online booking form below to request your date." },
                { n: "03", title: "Confirm & Deposit",   body: "A deposit secures your date. Final payment is handled through our secure Square booking link. Fish cleaning, all gear, and bait are included in the charter price." },
              ].map(s => (
                <div key={s.n} className="border-t-2 pt-6" style={{ borderColor: GOLD }}>
                  <div className="mb-3" style={{ ...serif, fontSize: "2.4rem", fontWeight: 300, color: `${GOLD}60` }}>{s.n}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ ...sans, color: GOLD }}>{s.title}</div>
                  <p className="text-[13px] leading-[1.88]" style={{ ...sans, color: MUTED }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trip selector */}
        <section className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: BG }}>
          <div className="max-w-screen-lg mx-auto">
            <Label>Choose Your Adventure</Label>
            <h2 className="leading-[0.9] mb-12"
              style={{ ...serif, fontSize: "clamp(2rem, 3.8vw, 3.8rem)", fontWeight: 300, color: TEXT }}>
              What Are You
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Fishing For?</em>
            </h2>
            <div className="flex flex-col gap-3">
              {trips.map(t => (
                <a key={t.name} href={t.href}
                  className="group flex items-center justify-between px-6 py-5 border transition-all duration-300"
                  style={{ borderColor: `${TEXT}10`, backgroundColor: BG_ALT }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.backgroundColor = `${t.color}06`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${TEXT}10`; e.currentTarget.style.backgroundColor = BG_ALT; }}>
                  <div className="flex items-center gap-5">
                    <div className="w-1 self-stretch rounded-full" style={{ backgroundColor: t.color, minHeight: "40px" }} />
                    <div>
                      <div className="text-[11px] tracking-[0.28em] uppercase mb-1" style={{ ...sans, color: t.color }}>{t.name}</div>
                      <div className="text-[13px]" style={{ ...sans, color: MUTED }}>{t.desc}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase flex-shrink-0 ml-6 transition-colors duration-300"
                    style={{ ...sans, color: t.color }}>
                    Details <ArrowRight />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Square booking embed / CTA */}
        <section id="book" className="py-20 lg:py-28 px-6 lg:px-14" style={{ backgroundColor: BLUE }}>
          <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left — call info */}
              <div>
                <Label>Ready to Book?</Label>
                <h2 className="text-white leading-[0.88] mb-8"
                  style={{ ...serif, fontSize: "clamp(2.2rem, 4vw, 4rem)", fontWeight: 300 }}>
                  Fastest Way
                  <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>is a Phone Call.</em>
                </h2>
                <p className="mb-10 leading-[1.88] text-[15px]"
                  style={{ ...sans, color: "rgba(255,255,255,0.65)" }}>
                  Captain Lucas answers his own phone. He can give you an honest real-time fishing report,
                  check availability, and answer any questions about your trip — right then and there.
                </p>

                <div className="flex flex-col gap-6 border-l pl-6" style={{ borderColor: `${GOLD}40` }}>
                  {[
                    { label: "Call or Text",  val: PHONE,   href: PHONE_TEL },
                    { label: "Marina",        val: MARINA,  href: null },
                    { label: "Address",       val: ADDRESS, href: null },
                    { label: "Hours",         val: "Year-Round · 7 Days a Week", href: null },
                  ].map(c => (
                    <div key={c.label}>
                      <p className="text-[9px] tracking-[0.38em] uppercase mb-1"
                        style={{ ...sans, color: "rgba(255,255,255,0.35)" }}>{c.label}</p>
                      {c.href
                        ? <a href={c.href} className="text-[15px] font-light transition-colors duration-300"
                            style={{ ...sans, color: GOLD }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = GOLD)}>{c.val}</a>
                        : <span className="text-[14px] font-light" style={{ ...sans, color: "rgba(255,255,255,0.55)" }}>{c.val}</span>
                      }
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Square booking placeholder */}
              <div className="flex flex-col">
                <div className="p-8 mb-4" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <p className="text-[10px] tracking-[0.35em] uppercase mb-4"
                    style={{ ...sans, color: "rgba(255,255,255,0.40)" }}>Online Booking</p>
                  <p className="text-[14px] leading-[1.88] mb-8"
                    style={{ ...sans, color: "rgba(255,255,255,0.60)" }}>
                    Select your trip type, preferred date, and group size. A deposit is required to secure your booking.
                    All payments are processed securely through Square.
                  </p>

                  {/* Square booking button — replace href with your actual Square booking link */}
                  <a href="https://squareup.com/appointments/book/always-late-charters"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 text-[12px] tracking-[0.28em] uppercase py-4 px-8 transition-all duration-300 w-full"
                    style={{ ...sans, backgroundColor: GOLD, color: "#1A1A18" }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#b8924e"; e.currentTarget.style.color = "white"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = GOLD; e.currentTarget.style.color = "#1A1A18"; }}>
                    Book Now via Square <ArrowRight />
                  </a>

                  <p className="mt-4 text-center text-[10px] tracking-[0.2em]"
                    style={{ ...sans, color: "rgba(255,255,255,0.28)" }}>
                    Secure payment · Powered by Square
                  </p>
                </div>

                <div className="flex items-start gap-3 p-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" className="flex-shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <p className="text-[12px] leading-relaxed"
                    style={{ ...sans, color: "rgba(255,255,255,0.45)" }}>
                    Need to cancel or reschedule? Call Captain Lucas at least 48 hours before your trip.
                    Cancellations due to weather are always rescheduled at no charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
