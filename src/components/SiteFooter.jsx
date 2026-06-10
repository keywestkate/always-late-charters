const serif = { fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif" };
const sans  = { fontFamily: "'Jost', system-ui, -apple-system, sans-serif" };
const GOLD  = "#C9A96E";
const DARK  = "#060E1A";
const NAVY  = "#0A192F";

const PHONE     = "305-743-2444";
const PHONE_TEL = "tel:+13057432444";
const MARINA    = "Captain Hook's Marina, Marathon, FL";
const MM        = "Mile Marker 53, Oceanside";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  const tripLinks = [
    ["Offshore Deep Sea", "/offshore"],
    ["Reef & Wreck",      "/reef"],
    ["Family Trips",      "/family"],
    ["Eco Tours",         "/eco-tours"],
    ["Shark Fishing",     "/shark"],
  ];

  return (
    <footer className="pt-14 pb-8 px-6 lg:px-14" style={{ backgroundColor: DARK }}>
      <div className="max-w-screen-xl mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 pb-12 mb-8 border-b"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/always-late-charters-marathon-key-florida-grouper-logo.jpg"
                alt="Always Late Charters"
                className="w-9 h-9 rounded-full object-cover"
              />
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
              style={{ ...sans, color: "rgba(255,255,255,0.20)" }}>
              Private fishing and eco charters out of Captain Hook's Marina,
              Marathon, FL. USCG Licensed.
            </p>
          </div>

          {/* Trips */}
          <div>
            <div className="text-[8px] tracking-[0.42em] uppercase mb-5"
              style={{ ...sans, color: "rgba(255,255,255,0.18)" }}>Our Trips</div>
            <ul className="flex flex-col gap-3">
              {tripLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href}
                    className="text-[12px] tracking-[0.1em] transition-colors duration-300"
                    style={{ ...sans, color: "rgba(255,255,255,0.32)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}>
                    {label}
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
              <li>
                <a href={PHONE_TEL}
                  className="text-[12px] transition-colors duration-300"
                  style={{ ...sans, color: "rgba(255,255,255,0.32)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}>
                  {PHONE}
                </a>
              </li>
              {[MARINA, MM, "Year-Round · 7 Days a Week"].map(t => (
                <li key={t}>
                  <span className="text-[12px]" style={{ ...sans, color: "rgba(255,255,255,0.22)" }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-[0.2em] uppercase"
          style={{ ...sans, color: "rgba(255,255,255,0.13)" }}
        >
          <span>© {year} Always Late Charters LLC · All Rights Reserved</span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "USCG Licensed"].map(l => (
              <a key={l} href="#" className="hover:text-white/40 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
