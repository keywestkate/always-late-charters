"use client";

import { useState, useEffect } from "react";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
const sans  = { fontFamily: "'Jost', system-ui, sans-serif" };
const ACCENT = "#8B7355";
const TEXT   = "#1A1A18";

const links = [
  ["Home",              "/"],
  ["Meet Capt. Lucas",  "/about"],
  ["Charters & Rates",  "/charters-rates"],
  ["Reef Fishing",      "/reef"],
  ["Offshore Fishing",  "/offshore"],
  ["Shark Fishing",     "/shark"],
];

export default function SiteNav({ activePage = "" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkColor    = scrolled ? TEXT          : "rgba(255,255,255,0.88)";
  const activeLinkColor = scrolled ? ACCENT     : "rgba(255,255,255,1)";
  const bgStyle      = scrolled
    ? { background: "rgba(247,245,241,0.97)", backdropFilter: "blur(14px)", boxShadow: "0 1px 0 rgba(26,26,24,0.10)" }
    : { background: "transparent" };

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap');`}</style>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ ...bgStyle, padding: scrolled ? "14px 0" : "22px 0" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-14 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src="/always-late-charters-marathon-key-florida-grouper-logo.jpg"
              alt="Always Late Charters"
              className="rounded-full object-cover border transition-all duration-500"
              style={{ width: scrolled ? "34px" : "40px", height: scrolled ? "34px" : "40px",
                borderColor: scrolled ? `${ACCENT}55` : "rgba(255,255,255,0.40)" }} />
            <div className="flex flex-col leading-none">
              <span className="font-light tracking-[0.18em] uppercase transition-colors duration-500"
                style={{ ...serif, fontSize: scrolled ? "14px" : "16px",
                  color: scrolled ? TEXT : "white" }}>
                Always Late
              </span>
              <span className="text-[8px] tracking-[0.42em] uppercase mt-0.5 transition-colors duration-500"
                style={{ ...sans, color: scrolled ? ACCENT : "rgba(255,255,255,0.65)" }}>
                Charters · Marathon Key
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map(([label, href]) => {
              const isActive = activePage === href;
              return (
                <a key={label} href={href}
                  className="text-[11px] tracking-[0.18em] uppercase transition-colors duration-300"
                  style={{ ...sans, color: isActive ? activeLinkColor : linkColor,
                    borderBottom: isActive ? `1px solid ${scrolled ? ACCENT : "white"}` : "none",
                    paddingBottom: isActive ? "2px" : "0" }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = scrolled ? ACCENT : "white"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = linkColor; }}>
                  {label}
                </a>
              );
            })}
            <a href="tel:+13057432444"
              className="text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 border transition-all duration-300"
              style={{ ...sans, color: scrolled ? ACCENT : "white",
                borderColor: scrolled ? `${ACCENT}55` : "rgba(255,255,255,0.45)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = scrolled ? ACCENT : "white";
                e.currentTarget.style.color = scrolled ? "white" : TEXT; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = scrolled ? ACCENT : "white"; }}>
              305-743-2444
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(v => !v)} className="lg:hidden p-1" aria-label="Menu">
            {[0,1,2].map(i => (
              <span key={i} className="block w-6 h-px my-1.5 transition-all duration-300 origin-center"
                style={{ backgroundColor: scrolled ? TEXT : "white",
                  transform: i === 0 && open ? "rotate(45deg) translateY(7px)" :
                             i === 2 && open ? "rotate(-45deg) translateY(-7px)" : "none",
                  opacity: i === 1 && open ? 0 : 1 }} />
            ))}
          </button>
        </div>

        {/* Mobile drawer */}
        <div className="lg:hidden overflow-hidden transition-all duration-500"
          style={{ maxHeight: open ? "400px" : "0", opacity: open ? 1 : 0 }}>
          <div className="px-6 pt-4 pb-7 flex flex-col gap-5 border-t"
            style={{ background: "rgba(247,245,241,0.99)", borderColor: "rgba(26,26,24,0.08)" }}>
            {links.map(([label, href]) => (
              <a key={label} href={href} className="text-sm tracking-[0.18em] uppercase transition-colors"
                style={{ ...sans, color: activePage === href ? ACCENT : TEXT }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={(e) => (e.currentTarget.style.color = activePage === href ? ACCENT : TEXT)}>
                {label}
              </a>
            ))}
            <a href="tel:+13057432444" className="text-sm self-start"
              style={{ ...sans, color: ACCENT }}>
              305-743-2444
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
