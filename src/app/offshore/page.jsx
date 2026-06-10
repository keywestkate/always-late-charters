'use client';

import { useState } from 'react';
import Script from 'next/script';
import SchemaMarkup from '@/components/SEO';

// FAQPage JSON-LD — parsed directly by Google AI Overviews, Perplexity, and ChatGPT browsing
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does an offshore fishing charter in Marathon FL cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Offshore fishing charters in Marathon, FL with Always Late Charters range from approximately $950 for a half-day trip to $1,850 for a full-day Gulf Stream adventure. Pricing covers up to 6 passengers and includes all rods, reels, tackle, bait, ice, and fish cleaning. No fishing license is required — our federal charter permit covers all passengers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for offshore fishing in the Florida Keys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Florida Keys offer exceptional offshore fishing year-round, but peak seasons vary by species. Mahi-Mahi (Dolphin) run strongest from March through July, often schooling under floating weed lines in the Gulf Stream. Wahoo peak in the fall and winter months. Sailfish are most active from November through April. Yellowfin and Blackfin Tuna are available throughout the year, with concentrations near the reef edge in cooler months. There is genuinely no bad month to fish offshore out of Marathon.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a half-day and full-day offshore charter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A half-day offshore charter (approximately 5 hours) covers 10–20 miles offshore, targeting nearshore pelagics like Blackfin Tuna, Kingfish, and Mahi-Mahi near the reef edge. It is ideal for families, first-time offshore anglers, or groups with limited time. A full-day charter (8–10 hours) pushes 30–50 miles into the true Gulf Stream, where Blue Marlin, Sailfish, Wahoo, and Yellowfin Tuna are consistently found. Serious anglers targeting trophy billfish should always choose the full-day option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is offshore fishing in the Florida Keys good for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Captain Lucas Ponzoa has guided hundreds of first-time offshore anglers and is known for his patient, encouraging teaching style. All gear is provided, and Captain Lucas will walk you through every step — from how to hold the rod to fighting and landing the fish. Many of our most loyal repeat customers caught their first-ever offshore fish on an Always Late Charters trip. The half-day trip is the recommended starting point for beginners.',
      },
    },
  ],
};

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-blue-300 text-blue-600 text-sm font-bold transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 bg-white text-gray-600 leading-relaxed text-sm">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function OffshoreFishingPage() {
  return (
    <>
      {/* Page-level schema: FishingCharter + FAQPage */}
      <SchemaMarkup pageType="FishingCharter" />
      <Script
        id="faq-schema-offshore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 0) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* ── Hero ── */}
        <header className="mb-10">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
            Marathon, Florida Keys
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Offshore Fishing Charters in Marathon, FL
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Captain Lucas Ponzoa runs offshore trips from Captain Hook's Marina directly into the
            Gulf Stream — one of the most productive stretches of blue water on the Atlantic
            seaboard. Whether you're chasing your first Mahi-Mahi or hunting a blue-water Marlin,
            this is the trip that earns the story.
          </p>
        </header>

        {/* ── Main Copy ── */}
        <section className="prose prose-gray lg:prose-lg max-w-none mb-12">

          <h2>The Gulf Stream: Why Marathon Offshore Is World-Class</h2>
          <p>
            The Gulf Stream — the powerful, warm-water current that runs northeast along the edge of
            the Florida Reef Tract — passes closer to the Florida Keys than anywhere else on the
            Eastern Seaboard. From Marathon, Captain Lucas can reach the Stream's productive edge in
            under an hour on a full-day trip. That proximity is the foundation of everything that
            makes offshore fishing in the Middle Keys exceptional.
          </p>
          <p>
            The Stream acts as a biological conveyor belt. It concentrates baitfish, floats in
            miles of Sargassum weed lines that become feeding stations for pelagic predators, and
            creates sharp temperature breaks where warm and cool water collide. These are the zones
            where Mahi-Mahi, Tuna, and Wahoo stack up — and where Captain Lucas has spent more than
            two decades learning every subtle shift in current and color that signals a productive
            day.
          </p>

          <h2>Target Species: What You're Fishing For</h2>

          <h3>Mahi-Mahi (Dolphinfish)</h3>
          <p>
            Mahi are the signature offshore species of the Florida Keys, and for good reason — they
            are spectacularly beautiful, aggressively acrobatic when hooked, and exceptional table
            fare. They school under floating weed lines and debris throughout spring and early
            summer, and a single hot weed line can produce double and triple hookups. Mahi in the
            Gulf Stream off Marathon routinely run 10–30 pounds, with bull Mahi exceeding 50 pounds
            caught on full-day trips pushing well offshore.
          </p>

          <h3>Wahoo</h3>
          <p>
            Wahoo are the speed demons of the offshore world — capable of bursts exceeding 60 mph —
            and they are among the most prized catches in the Florida Keys. They respond best to
            high-speed trolling presentations along temperature breaks and reef edges, typically in
            the fall and winter months when water temperatures drop slightly at the surface. A
            Wahoo bite is sudden and violent: the reel screams, the rod doubles over, and the fish
            makes a searing run that tests every knot in the system.
          </p>

          <h3>Yellowfin & Blackfin Tuna</h3>
          <p>
            Both Yellowfin and Blackfin Tuna inhabit the offshore waters around Marathon year-round.
            Blackfin are more commonly encountered on shorter trips near the reef edge, running
            5–20 pounds and providing exceptional light-tackle sport. Yellowfin push larger —
            30–100+ pounds on full-day trips into deep water — and their speed, strength, and
            endurance make them one of the most demanding gamefish in the ocean. On a good day, a
            school of feeding Yellowfin near a weed line will produce some of the most exciting
            fishing you will ever experience.
          </p>

          <h3>Sailfish & Blue Marlin</h3>
          <p>
            The Florida Keys hosts one of the most consistent Sailfish fisheries on the Atlantic
            coast, with peak action from November through April. Sailfish are predominantly
            catch-and-release, known for their tail-walking jumps and sustained aerial display
            once hooked. Blue Marlin — the ultimate offshore trophy — are targeted on full-day trips
            into deep blue water with large rigged baits and lures. Hookups are not guaranteed, but
            when a Blue Marlin comes up on a teaser and commits to the bait, it is a moment that
            offshore anglers spend their whole lives chasing.
          </p>

          <h2>Half-Day vs. Full-Day: Which Trip Is Right for You?</h2>
          <p>
            The most common question we get from first-time offshore customers is which trip length
            to choose. The answer depends on your goals, your group, and how far into the blue
            water you want to go.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-6 my-8">
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">~5 Hours</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Half-Day Offshore</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">✓</span>10–20 miles offshore</li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">✓</span>Reef edge & nearshore Gulf Stream</li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">✓</span>Blackfin Tuna, Mahi, Kingfish</li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">✓</span>Best for families & first-timers</li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">✓</span>Up to 6 passengers</li>
              </ul>
              <p className="mt-4 text-2xl font-extrabold text-blue-700">From $950</p>
            </div>
            <div className="border-2 border-blue-600 rounded-xl p-6 relative">
              <span className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">~10 Hours</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Day Offshore</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">✓</span>30–50 miles offshore</li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">✓</span>True Gulf Stream blue water</li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">✓</span>Mahi, Wahoo, Yellowfin Tuna, Sailfish, Marlin</li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">✓</span>Best for serious & experienced anglers</li>
                <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">✓</span>Up to 6 passengers</li>
              </ul>
              <p className="mt-4 text-2xl font-extrabold text-blue-700">From $1,850</p>
            </div>
          </div>

          {/* E-E-A-T callout */}
          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 my-8">
            <p className="text-sm text-gray-700 leading-relaxed m-0">
              <strong className="text-blue-900">Guided by 20+ years of local expertise.</strong>{' '}
              Captain Lucas Ponzoa is a 3rd-generation Florida Keys fisherman holding a USCG OUPV
              License. He monitors sea surface temperature charts, current reports, and live bait
              conditions every morning before departure — and he adjusts the plan in real time to
              put you on the best bite available that day.
            </p>
          </div>

          <h2>What's Included on Every Offshore Trip</h2>
          <p>
            Always Late Charters offshore trips are fully outfitted — no hidden costs, no gear
            rentals. Every booking includes heavy-duty offshore rods and reels, premium terminal
            tackle, rigged ballyhoo, live bait when available, trolling lures, ice, fish cleaning
            and bagging at the dock, and fuel. No fishing license is required for any passenger.
            We ask that you bring your own food, beverages, sunscreen, and a hat. Trips depart
            from Captain Hook's Marina at 11800 Overseas Hwy, Marathon, FL 33050.
          </p>

        </section>

        {/* ── FAQ Accordion ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Offshore Fishing FAQs
          </h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item) => (
              <AccordionItem
                key={item.name}
                question={item.name}
                answer={item.acceptedAnswer.text}
              />
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-blue-900 text-white rounded-2xl px-8 py-10 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Hit the Gulf Stream?</h2>
          <p className="text-blue-200 mb-6 text-sm">
            Call or text Captain Lucas to check availability. Trips book fast in peak season.
          </p>
          <a
            href="tel:+1-305-394-1582"
            className="inline-block bg-yellow-400 text-blue-900 font-extrabold px-10 py-4 rounded-xl text-lg hover:bg-yellow-300 transition-colors"
          >
            Call to Book — (XXX) XXX-XXXX {/* ⚠️ PLACEHOLDER_PHONE */}
          </a>
          <p className="text-blue-300 text-xs mt-4">
            Captain Hook's Marina · 11800 Overseas Hwy · Marathon, FL 33050
          </p>
        </section>

      </main>
    </>
  );
}
