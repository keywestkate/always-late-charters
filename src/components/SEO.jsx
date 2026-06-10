import Script from 'next/script';

/**
 * Injects JSON-LD structured data for Always Late Charters.
 *
 * Placeholders to find-and-replace before going live:
 *   ⚠️  PLACEHOLDER_PHONE     → +1-305-394-1582
 *   ⚠️  PLACEHOLDER_TRIPADVISOR → https://www.tripadvisor.com/placeholder-your-future-listing
 *
 * Usage:
 *   <SchemaMarkup />                          — LocalBusiness (default, used in root layout)
 *   <SchemaMarkup pageType="FishingCharter" /> — service pages
 *   <SchemaMarkup pageType="TouristTrip" />   — eco tours page
 */

const BUSINESS = {
  name: 'Always Late Charters',
  url: 'https://www.alwayslatecharters.com',
  telephone: '+13057432444',
  priceRange: '$$$',
  image: 'https://www.alwayslatecharters.com/assets/boat-photo.jpg',
  description:
    'Professional fishing charter service operated by Captain Lucas Ponzoa, a USCG-licensed OUPV guide and 3rd-generation Florida Keys fisherman with 20+ years of experience, departing from Captain Hook\'s Marina in Marathon, FL.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "Captain Hook's Marina, 11800 Overseas Hwy",
    addressLocality: 'Marathon',
    addressRegion: 'FL',
    postalCode: '33050',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '24.7248',
    longitude: '-81.0414',
  },
  founder: {
    '@type': 'Person',
    name: 'Captain Lucas Ponzoa',
    jobTitle: 'USCG-Licensed OUPV Guide',
    description:
      '3rd-generation Florida Keys fisherman with over 20 years of local marine experience.',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '42',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://fishingbooker.com/charters/view/always-late-charters',
    'https://www.facebook.com/alwayslatecharters',
    'https://www.instagram.com/alwayslatecharters',
    'https://www.tripadvisor.com/placeholder-your-future-listing', // ⚠️ PLACEHOLDER_TRIPADVISOR
  ],
};

export default function SchemaMarkup({ pageType = 'LocalBusiness' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': pageType,
    '@id': 'https://www.alwayslatecharters.com/#charter',
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    priceRange: BUSINESS.priceRange,
    image: BUSINESS.image,
    description: BUSINESS.description,
    address: BUSINESS.address,
    geo: BUSINESS.geo,
    founder: BUSINESS.founder,
    aggregateRating: BUSINESS.aggregateRating,
    sameAs: BUSINESS.sameAs,
  };

  return (
    <Script
      id="schema-org-graph"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
