const serif  = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
const sans   = { fontFamily: "'Jost', system-ui, sans-serif" };
const ACCENT = "#8B7355";
const TEXT   = "#1A1A18";
const BG     = "#ECEAE5";

const tripLinks = [
  ["Reef Fishing",     "/reef"],
  ["Offshore Fishing", "/offshore"],
  ["Shark Fishing",    "/shark"],
  ["Charters & Rates", "/charters-rates"],
  ["Meet Capt. Lucas", "/about"],
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: BG, borderTop: "1px solid rgba(26,26,24,0.08)" }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 pb-10 mb-8 border-b"
          style={{ borderColor: "rgba(26,26,24,0.08)" }}>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/always-late-charters-marathon-key-florida-grouper-logo.jpg"
                alt="Always Late Charters"
                className="w-9 h-9 rounded-full object-cover"
                style={{ border: `1px solid ${ACCENT}40` }} />
              <div>
                <div className="font-light tracking-[0.18em] uppercase text-[15px]"
                  style={{ ...serif, color: TEXT }}>Always Late</div>
                <div className="text-[8px] tracking-[0.42em] uppercase"
                  style={{ ...sans, color: ACCENT }}>Charters · Marathon Key</div>
              </div>
            </div>
            <p className="text-[12px] leading-loose max-w-[220px] mt-3"
              style={{ ...sans, color: "rgba(26,26,24,0.45)" }}>
              Private fishing charters out of Captain Hook's Marina, Marathon, FL. USCG Licensed &amp; Insured.
            </p>
          </div>

          {/* Trips */}
          <div>
            <div className="text-[9px] tracking-[0.38em] uppercase mb-5"
              style={{ ...sans, color: "rgba(26,26,24,0.35)" }}>Our Trips</div>
            <ul className="flex flex-col gap-3">
              {tripLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-[12px] tracking-[0.08em] transition-colors duration-300"
                    style={{ ...sans, color: "rgba(26,26,24,0.55)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(26,26,24,0.55)")}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[9px] tracking-[0.38em] uppercase mb-5"
              style={{ ...sans, color: "rgba(26,26,24,0.35)" }}>Contact</div>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+13057432444" className="text-[12px] transition-colors duration-300"
                  style={{ ...sans, color: "rgba(26,26,24,0.55)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(26,26,24,0.55)")}>
                  305-743-2444
                </a>
              </li>
              {["Captain Hook's Marina", "11800 Overseas Hwy, Marathon, FL", "Mile Marker 53 · Year-Round"].map(t => (
                <li key={t}>
                  <span className="text-[12px]" style={{ ...sans, color: "rgba(26,26,24,0.40)" }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-[0.18em] uppercase"
          style={{ ...sans, color: "rgba(26,26,24,0.30)" }}>
          <span>© {year} Always Late Charters · All Rights Reserved</span>
          <span>USCG Licensed · Captain Lucas Ponzoa</span>
        </div>
      </div>
    </footer>
  );
}
