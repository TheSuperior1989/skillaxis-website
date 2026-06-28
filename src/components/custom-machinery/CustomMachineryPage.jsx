import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SEO from '../common/SEO';
import '../cnc-conversions/CNCConversionsPage.css';

const WA_URL = 'https://wa.me/27782964786?text=' + encodeURIComponent('Hi, I need a quote for custom machinery design and build.');

const faqData = [
  { q: 'What types of custom machinery do you design and build?', a: 'We design and build custom jigs and fixtures, production aids, welding positioners, custom conveyor sections, testing rigs, assembly aids, semi-automated production machines, and bespoke tooling. If it requires mechanical design, fabrication management, and possibly automation — we can scope it.' },
  { q: 'How much does a custom machine cost?', a: 'Custom machine design and build starts from R45,000 for simpler jig and fixture projects. Complex purpose-built machines with automation, pneumatics, and safety systems typically range from R80,000 to R200,000+. We provide a detailed breakdown during the quotation phase.' },
  { q: 'Do you handle fabrication or do I need to arrange that separately?', a: 'We manage the entire project including fabrication. We have relationships with qualified fabricators and machine shops in Pretoria and Johannesburg. You deal with SkillAxis as the single point of contact — we manage quality and timeline with our subcontractors.' },
  { q: 'How long does a custom machine build take?', a: 'Simple jig and fixture builds take 3–6 weeks from design sign-off. Complex machines with multiple subsystems typically take 8–16 weeks. We provide a detailed project schedule before any work begins.' },
  { q: 'Can you duplicate or improve an existing machine?', a: 'Yes. If you have an existing machine that works well but is old, damaged, or you need multiple units — we can reverse engineer it, produce drawings, and build replicas or improved versions. We can also redesign for easier maintenance or better performance.' },
];

const CustomMachineryPage = () => (
  <div className="service-page">
    <SEO
      title="Custom Machinery Design & Engineering — Pretoria, South Africa"
      description="Bespoke machine design and build in South Africa. Jigs, fixtures, production aids, and purpose-built machines from R45,000. SkillAxis Dynamics, Pretoria."
      canonical="/custom-machinery-design"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Custom Machinery Design and Build',
        provider: { '@type': 'LocalBusiness', name: 'SkillAxis Dynamics' },
        areaServed: 'South Africa',
        description: 'Custom machinery design, jigs, fixtures, and purpose-built production equipment from SkillAxis Dynamics, Pretoria.',
      }}
    />

    <section className="sp-hero">
      <div className="container">
        <span className="page-hero-tag">Mechanical Engineering · Pretoria, South Africa</span>
        <h1>Custom Machinery Design &amp; Engineering — Pretoria</h1>
        <p>When off-the-shelf doesn't solve your production problem — we design and build it. Custom jigs, fixtures, production aids, and purpose-built machines. Designed, managed, and commissioned by SkillAxis Dynamics.</p>
        <div className="sp-hero-actions">
          <Link to="/quote" className="btn btn-cta">Discuss Your Project</Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
          </a>
        </div>
        <div className="sp-hero-meta">
          <span>From R45,000</span><span className="sp-meta-div">·</span>
          <span>Design + Fabrication management</span><span className="sp-meta-div">·</span>
          <span>Full project management</span>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">The Problem</span>
          <h2 className="section-title">When You Need Custom</h2>
        </div>
        <div className="sp-pain-grid">
          <div className="sp-pain-card"><span className="sp-pain-num">01</span><h3>Your production process has a bottleneck that no standard machine solves</h3><p>Your specific part, material, or process requirement doesn't match anything available off the shelf. The only solution is a machine designed exactly for your application.</p></div>
          <div className="sp-pain-card"><span className="sp-pain-num">02</span><h3>Manual labour is too slow or inconsistent for your output requirement</h3><p>You need consistent output at a rate that manual workers can't sustain — but a fully automated production line is not justified. A semi-automated custom machine hits the right balance.</p></div>
          <div className="sp-pain-card"><span className="sp-pain-num">03</span><h3>Your critical machine is obsolete and unrepairable</h3><p>The machine your production depends on is obsolete — no spare parts, no support, no replacements. We reverse-engineer, redesign, and rebuild it — better than the original.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Build</span>
          <h2 className="section-title">Custom Machinery Capabilities</h2>
        </div>
        <div className="sp-two-col">
          <div>
            <p className="sp-lead">We take your production challenge from concept through CAD design, fabrication management, assembly, and commissioning — handling the entire project under one contract.</p>
            <ul className="sp-list">
              <li>Custom welding jigs and fixtures</li>
              <li>Assembly and production aids</li>
              <li>Custom conveyor sections and transfer systems</li>
              <li>Pressure testing rigs and test benches</li>
              <li>Forming tools and dies (sheet metal)</li>
              <li>Hydraulic and pneumatic clamping systems</li>
              <li>Semi-automated production machines</li>
              <li>Machine guarding and safety enclosures</li>
              <li>Reverse engineering of obsolete equipment</li>
            </ul>
          </div>
          <div className="sp-highlight-box">
            <h3>Full Project Scope</h3>
            <div className="sp-tech-list">
              <span>Concept design</span><span>CAD modelling</span><span>Manufacturing drawings</span>
              <span>Fabrication management</span><span>Quality control</span><span>Electrical integration</span>
              <span>PLC automation (optional)</span><span>Site commissioning</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Process</span>
          <h2 className="section-title">From Brief to Commissioned Machine</h2>
        </div>
        <div className="process-grid">
          <div className="process-step"><div className="process-number">01</div><h3>Requirements Workshop</h3><p>We meet (on-site or remote) to understand your production requirement, constraints, budget, and timeline. We ask the right engineering questions.</p></div>
          <div className="process-step"><div className="process-number">02</div><h3>Concept &amp; Quotation</h3><p>We produce a concept design with preliminary 3D CAD. You review, provide feedback, and approve the concept before we issue the full quotation.</p></div>
          <div className="process-step"><div className="process-number">03</div><h3>Detailed Design &amp; Build</h3><p>Full manufacturing drawings are produced. Fabrication is managed at our preferred workshops. We quality-check at each stage and manage the build timeline.</p></div>
          <div className="process-step"><div className="process-number">04</div><h3>Commission &amp; Handover</h3><p>Machine is assembled, tested, and commissioned at your facility. We provide operator training, maintenance manual, and warranty documentation.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container sp-case-container">
        <div className="section-header">
          <span className="section-tag">Real Project</span>
          <h2 className="section-title">Custom Welding Positioner — Pretoria Fabrication Shop</h2>
        </div>
        <div className="sp-case-grid">
          <div className="sp-case-block"><span className="sp-case-label">The Problem</span><p>A fabrication shop needed to weld large cylindrical pressure vessels in multiple positions. Manual repositioning was taking 2–3 hours per vessel and causing back injuries. No commercial positioner in their budget fit the vessel dimensions.</p></div>
          <div className="sp-case-block"><span className="sp-case-label">The Solution</span><p>Custom 2-tonne capacity welding positioner with motorised rotation, adjustable height, and variable speed control. Designed in Fusion 360, fabricated from 12mm plate, with a geared motor drive and footswitch control. Built for R62,000.</p></div>
          <div className="sp-case-block sp-result"><span className="sp-case-label">The Result</span><p>Repositioning time reduced from 2.5 hours to under 15 minutes. No further back injury incidents. Weld quality improved due to consistent flat/horizontal positioning. ROI achieved within 4 months of operation.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Investment</span>
          <h2 className="section-title">Custom Machinery Pricing</h2>
        </div>
        <div className="pricing-highlight">
          <p className="price-from">Starting from</p>
          <div className="price-amount">R45,000</div>
          <p>Full project including design, fabrication management, assembly, and commissioning. Complex automated machines from R80,000 to R200,000+.</p>
          <Link to="/quote" className="btn btn-cta">Discuss Your Project</Link>
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
        <h2>Have a Machine Challenge?</h2>
        <p>Tell us what you need built. We'll send a concept and a quote — no obligation.</p>
        <div className="cta-buttons">
          <Link to="/quote" className="btn btn-cta">Discuss Your Project</Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default CustomMachineryPage;
