"use client";

import { useState } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

/* ─── Design tokens ─────────────────────────────────────────────────────────── */
const serif = { fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif" };
const sans  = { fontFamily: "'Jost', system-ui, -apple-system, sans-serif" };

const BLUE   = "#0A3D62";   /* deep ocean navy    */
const TEAL   = "#0E9AA7";   /* Florida Keys water */
const GOLD   = "#C9A96E";   /* sand/gold accent   */
const TEXT   = "#1A1A18";   /* near black         */
const MUTED  = "#6B6B60";
const BG     = "#F7F5F1";   /* warm cream         */
const BG_ALT = "#FFFFFF";
const BG_PAN = "#ECEAE5";

const PHONE     = "305-743-2444";
const PHONE_TEL = "tel:+13057432444";
const MARINA    = "Captain Hook's Marina";
const ADDRESS   = "11800 Overseas Hwy, Marathon, FL 33050";
const MM        = "Mile Marker 53";

/* ─── Inline JSON-LD ─────────────────────────────────────────────────────────── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TouristAttraction"],
  "@id": "https://www.alwayslatecharters.com/#business",
  name: "Always Late Charters",
  alternateName: "Always Late Charters Marathon FL",
  description: "Always Late Charters offers private offshore deep sea fishing, reef & wreck fishing, family fishing trips, and eco-tours out of Captain Hook's Marina in Marathon, Florida. Captain Lucas Ponzoa is a USCG-licensed guide with 20+ years of experience in the Florida Keys.",
  url: "https://www.alwayslatecharters.com",
  telephone: "+13057432444",
  priceRange: "$$$",
  image: "https://www.alwayslatecharters.com/always-late-charters-marathon-key-florida-boat-seavee-capt.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11800 Overseas Hwy",
    addressLocality: "Marathon",
    addressRegion: "FL",
    postalCode: "33050",
    addressCountry: "US"
  },
  geo: { "@type": "GeoCoordinates", latitude: "24.7136", longitude: "-81.0998" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "06:00", closes: "18:00" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "42", bestRating: "5", worstRating: "1" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fishing Charter Trips",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Offshore Deep Sea Fishing Charter", description: "Full-day and ¾-day offshore charters targeting Mahi-Mahi, Blackfin Tuna, Wahoo, and Sailfish in the Gulf Stream off Marathon, FL." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reef & Wreck Fishing Charter", description: "Half-day and full-day reef and wreck fishing for Yellowtail Snapper, Grouper, Hogfish, and Amberjack on the Florida Reef Tract." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Fishing Charter", description: "Kid-friendly half-day fishing trips targeting Yellowtail Snapper and reef fish. All gear provided, fish cleaning included." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Eco Tour & Wildlife Charter", description: "Backcountry eco tours in Florida Bay for dolphin encounters, sandbar visits, and wildlife viewing. 2–4 hour private tours." } },
    ]
  }
};

/* ─── Small components ───────────────────────────────────────────────────────── */

function Label({ children, light = false }) {
  return (
    <p className="text-[10px] tracking-[0.3em] uppercase mb-3"
      style={{ ...sans, color: light ? "rgba(255,255,255,0.60)" : GOLD }}>{children}</p>
  );
}

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={GOLD}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="4" y1="12" x2="20" y2="12" /><polyline points="14 6 20 12 14 18" />
    </svg>
  );
}

/* ─── FAQ Accordion ─────────────────────────────────────────────────────────── */

function FAQTeaser() {
  return (
    <section className="py-14 lg:py-24 px-5 lg:px-14 text-center" style={{ backgroundColor: BG_ALT }}>
      <div className="max-w-xl mx-auto">
        <Label>Before You Go</Label>
        <h2 className="leading-[0.9] mb-5"
          style={{ ...serif, fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)", fontWeight: 300, color: TEXT }}>
          Common
          <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Questions.</em>
        </h2>
        <p className="text-[14px] leading-relaxed mb-8" style={{ ...sans, color: MUTED }}>
          Fishing licenses, what to bring, seasickness tips, fish cleaning — everything answered in one place.
        </p>
        <a href="/faq"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase px-8 py-3.5 border transition-all duration-300"
          style={{ ...sans, color: BLUE, borderColor: `${BLUE}40` }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BLUE; e.currentTarget.style.color = "white"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = BLUE; }}>
          Read All FAQs <ArrowRight />
        </a>
      </div>
    </section>
  );
}

/* ─── Page sections ──────────────────────────────────────────────────────────── */

const AQUA = "#0BBFBD";

const tripBoxes = [
  {
    title: "Offshore Fishing",
    tag:   "Deep Blue",
    detail:"Mahi · Tuna · Wahoo · Sailfish",
    href:  "/offshore",
    img:   "/always-late-charters-marathon-key-florida-dolphin.jpg",
    alt:   "Mahi-Mahi caught offshore Marathon FL — Always Late Charters offshore deep sea fishing",
  },
  {
    title: "Reef & Wreck",
    tag:   "Fast Action",
    detail:"Snapper · Grouper · Wrecks · Reef",
    href:  "/reef",
    img:   "/always-late-charters-marathon-key-florida-grouper-snapper-family.jpg",
    alt:   "Grouper and Snapper caught reef fishing the Florida Reef Tract, Marathon FL — Always Late Charters",
  },
  {
    title: "Shark Fishing",
    tag:   "Backcountry",
    detail:"Clear Water · Big Fights · Catch & Release",
    href:  "/shark",
    img:   "/always-late-charters-marathon-key-florida-dolphin-tuna-snapper.jpg",
    alt:   "Shark fishing in the Florida Keys out of Marathon — Always Late Charters",
  },
  {
    title: "Family & Eco",
    tag:   "Private Days",
    detail:"Kids · Sandbars · Wildlife · Calm Water",
    href:  "/family",
    img:   "/always-late-charters-marathon-key-florida-grouper-kiddos.jpg",
    alt:   "Family fishing charter with kids holding fish in Marathon FL — Always Late Charters",
  },
];

function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@200;300;400;500;600&display=swap');
        html { scroll-behavior: smooth; }

        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.00); }
        }
        .hero-img { animation: heroZoom 12s ease-out forwards; }

        .trip-box-img { transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
        .trip-box:hover .trip-box-img { transform: scale(1.07); }
        .trip-box-overlay { transition: opacity 0.4s ease; }
        .trip-box:hover .trip-box-overlay { opacity: 0.55 !important; }

        /* ── Global mobile resets ── */
        *, *::before, *::after { box-sizing: border-box; }
        body { overflow-x: hidden; }
        img { max-width: 100%; }

        /* ── Trip boxes — reduce overlap on mobile ── */
        @media (max-width: 700px) {
          .trip-boxes-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .trip-boxes-wrap { margin-top: -60px !important; }
        }
        @media (max-width: 380px) {
          .trip-boxes-grid { grid-template-columns: 1fr !important; }
          .trip-boxes-wrap { margin-top: -40px !important; }
        }

        /* ── Hero height on small phones ── */
        @media (max-width: 430px) {
          .hero-section { height: 72vh !important; min-height: 480px !important; }
        }

        /* ── Biography section ── */
        @media (max-width: 1023px) {
          .bio-grid { gap: 2rem !important; }
          .bio-logo { max-width: 280px !important; padding: 1rem 0 !important; }
        }

        /* ── FishTheKeys text ── */
        @media (max-width: 1023px) {
          .fish-text-col { padding: 2.5rem 1.5rem !important; }
        }

        /* ── BookBanner form ── */
        @media (max-width: 640px) {
          .form-date-trip { grid-template-columns: 1fr !important; }
          .form-submit-row { flex-direction: column !important; align-items: stretch !important; gap: 1rem !important; }
          .form-submit-btn { justify-content: center !important; }
        }

        /* ── CatchGallery highlights ── */
        @media (max-width: 640px) {
          .gallery-highlights { grid-template-columns: 1fr 1fr !important; gap: 0.6rem 0.75rem !important; }
        }

        /* ── Reviews section ── */
        @media (max-width: 1023px) {
          .reviews-header { flex-direction: column !important; align-items: flex-start !important; }
        }

        /* ── TripsGrid header ── */
        @media (max-width: 1023px) {
          .trips-header { flex-direction: column !important; align-items: flex-start !important; }
          .trips-header-desc { text-align: left !important; max-width: 100% !important; }
        }

        /* ── Prevent letter-spacing overflow on small screens ── */
        @media (max-width: 430px) {
          .alc-kicker { letter-spacing: 0.2em !important; font-size: 9px !important; }
        }
      `}</style>

      {/* ── HERO MAIN IMAGE — cinematic, ~85vh ── */}
      <section className="hero-section relative" style={{ height: "85vh", minHeight: "560px" }}>

        <SiteNav activePage="/" />

        {/* Boat photo — fades to transparent at bottom so Ocean-2 shows through */}
        <div className="absolute inset-0 overflow-hidden" style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.3) 88%, transparent 100%)",
          maskImage:        "linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.3) 88%, transparent 100%)"
        }}>
          <img
            src="/always-late-charters-marathon-key-florida-boat-seavee-capt.jpg"
            alt="Captain Lucas Ponzoa aboard his SeaVee charter boat FL 1761 PD on the open ocean in the Florida Keys, Marathon FL — Always Late Charters private fishing charter"
            className="w-full h-full object-cover hero-img"
            style={{ objectPosition: "center 95%", filter: "brightness(1.18) saturate(1.08)" }}
          />
        </div>
      </section>

      {/* ── FOUR TRIP BOXES — overlap the hero by ~half their height ── */}
      <div className="trip-boxes-wrap" style={{ marginTop: "-110px", position: "relative", zIndex: 10, padding: "0 16px 0 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", maxWidth: "1400px", margin: "0 auto" }}
          className="trip-boxes-grid">
          {tripBoxes.map((box) => (
            <a key={box.title} href={box.href} className="trip-box group block"
              style={{ position: "relative", height: "clamp(200px, 22vw, 280px)", overflow: "hidden",
                textDecoration: "none" }}>

              {/* Photo */}
              <img src={box.img} alt={box.alt}
                className="trip-box-img w-full h-full object-cover absolute inset-0" />

              {/* Subtle bottom gradient — keeps text readable without darkening photos */}
              <div className="trip-box-overlay absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(4,14,22,0.70) 0%, rgba(4,14,22,0.10) 45%, transparent 100%)", opacity: 0.8 }} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-5">

                {/* Aqua tag */}
                <div className="mb-2 self-start px-2.5 py-1 text-[8px] tracking-[0.4em] uppercase"
                  style={{ fontFamily: "'Jost', system-ui, sans-serif", fontWeight: 500,
                    color: "#0B1A24", backgroundColor: AQUA }}>
                  {box.tag}
                </div>

                {/* Title */}
                <h3 className="text-white leading-none mb-2"
                  style={{ fontFamily: "'Jost', system-ui, sans-serif", fontWeight: 600,
                    fontSize: "clamp(0.95rem, 1.8vw, 1.35rem)", letterSpacing: "0.04em",
                    textTransform: "uppercase" }}>
                  {box.title}
                </h3>

                {/* Detail line */}
                <p className="text-[9px] tracking-[0.22em] uppercase"
                  style={{ fontFamily: "'Jost', system-ui, sans-serif",
                    color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
                  {box.detail}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

    </>
  );
}

/* ─── Biography / Story ──────────────────────────────────────────────────────── */

function Biography() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-36 px-5 lg:px-20">

      {/* Ocean-2 bleed-through fades into lighter navy */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(to bottom, rgba(14,107,138,0) 0%, rgba(14,107,138,0.30) 18%, rgba(11,85,120,0.60) 40%, rgba(10,72,105,0.82) 60%, #0b5578 80%)"
      }} />

      {/* MARATHON — positioned at the bottom of the section */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true">
        <span className="leading-none text-center"
          style={{ ...serif, fontSize: "clamp(5rem, 18vw, 20rem)", fontWeight: 700, whiteSpace: "nowrap",
                   color: "rgba(255,255,255,0.05)", letterSpacing: "-0.02em", lineHeight: 0.85 }}>
          MARATHON
        </span>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto">
        <div className="bio-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left — logo */}
          <div className="relative flex items-center justify-center">
            <div className="bio-logo flex items-center justify-center" style={{ maxWidth: "480px", width: "100%", padding: "2rem 0" }}>
              <img
                src="/always-late-charters-logo.png"
                alt="Always Late Charters logo — Marathon, Florida Keys"
                style={{ width: "100%", height: "auto", display: "block", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.35))" }}
              />
            </div>
          </div>

          {/* Right — text */}
          <div className="lg:pl-8">
            <Label light>The Captain</Label>
            <h2 className="text-white leading-[0.88] mb-8"
              style={{ ...serif, fontSize: "clamp(2.4rem, 4.5vw, 5rem)", fontWeight: 300 }}>
              Born &amp; Raised
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>in the Keys.</em>
            </h2>

            <div className="w-12 h-px mb-8" style={{ backgroundColor: GOLD }} />

            <p className="mb-6 leading-[1.92] text-[15px]"
              style={{ ...sans, color: "rgba(255,255,255,0.70)" }}>
              Captain Lucas Ponzoa didn&apos;t just learn to fish the Florida Keys — he grew up on these flats,
              reefs, and offshore edges. His family has fished Marathon for three generations, and he&apos;s spent
              the last two decades turning that inherited knowledge into unforgettable days on the water for families,
              first-timers, and serious anglers alike.
            </p>

            <p className="mb-6 leading-[1.92] text-[15px]"
              style={{ ...sans, color: "rgba(255,255,255,0.55)" }}>
              Whether you&apos;re chasing tournament-class Mahi in blue water, anchoring up on a wreck stacked
              with Grouper, or showing your kids what it feels like to fight their first real fish —
              Captain Lucas knows exactly where to take you and exactly how to put you on them.
            </p>

            <p className="mb-10 leading-[1.92] text-[15px]"
              style={{ ...sans, color: "rgba(255,255,255,0.55)" }}>
              USCG-licensed. Fully insured. Patient with beginners. Demanding for the experienced.
              And passionate about the fishery he calls home.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t pt-8"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}>
              {[
                { val: "42",    label: "5-Star Reviews" },
                { val: "3rd",   label: "Generation Keys" },
                { val: "Private", label: "Charters Only" },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-light mb-1 text-white"
                    style={{ ...serif, fontSize: "2rem" }}>{s.val}</div>
                  <div className="text-[9px] tracking-[0.28em] uppercase"
                    style={{ ...sans, color: "rgba(255,255,255,0.38)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trips Grid ─────────────────────────────────────────────────────────────── */

const trips = [
  {
    label:    "Offshore Deep Sea",
    tagline:  "Mahi · Tuna · Wahoo · Sailfish",
    href:     "/offshore",
    img:      "/always-late-charters-marathon-key-florida-dolphin.jpg",
    imgAlt:   "Mahi-Mahi caught offshore Marathon FL on Always Late Charters deep sea fishing trip",
    color:    BLUE,
    half:     "20–25 miles offshore, reef edge weed lines",
    full:     "30–45 miles into the Gulf Stream blue water",
    bullets: [
      "Trolling, live-bait & kite fishing",
      "Peak Mahi season: spring through summer",
      "Sailfish peak: November through February",
      "Suitable for all experience levels",
    ],
  },
  {
    label:    "Reef & Wreck Fishing",
    tagline:  "Grouper · Snapper · Hogfish · Amberjack",
    href:     "/reef",
    img:      "/always-late-charters-marathon-key-florida-grouper-snapper-family.jpg",
    imgAlt:   "Grouper and Snapper caught reef fishing on the Florida Reef Tract out of Marathon FL — Always Late Charters",
    color:    TEAL,
    half:     "Florida Reef Tract, 15–60 ft structure",
    full:     "Deep wrecks & ledges, 60–120 ft",
    bullets: [
      "USS Thunderbolt wreck — Marathon's best-kept secret",
      "Year-round Yellowtail Snapper chumming",
      "Hogfish on light tackle (Oct–Mar peak)",
      "Great for beginners and families",
    ],
  },
  {
    label:    "Family Trips",
    tagline:  "Fun · Safe · Kid-Friendly · Memorable",
    href:     "/family",
    img:      "/always-late-charters-marathon-key-florida-grouper-kiddos.jpg",
    imgAlt:   "Kids holding grouper on a family fishing charter with Always Late Charters out of Marathon Florida Keys",
    color:    GOLD,
    half:     "Calm nearshore reef, 15–40 ft",
    full:     "Extended trip with more species variety",
    bullets: [
      "All ages welcome — kids as young as 3",
      "Light spinning tackle sized for small hands",
      "Life jackets provided for all young anglers",
      "Non-stop action: Yellowtail Snapper & Snapper",
    ],
  },
  {
    label:    "Eco Tours",
    tagline:  "Dolphins · Sandbars · Manatees · Sunset",
    href:     "/eco-tours",
    img:      "/always-late-charters-marathon-key-florida-dolphin-tuna-snapper.jpg",
    imgAlt:   "Bottlenose dolphins in Florida Bay backcountry on an eco tour with Always Late Charters, Marathon FL",
    color:    "#2E7D52",
    half:     "2–3 hrs, sandbar or wildlife focus",
    full:     "4-hr sunset tour, multiple stops",
    bullets: [
      "Private sandbars — snorkel & wade in crystal water",
      "Wild dolphin encounters in Florida Bay",
      "Roseate Spoonbills, Eagles, Manatees in season",
      "Perfect for non-fishers, photographers, couples",
    ],
  },
];

/* ─── Fish the Middle Keys ───────────────────────────────────────────────────── */

function FishTheKeys() {
  return (
    <section className="pt-20 lg:pt-28 pb-0" style={{ backgroundColor: BG_ALT }}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* Left — image with registration card overlay */}
        <div className="self-start">
          <div className="relative">
          <img
            src="/always-late-charters-marathon-key-florida-boat-seavee-capt-guest-2.jpg"
            alt="Happy anglers holding mahi-mahi on the FL 1761 PD SeaVee — Always Late Charters Marathon FL"
            className="w-full"
            style={{ display: "block" }}
          />
          {/* Mile marker card — bottom right corner of photo */}
          <div className="absolute bottom-0 right-0 flex flex-col items-center justify-center text-center"
            style={{ width: "120px", height: "110px", backgroundColor: "#0f0f0d", padding: "16px 14px" }}>
            <div style={{ ...serif, fontSize: "3.2rem", fontWeight: 300, color: GOLD, lineHeight: 1 }}>53</div>
            <div className="mt-1 text-[7px] tracking-[0.4em] uppercase" style={{ ...sans, color: "rgba(255,255,255,0.55)" }}>Mile Marker</div>
          </div>
          </div>
        </div>

        {/* Right — text */}
        <div className="fish-text-col flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-20">
          <p className="text-[10px] tracking-[0.35em] uppercase mb-4" style={{ ...sans, color: GOLD }}>The Always Late Experience</p>
          <h2 className="leading-[0.92] mb-8" style={{ ...serif, fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300, color: TEXT }}>
            Fish the Middle Keys
            <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>the right way.</em>
          </h2>

          <p className="mb-5 leading-[1.88] text-[15px]" style={{ ...sans, color: MUTED }}>
            Marathon sits at the heart of the Florida Keys — where the reef, the Gulf Stream, and
            hundreds of offshore wrecks converge. Mahi-Mahi, Grouper, Yellowtail Snapper,
            Blackfin Tuna, and more are here year-round, and we know exactly where to find them.
          </p>
          <p className="mb-10 leading-[1.88] text-[15px]" style={{ ...sans, color: MUTED }}>
            Every charter is 100% private — your group, your pace, your fish box. We provide
            everything from tackle to fish cleaning, so all you have to do is show up and reel.
          </p>

          {/* Stats row */}
          <div className="border-t pt-8" style={{ borderColor: `${TEXT}10` }}>
            <div className="grid grid-cols-3 gap-6">
              {[
                { val: "100%",       label: "Private" },
                { val: "Year",       label: "Round Action" },
                { val: "Capt. Hook's", label: "Marina Dock" },
              ].map(s => (
                <div key={s.label}>
                  <div className="leading-none mb-1" style={{ ...serif, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 300, color: TEXT }}>{s.val}</div>
                  <div className="text-[9px] tracking-[0.3em] uppercase" style={{ ...sans, color: MUTED }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Purpose-Built for These Waters ────────────────────────────────────────── */

function PurposeBuilt() {
  return (
    <section className="py-14 lg:py-28 px-5 lg:px-20" style={{ backgroundColor: BG }}>
      <div className="max-w-screen-xl mx-auto">

        {/* Top — heading left, blurb right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-end">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-4" style={{ ...sans, color: GOLD }}>The Vessel</p>
            <h2 className="leading-[0.92]" style={{ ...serif, fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300, color: TEXT }}>
              Purpose-Built for
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>These Waters.</em>
            </h2>
          </div>
          <p className="text-[14px] leading-[1.88] lg:text-right" style={{ ...sans, color: MUTED }}>
            Our SeaVee center console is rigged, maintained, and ready to put you on fish —
            whether you&apos;re dropping baits offshore or working the reef.
          </p>
        </div>

        {/* Vessel image — dark gradient overlay for text legibility */}
        <div className="relative overflow-hidden mb-10" style={{ height: "clamp(320px, 42vw, 560px)" }}>
          <img
            src="/always-late-charters-marathon-key-florida-boat-seavee-capt-gurst.jpg"
            alt="Always Late Charters SeaVee center console FL 1761 PD — Marathon Florida Keys charter fishing vessel"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 35%", filter: "brightness(1.05)" }}
          />
          {/* Dark gradient overlay — only on this image, keeps text readable */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,12,20,0.72) 0%, rgba(4,12,20,0.28) 50%, transparent 100%)" }} />
          <div className="absolute bottom-8 left-8">
            <p className="text-white leading-none" style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300 }}>SeaVee Center Console</p>
          </div>
        </div>

        {/* Vessel specs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-10 mb-10 border-b" style={{ borderColor: `${TEXT}10` }}>
          {[
            { label: "Vessel",      val: "SeaVee" },
            { label: "Tower",       val: "Full Tower Rig" },
            { label: "Electronics", val: "Garmin Chartplotter" },
            { label: "Departures",  val: "Captain Hook's Marina" },
          ].map(s => (
            <div key={s.label}>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-2" style={{ ...sans, color: MUTED }}>{s.label}</p>
              <p className="text-[15px] font-light" style={{ ...sans, color: TEXT }}>{s.val}</p>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {[
            { label: "Tackle & Bait",       body: "Full rod and reel setups for all techniques — live bait, trolling, bottom fishing. We rig it, you reel it." },
            { label: "Fish Cleaning",        body: "Every keeper gets cleaned and bagged on return to the dock. Take your catch straight to dinner." },
            { label: "Captain's Knowledge",  body: "Years running these reefs, wrecks, and offshore edges. We don't guess — we put you on fish." },
          ].map(c => (
            <div key={c.label} className="border-t pt-6" style={{ borderColor: `${GOLD}50` }}>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-3" style={{ ...sans, color: GOLD }}>{c.label}</p>
              <p className="text-[14px] leading-[1.88]" style={{ ...sans, color: MUTED }}>{c.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─── Trips grid ─────────────────────────────────────────────────────────────── */

function TripsGrid() {
  return (
    <section id="trips" className="py-16 lg:py-32 px-5 lg:px-20" style={{ backgroundColor: BG }}>
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="trips-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <Label>What We Offer</Label>
            <h2 className="leading-[0.88]"
              style={{ ...serif, fontSize: "clamp(2.4rem, 5vw, 5.5rem)", fontWeight: 300, color: TEXT }}>
              Choose Your
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>Adventure.</em>
            </h2>
          </div>
          <p className="trips-header-desc text-[14px] leading-relaxed lg:text-right"
            style={{ ...sans, color: MUTED, maxWidth: "280px" }}>
            All trips are 100% private. Your group, your pace, your fish box.
            Half-day and full-day options for every trip type.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {trips.map((t) => (
            <a href={t.href} key={t.label}
              className="group relative flex flex-col overflow-hidden"
              style={{ border: `1px solid ${TEXT}10` }}>

              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "clamp(240px, 30vw, 400px)" }}>
                <img src={t.img} alt={t.imgAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                <div className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${t.color}EE 0%, ${t.color}40 50%, transparent 100%)` }} />
                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-[9px] tracking-[0.38em] uppercase mb-1"
                    style={{ ...sans, color: "rgba(255,255,255,0.65)" }}>{t.tagline}</p>
                  <h3 className="text-white font-light"
                    style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>{t.label}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col gap-4" style={{ backgroundColor: BG_ALT }}>

                {/* Half/Full day */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Half-Day", desc: t.half },
                    { label: "Full Day",  desc: t.full },
                  ].map(opt => (
                    <div key={opt.label} className="p-4 border-l-2" style={{ borderColor: t.color, backgroundColor: BG }}>
                      <p className="text-[9px] tracking-[0.3em] uppercase mb-1"
                        style={{ ...sans, color: t.color }}>{opt.label}</p>
                      <p className="text-[12px] leading-relaxed"
                        style={{ ...sans, color: MUTED }}>{opt.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-2">
                  {t.bullets.map(b => (
                    <li key={b} className="flex items-start gap-3 text-[13px]"
                      style={{ ...sans, color: MUTED }}>
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: t.color }} />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA link */}
                <div className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase mt-auto pt-2 transition-colors duration-300"
                  style={{ ...sans, color: t.color }}>
                  Learn More <ArrowRight />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Social Proof / Gallery ─────────────────────────────────────────────────── */

function CatchGallery() {
  const photos = [
    { src: "/always-late-charters-marathon-key-florida-dolphin.jpg",       cap: "BULL MAHI-MAHI",   sub: "GULF STREAM OFFSHORE" },
    { src: "/always-late-charters-marathon-key-florida-tuna.jpg",           cap: "BLACKFIN TUNA",    sub: "OFFSHORE EDGE" },
    { src: "/always-late-charters-marathon-key-florida-tuna-2.jpg",         cap: "YELLOWFIN TUNA",   sub: "DEEP WATER" },
    { src: "/always-late-charters-marathon-key-florida-tuna-3.jpg",         cap: "OFFSHORE TUNA",    sub: "GULF STREAM" },
    { src: "/always-late-charters-marathon-key-florida-grouper.jpg",        cap: "BLACK GROUPER",    sub: "DEEP REEF WRECK" },
    { src: "/always-late-charters-marathon-key-florida-grouper-2.jpg",      cap: "GAG GROUPER",      sub: "OFFSHORE WRECK" },
    { src: "/always-late-charters-marathon-key-florida-tuna-kiddos.jpg",    cap: "FAMILY TUNA DAY",  sub: "KIDS OFFSHORE" },
    { src: "/always-late-charters-marathon-key-florida-tuna-kiddos-2.jpg",  cap: "FAMILY OFFSHORE",  sub: "MARATHON KEYS" },
  ];

  const highlights = [
    "100% Private Charters",
    "Reef, Wreck & Offshore",
    "Tackle & Bait Included",
    "Fish Cleaning Included",
    "Family-Friendly Trips",
    "Local Captain Knowledge",
    "Year-Round Action",
    "Capt. Hook's Marina",
  ];

  const [idx, setIdx] = useState(0);
  const perView = 3;
  const maxIdx = photos.length - perView;
  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(maxIdx, i + 1));
  const cardW = "calc(33.333% - 11px)";
  const cardWMobile = "82vw";

  return (
    <section className="py-14 lg:py-28" style={{ backgroundColor: BG_ALT }}>
      <div className="max-w-screen-xl mx-auto px-5 lg:px-20">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-4">
          <div>
            <Label>Inside the Experience</Label>
            <h2 className="leading-[0.88]"
              style={{ ...serif, fontSize: "clamp(2rem, 3.8vw, 3.8rem)", fontWeight: 300, color: TEXT }}>
              Private Charters.
              <br /><em style={{ fontWeight: 400 }}>Real Results.</em>
            </h2>
          </div>
          <div>
            <p className="text-[14px] leading-[1.88] mb-4" style={{ ...sans, color: MUTED }}>
              Every trip departs from Capt. Hook's Marina at Mile Marker 53 — one of the most
              productive fishing locations in the Middle Keys. Whether you're targeting blue-water
              species offshore or pulling Snapper off a wreck, Captain Lucas puts you where the
              fish are. All gear, bait, and fish cleaning included.
            </p>
            <div className="flex items-center gap-3">
              <StarRow />
              <span className="text-[13px]" style={{ ...sans, color: MUTED }}>42 five-star reviews</span>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="hidden lg:flex justify-end gap-2 mb-6">
          {[{ fn: prev, dir: "←", dis: idx === 0 }, { fn: next, dir: "→", dis: idx >= maxIdx }].map(b => (
            <button key={b.dir} onClick={b.fn} disabled={b.dis}
              className="flex items-center justify-center text-[15px] transition-all duration-200"
              style={{ width: 40, height: 40,
                border: `1px solid ${b.dis ? `${TEXT}18` : BLUE}`,
                color: b.dis ? `${TEXT}25` : BLUE,
                backgroundColor: "transparent",
                cursor: b.dis ? "default" : "pointer" }}>
              {b.dir}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel — desktop: JS-driven 3-up; mobile: CSS scroll-snap 1-up */}
      <style>{`
        .gallery-track-mobile { display:none; }
        @media (max-width: 1023px) {
          .gallery-track-desktop { display: none !important; }
          .gallery-track-mobile  { display: flex; }
        }
      `}</style>

      {/* Desktop track */}
      <div className="gallery-track-desktop"
        style={{ overflow: "hidden", paddingLeft: "max(2rem, calc((100vw - 1280px)/2 + 5rem))", paddingRight: "2rem" }}>
        <div className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${idx} * (${cardW} + 16px)))` }}>
          {photos.map(p => (
            <div key={p.src} className="flex-shrink-0" style={{ width: cardW }}>
              <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>
                <img src={p.src} alt={p.cap}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  style={{ display: "block" }} />
              </div>
              <div className="pt-3 pb-1 border-t" style={{ borderColor: `${BLUE}30`, marginTop: "10px" }}>
                <p className="text-[10px] tracking-[0.28em] font-medium" style={{ ...sans, color: BLUE }}>{p.cap}</p>
                <p className="text-[9px] tracking-[0.22em] mt-0.5" style={{ ...sans, color: MUTED }}>{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile track — CSS scroll snap */}
      <div className="gallery-track-mobile px-6"
        style={{ overflowX: "auto", scrollSnapType: "x mandatory", gap: "12px",
          WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {photos.map(p => (
          <div key={p.src} className="flex-shrink-0" style={{ width: cardWMobile, scrollSnapAlign: "start" }}>
            <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>
              <img src={p.src} alt={p.cap} className="w-full h-full object-cover" style={{ display: "block" }} />
            </div>
            <div className="pt-3 pb-1 border-t mt-2" style={{ borderColor: `${BLUE}30` }}>
              <p className="text-[10px] tracking-[0.28em] font-medium" style={{ ...sans, color: BLUE }}>{p.cap}</p>
              <p className="text-[9px] tracking-[0.22em] mt-0.5" style={{ ...sans, color: MUTED }}>{p.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charter highlights + CTA */}
      <div className="max-w-screen-xl mx-auto px-5 lg:px-20 mt-10 lg:mt-14">
        <div className="gallery-highlights grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 mb-10 lg:mb-12">
          {highlights.map(h => (
            <div key={h} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: AQUA }} />
              <span className="text-[11px] tracking-[0.18em] uppercase" style={{ ...sans, color: MUTED }}>{h}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a href="/booking"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase px-10 py-4 transition-all duration-300"
            style={{ ...sans, backgroundColor: BLUE, color: "white" }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = TEAL}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = BLUE}>
            Book a Charter
          </a>
          <a href={PHONE_TEL} className="text-[13px] transition-colors duration-300"
            style={{ ...sans, color: MUTED }}
            onMouseEnter={e => e.currentTarget.style.color = BLUE}
            onMouseLeave={e => e.currentTarget.style.color = MUTED}>
            Or call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Reviews ────────────────────────────────────────────────────────────────── */

const reviews = [
  {
    label: "FAMILY TRIP",
    quote: "Captain Lucas made it easy from the dock to the last fish. The kids were hooked before we even hit the reef, and we came back with dinner for the whole family.",
    name: "The Martinez Family", from: "Orlando, FL",
    img: "/always-late-charters-marathon-key-florida-grouper-snapper-family.jpg",
    imgPos: "center 20%",
  },
  {
    label: "REEF & WRECK",
    quote: "We've booked with Always Late three years running. He knows every wreck on the chart, keeps the bite going, and the cooler is always full. Non-negotiable Keys charter.",
    name: "Mike T.", from: "Atlanta, GA",
    img: "/always-late-charters-marathon-key-florida-grouper-2.jpg",
    imgPos: "center center",
  },
  {
    label: "OFFSHORE DAY",
    quote: "Six hours, non-stop action, cooler full of mahi. Captain knew exactly where to go and the whole trip felt effortless. Easily the best charter we've booked in the Keys.",
    name: "Chris R.", from: "Nashville, TN",
    img: "/always-late-charters-marathon-key-florida-dolphin.jpg",
    imgPos: "center center",
  },
];

function Reviews() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28" style={{ backgroundColor: BLUE }}>

      {/* Subtle diagonal texture stripe */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 60px)",
      }} />

      <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-16">

        {/* Header row */}
        <div className="reviews-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div>
            {/* Kicker */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
              <span className="text-[10px] tracking-[0.38em] uppercase" style={{ ...sans, color: GOLD }}>
                Google Reviews · Marathon, FL
              </span>
            </div>
            <h2 className="text-white leading-[1.0]"
              style={{ ...serif, fontSize: "clamp(2.2rem, 4vw, 4rem)", fontWeight: 300 }}>
              Fish Stories That
              <br /><em style={{ fontWeight: 400, fontStyle: "italic" }}>Actually Happened.</em>
            </h2>
          </div>

          {/* Right: rating pill + CTA */}
          <div className="flex items-center gap-5 flex-shrink-0">
            <div className="flex flex-col items-center px-6 py-4 text-center"
              style={{ border: "1px solid rgba(255,255,255,0.14)", backgroundColor: "rgba(255,255,255,0.04)" }}>
              <span style={{ ...serif, fontSize: "2.2rem", fontWeight: 300, color: "white", lineHeight: 1 }}>42</span>
              <StarRow />
              <span className="text-[8px] tracking-[0.3em] uppercase mt-1"
                style={{ ...sans, color: "rgba(255,255,255,0.38)" }}>Five-Star Reviews</span>
            </div>
            <a href="/booking"
              className="hidden lg:inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase px-8 py-4 transition-all duration-300"
              style={{ ...sans, backgroundColor: GOLD, color: "#0a1a2a", fontWeight: 500 }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.color = "#0a1a2a"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = GOLD; e.currentTarget.style.color = "#0a1a2a"; }}>
              Book Your Charter →
            </a>
          </div>
        </div>

        {/* Cards — 3-col desktop, stacked mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={r.name}
              className="flex flex-col"
              style={{
                backgroundColor: "#ffffff",
                marginTop: i === 1 ? "clamp(0px, 3vw, 2.5rem)" : "0",
                boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
              }}>

              {/* Photo — 16/10 feels editorial but not too tall */}
              <div style={{ aspectRatio: "16/10", overflow: "hidden", position: "relative" }}>
                <img src={r.img} alt={r.label}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: r.imgPos || "center center", filter: "brightness(1.05) saturate(1.08)" }} />
                {/* Trip tag over photo */}
                <div className="absolute top-0 left-0 px-3 py-2"
                  style={{ backgroundColor: BLUE }}>
                  <span className="text-[8px] tracking-[0.42em] uppercase"
                    style={{ ...sans, color: GOLD, fontWeight: 600 }}>{r.label}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1" style={{ backgroundColor: "#ffffff" }}>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill={GOLD}>
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="flex-1 leading-[1.80] mb-5"
                  style={{ ...sans, color: "#2a2a28", fontSize: "14px", fontWeight: 300 }}>
                  &ldquo;{r.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#e8e5e0" }}>
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: BLUE, borderRadius: "50%" }}>
                    <span style={{ ...sans, color: GOLD, fontSize: "11px", fontWeight: 700 }}>
                      {r.name.split(" ")[0][0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-[13px]" style={{ ...sans, color: TEXT, fontWeight: 500 }}>{r.name}</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase mt-0.5"
                      style={{ ...sans, color: MUTED }}>{r.from}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="flex justify-center mt-10 lg:hidden">
          <a href="/booking"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase px-10 py-4"
            style={{ ...sans, backgroundColor: GOLD, color: "#0a1a2a", fontWeight: 500 }}>
            Book Your Charter →
          </a>
        </div>

        {/* Bottom tag */}
        <p className="text-center mt-10 text-[10px] tracking-[0.3em] uppercase"
          style={{ ...sans, color: "rgba(255,255,255,0.22)" }}>
          All reviews verified on Google · Captain Hook&apos;s Marina · Marathon, Florida Keys
        </p>

      </div>
    </section>
  );
}

/* ─── Book CTA banner ────────────────────────────────────────────────────────── */

function BookBanner() {
  const inputBase = {
    ...sans, color: TEXT, background: "transparent",
    borderBottom: `1px solid ${TEXT}20`, outline: "none",
    fontSize: "15px", fontWeight: 300, paddingBottom: "10px",
    width: "100%", transition: "border-color 0.3s"
  };
  const focus = (e) => (e.currentTarget.style.borderBottomColor = TEAL);
  const blur  = (e) => (e.currentTarget.style.borderBottomColor = `${TEXT}20`);

  return (
    <section className="py-16 lg:py-32 px-5 lg:px-20" style={{ backgroundColor: BG_ALT }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — copy */}
          <div>
            <Label>Book a Charter</Label>
            <h2 className="leading-[0.88] mb-8"
              style={{ ...serif, fontSize: "clamp(2.4rem, 4.5vw, 4.8rem)", fontWeight: 300, color: TEXT }}>
              Ready to Fish
              <br /><em style={{ fontStyle: "italic", fontWeight: 400 }}>the Keys?</em>
            </h2>
            <p className="text-[15px] leading-[1.88] mb-10" style={{ ...sans, color: MUTED }}>
              The fastest way to book is a phone call — Captain Lucas answers his own phone and
              gives you an honest, real-time report on what&apos;s biting. Fill out the form and
              we&apos;ll reply the same day.
            </p>

            <div className="flex flex-col gap-5 border-l pl-6" style={{ borderColor: `${TEAL}50` }}>
              {[
                { label: "Call or Text",  val: PHONE,    href: PHONE_TEL },
                { label: "Marina",        val: MARINA,   href: null },
                { label: "Address",       val: ADDRESS,  href: null },
                { label: "Hours",         val: "Year-Round · 7 Days a Week · Dawn to Dusk", href: null },
              ].map(c => (
                <div key={c.label}>
                  <p className="text-[9px] tracking-[0.38em] uppercase mb-1"
                    style={{ ...sans, color: MUTED }}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-[15px] font-light transition-colors duration-300"
                      style={{ ...sans, color: TEXT }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = TEXT)}>{c.val}</a>
                  ) : (
                    <span className="text-[14px] font-light" style={{ ...sans, color: MUTED }}>{c.val}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-8">
            {[
              { id: "name",  label: "Your Name",     type: "text",  ph: "First & Last Name" },
              { id: "email", label: "Email Address", type: "email", ph: "email@example.com"  },
              { id: "phone", label: "Phone Number",  type: "tel",   ph: "(___) ___-____"     },
            ].map(f => (
              <div key={f.id} className="flex flex-col gap-2">
                <label htmlFor={f.id} className="text-[9px] tracking-[0.4em] uppercase"
                  style={{ ...sans, color: MUTED }}>{f.label}</label>
                <input id={f.id} type={f.type} placeholder={f.ph}
                  style={inputBase} onFocus={focus} onBlur={blur} />
              </div>
            ))}
            <div className="form-date-trip grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-[9px] tracking-[0.4em] uppercase"
                  style={{ ...sans, color: MUTED }}>Preferred Date</label>
                <input id="date" type="date" style={inputBase} onFocus={focus} onBlur={blur} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="trip" className="text-[9px] tracking-[0.4em] uppercase"
                  style={{ ...sans, color: MUTED }}>Trip Type</label>
                <select id="trip" style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                  onFocus={focus} onBlur={blur}>
                  <option value="">Select a trip…</option>
                  <option value="offshore">Offshore Deep Sea</option>
                  <option value="reef">Reef &amp; Wreck</option>
                  <option value="family">Family Trip</option>
                  <option value="eco">Eco Tour</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="guests" className="text-[9px] tracking-[0.4em] uppercase"
                style={{ ...sans, color: MUTED }}>Group Size</label>
              <select id="guests" style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                onFocus={focus} onBlur={blur}>
                <option value="">How many guests?</option>
                {["1–2","3–4","5–6"].map(o => <option key={o} value={o}>{o} people</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="msg" className="text-[9px] tracking-[0.4em] uppercase"
                style={{ ...sans, color: MUTED }}>Message (Optional)</label>
              <textarea id="msg" rows={3}
                placeholder="Target species, occasion, special requests…"
                style={{ ...inputBase, resize: "none" }} onFocus={focus} onBlur={blur} />
            </div>
            <div className="form-submit-row flex items-center justify-between pt-1">
              <span className="text-[9px] tracking-[0.2em] uppercase" style={{ ...sans, color: MUTED }}>
                We reply same day
              </span>
              <button type="submit"
                className="form-submit-btn flex items-center gap-3 text-white text-[11px] tracking-[0.28em] uppercase px-9 py-4 transition-all duration-300"
                style={{ ...sans, backgroundColor: TEAL }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0b8794")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = TEAL)}>
                Check Availability <ArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* Inline JSON-LD for LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema, null, 0) }}
      />

      <div style={{ overflowX: "hidden", backgroundColor: BLUE }}>

        {/* ── Shared scene: Hero dissolves into Ocean-2 / "The Captain" ── */}
        <div style={{ position: "relative" }}>

          {/* Ocean-2 fills the entire wrapper behind everything — becomes visible where hero fades out */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
            <img src="/alc-ocean-2.png" alt="" aria-hidden="true"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top",
                       filter: "brightness(1.15) saturate(1.1)", display: "block" }} />
          </div>

          {/* Hero — boat photo masked at the bottom so it dissolves into Ocean-2 below */}
          <Hero />

          {/* Biography — Ocean-2 continues behind it; navy gradient deepens for readability */}
          <Biography />

        </div>
        <FishTheKeys />
        <PurposeBuilt />
        <TripsGrid />
        <CatchGallery />
        <Reviews />
        <FAQTeaser />
        <BookBanner />
        <SiteFooter />
      </div>
    </>
  );
}
