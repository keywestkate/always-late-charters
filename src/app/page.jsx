import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Link from "next/link";

export const metadata = {
  title: "Always Late Charters | Key West Fishing & Eco Tours",
  description:
    "Key West's premier fishing charter. Offshore, reef, shark fishing, eco tours & family charters departing from Stock Island Marina. USCG licensed captain with 20+ years experience.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Always Late Charters",
  description: metadata.description,
  url: "https://alwayslatecharters.com",
  telephone: "+13055550000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stock Island Marina",
    addressLocality: "Key West",
    addressRegion: "FL",
    postalCode: "33040",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.5553,
    longitude: -81.7578,
  },
  priceRange: "$$",
  openingHours: "Mo-Su 06:00-18:00",
  sameAs: [
    "https://www.facebook.com/alwayslatecharters",
    "https://www.instagram.com/alwayslatecharters",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Charter Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Offshore Fishing Charter" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reef Fishing Charter" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shark Fishing Charter" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Key West Eco Tour" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Fishing Charter" } },
    ],
  },
};

const services = [
  {
    href: "/offshore",
    title: "Offshore Fishing",
    img: "/assets/offshore-fishing-key-west.jpg",
    desc: "Head to the Gulf Stream for mahi-mahi, tuna, wahoo, and sailfish. Full and half-day trips available.",
  },
  {
    href: "/reef",
    title: "Reef Fishing",
    img: "/assets/reef-fishing-key-west.jpg",
    desc: "Fish the living coral reefs of the Florida Keys for snapper, grouper, and hogfish.",
  },
  {
    href: "/shark",
    title: "Shark Fishing",
    img: "/assets/shark-fishing-key-west.jpg",
    desc: "An adrenaline-packed adventure targeting bull, nurse, and hammerhead sharks.",
  },
  {
    href: "/eco-tours",
    title: "Eco Tours",
    img: "/assets/eco-tour-key-west.jpg",
    desc: "Explore the backcountry mangroves and encounter dolphins, manatees, and sea turtles.",
  },
  {
    href: "/family",
    title: "Family Charters",
    img: "/assets/family-fishing-charter-key-west.jpg",
    desc: "Kid-friendly trips designed for a great time on the water — no experience needed.",
  },
];

const faqs = [
  {
    q: "Do I need a fishing license?",
    a: "No. Our charter vessel operates under a federal headboat license, which covers all passengers. You do not need a personal fishing license.",
  },
  {
    q: "What should I bring?",
    a: "Sunscreen, sunglasses, a hat, snacks, drinks, and a camera. We provide all rods, tackle, bait, and ice.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We offer a full refund for cancellations made 48 hours or more before departure. Within 48 hours, a 50% credit is issued for a future trip.",
  },
  {
    q: "How many people can come on a charter?",
    a: "Our vessel accommodates up to 6 passengers comfortably. Private charters are available for groups of all sizes.",
  },
  {
    q: "Is Always Late Charters good for beginners?",
    a: "Absolutely. Captain [Name] has over 20 years guiding anglers of all skill levels. We'll teach you everything you need to know.",
  },
  {
    q: "Where do you depart from?",
    a: "All trips depart from Stock Island Marina, Key West, FL 33040 — just minutes from downtown Key West.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function HomePage() {
  return (
    <Layout>
      <SEO schema={schema} />
      <SEO schema={faqSchema} />

      {/* Hero */}
      <section className="relative bg-blue-900 text-white text-center py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Key West Fishing Charters &amp; Eco Tours
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            USCG licensed captain. 20+ years on the water. Departing daily from Stock Island Marina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13055550000"
              className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-lg"
            >
              Call to Book: (305) 555-0000
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors text-lg"
            >
              View Trips
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Our Charter Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ href, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="group block border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 h-48 flex items-center justify-center text-blue-400 text-sm">
                [Photo: {title}]
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
                <span className="mt-3 inline-block text-blue-700 font-semibold text-sm">
                  Learn more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Always Late Charters?</h2>
          <p className="text-gray-600 mb-10 text-lg">
            We&apos;re always late leaving the dock — because we take time to make sure everything is perfect
            before we go.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            {[
              { title: "20+ Years Experience", body: "Captain [Name] has fished Key West waters his entire life and knows every hotspot." },
              { title: "USCG Licensed & Insured", body: "Full compliance with all US Coast Guard requirements. Your safety is our first priority." },
              { title: "All Gear Included", body: "Rods, tackle, bait, ice, and cleaning are all included. Just bring yourself." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-blue-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border-b pb-5">
              <dt className="font-semibold text-blue-900 text-lg mb-1">{q}</dt>
              <dd className="text-gray-600">{a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Hit the Water?</h2>
        <p className="text-blue-100 text-lg mb-8">
          Call or text to check availability and book your Key West charter today.
        </p>
        <a
          href="tel:+13055550000"
          className="bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-lg text-xl hover:bg-yellow-300 transition-colors"
        >
          (305) 555-0000
        </a>
      </section>
    </Layout>
  );
}
