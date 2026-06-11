"use client";

import { useState, useEffect, useRef } from "react";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
const sans  = { fontFamily: "'Jost', system-ui, sans-serif" };
const GOLD  = "#C9A96E";
const TEXT  = "#1A1A18";
const TEAL  = "#0E9AA7";

const trips = [
  ["Offshore Fishing",  "/offshore"],
  ["Reef & Wreck",      "/reef"],
  ["Shark Fishing",     "/shark"],
  ["Family Trips",      "/family"],
  ["Eco Tours",         "/eco-tours"],
];

const topLinks = [
  ["Home",        "/"],
  ["Meet Capt. Lucas", "/about"],
  ["Contact",     "#contact"],
];

export default function SiteNav({ activePage = "" }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [tripsOpen, setTripsOpen] = useState(false);
  const [mTripsOpen, setMTripsOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close dropdown on outside click */
  useEffect(() => {
    const fn = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setTripsOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const linkColor = scrolled ? TEXT : "rgba(255,255,255,0.85)";
  const activeColor = scrolled ? TEAL : "white";
  const bgStyle = scrolled
    ? { background: "rgba(247,245,241,0.97)", backdropFilter: "blur(14px)", boxShadow: "0 1px 0 rgba(26,26,24,0.10)" }
    : { background: "transparent" };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');
        .sitenav-dropdown { animation: dropIn 0.18s ease; }
        @keyframes dropIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ ...bgStyle, height: scrolled ? "60px" : "72px" }}>
        <div className="h-full max-w-screen-xl mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-2" aria-label="Always Late Charters home">
            <span style={{ ...serif, fontStyle: "italic", fontWeight: 400,
              fontSize: scrolled ? "1.35rem" : "1.6rem",
              color: scrolled ? TEXT : "white",
              transition: "all 0.4s", lineHeight: 1 }}>
              Always Late
            </span>
            <span className="text-[8px] tracking-[0.42em] uppercase border-l pl-2 hidden sm:inline-block transition-all duration-400"
              style={{ ...sans, color: scrolled ? "#8B7355" : "rgba(255,255,255,0.55)",
                borderColor: scrolled ? "rgba(26,26,24,0.20)" : "rgba(255,255,255,0.25)" }}>
              Charters
            </span>
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-6">

            {topLinks.map(([label, href]) => {
              const isActive = activePage === href;
              return (
                <a key={label} href={href}
                  className="text-[11px] tracking-[0.28em] uppercase transition-colors duration-300"
                  style={{ ...sans, color: isActive ? activeColor : linkColor,
                    borderBottom: isActive ? `1px solid ${scrolled ? TEAL : "white"}` : "none",
                    paddingBottom: isActive ? "2px" : "0" }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = scrolled ? TEAL : "white"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = linkColor; }}>
                  {label}
                </a>
              );
            })}

            {/* Our Trips dropdown */}
            <div ref={dropRef} className="relative">
              <button
                onClick={() => setTripsOpen(v => !v)}
                className="flex items-center gap-1 text-[11px] tracking-[0.28em] uppercase transition-colors duration-300"
                style={{ ...sans, color: trips.some(([,h]) => h === activePage) ? activeColor : linkColor }}
                onMouseEnter={(e) => { e.currentTarget.style.color = scrolled ? TEAL : "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = trips.some(([,h]) => h === activePage) ? activeColor : linkColor; }}>
                Our Trips
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  style={{ transform: tripsOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {tripsOpen && (
                <div className="sitenav-dropdown absolute top-full left-1/2 mt-3 py-2 min-w-[200px]"
                  style={{ transform: "translateX(-50%)", background: "rgba(247,245,241,0.99)",
                    backdropFilter: "blur(16px)", boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
                    border: "1px solid rgba(26,26,24,0.08)" }}>
                  {trips.map(([label, href]) => (
                    <a key={href} href={href}
                      className="flex items-center px-5 py-3 text-[11px] tracking-[0.22em] uppercase transition-colors duration-200"
                      style={{ ...sans, color: activePage === href ? TEAL : TEXT }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = TEAL; e.currentTarget.style.background = "rgba(14,154,167,0.06)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = activePage === href ? TEAL : TEXT; e.currentTarget.style.background = "transparent"; }}>
                      {label}
                    </a>
                  ))}
                  <div style={{ borderTop: "1px solid rgba(26,26,24,0.08)", margin: "4px 0" }} />
                  <a href="/booking"
                    className="flex items-center px-5 py-3 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors duration-200"
                    style={{ ...sans, color: GOLD }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = TEXT; e.currentTarget.style.background = `${GOLD}15`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = GOLD; e.currentTarget.style.background = "transparent"; }}>
                    Book a Charter →
                  </a>
                </div>
              )}
            </div>

            {/* Book Now CTA button */}
            <a href="/booking"
              className="text-[11px] tracking-[0.28em] uppercase px-5 py-2.5 transition-all duration-300"
              style={{ ...sans, color: scrolled ? "#1A1A18" : "white",
                backgroundColor: scrolled ? GOLD : "transparent",
                border: scrolled ? `1px solid ${GOLD}` : "1px solid rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GOLD; e.currentTarget.style.color = "#1A1A18"; e.currentTarget.style.borderColor = GOLD; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = scrolled ? GOLD : "transparent"; e.currentTarget.style.color = scrolled ? "#1A1A18" : "white"; e.currentTarget.style.borderColor = scrolled ? GOLD : "rgba(255,255,255,0.55)"; }}>
              Book Now
            </a>
          </nav>

          {/* ── Mobile hamburger ── */}
          <button onClick={() => setMenuOpen(v => !v)} className="lg:hidden p-1" aria-label="Menu">
            {[0,1,2].map(i => (
              <span key={i} className="block w-5 h-px my-[5px] transition-all duration-300 origin-center"
                style={{ backgroundColor: scrolled ? TEXT : "white",
                  transform: i === 0 && menuOpen ? "rotate(45deg) translateY(6px)" :
                             i === 2 && menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
                  opacity: i === 1 && menuOpen ? 0 : 1 }} />
            ))}
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <div className="lg:hidden overflow-hidden transition-all duration-500"
          style={{ maxHeight: menuOpen ? "600px" : "0", opacity: menuOpen ? 1 : 0 }}>
          <div className="px-6 pt-4 pb-8 flex flex-col gap-1 border-t"
            style={{ background: "rgba(247,245,241,0.99)", borderColor: "rgba(26,26,24,0.08)" }}>

            <a href="/" className="py-3 text-[12px] tracking-[0.22em] uppercase border-b"
              style={{ ...sans, color: activePage === "/" ? TEAL : TEXT, borderColor: "rgba(26,26,24,0.06)" }}>Home</a>

            <a href="/about" className="py-3 text-[12px] tracking-[0.22em] uppercase border-b"
              style={{ ...sans, color: activePage === "/about" ? TEAL : TEXT, borderColor: "rgba(26,26,24,0.06)" }}>Meet Capt. Lucas</a>

            {/* Mobile trips section */}
            <div>
              <button onClick={() => setMTripsOpen(v => !v)}
                className="w-full flex items-center justify-between py-3 text-[12px] tracking-[0.22em] uppercase border-b"
                style={{ ...sans, color: TEXT, borderColor: "rgba(26,26,24,0.06)" }}>
                Our Trips
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  style={{ transform: mTripsOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {mTripsOpen && (
                <div className="pl-4 flex flex-col">
                  {trips.map(([label, href]) => (
                    <a key={href} href={href} className="py-2.5 text-[11px] tracking-[0.22em] uppercase"
                      style={{ ...sans, color: activePage === href ? TEAL : "#6B6B60" }}>
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#contact" className="py-3 text-[12px] tracking-[0.22em] uppercase border-b"
              style={{ ...sans, color: TEXT, borderColor: "rgba(26,26,24,0.06)" }}>Contact</a>

            <a href="/booking"
              className="mt-4 py-3.5 text-center text-[12px] tracking-[0.28em] uppercase"
              style={{ ...sans, color: "#1A1A18", backgroundColor: GOLD }}>
              Book Now
            </a>

            <a href="tel:+13057432444" className="mt-3 text-center text-[12px]"
              style={{ ...sans, color: "#8B7355" }}>305-743-2444</a>
          </div>
        </div>
      </header>
    </>
  );
}
