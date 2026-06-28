import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SEO from '../common/SEO';
import '../cnc-conversions/CNCConversionsPage.css';

const WA_URL = 'https://wa.me/27782964786?text=' + encodeURIComponent('Hi, I need a quote for an industrial automation retrofit project.');

const faqData = [
  { q: 'What does an automation retrofit involve?', a: 'An automation retrofit replaces manual machine operations with automated control systems. This typically includes PLC (Programmable Logic Controller) installation, sensor integration, actuator control, safety interlocks, and an HMI (Human Machine Interface) for operator control. We adapt the scope to your specific machine and process.' },
  { q: 'How much does an automation retrofit cost in South Africa?', a: 'Basic automation retrofits start from R15,000 for simple PLC upgrades with I/O expansion. Full system automation with custom HMI, safety interlocks, and sensor networks ranges from R35,000 to R120,000+ depending on complexity. We provide a detailed quote after assessing your system.' },
  { q: 'What PLCs do you work with?', a: 'We work with Siemens S7, Allen-Bradley (Rockwell), Mitsubishi, Omron, and Delta PLCs. For cost-sensitive projects, we also use open-source platforms like OpenPLC. We recommend the right platform based on your existing infrastructure, budget, and support requirements.' },
  { q: 'Can you retrofit old machines that no longer have support?', a: 'Yes. Many of our clients have machines running legacy controls or relay logic that no longer has manufacturer support. We reverse-engineer the control logic and rebuild it in a modern PLC, giving the machine another 15–20 years of reliable operation.' },
  { q: 'Do you handle safety compliance for automated systems?', a: 'Yes. All automation systems we install are designed with appropriate safety interlocks, emergency stops, and guarding as required by South African machinery safety regulations (OHS Act). We can also assist with risk assessments for new automated processes.' },
];

const AutomationRetrofitsPage = () => (
  <div className="service-page">
    <SEO
      title="Industrial Automation Retrofits — Pretoria, South Africa"
      description="PLC upgrades, machine automation, sensor integration, and control system retrofits for industrial machines in South Africa. Starting from R15,000. Get a quote from SkillAxis Dynamics."
      canonical="/automation-retrofits"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Industrial Automation Retrofits',
        provider: { '@type': 'LocalBusiness', name: 'SkillAxis Dynamics' },
        areaServed: 'South Africa',
        description: 'PLC upgrades, machine automation, and industrial control system retrofits in Pretoria, South Africa.',
      }}
    />

    <section className="sp-hero">
      <div className="container">
        <span className="page-hero-tag">Automation Engineering · Pretoria, South Africa</span>
        <h1>Industrial Automation Retrofits — Pretoria, South Africa</h1>
        <p>Upgrade your manual or outdated machines with modern PLC controls, sensors, and automated systems. Reduce downtime, eliminate operator errors, and increase throughput — without replacing your entire production line.</p>
        <div className="sp-hero-actions">
          <Link to="/quote" className="btn btn-cta">Get a Quote</Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
          </a>
        </div>
        <div className="sp-hero-meta">
          <span>From R15,000</span><span className="sp-meta-div">·</span>
          <span>Siemens · Allen-Bradley · Delta PLCs</span><span className="sp-meta-div">·</span>
          <span>OHS-compliant safety design</span>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">The Problem</span>
          <h2 className="section-title">Why Machines Need Automation Upgrades</h2>
        </div>
        <div className="sp-pain-grid">
          <div className="sp-pain-card">
            <span className="sp-pain-num">01</span>
            <h3>Manual processes are costing you money</h3>
            <p>Every manual step in your process is a source of variation, delay, and potential injury. Automation eliminates these variables and runs consistently without fatigue.</p>
          </div>
          <div className="sp-pain-card">
            <span className="sp-pain-num">02</span>
            <h3>Legacy controls are unreliable and unsupported</h3>
            <p>If your machine control system is obsolete — relay logic, discontinued PLCs, or analogue panels — breakdowns will eventually cause expensive unplanned downtime. Retrofit now, on your schedule.</p>
          </div>
          <div className="sp-pain-card">
            <span className="sp-pain-num">03</span>
            <h3>You can't monitor or control remotely</h3>
            <p>Modern production requires visibility. We add remote monitoring, data logging, and remote control capabilities to machines that had none of that before.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Automation Retrofit Services</h2>
        </div>
        <div className="sp-two-col">
          <div>
            <p className="sp-lead">We assess your existing machine or process, design an automation solution that fits your budget and requirements, and install, wire, program, and commission it on site.</p>
            <ul className="sp-list">
              <li>PLC installation and programming (Siemens, Allen-Bradley, Delta, Omron)</li>
              <li>HMI design and touchscreen panel installation</li>
              <li>Sensor integration (proximity, temperature, pressure, flow)</li>
              <li>Conveyor and actuator control systems</li>
              <li>Safety relay and E-stop circuit design</li>
              <li>Variable speed drive (VFD) integration</li>
              <li>Remote monitoring and SCADA connectivity</li>
              <li>Legacy relay logic to PLC migration</li>
              <li>Full electrical documentation and drawings</li>
            </ul>
          </div>
          <div className="sp-highlight-box">
            <h3>Industries Served</h3>
            <div className="sp-tech-list">
              <span>Manufacturing</span><span>Food processing</span><span>Packaging</span>
              <span>Mining equipment</span><span>Workshops</span><span>Engineering firms</span>
              <span>Agriculture</span><span>Water treatment</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Process</span>
          <h2 className="section-title">How We Work</h2>
        </div>
        <div className="process-grid">
          <div className="process-step"><div className="process-number">01</div><h3>Site Assessment</h3><p>We visit your facility, assess the machine or process, identify automation opportunities, and understand your production requirements and budget constraints.</p></div>
          <div className="process-step"><div className="process-number">02</div><h3>Detailed Proposal</h3><p>You receive a full scope document with system architecture, component list, pricing, and expected ROI. No vague estimates.</p></div>
          <div className="process-step"><div className="process-number">03</div><h3>Build &amp; Install</h3><p>We fabricate the control panel, wire the system, and install all components. Programming is done in our workshop and tested before installation.</p></div>
          <div className="process-step"><div className="process-number">04</div><h3>Commission &amp; Support</h3><p>Full on-site commissioning, operator training, and documentation. Ongoing support available for troubleshooting and system expansion.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container sp-case-container">
        <div className="section-header">
          <span className="section-tag">Real Project</span>
          <h2 className="section-title">Conveyor Automation — Pretoria Packaging Plant</h2>
        </div>
        <div className="sp-case-grid">
          <div className="sp-case-block"><span className="sp-case-label">The Problem</span><p>Manual conveyor operation was causing irregular product spacing, line stoppages, and two safety incidents in 12 months. The system ran on ageing relay logic with no safety interlocks.</p></div>
          <div className="sp-case-block"><span className="sp-case-label">The Solution</span><p>Delta PLC with proximity sensors for product detection, VFD-controlled conveyor speed, emergency stop integration, and a basic HMI for speed and mode control. Complete relay-to-PLC migration.</p></div>
          <div className="sp-case-block sp-result"><span className="sp-case-label">The Result</span><p>Zero safety incidents in 8 months post-installation. Line throughput increased by 35%. Downtime reduced from 4 hours/week to under 20 minutes. System has remote monitoring capability for the operations manager.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Investment</span>
          <h2 className="section-title">Automation Retrofit Pricing</h2>
        </div>
        <div className="pricing-highlight">
          <p className="price-from">Starting from</p>
          <div className="price-amount">R15,000</div>
          <p>Basic PLC upgrade with I/O expansion, programming, and commissioning. Full system automation with HMI, sensors, and safety interlocks from R35,000.</p>
          <Link to="/quote" className="btn btn-cta">Get Your Specific Quote</Link>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
        </div>
        <div className="faq-list">
          {faqData.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="container">
        <h2>Ready to Automate Your Process?</h2>
        <p>Tell us about your machine or production process and we'll scope a solution that fits your budget and timeline.</p>
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

export default AutomationRetrofitsPage;
