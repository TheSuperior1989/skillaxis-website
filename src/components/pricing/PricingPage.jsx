import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import { pricing as pricingData } from '../../data/pricing';
import './PricingPage.css';

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
          <span>Prices exclude VAT, none added</span><span className="sp-meta-div">·</span>
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
              <div key={tier.label} className={`pricing-tier-card${tier.featured ? ' pricing-tier-card--featured' : ''}`}>
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
