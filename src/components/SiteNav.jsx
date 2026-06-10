"use client";

import { useState, useEffect } from "react";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif" };
const sans  = { fontFamily: "'Jost', system-ui, -apple-system, sans-serif" };
const GOLD  = "#C9A96E";
const NAVY  = "#0A192F";
const PHONE_TEL = "tel:+13057432444";
const PHONE     = "305-743-2444";

function PhoneIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.97-.97a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.06z" />
    </svg>
  );
}

export default function SiteNav({ activePage = "" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    ["Offshore",   "/offshore"],
    ["Reef & Wreck", "/reef"],
    ["Family",     "/family"],
    ["Eco Tours",  "/eco-tours"],
    ["Shark",      "/shark"],
  ];

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap');`}</style>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          background:     scrolled ? "rgba(10,25,47,0.97)" : "rgba(10,25,47,0.85)",
          backdropFilter: "blur(14px)",
          padding:        scrolled ? "10px 0" : "18px 0",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-14 flex items-center justify-between">

          {/* Logo → home */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/always-late-charters-marathon-key-florida-grouper-logo.jpg"
              alt="Always Late Charters"
              className="w-9 h-9 rounded-full object-cover border-2"
              style={{ borderColor: `${GOLD}55` }}
            />
            <div className="flex flex-col leading-none">
              <span className="text-white text-[15px] font-light tracking-[0.16em] uppercase" style={serif}>
                Always Late
              </span>
              <span className="text-[8px] tracking-[0.45em] uppercase mt-0.5" style={{ ...sans, color: GOLD }}>
                Charters · Marathon Key
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(([label, href]) => {
              const isActive = activePage === href;
              return (
                <a
                  key={label}
                  href={href}
                  className="text-[11px] tracking-[0.22em] uppercase transition-colors duration-300"
                  style={{ ...sans, color: isActive ? GOLD : "rgba(255,255,255,0.60)" }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "white"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.60)"; }}
                >
                  {label}
                </a>
              );
            })}
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase px-5 py-2.5 border transition-all duration-300"
              style={{ ...sans, color: GOLD, borderColor: `${GOLD}50` }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${GOLD}15`; e.currentTarget.style.borderColor = GOLD; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${GOLD}50`; }}
            >
              <PhoneIcon className="w-3.5 h-3.5" />
              {PHONE}
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(v => !v)} className="lg:hidden p-1" aria-label="Menu">
            <div className="flex flex-col gap-[6px]">
              <span className="block w-6 h-px bg-white transition-all duration-300 origin-center"
                style={{ transform: open ? "rotate(45deg) translateY(7px)" : "none" }} />
              <span className="block w-6 h-px bg-white transition-all duration-300"
                style={{ opacity: open ? 0 : 1 }} />
              <span className="block w-6 h-px bg-white transition-all duration-300 origin-center"
                style={{ transform: open ? "rotate(-45deg) translateY(-7px)" : "none" }} />
            </div>
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-500"
          style={{ maxHeight: open ? "380px" : "0", opacity: open ? 1 : 0 }}
        >
          <div className="px-6 pt-4 pb-7 flex flex-col gap-5 border-t"
            style={{ background: "rgba(10,25,47,0.99)", borderColor: "rgba(255,255,255,0.06)" }}>
            {links.map(([label, href]) => (
              <a key={label} href={href}
                className="text-white/60 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors"
                style={sans}>
                {label}
              </a>
            ))}
            <a href={PHONE_TEL} className="flex items-center gap-2 self-start text-sm" style={{ ...sans, color: GOLD }}>
              <PhoneIcon className="w-4 h-4" />
              {PHONE}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
