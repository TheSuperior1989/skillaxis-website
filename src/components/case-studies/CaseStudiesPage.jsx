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
    category: 'Engineering',
    tag: 'CNC Conversion',
    title: 'Harrison L5 Lathe CNC Conversion — Johannesburg Manufacturing',
    client: 'Precision component manufacturer, Johannesburg',
    problem: 'A precision machining shop was running a Harrison L5 lathe in manual mode. Programming complex parts required a skilled operator at the machine full-time, and repeatability between parts was poor. Scrap rates were high on tight-tolerance work.',
    solution: 'Full CNC conversion using LinuxCNC on a Mesa 7i76E motion controller. Servo drives on all 3 axes, encoder feedback, and a Mach3-compatible G-code interface. Limit switches, homing, and tool offsets fully configured.',
    result: 'Scrap rate dropped from 12% to under 2%. One operator now manages two machines simultaneously. Complex profiles that previously took 4 hours to machine manually now run in under 45 minutes.',
    tech: ['LinuxCNC', 'Mesa 7i76E', 'Servo drives', 'G-code programming'],
    metric: '12% → 2% scrap rate',
  },
  {
    id: 2,
    image: proj2,
    category: 'Engineering',
    tag: 'CNC Conversion',
    title: 'Bridgeport Series I Mill Servo Retrofit — Pretoria Workshop',
    client: 'Tool and die shop, Pretoria',
    problem: 'An original Bridgeport mill with a failed DRO and no CNC capability was limiting the shop\'s ability to quote complex 2.5D profiling work. A new VMC was out of budget at R800,000+.',
    solution: 'X/Y/Z servo retrofit with GRBL-HAL on a dedicated control PC. Custom motor mounts designed and fabricated in-house. DRO retained in parallel with CNC control. Operator trained on CAM to G-code workflow.',
    result: 'Shop can now bid on profiling work previously turned down. First 3 CNC jobs covered the full cost of the retrofit. Machine has since been running 3-shift for 14 months without a control fault.',
    tech: ['GRBL-HAL', 'Servo motors', 'CAM workflow', 'Fusion 360'],
    metric: 'ROI in first 3 jobs',
  },
  {
    id: 3,
    image: proj3,
    category: 'Engineering',
    tag: 'Automation Retrofit',
    title: 'Packaging Line Conveyor Automation — Pretoria',
    client: 'Packaging plant, Pretoria East',
    problem: 'Manual conveyor operation was causing irregular product spacing, two operator safety incidents in 12 months, and line stoppages averaging 4 hours per week. The system ran on 1990s relay logic with no safety interlocks.',
    solution: 'Delta PLC with proximity sensors for product detection, VFD-controlled conveyor speed, E-stop circuit redesign meeting OHS Act requirements, and a touchscreen HMI for speed and mode control. Complete relay-to-PLC migration.',
    result: 'Zero safety incidents in 8 months post-installation. Throughput increased 35%. Downtime reduced from 4 hours/week to under 20 minutes. Operations manager now has remote monitoring via SCADA connection.',
    tech: ['Delta PLC', 'VFD', 'HMI', 'SCADA', 'Proximity sensors'],
    metric: '35% throughput increase',
  },
  {
    id: 4,
    image: proj4,
    category: 'Web',
    tag: 'Web Development',
    title: 'E-Commerce Platform — Cape Town Outdoor Retailer',
    client: 'Outdoor and camping equipment retailer, Cape Town',
    problem: 'The client was running a 2016 WooCommerce site with a 7-second load time, a checkout abandonment rate of 68%, and no mobile optimisation. They were losing sales to faster competitors daily.',
    solution: 'Custom Next.js storefront with headless WooCommerce backend. Stripe payment integration, Algolia product search, mobile-first design. Deployed to Vercel CDN edge. Product import script migrated 1,200 SKUs.',
    result: 'Load time from 7.2s to 1.1s. Checkout abandonment dropped from 68% to 31%. Online revenue increased 140% in the 6 months following launch. The client added a second store on the same platform within 8 months.',
    tech: ['Next.js', 'WooCommerce (headless)', 'Stripe', 'Algolia', 'Vercel'],
    metric: '140% revenue increase',
  },
  {
    id: 5,
    image: proj5,
    category: 'Design',
    tag: 'Brand Identity',
    title: 'Full Brand Identity — Industrial Equipment Supplier',
    client: 'Industrial lifting and rigging equipment supplier, Gauteng',
    problem: 'A growing industrial equipment supplier had no consistent visual identity. Their logo was a Word document clip-art, their proposals were unbranded, and their website was a single-page template from 2018.',
    solution: 'Full brand identity: logo design (3 concepts, 2 revisions), brand guidelines document, stationery suite (letterhead, business cards, quotation template), and a 5-page React website with an online product enquiry system.',
    result: 'The client secured two large industrial contracts citing "professional presentation" as a key factor. Website generates 3–5 qualified product enquiries per week. Brand is now applied consistently across all client-facing materials.',
    tech: ['Adobe Illustrator', 'React', 'Brand guidelines', 'EmailJS'],
    metric: '3–5 qualified leads/week',
  },
  {
    id: 6,
    image: proj6,
    category: 'Engineering',
    tag: 'Custom Machinery',
    title: 'Custom Welding Positioner — Pretoria Fabrication Shop',
    client: 'Steel fabrication company, Pretoria West',
    problem: 'A fabrication shop needed to weld large cylindrical pressure vessels in multiple orientations. Manual repositioning was taking 2–3 hours per vessel and causing repetitive strain injuries. No commercial positioner on the market fit their vessel dimensions or budget.',
    solution: 'Custom 2-tonne capacity welding positioner with motorised rotation, adjustable height, and variable speed control. Designed in Fusion 360, fabricated from 12mm plate with a geared motor drive and footswitch control. Total build cost: R62,000.',
    result: 'Repositioning time from 2.5 hours to under 15 minutes per vessel. No back injury incidents in 18 months of operation. Weld quality improved due to consistent flat/horizontal positioning. ROI achieved within 4 months.',
    tech: ['Fusion 360', 'Structural fabrication', 'Geared motor drive', 'PLC footswitch'],
    metric: 'ROI in 4 months',
  },
];

const categories = ['All', 'Engineering', 'Web', 'Design'];

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
