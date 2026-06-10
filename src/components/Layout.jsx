import Link from "next/link";

const nav = [
  { href: "/offshore", label: "Offshore Fishing" },
  { href: "/reef", label: "Reef Fishing" },
  { href: "/shark", label: "Shark Fishing" },
  { href: "/eco-tours", label: "Eco Tours" },
  { href: "/family", label: "Family Charters" },
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:text-yellow-400 transition-colors">
            Always Late Charters
          </Link>
          <nav className="flex flex-wrap gap-4 text-sm font-medium">
            {nav.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-yellow-400 transition-colors">
                {label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+13055550000"
            className="bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded hover:bg-yellow-300 transition-colors whitespace-nowrap"
          >
            Book Now
          </a>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-blue-900 text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-3 gap-6">
          <div>
            <p className="font-bold text-lg mb-1">Always Late Charters</p>
            <p className="text-blue-200">Key West, Florida</p>
            <p className="text-blue-200">Stock Island Marina</p>
          </div>
          <div>
            <p className="font-bold mb-1">Quick Links</p>
            <ul className="space-y-1">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-blue-200 hover:text-yellow-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold mb-1">Contact</p>
            <p className="text-blue-200">Phone: (305) 555-0000</p>
            <p className="text-blue-200">Email: captain@alwayslatecharters.com</p>
            <p className="text-blue-200 mt-2">USCG Licensed &amp; Insured</p>
          </div>
        </div>
        <div className="border-t border-blue-800 text-center py-3 text-blue-300">
          &copy; {new Date().getFullYear()} Always Late Charters. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
