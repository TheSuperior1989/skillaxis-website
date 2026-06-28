import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import './PricingPage.css';

const pricingData = [
  {
    service: 'CNC Conversions',
    link: '/cnc-conversions',
    icon: '⚙️',
    tiers: [
      { label: 'Basic retrofit (1 axis)', price: 'From R15,000', desc: 'Single-axis servo conversion, GRBL control, limit switches' },
      { label: 'Standard CNC conversion (3-axis mill)', price: 'From R25,000', desc: 'Full 3-axis, LinuxCNC or Mach3, encoder feedback, commissioning' },
      { label: 'Advanced lathe/mill with ATC', price: 'From R45,000', desc: 'Complex multi-axis with tool changer, probing, custom programming' },
    ],
    factors: ['Number of axes converted', 'Servo vs stepper motor choice', 'Control system selected (LinuxCNC, Mach3, GRBL)', 'Machine condition and mechanical work required', 'Custom fixturing or motor mounts needed'],
  },
  {
    service: 'Automation Retrofits',
    link: '/automation-retrofits',
    icon: '🔌',
    tiers: [
      { label: 'Basic PLC upgrade', price: 'From R15,000', desc: 'PLC installation, I/O wiring, basic programming, commissioning' },
      { label: 'Full system automation', price: 'From R35,000', desc: 'PLC + HMI + sensor network + safety interlocks + documentation' },
      { label: 'SCADA and remote monitoring', price: 'From R65,000', desc: 'Full industrial automation with remote access, data logging, alerts' },
    ],
    factors: ['Number of I/O points and sensors', 'PLC brand and model selected', 'HMI complexity and custom screen design', 'Safety circuit requirements (OHS Act)', 'Whether electrical drawings are required'],
  },
  {
    service: 'CAD Drafting',
    link: '/cad-design-drafting',
    icon: '📐',
    tiers: [
      { label: 'Single detail drawing', price: 'From R3,500', desc: 'One part or assembly drawing, ISO standard, PDF + DWG delivery' },
      { label: 'Drawing package (5–10 drawings)', price: 'From R8,000', desc: 'GA + parts list + detail drawings for a full assembly' },
      { label: 'Full project documentation set', price: 'From R18,000', desc: '20+ drawings, BOM, revision tracking, manufacturing-ready package' },
    ],
    factors: ['Number of drawings required', 'Complexity (machined parts vs fabrications)', 'Standard required (ISO, ASME, SANS)', '3D modelling required vs 2D only', 'Whether reverse engineering from physical parts is needed'],
  },
  {
    service: 'Custom Machinery',
    link: '/custom-machinery-design',
    icon: '🔧',
    tiers: [
      { label: 'Jig or fixture design + build', price: 'From R45,000', desc: 'Welding or assembly jig, designed, fabricated, and delivered' },
      { label: 'Semi-automated machine', price: 'From R80,000', desc: 'Custom machine with pneumatics or basic automation' },
      { label: 'Turnkey automated system', price: 'From R150,000', desc: 'Complex multi-subsystem machine with PLC, HMI, safety, and commissioning' },
    ],
    factors: ['Complexity of mechanism and motion', 'Material and load requirements', 'Whether automation and electrical is included', 'Fabrication material costs (steel, aluminium, etc.)', 'Site commissioning and travel'],
  },
  {
    service: 'Web & Software',
    link: '/web-software-engineering',
    icon: '💻',
    tiers: [
      { label: 'Single-page business website', price: 'From R1,500', desc: '1-page site: hero, services, about, contact form. Mobile-responsive, SEO-ready' },
      { label: 'Multi-page business website', price: 'From R6,000', desc: '5–8 pages with CMS, blog, contact forms, SEO setup' },
      { label: 'E-commerce store', price: 'From R12,000', desc: 'WooCommerce or custom storefront, payment gateway, product catalogue' },
      { label: 'Custom web application', price: 'From R25,000', desc: 'Booking systems, portals, dashboards, REST APIs. Quoted per scope' },
    ],
    factors: ['Number of pages or features', 'CMS requirement (WordPress, custom)', 'E-commerce and payment integration', 'Custom database or API development', 'Ongoing hosting and maintenance requirements'],
  },
  {
    service: 'Graphic Design & Branding',
    link: '/services',
    icon: '🎨',
    tiers: [
      { label: 'Logo design', price: 'From R2,500', desc: '3 logo concepts, 2 rounds of revisions, SVG + PNG + PDF delivery' },
      { label: 'Brand identity package', price: 'From R8,500', desc: 'Logo + colour palette + typography + brand guidelines document' },
      { label: 'Full brand + website', price: 'From R15,000', desc: 'Complete identity: logo, brand guidelines, stationery + business website' },
    ],
    factors: ['Scope of brand deliverables', 'Number of design concepts requested', 'Stationery and print collateral required', 'Whether web design is included', 'Social media profile design'],
  },
];

const PricingPage = () => (
  <div className="service-page">
    <SEO
      title="Transparent Pricing — Engineering & Digital Services"
      description="Straightforward pricing for CNC conversions, automation retrofits, CAD drafting, custom machinery, web development, and graphic design. Starting from R1,500. SkillAxis Dynamics, Pretoria."
      canonical="/pricing"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Service Pricing',
        description: 'Pricing for engineering and digital services from SkillAxis Dynamics.',
        provider: { '@type': 'LocalBusiness', name: 'SkillAxis Dynamics' },
      }}
    />

    <section className="sp-hero">
      <div className="container">
        <span className="page-hero-tag">Pricing · No Hidden Costs · Fixed-Price Quotes</span>
        <h1>Transparent Pricing — Engineering &amp; Digital Services</h1>
        <p>We don't hide our prices. Every project gets a detailed fixed-price quote — no hourly ambiguity, no scope creep surprises. Below are starting prices and the factors that determine final cost.</p>
        <div className="sp-hero-meta">
          <span>Fixed-price quotes</span><span className="sp-meta-div">·</span>
          <span>No hidden costs</span><span className="sp-meta-div">·</span>
          <span>Quote within 24 hours</span>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="pricing-intro-box">
          <p><strong>Why we publish starting prices:</strong> Hiding prices wastes your time and ours. If our prices don't fit your budget, you'll know immediately. If they do, we can move straight to scoping your specific project. All figures below are starting points — your actual quote depends on the scope details we discuss.</p>
        </div>
      </div>
    </section>

    {pricingData.map((svc) => (
      <section key={svc.service} className="sp-section sp-alt pricing-service-section">
        <div className="container">
          <div className="pricing-service-header">
            <div>
              <span className="section-tag">{svc.icon} {svc.service}</span>
              <h2 className="section-title">{svc.service} Pricing</h2>
            </div>
            <Link to={svc.link} className="pricing-service-link">Full service details →</Link>
          </div>

          <div className="pricing-tier-grid">
            {svc.tiers.map((tier) => (
              <div key={tier.label} className="pricing-tier-card">
                <div className="pricing-tier-label">{tier.label}</div>
                <div className="pricing-tier-price">{tier.price}</div>
                <p className="pricing-tier-desc">{tier.desc}</p>
              </div>
            ))}
          </div>

          <div className="pricing-factors">
            <span className="pricing-factors-label">What affects final cost</span>
            <ul>
              {svc.factors.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
      </section>
    ))}

    <section className="sp-section">
      <div className="container">
        <div className="pricing-value-section">
          <h2>Why We Price at Premium</h2>
          <p>We don't compete on being cheapest. Our clients pay for certainty: a fixed price, a real deadline, and work that performs as scoped. Every project is delivered by an engineer or developer with hands-on experience in that discipline — not a generalist agency subcontracting to the lowest bidder.</p>
          <div className="pricing-value-grid">
            <div className="pricing-value-item">
              <div className="pricing-value-icon">✓</div>
              <div>
                <strong>Fixed-price contracts</strong>
                <p>Your quote is your cost. We absorb overruns, not you.</p>
              </div>
            </div>
            <div className="pricing-value-item">
              <div className="pricing-value-icon">✓</div>
              <div>
                <strong>Specialist execution</strong>
                <p>CNC work done by engineers who operate CNC machines. Web work done by developers who build production systems.</p>
              </div>
            </div>
            <div className="pricing-value-item">
              <div className="pricing-value-icon">✓</div>
              <div>
                <strong>Documented deliverables</strong>
                <p>Every project delivers documentation, drawings, or source code — you own everything we produce.</p>
              </div>
            </div>
            <div className="pricing-value-item">
              <div className="pricing-value-icon">✓</div>
              <div>
                <strong>Post-delivery support</strong>
                <p>30 days of post-delivery support included on all projects. No disappearing after handover.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="container">
        <h2>Get an Accurate Quote for Your Project</h2>
        <p>Starting prices are guides. Tell us what you need and we'll send a detailed, fixed-price quote within 24 hours.</p>
        <div className="cta-buttons">
          <Link to="/quote" className="btn btn-cta">Request a Quote</Link>
          <a href="https://wa.me/27782964786?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20from%20SkillAxis%20Dynamics." target="_blank" rel="noopener noreferrer" className="btn btn-ghost">WhatsApp Us</a>
        </div>
      </div>
    </section>
  </div>
);

export default PricingPage;
