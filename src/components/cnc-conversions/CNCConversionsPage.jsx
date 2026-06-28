import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SEO from '../common/SEO';
import './CNCConversionsPage.css';

const WA_URL = 'https://wa.me/27782964786?text=' + encodeURIComponent('Hi, I need a quote for a CNC conversion project.');

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a CNC conversion cost in South Africa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CNC conversions in South Africa typically start from R25,000 for a basic mill or lathe retrofit. Complex conversions with servo drives, closed-loop feedback, and custom control panels range from R45,000 to R80,000+. The final cost depends on machine size, age, required precision, and scope of work.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a CNC conversion take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard mill or lathe CNC conversion takes 3–6 weeks from project kick-off to commissioning. Complex builds with custom control panels or servo tuning may take 8–12 weeks. We provide a detailed timeline during the scoping phase.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which machines can be CNC converted?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We convert Bridgeport-style mills, Harrison and Colchester lathes, South Bend lathes, toolroom lathes, knee mills, and most manual machine tools. We assess each machine individually to confirm suitability and identify any structural limitations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What control system do you use for CNC conversions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We primarily use LinuxCNC (open-source, industry-proven) and GRBL for smaller machines. For clients requiring commercial controllers, we can integrate Mach4 or similar. All systems are fully commissioned and tested before handover.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer a warranty on CNC conversions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer a 6-month warranty on all components we supply and install. This covers servo drives, motors, control systems, and wiring. The host machine\'s mechanical components fall under their existing condition at time of conversion.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CNC Mill and Lathe Conversions',
  provider: {
    '@type': 'LocalBusiness',
    name: 'SkillAxis Dynamics',
    address: { '@type': 'PostalAddress', addressLocality: 'Pretoria', addressCountry: 'ZA' },
  },
  areaServed: 'South Africa',
  description: 'Professional CNC conversion of manual mills and lathes. Servo drives, LinuxCNC control systems, and full commissioning in Pretoria, South Africa.',
  offers: { '@type': 'Offer', price: '25000', priceCurrency: 'ZAR', priceSpecification: { '@type': 'UnitPriceSpecification', price: '25000', priceCurrency: 'ZAR', description: 'Starting price for basic CNC conversion' } },
};

const CNCConversionsPage = () => (
  <div className="service-page">
    <SEO
      title="CNC Mill & Lathe Conversions in South Africa — From R25,000"
      description="Professional CNC conversion of manual mills and lathes. Servo drives, LinuxCNC, full commissioning. Serving Pretoria, Johannesburg, and across South Africa. Get a quote today."
      canonical="/cnc-conversions"
      schema={[faqSchema, serviceSchema]}
    />

    {/* Hero */}
    <section className="sp-hero">
      <div className="container">
        <span className="page-hero-tag">CNC Engineering · Pretoria, South Africa</span>
        <h1>CNC Mill &amp; Lathe Conversions in South Africa</h1>
        <p>
          Transform your manual mill or lathe into a precision CNC machine. We handle everything — servo drives, ballscrew upgrades, control systems, wiring, and full commissioning — so you can run repeatable, accurate parts from day one.
        </p>
        <div className="sp-hero-actions">
          <Link to="/quote" className="btn btn-cta">Get a Quote</Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
          </a>
        </div>
        <div className="sp-hero-meta">
          <span>From R25,000</span>
          <span className="sp-meta-div">·</span>
          <span>Pretoria-based</span>
          <span className="sp-meta-div">·</span>
          <span>LinuxCNC &amp; GRBL</span>
          <span className="sp-meta-div">·</span>
          <span>6-month warranty</span>
        </div>
      </div>
    </section>

    {/* Problem */}
    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Sound Familiar?</span>
          <h2 className="section-title">Why Clients Come to Us</h2>
        </div>
        <div className="sp-pain-grid">
          <div className="sp-pain-card">
            <span className="sp-pain-num">01</span>
            <h3>Manual tolerances aren't good enough</h3>
            <p>Your manual machine can't hold the consistency needed for repeat production. Each part requires rework or inspection. CNC eliminates operator variability.</p>
          </div>
          <div className="sp-pain-card">
            <span className="sp-pain-num">02</span>
            <h3>New CNC machines are cost-prohibitive</h3>
            <p>A new CNC machining centre costs R500,000+. Your existing manual machine has good bones — converting it costs a fraction and delivers comparable performance for most applications.</p>
          </div>
          <div className="sp-pain-card">
            <span className="sp-pain-num">03</span>
            <h3>Skilled operators are hard to find and keep</h3>
            <p>Manual machining requires years of skill development. CNC conversion reduces operator skill dependence and allows you to run with fewer, less specialized staff.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Solution */}
    <section className="sp-section sp-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Approach</span>
          <h2 className="section-title">What We Convert &amp; How</h2>
        </div>
        <div className="sp-two-col">
          <div>
            <p className="sp-lead">We convert Bridgeport-style mills, Harrison lathes, Colchester lathes, South Bend lathes, toolroom mills, and most manual machine tools — replacing manual axes with servo-driven CNC axes under computer control.</p>
            <ul className="sp-list">
              <li>Ballscrew replacement (eliminates backlash)</li>
              <li>AC or DC servo motor installation per axis</li>
              <li>LinuxCNC or GRBL control system</li>
              <li>Custom control panel fabrication</li>
              <li>VFD spindle speed control</li>
              <li>Closed-loop encoder feedback</li>
              <li>Full electrical wiring and earthing</li>
              <li>CAM software integration (Fusion 360, etc.)</li>
              <li>Operator training and documentation</li>
            </ul>
          </div>
          <div className="sp-highlight-box">
            <h3>Technologies We Use</h3>
            <div className="sp-tech-list">
              <span>LinuxCNC</span>
              <span>GRBL</span>
              <span>Mach4</span>
              <span>Mesa FPGA cards</span>
              <span>Yaskawa servos</span>
              <span>Leadshine servo drives</span>
              <span>Fusion 360 CAM</span>
              <span>Ballscrews (precision grade)</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Our Conversion Process</h2>
        </div>
        <div className="process-grid">
          <div className="process-step">
            <div className="process-number">01</div>
            <h3>Machine Assessment</h3>
            <p>We inspect your machine in person or via detailed photos/video. We identify structural condition, axis travel, and any remedial work needed before conversion.</p>
          </div>
          <div className="process-step">
            <div className="process-number">02</div>
            <h3>Scoped Proposal</h3>
            <p>You receive a detailed quote covering every component, labour, and timeline. No surprises — what we quote is what you pay.</p>
          </div>
          <div className="process-step">
            <div className="process-number">03</div>
            <h3>Build &amp; Install</h3>
            <p>We complete mechanical work, electrical installation, and control system configuration. Every axis is tested for accuracy and repeatability.</p>
          </div>
          <div className="process-step">
            <div className="process-number">04</div>
            <h3>Commission &amp; Train</h3>
            <p>We commission the machine at your premises, run test programs, and train your operator. Full documentation is provided.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Case study */}
    <section className="sp-section sp-alt">
      <div className="container sp-case-container">
        <div className="section-header">
          <span className="section-tag">Real Project</span>
          <h2 className="section-title">Harrison L5 Lathe Conversion — Johannesburg</h2>
        </div>
        <div className="sp-case-grid">
          <div className="sp-case-block">
            <span className="sp-case-label">The Problem</span>
            <p>A Johannesburg precision engineering workshop had a Harrison L5 lathe in excellent mechanical condition but could no longer hold tolerances for medical component production. Manual operation was causing ±0.05mm variance on repeat runs.</p>
          </div>
          <div className="sp-case-block">
            <span className="sp-case-label">The Solution</span>
            <p>Full 2-axis CNC conversion with Leadshine AC servo drives, 5mm pitch ballscrews on both axes, LinuxCNC control system, and a custom 15" touchscreen control panel. VFD-controlled spindle with RPM readout.</p>
          </div>
          <div className="sp-case-block sp-result">
            <span className="sp-case-label">The Result</span>
            <p>Repeatability improved to ±0.008mm. Production throughput increased by 40%. The operator now runs parts from G-code programs, eliminating the need for a senior machinist on every run.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Investment</span>
          <h2 className="section-title">What a CNC Conversion Costs</h2>
        </div>
        <div className="pricing-highlight">
          <p className="price-from">Starting from</p>
          <div className="price-amount">R25,000</div>
          <p>Full CNC conversion including servo drives, ballscrews, LinuxCNC control system, control panel fabrication, wiring, commissioning, and operator training.</p>
          <Link to="/quote" className="btn btn-cta">Get Your Specific Quote</Link>
        </div>
        <div className="sp-pricing-factors">
          <h3>What affects the final cost?</h3>
          <ul className="sp-list">
            <li>Number of axes (2-axis lathe vs 3-axis mill)</li>
            <li>Machine size and existing mechanical condition</li>
            <li>Servo system specification (stepper vs closed-loop servo)</li>
            <li>Control panel complexity</li>
            <li>Travel distance for on-site work</li>
            <li>Remedial mechanical work required</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Trust */}
    <section className="sp-section sp-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why SkillAxis</span>
          <h2 className="section-title">Technical Credibility</h2>
        </div>
        <div className="trust-grid">
          <div className="trust-item">
            <div className="trust-label">Location</div>
            <p>Pretoria, Gauteng — serving Johannesburg, Cape Town, and nationwide</p>
          </div>
          <div className="trust-item">
            <div className="trust-label">Control Systems</div>
            <p>LinuxCNC, GRBL, Mach4 — open and proprietary platforms</p>
          </div>
          <div className="trust-item">
            <div className="trust-label">Machines Converted</div>
            <p>Harrison, Colchester, South Bend, Bridgeport, Aciera, and more</p>
          </div>
          <div className="trust-item">
            <div className="trust-label">Precision</div>
            <p>Achieving 0.008–0.02mm repeatability on converted machines</p>
          </div>
          <div className="trust-item">
            <div className="trust-label">Warranty</div>
            <p>6-month warranty on all supplied components and installation</p>
          </div>
          <div className="trust-item">
            <div className="trust-label">Support</div>
            <p>Post-commissioning support and remote diagnostics available</p>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Common Questions</span>
          <h2 className="section-title">FAQ — CNC Conversions</h2>
        </div>
        <div className="faq-list">
          {faqSchema.mainEntity.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.name}</h3>
              <p>{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Convert Your Machine?</h2>
        <p>Send us your machine details and we'll provide a scoped quote within 3 business days.</p>
        <div className="cta-buttons">
          <Link to="/quote" className="btn btn-cta">Get a Quote</Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default CNCConversionsPage;
