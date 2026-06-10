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
      name: 'What is the minimum age for a family fishing charter in Marathon, FL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Always Late Charters welcomes children of all ages on family fishing trips. Toddlers and young children enjoy the boat ride, the wildlife sightings, and watching the action — no fishing required. Children aged 5 and up can typically hold a rod and reel in fish with guidance from Captain Lucas. He provides kid-sized tackle and adjusts the pace, depth, and technique to match what each child can handle comfortably and confidently.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you prevent seasickness on a family fishing charter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Family fishing trips with Always Late Charters stay in the calmer nearshore and inshore waters around Marathon, which significantly reduces motion sickness risk compared to offshore trips. For additional prevention, we recommend taking non-drowsy Dramamine (Dimenhydrinate) or Bonine (Meclizine) the night before AND the morning of the trip — not just the morning of. Avoid heavy meals, alcohol, and greasy food for 12 hours before departure. Stay on the rear deck where motion is least pronounced, keep eyes on the horizon, and avoid reading or looking at a phone. Ginger chews and wristbands (Sea-Bands) provide additional non-pharmaceutical support for sensitive guests.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to bring fishing gear for my kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Always Late Charters provides all rods, reels, tackle, and bait for every passenger on every trip — including kid-sized gear sized for smaller hands and lighter fights. You do not need to purchase, rent, or bring any fishing equipment. Just bring your family. Fish cleaning and bagging at the dock are also included at no additional cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fish will my kids catch on a family charter in the Florida Keys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Family trips target the most reliably active and kid-friendly species in the nearshore waters around Marathon. Mangrove Snapper and Yellowtail Snapper bite readily and fight energetically on light tackle — perfect for building a young angler\'s confidence. Grunts, Porgies, and small Grouper provide steady action throughout the trip. When conditions allow, Captain Lucas also works the flats for Flounder and moves to the reef edge for larger Snapper and Jack Crevalle. Every fish is a celebration regardless of size.',
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
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-yellow-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-yellow-400 text-yellow-600 text-sm font-bold transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
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

export default function FamilyFishingPage() {
  return (
    <>
      <SchemaMarkup pageType="FishingCharter" />
      <Script
        id="faq-schema-family"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 0) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* ── Hero ── */}
        <header className="mb-10">
          <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest mb-2">
            Marathon, Florida Keys
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Family Fishing Charters in Marathon, FL
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Captain Lucas Ponzoa has a gift for turning a child's first fishing experience into a
            memory that lasts decades. Kid-friendly tackle, patient teaching, calm water, and
            steady action — family charters are some of our favorite trips to run.
          </p>
        </header>

        {/* ── Main Copy ── */}
        <section className="prose prose-gray lg:prose-lg max-w-none mb-12">

          <h2>Built for Families, Not Just Anglers</h2>
          <p>
            Most fishing charter operations are optimized for experienced anglers. Always Late
            Charters family trips are deliberately different. Everything about the experience —
            the water we fish, the tackle we use, the pace of the day, the way Captain Lucas
            communicates with kids on board — is designed around one goal: making sure every
            person in your family has the time of their life on the water.
          </p>
          <p>
            Family trips stay in the nearshore and inshore waters close to Marathon, where the
            boat ride is short and the water is calmer than the open ocean. We target species
            that bite readily and fight energetically on light tackle — the kind of fish that
            produce screaming reels and genuine excitement for a seven-year-old without requiring
            the arm strength of an adult to land. We slow the day down, celebrate every single
            catch no matter the size, and leave plenty of time for watching the wildlife,
            getting a hand in the water, and simply being out on the ocean together.
          </p>

          <h2>How Captain Lucas Works with Kids</h2>
          <p>
            Captain Lucas Ponzoa has spent 20+ years on the water and guided hundreds of children
            through their first fishing experience. His approach is consistent: meet each kid
            exactly where they are, move at their pace, and keep the focus relentlessly on fun.
            For a five-year-old, that might mean holding the rod together and counting down to
            the bite. For a twelve-year-old who wants to learn, it means teaching the full
            sequence — reading the current, feeling the bottom, identifying the nibble, setting
            the hook, and working the fish to the boat. Captain Lucas reads the room immediately
            and adapts without being asked.
          </p>
          <p>
            He is also genuinely good at keeping kids engaged between bites. The waters around
            Marathon are full of wildlife — Pelicans dive-bombing baitfish, Dolphins cruising
            the channel edges, Manatees surfacing in the grass flats — and Captain Lucas points
            out everything he sees, turning quiet moments into informal nature lessons that kids
            find more interesting than any aquarium exhibit.
          </p>

          <h2>Seasickness Prevention: What Actually Works</h2>
          <p>
            Seasickness is the most common concern parents have before booking a charter, and it
            is a completely reasonable one — a nauseous child will not have fun, and neither will
            anyone else on the boat. The good news: family trips on Always Late Charters stay
            in protected, calmer water that dramatically reduces motion sickness risk. The better
            news: with the right preparation, the risk drops further still.
          </p>

          <div className="not-prose bg-yellow-50 border border-yellow-200 rounded-xl p-6 my-6">
            <h3 className="font-bold text-gray-900 text-base mb-4">Seasickness Prevention Protocol — What We Recommend</h3>
            <ol className="space-y-3 text-sm text-gray-700 list-none m-0 p-0">
              {[
                { step: '1', title: 'Medication the night before AND the morning of', body: 'Non-drowsy Dramamine (Dimenhydrinate) or Bonine (Meclizine) taken the evening before departure gives the active ingredient time to build up in the bloodstream. Take another dose the morning of. Do not rely on medication taken only at departure — it works too slowly.' },
                { step: '2', title: 'Eat a light, bland breakfast', body: 'A small meal of toast, crackers, or oatmeal 1–2 hours before departure settles the stomach without overloading it. Avoid greasy, heavy, or acidic food. No orange juice, bacon, or eggs on charter morning.' },
                { step: '3', title: 'No alcohol the night before', body: 'Even mild dehydration from alcohol significantly increases motion sickness susceptibility. A hydrated guest on calmer inshore water is almost never a problem.' },
                { step: '4', title: 'Stay on the rear deck, eyes on the horizon', body: 'The stern of the boat moves least. Looking at the horizon gives the brain a stable visual reference that counters the inner ear\'s motion signals. Do not read, look at a phone, or stare at the floor of the boat.' },
                { step: '5', title: 'Ginger chews and Sea-Bands as backup', body: 'Ginger (chews, candies, or capsules) has genuine anti-nausea properties. Acupressure wristbands (Sea-Bands) provide an additional non-pharmaceutical layer and are well tolerated by children of all ages.' },
              ].map(({ step, title, body }) => (
                <li key={step} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-yellow-400 text-yellow-900 font-extrabold text-xs flex items-center justify-center mt-0.5">{step}</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">{title}</p>
                    <p className="text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <h2>What Your Kids Will Catch</h2>
          <p>
            Family trips target the most reliably active and appropriately sized species in the
            nearshore waters around Marathon. Mangrove Snapper and Yellowtail Snapper are the
            primary targets — they bite aggressively, fight well on light tackle, and are superb
            eating fish that kids are proud to bring home. Grunts and Porgies provide constant
            action throughout the trip, keeping young anglers engaged even when the Snapper bite
            slows. When conditions and tides align, Captain Lucas moves to the reef edge for
            larger Snapper and Jack Crevalle — powerful, fast fish that will genuinely test a
            kid's ability to hold on.
          </p>
          <p>
            Every fish is a celebration. Captain Lucas photographs every catch — the first
            Snapper, the biggest Grunt, the Puffer Fish that puffed up on deck — and sends the
            photos to parents before the boat even reaches the dock. These are the pictures that
            end up framed.
          </p>

          {/* E-E-A-T callout */}
          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 my-8">
            <p className="text-sm text-gray-700 leading-relaxed m-0">
              <strong className="text-blue-900">A 3rd-generation Keys fisherman with an instinct for teaching.</strong>{' '}
              Captain Lucas Ponzoa holds a USCG OUPV License and has over 20 years of experience
              guiding anglers of every age and skill level. His family charter reviews consistently
              note one thing above all: he is extraordinarily patient, genuinely enthusiastic about
              children catching fish, and able to make even the most nervous first-timer feel
              capable and confident within minutes of leaving the dock.
            </p>
          </div>

          <h2>What's Included & What to Bring</h2>
          <p>
            All rods, reels, tackle, and bait are included — including kid-sized gear. Ice, fish
            cleaning, and bagging at the dock are included. Life jackets in all sizes are on
            board. No fishing license is required for any passenger. Please bring reef-safe
            sunscreen, hats, snacks, plenty of drinking water, and a change of clothes for
            younger kids. Closed-toe water shoes are recommended for kids who plan to handle
            fish or who might want to step off the boat at a sandbar stop. Trips depart from
            Captain Hook's Marina at 11800 Overseas Hwy, Marathon, FL 33050.
          </p>

        </section>

        {/* ── FAQ Accordion ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Family Charter FAQs
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
          <h2 className="text-2xl font-bold mb-2">Book Your Family's Day on the Water</h2>
          <p className="text-blue-200 mb-6 text-sm">
            Half-day trips available daily. Private charter — your family only, no strangers. Call Captain Lucas to check dates.
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
