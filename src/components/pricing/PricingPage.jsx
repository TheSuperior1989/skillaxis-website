import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import './PricingPage.css';

const pricingData = [
  {
    service: 'Workshop Management System',
    link: '/workshop-software',
    tiers: [
      { label: 'Once-off setup', price: 'R7,500', desc: 'Configuration, branding, customer and parts import, device setup and training' },
      { label: 'Monthly', price: 'R2,500/month', desc: 'Hosting, backups, updates and support' },
      { label: 'Extra modules', price: 'Fixed quote', desc: 'Quotes, test reports, certificates or workshop-specific features' },
    ],
    factors: ['Number of job types and statuses to set up', 'Size of customer and parts lists to import', 'Extra modules requested', 'Number of devices to set up on site'],
  },
  {
    service: 'MotorArmour™ Motor Protection',
    link: '/motorarmour',
    tiers: [
      { label: 'Pilot batch', price: 'Quoted per motor', desc: 'A small first batch to prove it on your own line' },
      { label: 'Ongoing', price: 'Volume pricing', desc: 'Lower per-motor price once the pilot has proven itself' },
    ],
    factors: ['Motor frame size and type', 'Condition of the motor when it comes in', 'Batch size', 'Collection and delivery'],
  },
  {
    service: 'CAD Drawings',
    link: '/cad-design-drafting',
    tiers: [
      { label: 'Single detail drawing', price: 'From R3,500', desc: 'One part or assembly drawing, dimensioned and toleranced, PDF plus 3D or DXF files' },
      { label: 'Drawing package (5 to 10 drawings)', price: 'From R8,000', desc: 'General assembly, parts list and detail drawings for a full assembly' },
      { label: 'Full project set', price: 'From R18,000', desc: '20+ drawings, BOM, revisions and build documentation' },
    ],
    factors: ['Number of drawings', 'Machined parts vs fabrications', 'Whether 3D design or redesign is needed', 'Reverse engineering from physical parts', 'Plant layouts and patent sets are quoted per job'],
  },
  {
    service: 'CNC Conversions',
    link: '/cnc-conversions',
    tiers: [
      { label: 'Single-axis retrofit', price: 'From R15,000', desc: 'One axis driven, for example a power feed or lead screw upgrade' },
      { label: 'Full mill or lathe conversion', price: 'From R25,000', desc: 'All axes, control panel, spindle control, commissioning and training' },
      { label: 'Conversion with tool changer', price: 'From R45,000', desc: 'Larger machines, automatic tool changer and custom programming' },
    ],
    factors: ['Number of axes converted', 'Servo or stepper drives', 'Machine size and mechanical condition', 'Custom mounting parts and control panel', 'Travel for on-site work'],
  },
  {
    service: 'Machine Controls & Retrofits',
    link: '/automation-retrofits',
    tiers: [
      { label: 'Single drive or spindle upgrade', price: 'From R15,000', desc: 'One drive or spindle speed control upgrade, installed and tested' },
      { label: 'Multi-axis or tool changer retrofit', price: 'Fixed quote', desc: 'Quoted per machine after assessment' },
    ],
    factors: ['Number of drives and axes', 'Control panel changes', 'Whether a registered electrician is required', 'Documentation of undocumented machines'],
  },
  {
    service: 'Custom Machinery',
    link: '/custom-machinery-design',
    tiers: [
      { label: 'Design and engineering', price: 'Fixed line', desc: '3D design, drawings and BOM. Paid as the deposit and the design is yours' },
      { label: 'Manufacturing', price: 'Fixed per unit', desc: 'Priced per item so you can change quantities' },
      { label: 'Delivery and installation', price: 'Fixed line', desc: 'Transport, installation and commissioning nationwide' },
    ],
    factors: ['Complexity of the mechanism', 'Materials and loads', 'Quantities', 'Drives, controls and bought-out parts', 'Site distance'],
  },
  {
    service: 'Websites & Business Software',
    link: '/web-software-engineering',
    tiers: [
      { label: 'Single-page website', price: 'From R1,500', desc: 'Services, about, contact form and WhatsApp button. Mobile-first' },
      { label: 'Multi-page website', price: 'From R6,000', desc: 'Five to eight pages, contact forms and search setup' },
      { label: 'Online store', price: 'From R12,000', desc: 'Product catalogue, cart and payment gateway' },
      { label: 'Business system', price: 'From R25,000', desc: 'Inventory, bookings, quotes, invoices or portals, quoted per scope' },
    ],
    factors: ['Number of pages or features', 'Online payments', 'Custom database or integrations', 'Hosting and maintenance'],
  },
  {
    service: 'Google Ads Management',
    link: '/google-ads',
    tiers: [
      { label: 'Small', price: 'R4,400/month', desc: 'R3,000 ad spend + R1,400 management. R1,500 once-off setup' },
      { label: 'Medium', price: 'R7,000/month', desc: 'R5,000 ad spend + R2,000 management. R1,500 once-off setup' },
      { label: 'Large', price: 'R13,000/month', desc: 'R10,000 ad spend + R3,000 management. R1,500 once-off setup' },
    ],
    factors: ['Ad spend goes straight to Google with no mark-up', 'Number of services and areas targeted', 'Landing pages needed'],
  },
  {
    service: 'Graphic Design & Branding',
    link: '/services',
    tiers: [
      { label: 'Logo design', price: 'From R2,500', desc: 'Logo concepts, revisions and files for print and web' },
      { label: 'Brand identity package', price: 'From R8,500', desc: 'Logo, colours, typography and brand guide' },
      { label: 'Brand + website', price: 'From R15,000', desc: 'Identity, stationery and a business website' },
    ],
    factors: ['Number of concepts', 'Stationery and print items', 'Whether a website is included'],
  },
];

const PricingPage = () => (
  <div className="service-page">
    <SEO
      title="Pricing | Engineering, CNC, Drawings, Software and Google Ads"
      description="Published starting prices for workshop software, CAD drawings, CNC conversions, custom machinery, websites and Google Ads. Fixed prices, never hourly. SkillAxis Dynamics, Pretoria."
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
        <h1>Transparent Pricing - Engineering &amp; Digital Services</h1>
        <p>We don't hide our prices. Every project gets a detailed fixed-price quote - no hourly ambiguity, no scope creep surprises. Below are starting prices and the factors that determine final cost.</p>
        <div className="sp-hero-meta">
          <span>Fixed-price quotes</span><span className="sp-meta-div">·</span>
          <span>No hidden costs</span><span className="sp-meta-div">·</span>
          <span>Never hourly</span>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="pricing-intro-box">
          <p><strong>Why we publish starting prices:</strong> Hiding prices wastes your time and ours. If our prices don't fit your budget, you'll know immediately. If they do, we can move straight to scoping your specific project. All figures below are starting points - your actual quote depends on the scope details we discuss.</p>
        </div>
      </div>
    </section>

    {pricingData.map((svc) => (
      <section key={svc.service} className="sp-section sp-alt pricing-service-section">
        <div className="container">
          <div className="pricing-service-header">
            <div>
              <span className="section-tag">{svc.service}</span>
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
          <h2>How our pricing works</h2>
          <p>We do not compete on being cheapest. You pay for certainty: a fixed price, a realistic deadline and work done by the engineer who scoped it.</p>
          <div className="pricing-value-grid">
            <div className="pricing-value-item">
              <div className="pricing-value-icon">✓</div>
              <div>
                <strong>Fixed-price contracts</strong>
                <p>Your written quote is your price. Design, manufacturing and installation are separate lines.</p>
              </div>
            </div>
            <div className="pricing-value-item">
              <div className="pricing-value-icon">✓</div>
              <div>
                <strong>The engineer does the work</strong>
                <p>No juniors and no account managers. The person who quotes your job does it.</p>
              </div>
            </div>
            <div className="pricing-value-item">
              <div className="pricing-value-icon">✓</div>
              <div>
                <strong>Documented deliverables</strong>
                <p>Every project delivers documentation, drawings, or source code - you own everything we produce.</p>
              </div>
            </div>
            <div className="pricing-value-item">
              <div className="pricing-value-icon">✓</div>
              <div>
                <strong>A deposit starts the job</strong>
                <p>Usually the design line plus a share of manufacturing. The balance on delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="container">
        <h2>Get an Accurate Quote for Your Project</h2>
        <p>Starting prices are guides. Tell us what you need and we will come back with questions and a fixed-price quote.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">Request a quote</Link>
          <a href="https://wa.me/27782964786?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20from%20SkillAxis%20Dynamics." target="_blank" rel="noopener noreferrer" className="btn btn-ghost">WhatsApp Us</a>
        </div>
      </div>
    </section>
  </div>
);

export default PricingPage;
