import { useState } from 'react';
import SEO from '../common/SEO';
import proj1 from '../../assets/images/projects/project1.jpg';
import proj2 from '../../assets/images/projects/project2.jpg';
import proj3 from '../../assets/images/projects/project3.jpg';
import proj4 from '../../assets/images/projects/project4.jpg';
import proj5 from '../../assets/images/projects/project5.jpg';
import proj6 from '../../assets/images/projects/project6.jpg';
import './CaseStudiesPage.css';

const caseStudies = [
  {
    id: 1,
    image: proj1,
    category: 'Web',
    tag: 'Workshop Software',
    title: 'Turbo Workshop Management System — Stallion Turbos, Pretoria',
    client: 'Turbocharger repair workshop, Pretoria',
    problem: 'A busy turbocharger repair workshop ran job cards, parts inventory, and the wash-bay queue on paper and memory. Job status lived in people\'s heads, parts went missing, and nothing could be reported on.',
    solution: 'A full workshop management app: digital job cards with status tracking, parts inventory, and a wash-bay queue — built for tablets and phones on the workshop floor, with offline support so a connectivity drop never stops a job.',
    result: 'In production every working day for over a year. Job history, inventory, and workshop workflow all live in one system the whole team actually uses.',
    tech: ['Flutter', 'Firebase', 'Cloud Functions', 'Offline-first'],
    metric: '1+ year in daily production',
  },
  {
    id: 2,
    image: proj2,
    category: 'Web',
    tag: 'Inventory System',
    title: 'Turbocharger Parts Inventory Platform — Turbo Link',
    client: 'Turbocharger parts supplier, Gauteng',
    problem: 'A parts supplier with thousands of turbocharger components — compressor wheels, bearing kits, actuators — had no searchable, categorised inventory system. Finding whether a part was in stock meant walking the shelves.',
    solution: 'A dedicated inventory management platform: categorised catalogue, search by part attributes and dimensions, stock tracking, and browser-based access for the counter staff.',
    result: 'Live at the client and in daily use. The system now also powers their Google Ads landing pages — inventory and marketing working off the same data.',
    tech: ['Flutter', 'Firebase', 'Web deployment'],
    metric: 'Thousands of SKUs, searchable',
  },
  {
    id: 3,
    image: proj3,
    category: 'Web',
    tag: 'Google Ads',
    title: 'Google Ads That Pay For Themselves — Turbo Workshop Campaign',
    client: 'Turbocharger workshop, Pretoria',
    problem: 'A specialist workshop was invisible on Google while competitors took the calls. No campaigns, no conversion tracking, no idea what a lead cost.',
    solution: 'Search campaigns built around the services customers actually search for, with call and form conversion tracking, weekly optimisation, and monthly plain-language reporting. We manage the campaign through the official Google Ads API.',
    result: '1,271 clicks at a 5.6% click-through rate and roughly a 20% conversion rate — around R28–R34 per qualified lead. Real, verifiable campaign data.',
    tech: ['Google Ads API', 'Conversion tracking', 'Search campaigns'],
    metric: '~R28 per qualified lead',
  },
  {
    id: 4,
    image: proj4,
    category: 'Web',
    tag: 'Booking System',
    title: 'Lodge Booking & Admin Platform — Barra Cabanas, Mozambique',
    client: 'Beach lodge, Inhambane Province, Mozambique',
    problem: 'A beach lodge managed bookings, guest admin, and invoicing by hand across email and spreadsheets — slow, error-prone, and impossible to hand over between staff.',
    solution: 'A custom booking and administration platform: reservations, guest records, and invoicing in one admin system, delivered as a once-off build for the lodge\'s holding company.',
    result: 'Live and used by lodge staff every week. Delivered as a fixed-scope project — quoted, built, handed over.',
    tech: ['Next.js', 'Supabase', 'Prisma', 'Resend'],
    metric: 'Fixed-scope, delivered',
  },
  {
    id: 5,
    image: proj5,
    category: 'Engineering',
    tag: 'CAD & Patent Drawings',
    title: 'Patent Drawing Package — Mining Equipment Invention',
    client: 'Private inventor, South Africa',
    problem: 'An inventor with a patent-pending wheel-chock mechanism for mining vehicles needed his garage-built prototype turned into a manufacturable design with formal patent drawings.',
    solution: 'Complete redesign in Autodesk Inventor around catalogue components (bearings, actuators, fasteners from standard suppliers) so the product can actually be built, plus the formal drawing set for the patent process.',
    result: 'A buildable design and a formal drawing package — from a garage prototype to something a manufacturer can quote on.',
    tech: ['Autodesk Inventor', 'Patent drawings', 'Catalogue-part engineering'],
    metric: 'Prototype → manufacturable',
  },
  {
    id: 6,
    image: proj6,
    category: 'Engineering',
    tag: 'CNC & CAM',
    title: 'CNC Machine Build & Production CAM Programming',
    client: 'Turbomachinery workshop, Pretoria',
    problem: 'Precision turbocharger components needed in-house machining capability — and ongoing CAM programming to keep production parts flowing.',
    solution: 'Designed and built a working CNC machine from scratch, and run the full design-to-part chain on it: CAD in Autodesk Inventor, CAM and G-code programming, and machining of production components.',
    result: 'The machine we quote CNC work on is one we built ourselves. Design, drawings, G-code, and cut metal — one chain, one engineer.',
    tech: ['Autodesk Inventor', 'CAM / G-code', 'CNC machine build'],
    metric: 'Design-to-part, in-house',
  },
];

const categories = ['All', 'Engineering', 'Web'];

const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCase, setActiveCase] = useState(null);

  const filtered = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeCategory);

  return (
    <div className="service-page">
      <SEO
        title="Case Studies — Engineering & Digital Projects"
        description="Real results from real projects. CNC conversions, automation retrofits, web development, and brand identity work from SkillAxis Dynamics, Pretoria, South Africa."
        canonical="/case-studies"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Case Studies',
          description: 'Portfolio of engineering and digital projects by SkillAxis Dynamics, Pretoria.',
          provider: { '@type': 'LocalBusiness', name: 'SkillAxis Dynamics' },
        }}
      />

      <section className="sp-hero">
        <div className="container">
          <span className="page-hero-tag">Case Studies · Real Projects · Real Results</span>
          <h1>Case Studies — Engineering &amp; Digital Projects</h1>
          <p>Every project is a problem solved. Here's a selection of real client challenges and the measurable outcomes we delivered across CNC conversions, automation, web development, and brand identity.</p>
          <div className="sp-hero-meta">
            <span>CNC &amp; Machining</span><span className="sp-meta-div">·</span>
            <span>Automation</span><span className="sp-meta-div">·</span>
            <span>Web &amp; Software</span><span className="sp-meta-div">·</span>
            <span>Design &amp; Brand</span>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="cs-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`cs-filter-btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="cs-grid">
            {filtered.map(cs => (
              <div key={cs.id} className="cs-card">
                {cs.image && (
                  <div className="cs-card-img-wrap">
                    <img src={cs.image} alt={cs.title} className="cs-card-img" loading="lazy" />
                  </div>
                )}
                <div className="cs-card-content">
                  <div className="cs-card-top">
                    <span className="cs-tag">{cs.tag}</span>
                    <span className="cs-metric">{cs.metric}</span>
                  </div>
                  <h3 className="cs-title">{cs.title}</h3>
                  <p className="cs-client">{cs.client}</p>
                  <p className="cs-problem-preview">{cs.problem.slice(0, 140)}…</p>
                  <button className="cs-read-more" onClick={() => setActiveCase(cs)}>
                    Read Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeCase && (
        <div className="cs-modal-overlay" onClick={() => setActiveCase(null)}>
          <div className="cs-modal" onClick={e => e.stopPropagation()}>
            <button className="cs-modal-close" onClick={() => setActiveCase(null)} aria-label="Close">×</button>
            <span className="cs-tag" style={{ marginBottom: '12px', display: 'inline-block' }}>{activeCase.tag}</span>
            <h2 className="cs-modal-title">{activeCase.title}</h2>
            <p className="cs-client">{activeCase.client}</p>
            <div className="cs-modal-body">
              <div className="cs-modal-section">
                <span className="cs-modal-label">The Problem</span>
                <p>{activeCase.problem}</p>
              </div>
              <div className="cs-modal-section">
                <span className="cs-modal-label">The Solution</span>
                <p>{activeCase.solution}</p>
              </div>
              <div className="cs-modal-section cs-modal-result">
                <span className="cs-modal-label result">The Result</span>
                <p>{activeCase.result}</p>
              </div>
              <div className="cs-modal-section">
                <span className="cs-modal-label">Technologies Used</span>
                <div className="cs-tech-tags">
                  {activeCase.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="cta-section">
        <div className="container">
          <h2>Have a Similar Challenge?</h2>
          <p>We solve engineering and digital problems with measurable outcomes. Tell us what you need — we'll quote within 24 hours.</p>
          <div className="cta-buttons">
            <a href="/quote" className="btn btn-cta">Get a Quote</a>
            <a href="https://wa.me/27782964786?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20SkillAxis%20Dynamics." target="_blank" rel="noopener noreferrer" className="btn btn-ghost">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
