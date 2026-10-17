// JSON-LD builders shared by page components.
export const faqSchemaFrom = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

export const serviceSchema = (name, description, price) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  areaServed: 'South Africa',
  provider: {
    '@type': 'LocalBusiness',
    name: 'SkillAxis Dynamics',
    address: { '@type': 'PostalAddress', addressLocality: 'Pretoria', addressRegion: 'Gauteng', addressCountry: 'ZA' },
  },
  ...(price && { offers: { '@type': 'Offer', price, priceCurrency: 'ZAR' } }),
});
