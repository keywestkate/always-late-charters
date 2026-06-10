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
      name: 'What wildlife can you see on a Florida Keys eco tour near Marathon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The backcountry waters around Marathon are home to Bottlenose Dolphins, West Indian Manatees, Loggerhead and Green Sea Turtles, American Crocodiles, Roseate Spoonbills, Great White Herons, Osprey, Bald Eagles, and Magnificent Frigatebirds. In the shallows, guests regularly spot Tarpon, Bonefish, Southern Stingrays, and large Starfish on the seagrass flats. Wildlife sightings depend on season and conditions, but dolphin encounters in the channels around Marathon are extremely common year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a sandbar trip in the Florida Keys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sandbar trip is a backcountry boat excursion to one of the remote, shallow sandbars that emerge from the Gulf side of the Florida Keys. Guests anchor the boat and wade in crystal-clear, knee-deep water surrounded by open ocean. Sandbars are ideal for swimming, snorkeling, wildlife watching, and simply relaxing in one of the most beautiful natural settings in the United States. Captain Lucas navigates to the most scenic and wildlife-rich sandbars in the Middle Keys on every trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are eco tours in Marathon good for non-fishing guests and families with young children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eco tours are specifically designed for non-fishing guests and are one of the best activities in the Florida Keys for families with young children. The backcountry waters are calm and shallow, seasickness risk is minimal, and the experience is entirely focused on nature, wildlife, and exploration rather than fishing. Children love wading on the sandbars, spotting sea turtles, and watching dolphins follow the boat through the channels. No fishing experience or equipment is needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long are eco tours and sandbar trips out of Marathon, FL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard eco tours and sandbar excursions run approximately 3–4 hours, which is enough time to explore multiple backcountry locations, spend 45–60 minutes wading and swimming at a sandbar, and observe wildlife along the route. Private full-day backcountry explorations can be arranged for groups wanting a more immersive experience. All trips depart from Captain Hook\'s Marina at 11800 Overseas Hwy, Marathon, FL 33050.',
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
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-green-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-green-400 text-green-600 text-sm font-bold transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
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

export default function EcoToursPage() {
  return (
    <>
      {/* TouristTrip schema — as specified in the proposal for this page */}
      <SchemaMarkup pageType="TouristTrip" />
      <Script
        id="faq-schema-eco-tours"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 0) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* ── Hero ── */}
        <header className="mb-10">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-widest mb-2">
            Marathon, Florida Keys
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Florida Keys Eco Tours & Sandbar Trips — Marathon, FL
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            The backcountry of the Florida Keys is one of the most ecologically rich marine
            environments in North America — and most visitors never see it. Captain Lucas Ponzoa
            has spent over 20 years exploring every channel, flat, and hidden sandbar in the
            Middle Keys. This is the trip that shows you the real Florida Keys.
          </p>
        </header>

        {/* ── Main Copy ── */}
        <section className="prose prose-gray lg:prose-lg max-w-none mb-12">

          <h2>The Florida Keys Backcountry: A World Most Visitors Miss</h2>
          <p>
            From US-1, the Florida Keys look like a thin strip of land between the Atlantic and
            the Gulf of Mexico. What that view hides is an enormous, intricate wilderness stretching
            northward into Florida Bay — thousands of acres of seagrass meadows, tidal flats,
            ancient mangrove islands, and shallow Gulf-side sandbars that form one of the most
            biodiverse marine ecosystems on the planet. This is the Florida Keys backcountry, and
            it is Captain Lucas Ponzoa's home water.
          </p>
          <p>
            Eco tours and sandbar trips are not a secondary offering at Always Late Charters —
            they are a primary passion. Captain Lucas navigates the backcountry channels and
            tidal cuts of the Middle Keys with the fluency of someone who grew up here, reading
            the water the way others read a map. Every route is chosen the morning of the trip
            based on tides, wind, and where the wildlife has been most active. No two eco tours
            follow exactly the same path, which means repeat guests consistently encounter
            something new.
          </p>

          <h2>Marine Wildlife of the Marathon Backcountry</h2>

          <h3>Bottlenose Dolphins</h3>
          <p>
            Bottlenose Dolphins are the undisputed highlight of most eco tours, and the
            backcountry channels around Marathon are among the most reliable places in Florida
            to observe them in their natural environment. Pods of 4–12 dolphins regularly work
            the tidal channels, driving baitfish against the surface and feeding cooperatively
            in a coordinated display that is genuinely breathtaking to watch from 20 feet away.
            Dolphins frequently approach the boat with apparent curiosity, riding the bow wake
            and surfacing alongside guests along the gunwale. These are wild, free animals —
            encounters cannot be guaranteed — but they are common enough that most eco tours
            involve at least one sighting.
          </p>

          <h3>West Indian Manatees</h3>
          <p>
            West Indian Manatees — large, slow-moving marine mammals that graze on seagrass —
            are commonly spotted on eco tours in the warmer months from April through October.
            Marathon's shallow grass flats are prime Manatee habitat, and Captain Lucas knows
            the specific areas where they congregate near warm-water outflows and dense seagrass
            beds. Manatees surface every few minutes to breathe, creating visible ripples and
            distinctive snout shapes that Captain Lucas can spot from a distance. Watching a
            Manatee graze slowly through crystal-clear water in the undisturbed silence of the
            backcountry is a genuinely moving wildlife experience.
          </p>

          <h3>Sea Turtles</h3>
          <p>
            Three species of sea turtle inhabit the waters around Marathon: Loggerhead, Green,
            and Hawksbill. Loggerheads are the most frequently encountered, surfacing in the
            open backcountry and nearshore waters to breathe. Green Turtles are more commonly
            spotted in the shallow seagrass flats where they feed on turtle grass. The Florida
            Keys is one of the most important sea turtle nesting areas in the United States,
            and the species have recovered significantly under federal protection — sightings
            on eco tours are regular, not rare. Captain Lucas maintains respectful distance
            from all turtles and educates guests on the conservation protections in place.
          </p>

          <h3>Birds of the Backcountry</h3>
          <p>
            The mangrove islands and tidal flats of the Middle Keys backcountry host an
            extraordinary diversity of bird life. Roseate Spoonbills — unmistakable for their
            vivid pink plumage and spatula-shaped bill — wade the shallows in small flocks.
            Great White Herons, found only in the Florida Keys, stand statuesque in the
            mangrove edges. Osprey dive for fish with pinpoint accuracy throughout the day.
            Bald Eagles nest on several backcountry islands visible from the water. Magnificent
            Frigatebirds — prehistoric-looking birds with a seven-foot wingspan — soar in
            thermals overhead. For birders, a single eco tour through the Marathon backcountry
            can produce 15–25 species in a morning.
          </p>

          <h2>Sandbar Excursions: The Florida Keys' Best Kept Secret</h2>
          <p>
            The Gulf side of the Middle Keys is studded with remote sandbars — shallow, white-sand
            banks that sit in otherwise open water, surrounded by knee-deep crystal-clear flats
            that stretch to the horizon. Captain Lucas navigates to these sandbars through
            backcountry channels that most boaters never find, and the result is a feeling of
            complete isolation in one of the most beautiful natural settings in the continental
            United States.
          </p>
          <p>
            At the sandbar, guests wade, swim, and snorkel at their own pace. The shallow water
            over the surrounding seagrass is alive — Southern Stingrays glide past in inches of
            water, Starfish dot the sandy bottom, small reef fish dart through the grass, and
            Horseshoe Crabs move slowly along the flat. Snorkeling equipment is available on
            request for guests who want to explore below the surface. Children particularly love
            the freedom of wading in warm, calm, perfectly clear water with wildlife all around
            them — it is the Florida Keys experience that resort pools cannot replicate.
          </p>

          {/* E-E-A-T callout */}
          <div className="not-prose bg-green-50 border-l-4 border-green-500 rounded-r-lg p-5 my-8">
            <p className="text-sm text-gray-700 leading-relaxed m-0">
              <strong className="text-green-900">A naturalist guide, not just a boat captain.</strong>{' '}
              Captain Lucas Ponzoa has spent his entire life in the Florida Keys ecosystem. On
              eco tours, he acts as an informal naturalist guide — identifying species, explaining
              behaviors, sharing the ecological history of the backcountry, and pointing out
              wildlife that untrained eyes would miss entirely. His knowledge of this environment
              is the kind that cannot come from a book or a training course. It comes from 20+
              years on the water, three generations deep.
            </p>
          </div>

          <h2>What to Bring & What's Included</h2>
          <p>
            Every eco tour includes life jackets for all ages, snorkeling equipment on request,
            and Captain Lucas's full narration and wildlife guidance throughout. We ask guests to
            bring reef-safe sunscreen (conventional sunscreen damages coral and is discouraged
            in the Florida Keys), polarized sunglasses for better wildlife viewing, water shoes
            or sandals you can get wet, a towel, snacks, and plenty of drinking water. A camera
            or phone in a waterproof case is strongly recommended — you will want it. Trips
            depart from Captain Hook's Marina at 11800 Overseas Hwy, Marathon, FL 33050.
          </p>

        </section>

        {/* ── Wildlife Quick-Reference ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Wildlife You May Encounter</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { name: 'Bottlenose Dolphins', season: 'Year-round' },
              { name: 'West Indian Manatees', season: 'Apr–Oct peak' },
              { name: 'Loggerhead Sea Turtles', season: 'Year-round' },
              { name: 'Green Sea Turtles', season: 'Year-round' },
              { name: 'Roseate Spoonbills', season: 'Year-round' },
              { name: 'Bald Eagles', season: 'Oct–Apr peak' },
              { name: 'Southern Stingrays', season: 'Year-round' },
              { name: 'Tarpon & Bonefish', season: 'Spring–Fall' },
              { name: 'American Crocodiles', season: 'Spring–Summer' },
            ].map(({ name, season }) => (
              <div key={name} className="bg-green-50 border border-green-100 rounded-lg px-4 py-3">
                <p className="font-semibold text-gray-900 text-sm leading-snug">{name}</p>
                <p className="text-green-700 text-xs mt-0.5">{season}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ Accordion ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Eco Tour & Sandbar Trip FAQs
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
        <section className="bg-green-900 text-white rounded-2xl px-8 py-10 text-center">
          <h2 className="text-2xl font-bold mb-2">Book an Eco Tour or Sandbar Trip</h2>
          <p className="text-green-200 mb-6 text-sm">
            Perfect for families, couples, and non-fishing guests. Call Captain Lucas to check availability.
          </p>
          <a
            href="tel:+1-305-394-1582"
            className="inline-block bg-yellow-400 text-green-900 font-extrabold px-10 py-4 rounded-xl text-lg hover:bg-yellow-300 transition-colors"
          >
            Call to Book — (XXX) XXX-XXXX {/* ⚠️ PLACEHOLDER_PHONE */}
          </a>
          <p className="text-green-300 text-xs mt-4">
            Captain Hook's Marina · 11800 Overseas Hwy · Marathon, FL 33050
          </p>
        </section>

      </main>
    </>
  );
}
