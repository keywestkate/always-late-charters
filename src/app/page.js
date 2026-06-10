"use client";

import { useState, useEffect } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const serif = { fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif" };
const sans  = { fontFamily: "'Jost', system-ui, -apple-system, sans-serif" };
const GOLD  = "#C9A96E";
const NAVY  = "#0A192F";
const CREAM = "#F2EDE4";
const DARK  = "#060E1A";

const PHONE     = "305-743-2444";
const PHONE_TEL = "tel:+13057432444";
const MARINA    = "Captain Hook's Marina, Marathon, FL";
const MM        = "Mile Marker 53, Oceanside";

// ─── Image paths (all in /public) ────────────────────────────────────────────
const IMG = {
  boat:          "/always-late-charters-marathon-key-florida-boat-seavee-capt.jpg",
  dolphin:       "/always-late-charters-marathon-key-florida-dolphin.jpg",
  dolphinFamily: "/always-late-charters-marathon-key-florida-dolphin-tuna-snapper.jpg",
  grouper:       "/always-late-charters-marathon-key-florida-grouper.jpg",
  grouper2:      "/always-late-charters-marathon-key-florida-grouper-2.jpg",
  grouperKids:   "/always-late-charters-marathon-key-florida-grouper-kiddos.jpg",
  grouperLogo:   "/always-late-charters-marathon-key-florida-grouper-logo.jpg",
  grouperFamily: "/always-late-charters-marathon-key-florida-grouper-snapper-family.jpg",
  tuna:          "/always-late-charters-marathon-key-florida-tuna.jpg",
};

// ─── SVG primitives ───────────────────────────────────────────────────────────

function ArrowRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>
  );
}

function PhoneIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.97-.97a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.06z" />
    </svg>
  );
}

function StarIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// ─── Eyebrow label ────────────────────────────────────────────────────────────

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-7 h-px flex-shrink-0" style={{ backgroundColor: GOLD }} />
      <span
        className="text-[10px] tracking-[0.42em] uppercase"
        style={{ ...sans, color: light ? GOLD : "#8A7355" }}
      >
        {children}
      </span>
    </div>
  );
}

// ─── NavBar ───────────────────────────────────────────────────────────────────

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    ["The Vessel",  "#vessel"],
    ["The Catch",   "#catch"],
    ["Reviews",     "#reviews"],
    ["Book Now",    "#contact"],
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        background:    scrolled ? "rgba(10,25,47,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        padding:       scrolled ? "12px 0" : "26px 0",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/always-late-charters-marathon-key-florida-grouper-logo.jpg"
            alt="Always Late Charters logo"
            className="w-10 h-10 rounded-full object-cover object-center border-2"
            style={{ borderColor: `${GOLD}50` }}
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
        <nav className="hidden lg:flex items-center gap-10">
          {links.slice(0, 3).map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-white/60 hover:text-white transition-colors duration-300 text-[11px] tracking-[0.24em] uppercase"
              style={sans}
            >
              {label}
            </a>
          ))}
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase px-6 py-2.5 transition-all duration-300 border"
            style={{ ...sans, color: GOLD, borderColor: `${GOLD}55` }}
            onMouseEnter={(e) => { e.currentTarget.style.background = `${GOLD}15`; e.currentTarget.style.borderColor = GOLD; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${GOLD}55`; }}
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
        style={{ maxHeight: open ? "320px" : "0", opacity: open ? 1 : 0 }}
      >
        <div className="px-6 pt-5 pb-7 flex flex-col gap-5 border-t"
          style={{ background: "rgba(10,25,47,0.98)", borderColor: "rgba(255,255,255,0.06)" }}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
              className="text-white/65 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors"
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
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: "100svh" }}>

      {/* Full-bleed boat photo */}
      <div className="absolute inset-0">
        <img
          src={IMG.boat}
          alt="SeaVee sportfishing center console, Always Late Charters, Marathon Key FL"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 35%", animation: "slowZoom 16s ease-out forwards" }}
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,25,47,0.60) 0%, rgba(10,25,47,0.25) 45%, rgba(10,25,47,0.75) 100%)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(10,25,47,0.55) 0%, transparent 65%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-14 pt-28 pb-20">
        <div className="mb-10">
          <Eyebrow light>Marathon Key, Florida · Mile Marker 53</Eyebrow>
        </div>

        <h1 className="text-white leading-[0.88] mb-9"
          style={{ ...serif, fontSize: "clamp(3.2rem, 8vw, 8rem)", fontWeight: 300 }}>
          Your Best Day
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>on the Water.</em>
          <br />
          <span className="text-white/70" style={{ fontSize: "0.72em", fontWeight: 300 }}>Guaranteed.</span>
        </h1>

        <div className="w-20 h-px mb-8" style={{ backgroundColor: GOLD }} />

        <p className="text-white/55 text-[11px] tracking-[0.32em] uppercase mb-12 max-w-xs" style={sans}>
          Private Charters · Deep Sea · Reef · Family Trips
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row items-start gap-5">
          <a
            href={PHONE_TEL}
            className="group flex items-center gap-3 text-white text-sm tracking-[0.28em] uppercase px-8 py-4 transition-all duration-300"
            style={{ ...sans, backgroundColor: GOLD }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b8924e")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
          >
            <PhoneIcon className="w-4 h-4" />
            Call {PHONE}
          </a>
          <a
            href="#catch"
            className="group flex items-center gap-4 transition-colors duration-300 text-white/70 hover:text-white"
          >
            <span className="text-[12px] tracking-[0.35em] uppercase" style={sans}>See the Catch</span>
            <span className="w-10 h-px bg-current transition-all duration-300 group-hover:w-14" />
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Bottom stat strip */}
      <div className="absolute bottom-0 left-0 right-0"
        style={{ background: "rgba(6,14,26,0.85)", backdropFilter: "blur(10px)" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-14 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x"
          style={{ divideColor: "rgba(255,255,255,0.07)" }}>
          {[
            { value: "100%",      label: "Private Trips" },
            { value: "SeaVee",    label: "Center Console" },
            { value: "Offshore",  label: "Deep Sea & Reef" },
            { value: "5 ★",       label: "Google Rating" },
          ].map((s, i) => (
            <div key={s.label} className={`flex flex-col gap-1 ${i > 0 ? "pl-6" : ""}`}>
              <span className="text-white text-xl font-light" style={serif}>{s.value}</span>
              <span className="text-[9px] tracking-[0.32em] uppercase" style={{ ...sans, color: "rgba(255,255,255,0.35)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap');
        @keyframes slowZoom { from { transform: scale(1.07); } to { transform: scale(1.0); } }
        html { scroll-behavior: smooth; }
      `}</style>
    </section>
  );
}

// ─── About / Narrative ────────────────────────────────────────────────────────

function About() {
  return (
    <section className="overflow-hidden" style={{ backgroundColor: CREAM }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left — tall boat image */}
          <div className="relative lg:-mt-12">
            <div className="overflow-hidden" style={{ height: "clamp(360px, 55vw, 740px)" }}>
              <img
                src={IMG.boat}
                alt="SeaVee center console Always Late Charters"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                style={{ objectPosition: "center 40%" }}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-8 right-0 lg:translate-x-8 p-7 text-center"
              style={{ backgroundColor: NAVY, minWidth: "160px" }}>
              <div className="font-light leading-none mb-1" style={{ ...serif, fontSize: "3.2rem", color: GOLD }}>FL</div>
              <div className="font-light text-white text-lg mb-1" style={serif}>1761 PD</div>
              <div className="text-white/40 text-[8px] tracking-[0.35em] uppercase" style={sans}>Registration</div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="flex flex-col justify-center px-8 py-20 lg:py-28 lg:pl-16 lg:pr-10">
            <div className="mb-9">
              <Eyebrow>The Always Late Experience</Eyebrow>
            </div>

            <h2 className="leading-[0.9] mb-10"
              style={{ ...serif, fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300, color: NAVY }}>
              Fish the Middle Keys
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>the right way.</em>
            </h2>

            <p className="text-[15px] leading-[1.9] mb-7" style={{ ...sans, color: `${NAVY}99` }}>
              Marathon sits at the heart of the Florida Keys — where the reef, the Gulf Stream, and
              hundreds of offshore wrecks converge. Mahi-Mahi, Grouper, Yellowtail Snapper, Blackfin
              Tuna, and more are here year-round, and we know exactly where to find them.
            </p>

            <p className="text-[15px] leading-[1.9] mb-12" style={{ ...sans, color: `${NAVY}80` }}>
              Every charter is 100% private — your group, your pace, your fish box.
              We provide everything from tackle to fish cleaning, so all you have to do is show up and reel.
            </p>

            <div className="w-full h-px mb-10" style={{ backgroundColor: `${GOLD}40` }} />

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "100%",       label: "Private"       },
                { value: "Year",       label: "Round Action"  },
                { value: "Cap. Hook's",label: "Marina Dock"   },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-light mb-1" style={{ ...serif, fontSize: "2rem", color: NAVY }}>{s.value}</div>
                  <div className="text-[9px] tracking-[0.3em] uppercase" style={{ ...sans, color: `${NAVY}50` }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Vessel section ───────────────────────────────────────────────────────────

function Vessel() {
  return (
    <section id="vessel" className="py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: NAVY }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="mb-7"><Eyebrow light>The Vessel</Eyebrow></div>
            <h2 className="text-white leading-[0.88]"
              style={{ ...serif, fontSize: "clamp(2.6rem, 5vw, 5rem)", fontWeight: 300 }}>
              Purpose-Built for
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>These Waters.</em>
            </h2>
          </div>
          <p className="text-[14px] leading-loose max-w-sm lg:text-right"
            style={{ ...sans, color: "rgba(255,255,255,0.35)" }}>
            Our SeaVee center console is rigged, maintained, and ready to put you on fish —
            whether you're dropping baits offshore or working the reef.
          </p>
        </div>

        {/* Wide boat image */}
        <div className="relative overflow-hidden mb-0">
          <div className="overflow-hidden w-full" style={{ height: "clamp(240px, 48vw, 580px)" }}>
            <img
              src={IMG.boat}
              alt="Always Late Charters SeaVee center console sportfishing vessel Marathon Key"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              style={{ objectPosition: "center 38%" }}
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(10,25,47,0.88) 0%, transparent 55%)" }} />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(10,25,47,0.4) 0%, transparent 50%)" }} />
          </div>
          <div className="absolute bottom-8 left-7 lg:left-10">
            <div className="text-[9px] tracking-[0.48em] uppercase mb-2" style={{ ...sans, color: GOLD }}>Our Boat</div>
            <div className="text-white font-light" style={{ ...serif, fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}>
              SeaVee Center Console
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {[
            { label: "Vessel",    value: "SeaVee"            },
            { label: "Tower",     value: "Full Tower Rig"    },
            { label: "Electronics", value: "Garmin Chartplotter" },
            { label: "Departures", value: "Captain Hook's Marina" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <span className="text-[9px] tracking-[0.36em] uppercase"
                style={{ ...sans, color: "rgba(255,255,255,0.28)" }}>{s.label}</span>
              <span className="font-light tracking-wide text-white"
                style={{ ...serif, fontSize: "1.2rem" }}>{s.value}</span>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              label: "Tackle & Bait",
              desc:  "Full rod and reel setups for all techniques — live bait, trolling, bottom fishing. We rig it, you reel it.",
            },
            {
              label: "Fish Cleaning",
              desc:  "Every keeper gets cleaned and bagged on return to the dock. Take your catch straight to dinner.",
            },
            {
              label: "Captain's Knowledge",
              desc:  "Years running these reefs, wrecks, and offshore edges. We don't guess — we put you on fish.",
            },
          ].map((item) => (
            <div key={item.label} className="pl-7 border-l" style={{ borderColor: `${GOLD}35` }}>
              <div className="text-[9px] tracking-[0.36em] uppercase mb-3" style={{ ...sans, color: GOLD }}>
                {item.label}
              </div>
              <p className="text-[14px] leading-[1.85]" style={{ ...sans, color: "rgba(255,255,255,0.42)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Catch Gallery ────────────────────────────────────────────────────────────

function CatchGallery() {
  const photos = [
    { src: IMG.dolphin,       caption: "Bull Mahi-Mahi",       sub: "Offshore — Gulf Stream" },
    { src: IMG.dolphinFamily, caption: "Full Box Day",          sub: "Mahi, Tuna & Snapper"  },
    { src: IMG.grouper,       caption: "Black Grouper",         sub: "Deep Reef"             },
    { src: IMG.grouper2,      caption: "Gag Grouper",           sub: "Offshore Wreck"        },
    { src: IMG.grouperKids,   caption: "Family Grouper Day",    sub: "Kids & Grouper"        },
    { src: IMG.grouperFamily, caption: "Reef Slam",             sub: "Grouper & Snapper"     },
    { src: IMG.tuna,          caption: "Blackfin Tuna",         sub: "Offshore"              },
    { src: IMG.boat,          caption: "SeaVee Ready",          sub: "Rigged & Waiting"      },
  ];

  return (
    <section id="catch" className="py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: CREAM }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14">

        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-5 mb-8">
            <div className="h-px flex-1 max-w-16" style={{ backgroundColor: `${GOLD}60` }} />
            <Eyebrow>Real Catches. Real Clients.</Eyebrow>
            <div className="h-px flex-1 max-w-16" style={{ backgroundColor: `${GOLD}60` }} />
          </div>
          <h2 className="leading-[0.9]"
            style={{ ...serif, fontSize: "clamp(2.6rem, 5vw, 4.8rem)", fontWeight: 300, color: NAVY }}>
            This is What Happens
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>Out There.</em>
          </h2>
        </div>

        {/* Asymmetric masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">

          {/* Row 1 — big left, two stacked right */}
          <div className="col-span-2 row-span-2 relative overflow-hidden group"
            style={{ height: "clamp(300px, 42vw, 560px)" }}>
            <img src={photos[0].src} alt={photos[0].caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-white font-light text-xl mb-0.5" style={serif}>{photos[0].caption}</p>
              <p className="text-white/60 text-[10px] tracking-[0.28em] uppercase" style={sans}>{photos[0].sub}</p>
            </div>
          </div>

          {[photos[1], photos[2]].map((p) => (
            <div key={p.caption} className="relative overflow-hidden group"
              style={{ height: "clamp(145px, 20vw, 270px)" }}>
              <img src={p.src} alt={p.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-white font-light text-sm mb-0.5" style={serif}>{p.caption}</p>
                <p className="text-white/55 text-[9px] tracking-[0.25em] uppercase" style={sans}>{p.sub}</p>
              </div>
            </div>
          ))}

          {/* Row 2 — three equal */}
          {[photos[3], photos[4], photos[5]].map((p) => (
            <div key={p.caption} className="relative overflow-hidden group"
              style={{ height: "clamp(160px, 22vw, 300px)" }}>
              <img src={p.src} alt={p.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-white font-light text-sm mb-0.5" style={serif}>{p.caption}</p>
                <p className="text-white/55 text-[9px] tracking-[0.25em] uppercase" style={sans}>{p.sub}</p>
              </div>
            </div>
          ))}

          {/* Row 3 — wide tuna + one more */}
          <div className="col-span-2 relative overflow-hidden group"
            style={{ height: "clamp(180px, 24vw, 320px)" }}>
            <img src={photos[6].src} alt={photos[6].caption}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-white font-light text-lg mb-0.5" style={serif}>{photos[6].caption}</p>
              <p className="text-white/60 text-[10px] tracking-[0.25em] uppercase" style={sans}>{photos[6].sub}</p>
            </div>
          </div>
          <div className="col-span-2 relative overflow-hidden group"
            style={{ height: "clamp(180px, 24vw, 320px)" }}>
            <img src={photos[7].src} alt={photos[7].caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-white font-light text-lg mb-0.5" style={serif}>{photos[7].caption}</p>
              <p className="text-white/60 text-[10px] tracking-[0.25em] uppercase" style={sans}>{photos[7].sub}</p>
            </div>
          </div>
        </div>

        {/* CTA under gallery */}
        <div className="mt-12 text-center">
          <a href={PHONE_TEL}
            className="inline-flex items-center gap-3 text-white text-[12px] tracking-[0.32em] uppercase px-10 py-4 transition-all duration-300"
            style={{ ...sans, backgroundColor: NAVY }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = NAVY)}>
            <PhoneIcon className="w-4 h-4" />
            Book Your Trip · {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Trip types ───────────────────────────────────────────────────────────────

function Trips() {
  const trips = [
    {
      label:  "Offshore Deep Sea",
      tagline: "Mahi · Tuna · Wahoo",
      desc:   "Run 20–35 miles out to the Gulf Stream's color-water edges and weed lines. Trolling and live-bait for Mahi-Mahi, Blackfin Tuna, Wahoo, and more. This is what the Keys are famous for.",
      img:    IMG.dolphin,
      duration: "Full or ¾ Day",
    },
    {
      label:  "Reef & Bottom Fishing",
      tagline: "Grouper · Snapper · Hogfish",
      desc:   "Work the deep-water reefs and offshore wrecks for trophy Grouper and Yellowtail Snapper. Light tackle bottom fishing — great for families and beginners as well as experienced anglers.",
      img:    IMG.grouperFamily,
      duration: "Half or Full Day",
    },
    {
      label:  "Family & Kid-Friendly",
      tagline: "Fun · Easy · Memorable",
      desc:   "Introduce the kids to fishing the right way. We'll match the target species and trip length to your group. Non-stop action, easy reeling, and plenty of fish in the cooler for dinner.",
      img:    IMG.grouperKids,
      duration: "Half Day (4 hrs)",
    },
  ];

  return (
    <section className="py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: NAVY }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14">
        <div className="text-center mb-16 lg:mb-20">
          <div className="mb-7"><Eyebrow light>What We Offer</Eyebrow></div>
          <h2 className="text-white leading-[0.9]"
            style={{ ...serif, fontSize: "clamp(2.6rem, 5vw, 4.8rem)", fontWeight: 300 }}>
            Every Trip,
            <em style={{ fontStyle: "italic", fontWeight: 400 }}> Tailored.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {trips.map((t, i) => (
            <div key={t.label}
              className="group relative overflow-hidden flex flex-col"
              style={{ border: `1px solid rgba(255,255,255,0.06)` }}>

              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "clamp(220px, 28vw, 360px)" }}>
                <img src={t.img} alt={t.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,25,47,0.85) 0%, rgba(10,25,47,0.2) 60%, transparent 100%)" }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-[9px] tracking-[0.42em] uppercase mb-1" style={{ ...sans, color: GOLD }}>
                    {t.duration}
                  </div>
                  <h3 className="text-white text-2xl font-light" style={serif}>{t.label}</h3>
                  <p className="text-white/50 text-[10px] tracking-[0.22em] uppercase mt-1" style={sans}>
                    {t.tagline}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                <p className="text-[14px] leading-[1.85] flex-1 mb-6"
                  style={{ ...sans, color: "rgba(255,255,255,0.5)" }}>
                  {t.desc}
                </p>
                <a href="#contact"
                  className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase transition-colors duration-300"
                  style={{ ...sans, color: `${GOLD}80` }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = `${GOLD}80`)}>
                  Inquire
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ──────────────────────────────────────────────────────────────────

function Reviews() {
  const reviews = [
    {
      quote: "Captain put us on Mahi non-stop for 6 hours straight. Kids and adults alike were worn out from reeling. Best fishing trip our family has ever taken — and we've done a lot of them.",
      name:  "The Martinez Family",
      from:  "Orlando, FL",
      trip:  "Offshore Mahi Charter",
    },
    {
      quote: "We've been booking with Always Late for three years running. The grouper fishing is world-class and the captain knows every wreck on the chart. Always comes home with a full cooler.",
      name:  "Mike T.",
      from:  "Atlanta, GA",
      trip:  "Reef & Bottom Fishing",
    },
    {
      quote: "Took my 10-year-old on his first fishing trip. The captain was incredibly patient, kept the action going the whole time, and my son caught the biggest fish of the day. He hasn't stopped talking about it.",
      name:  "Chris R.",
      from:  "Nashville, TN",
      trip:  "Family Half-Day Trip",
    },
  ];

  return (
    <section id="reviews" className="py-24 lg:py-36" style={{ backgroundColor: CREAM }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <div className="mb-7"><Eyebrow>What Clients Say</Eyebrow></div>
            <h2 className="leading-[0.9]"
              style={{ ...serif, fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)", fontWeight: 300, color: NAVY }}>
              5 Stars.
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>Every Time.</em>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {[0,1,2,3,4].map(i => (
              <StarIcon key={i} className="w-5 h-5" style={{ color: GOLD }} />
            ))}
            <span className="ml-3 text-sm" style={{ ...sans, color: `${NAVY}60` }}>
              Google Reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {reviews.map((r, i) => (
            <div key={r.name} className="flex flex-col" style={{ paddingTop: i === 1 ? "2rem" : "0" }}>
              {/* Large gold quote */}
              <span className="font-light leading-none mb-5 select-none"
                style={{ ...serif, fontSize: "4.5rem", color: `${GOLD}35`, lineHeight: 1 }}>
                &ldquo;
              </span>
              <p className="font-light leading-[1.75] flex-1 mb-8"
                style={{ ...serif, fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)", color: NAVY }}>
                {r.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-6 h-px flex-shrink-0" style={{ backgroundColor: GOLD }} />
                <div>
                  <div className="text-[13px] tracking-[0.08em]" style={{ ...sans, color: NAVY }}>{r.name}</div>
                  <div className="text-[10px] tracking-[0.24em] uppercase mt-0.5" style={{ ...sans, color: `${NAVY}45` }}>
                    {r.from} · {r.trip}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const fields = [
    { id: "name",  label: "Your Name",     type: "text",  placeholder: "First & Last Name"  },
    { id: "email", label: "Email Address", type: "email", placeholder: "email@example.com"  },
    { id: "phone", label: "Phone Number",  type: "tel",   placeholder: "(___) ___-____"      },
  ];

  const focusBorder = (e) => (e.currentTarget.style.borderBottomColor = GOLD);
  const blurBorder  = (e) => (e.currentTarget.style.borderBottomColor = `${NAVY}25`);

  const inputBase = {
    ...sans,
    color: NAVY,
    background: "transparent",
    borderBottom: `1px solid ${NAVY}25`,
    outline: "none",
    fontSize: "15px",
    fontWeight: 300,
    paddingBottom: "10px",
    width: "100%",
    transition: "border-color 0.3s",
  };

  return (
    <section id="contact" className="py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: NAVY }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">

          {/* Left */}
          <div>
            <div className="mb-9"><Eyebrow light>Book a Charter</Eyebrow></div>
            <h2 className="text-white leading-[0.88] mb-9"
              style={{ ...serif, fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)", fontWeight: 300 }}>
              Ready to Go?
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>Let&apos;s Talk.</em>
            </h2>
            <p className="text-[15px] leading-[1.88] mb-14" style={{ ...sans, color: "rgba(255,255,255,0.50)" }}>
              The fastest way to book is to call or text — we respond immediately.
              Or fill out the form and we&apos;ll reach back within a few hours with availability and pricing.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-6 border-l pl-7" style={{ borderColor: `${GOLD}35` }}>
              {[
                { label: "Call or Text",    value: PHONE,   href: PHONE_TEL },
                { label: "Home Marina",     value: MARINA,  href: null       },
                { label: "Location",        value: MM,      href: null       },
                { label: "Season",          value: "Year-Round · 7 Days a Week", href: null },
              ].map((c) => (
                <div key={c.label}>
                  <div className="text-[9px] tracking-[0.4em] uppercase mb-1"
                    style={{ ...sans, color: "rgba(255,255,255,0.28)" }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="text-[15px] font-light transition-colors duration-300"
                      style={{ ...sans, color: "rgba(255,255,255,0.85)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}>
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-[15px] font-light" style={{ ...sans, color: "rgba(255,255,255,0.65)" }}>
                      {c.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-9">
            {fields.map((f) => (
              <div key={f.id} className="flex flex-col gap-2">
                <label htmlFor={f.id} className="text-[9px] tracking-[0.42em] uppercase"
                  style={{ ...sans, color: "rgba(255,255,255,0.3)" }}>{f.label}</label>
                <input id={f.id} type={f.type} placeholder={f.placeholder}
                  style={{ ...inputBase, color: "rgba(255,255,255,0.85)" }}
                  className="placeholder-white/20"
                  onFocus={focusBorder} onBlur={blurBorder} />
              </div>
            ))}

            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-[9px] tracking-[0.42em] uppercase"
                  style={{ ...sans, color: "rgba(255,255,255,0.3)" }}>Preferred Date</label>
                <input id="date" type="date"
                  style={{ ...inputBase, color: "rgba(255,255,255,0.70)" }}
                  onFocus={focusBorder} onBlur={blurBorder} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="triptype" className="text-[9px] tracking-[0.42em] uppercase"
                  style={{ ...sans, color: "rgba(255,255,255,0.3)" }}>Trip Type</label>
                <select id="triptype"
                  style={{ ...inputBase, color: "rgba(255,255,255,0.70)", appearance: "none", cursor: "pointer" }}
                  onFocus={focusBorder} onBlur={blurBorder}>
                  <option value="" className="bg-[#0A192F]">Select…</option>
                  <option value="offshore" className="bg-[#0A192F]">Offshore Deep Sea</option>
                  <option value="reef" className="bg-[#0A192F]">Reef & Bottom Fishing</option>
                  <option value="family" className="bg-[#0A192F]">Family / Kids Trip</option>
                  <option value="full" className="bg-[#0A192F]">Full Day (custom)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="guests" className="text-[9px] tracking-[0.42em] uppercase"
                style={{ ...sans, color: "rgba(255,255,255,0.3)" }}>Party Size</label>
              <select id="guests"
                style={{ ...inputBase, color: "rgba(255,255,255,0.70)", appearance: "none", cursor: "pointer" }}
                onFocus={focusBorder} onBlur={blurBorder}>
                <option value="" className="bg-[#0A192F]">How many guests?</option>
                {["1–2", "3–4", "5–6", "7+"].map((o) => (
                  <option key={o} value={o} className="bg-[#0A192F]">{o} guests</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="msg" className="text-[9px] tracking-[0.42em] uppercase"
                style={{ ...sans, color: "rgba(255,255,255,0.3)" }}>Message (Optional)</label>
              <textarea id="msg" rows={3}
                placeholder="Target species, occasion, or anything else we should know."
                style={{ ...inputBase, color: "rgba(255,255,255,0.75)", resize: "none" }}
                className="placeholder-white/20"
                onFocus={focusBorder} onBlur={blurBorder} />
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-[9px] tracking-[0.2em] uppercase" style={{ ...sans, color: "rgba(255,255,255,0.22)" }}>
                We reply same day
              </p>
              <button type="submit"
                className="group flex items-center gap-3 text-white text-[11px] tracking-[0.35em] uppercase px-9 py-4 transition-all duration-300"
                style={{ ...sans, backgroundColor: GOLD }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b8924e")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}>
                Send Inquiry
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-14 pb-8 px-6 lg:px-14" style={{ backgroundColor: DARK }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pb-12 mb-8 border-b"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/always-late-charters-marathon-key-florida-grouper-logo.jpg"
                alt="Always Late Charters" className="w-9 h-9 rounded-full object-cover" />
              <div>
                <div className="text-white text-lg font-light tracking-[0.15em] uppercase" style={serif}>
                  Always Late
                </div>
                <div className="text-[8px] tracking-[0.45em] uppercase" style={{ ...sans, color: GOLD }}>
                  Charters · Marathon Key
                </div>
              </div>
            </div>
            <p className="text-[12px] leading-loose max-w-[240px] mt-4"
              style={{ ...sans, color: "rgba(255,255,255,0.2)" }}>
              Private offshore and reef fishing charters out of Captain Hook's Marina,
              Marathon, FL. USCG Licensed.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[8px] tracking-[0.42em] uppercase mb-5"
              style={{ ...sans, color: "rgba(255,255,255,0.18)" }}>Explore</div>
            <ul className="flex flex-col gap-3">
              {[["The Vessel","#vessel"],["Catch Gallery","#catch"],["Reviews","#reviews"],["Book Now","#contact"]].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="text-[12px] tracking-[0.12em] transition-colors duration-300"
                    style={{ ...sans, color: "rgba(255,255,255,0.32)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[8px] tracking-[0.42em] uppercase mb-5"
              style={{ ...sans, color: "rgba(255,255,255,0.18)" }}>Contact</div>
            <ul className="flex flex-col gap-3">
              {[
                [PHONE, PHONE_TEL],
                [MARINA, null],
                [MM, null],
                ["Year-Round · 7 Days", null],
              ].map(([l, h]) => (
                <li key={l}>
                  {h ? (
                    <a href={h} className="text-[12px] transition-colors duration-300"
                      style={{ ...sans, color: "rgba(255,255,255,0.32)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}>
                      {l}
                    </a>
                  ) : (
                    <span className="text-[12px]" style={{ ...sans, color: "rgba(255,255,255,0.22)" }}>{l}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-[0.2em] uppercase"
          style={{ ...sans, color: "rgba(255,255,255,0.13)" }}>
          <span>© {year} Always Late Charters LLC · All Rights Reserved</span>
          <div className="flex gap-6">
            {["Privacy","Terms","USCG Licensed"].map((l) => (
              <a key={l} href="#" className="hover:text-white/40 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div style={{ colorScheme: "dark", overflowX: "hidden" }}>
      <NavBar />
      <Hero />
      <About />
      <Vessel />
      <CatchGallery />
      <Trips />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
