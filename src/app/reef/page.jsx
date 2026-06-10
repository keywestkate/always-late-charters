'use client';

import { useState } from 'react';
import Script from 'next/script';
import SchemaMarkup from '@/components/SEO';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between reef fishing and wreck fishing in the Florida Keys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reef fishing targets fish living on and around the natural coral structures of the Florida Reef Tract — primarily Yellowtail Snapper, Mangrove Snapper, and Hogfish in 15–60 feet of water. Wreck fishing targets fish using artificial or historic shipwrecks as habitat, typically in 60–120 feet. Wrecks concentrate larger Grouper, Amberjack, and Snapper in extraordinary numbers because the structure creates a complete ecosystem. Always Late Charters combines both on most trips, reading conditions each day to maximize your catch.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fish can you catch reef fishing in Marathon, FL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Florida Reef Tract off Marathon produces Yellowtail Snapper, Mangrove Snapper, Mutton Snapper, Black Grouper, Gag Grouper, Hogfish, Amberjack, Cobia, Permit, and Flounder. Species availability varies by season and depth. Yellowtail Snapper are present year-round in large numbers. Hogfish are most active in cooler months. Grouper seasons are regulated by FWC, and Captain Lucas stays current on all closures to ensure every trip fishes legally within open seasons.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is reef fishing good for beginners and families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reef and wreck fishing is one of the best charter options for beginners and families. The inshore and nearshore reef waters around Marathon are calmer than the open ocean, seasickness risk is lower, and the fish bite steadily throughout the trip. Yellowtail Snapper in particular are aggressive, plentiful biters that provide exciting action on light tackle for anglers of any age. Captain Lucas provides patient instruction for first-timers and sizes tackle to the angler.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a fishing license for a reef charter in the Florida Keys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Always Late Charters operates under a federal charter vessel fishing permit, which covers all passengers on board. You do not need a personal saltwater fishing license for any trip. Captain Lucas also handles all size and bag limit compliance in real time — you focus on fishing, he handles the regulations.',
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

export default function ReefFishingPage() {
  return (
    <>
      <SchemaMarkup pageType="FishingCharter" />
      <Script
        id="faq-schema-reef"
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
            Reef & Wreck Fishing Charters in Marathon, FL
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            The Florida Reef Tract runs the entire length of the Keys and is the third-largest
            barrier reef system in the world. Captain Lucas Ponzoa has fished every ledge, coral
            head, and shipwreck off Marathon for over 20 years — and he puts you directly on the fish.
          </p>
        </header>

        {/* ── Main Copy ── */}
        <section className="prose prose-gray lg:prose-lg max-w-none mb-12">

          <h2>Reef Fishing vs. Wreck Fishing: Understanding the Difference</h2>
          <p>
            Many anglers use the terms interchangeably, but reef fishing and wreck fishing are
            distinct experiences that produce different species, require different techniques, and
            operate at different depths. Understanding the difference helps you choose the right
            trip — and Captain Lucas combines both on most charters, rotating between structure
            types based on what the fish are doing that day.
          </p>
          <p>
            <strong>Reef fishing</strong> targets the natural coral structure of the Florida Reef
            Tract, which runs roughly parallel to the Keys in 15–60 feet of water. The reef is a
            living ecosystem — every ledge, coral head, and rocky bottom holds fish. Yellowtail
            Snapper, Mangrove Snapper, Hogfish, and smaller Grouper species dominate the reef in
            the 20–50 foot range. The reef is accessible on half-day trips and is ideal for
            anglers who want steady, varied action with species that are exceptional table fare.
          </p>
          <p>
            <strong>Wreck fishing</strong> targets artificial and historic shipwrecks in 60–120
            feet of water. Wrecks create an entirely self-contained habitat — baitfish move in,
            larger predators follow, and over time the wreck becomes a thriving ecosystem stacked
            with fish at every depth layer. The USS Thunderbolt, deliberately sunk off Marathon
            as an artificial reef, is one of the most productive wreck sites in the Middle Keys.
            A single wreck can hold hundreds of Snapper and Grouper, along with roaming schools
            of Amberjack and occasional Cobia cruising the upper water column.
          </p>

          <h2>Fishing Techniques: How We Target Reef & Wreck Species</h2>

          <h3>Chumming for Yellowtail Snapper</h3>
          <p>
            Yellowtail Snapper are the most abundant and reliably catchable species on the
            Florida reef, and chumming is the key to maximizing them. Captain Lucas deploys a
            steady chum slick — a mixture of ground-up baitfish released slowly into the current —
            to pull Yellowtail up from the bottom and into the water column. Once the chum is
            working, the school suspends in the slick and competes aggressively for food. Light
            spinning tackle with small hooks and fresh shrimp or cut bait is deadly in this
            setup. On a hot chum slick, it is realistic to catch 20–40 Yellowtail in an afternoon,
            and they are some of the finest eating fish in the ocean.
          </p>

          <h3>Bottom Fishing for Grouper & Hogfish</h3>
          <p>
            Grouper and Hogfish require a different approach — heavier gear worked tight to the
            bottom, where these fish live in and around structure. We use egg sinkers or bank
            sinkers to keep baits pinned to the seafloor, with whole live pinfish, grunt, or cut
            squid presented directly on or next to the ledge edge. Grouper are ambush predators
            with one instinct when hooked: drive straight back into the structure. The fight is
            a controlled power struggle — you have to turn the fish immediately and keep it moving
            away from the reef before it finds a rock to wrap the line around. Hogfish, prized
            by chefs across the Keys for their sweet, clean flesh, are caught on the same
            bottom rigs using slow presentations near sandy patches adjacent to hard bottom.
          </p>

          <h3>Live-Baiting for Amberjack & Cobia</h3>
          <p>
            Greater Amberjack are the bullies of the wreck ecosystem — large, powerful, and
            relentless fighters that test both angler and tackle. They respond best to live bait
            dropped to mid-water column over deep structure. Captain Lucas keeps a live well
            stocked with pilchards, goggle eyes, and blue runners specifically for Amberjack and
            Cobia presentations. Cobia — a pelagic species that frequently associates with wrecks
            and reef structure — are sometimes spotted cruising visually near the surface and can
            be targeted with a pitched live bait from the top deck. A 40-pound Cobia on medium
            spinning tackle is one of the most satisfying fights available in the Florida Keys.
          </p>

          {/* E-E-A-T callout */}
          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 my-8">
            <p className="text-sm text-gray-700 leading-relaxed m-0">
              <strong className="text-blue-900">Local knowledge that cannot be replicated.</strong>{' '}
              Captain Lucas Ponzoa grew up fishing these exact reefs and wrecks. He knows which
              specific coral heads hold Hogfish in the winter, which wreck produces the biggest
              Grouper in summer, and how the current shift at each tide affects where the Yellowtail
              stack up. That institutional knowledge — built over 20+ years and passed down through
              three generations of Florida Keys fishing — is what you are booking when you choose
              Always Late Charters.
            </p>
          </div>

          <h2>Species Breakdown & Seasonal Availability</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Species</th>
                  <th className="text-left px-4 py-3 font-semibold">Depth</th>
                  <th className="text-left px-4 py-3 font-semibold">Best Season</th>
                  <th className="text-left px-4 py-3 font-semibold">Technique</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ['Yellowtail Snapper', '20–60 ft', 'Year-round', 'Chumming, light tackle'],
                  ['Mangrove Snapper', '20–80 ft', 'Year-round', 'Bottom fishing, live shrimp'],
                  ['Black & Gag Grouper', '60–120 ft', 'Open seasons vary', 'Heavy bottom, live bait'],
                  ['Hogfish', '30–80 ft', 'Oct–Mar peak', 'Slow bottom, cut squid'],
                  ['Greater Amberjack', '80–120 ft', 'Year-round', 'Live bait, jigging'],
                  ['Cobia', '40–100 ft', 'Spring & Fall', 'Live bait, sight fishing'],
                  ['Mutton Snapper', '40–100 ft', 'Spring–Summer', 'Live pinfish, bottom'],
                ].map(([species, depth, season, technique]) => (
                  <tr key={species} className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{species}</td>
                    <td className="px-4 py-3 text-gray-600">{depth}</td>
                    <td className="px-4 py-3 text-gray-600">{season}</td>
                    <td className="px-4 py-3 text-gray-600">{technique}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What's Included on Every Reef & Wreck Trip</h2>
          <p>
            All rods, reels, and terminal tackle are provided and pre-rigged for the specific
            species and depth we are targeting. Live bait is caught fresh each morning before
            departure. Ice, fish cleaning, and bagging are included at no additional cost. No
            fishing license is required for any passenger. Trips depart from Captain Hook's
            Marina at 11800 Overseas Hwy, Marathon, FL 33050.
          </p>

        </section>

        {/* ── FAQ Accordion ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Reef & Wreck Fishing FAQs
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
          <h2 className="text-2xl font-bold mb-2">Book Your Reef & Wreck Charter</h2>
          <p className="text-blue-200 mb-6 text-sm">
            Call or text Captain Lucas to check availability. Half-day and full-day options available.
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
