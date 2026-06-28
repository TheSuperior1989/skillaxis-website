import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SEO from '../common/SEO';
import '../cnc-conversions/CNCConversionsPage.css';

const WA_URL = 'https://wa.me/27782964786?text=' + encodeURIComponent('Hi, I need a quote for mechanical CAD drafting services.');

const faqData = [
  { q: 'What CAD software do you use?', a: 'We primarily use Autodesk Fusion 360 for 3D modelling and SolidWorks for detailed mechanical design. For 2D drafting and manufacturing drawings, we use AutoCAD. All deliverables are provided in your preferred format (DWG, DXF, STEP, IGES, PDF).' },
  { q: 'How much does mechanical CAD drafting cost in South Africa?', a: 'CAD drafting services start from R3,500 for a single detailed assembly drawing with BOMs and parts list. Full project drawing sets range from R8,000 to R25,000+ depending on complexity and number of drawings. We quote per project after receiving a brief.' },
  { q: 'What types of drawings do you produce?', a: 'We produce general assembly drawings (GA drawings), part detail drawings, weld assembly drawings, machining drawings (with tolerances and surface finish callouts), fabrication drawings, pipe layout drawings, and 3D models for visualisation or manufacturing.' },
  { q: 'Can you work from sketches, photos, or physical parts?', a: 'Yes. We work from rough hand sketches, photographs, client descriptions, or by measuring physical parts (reverse engineering to drawing). We also work from existing drawings that need updating or converting to a new standard.' },
  { q: 'Do your drawings meet ISO and SANS standards?', a: 'Yes. All drawings are produced to ISO 128/ISO 2768 standards (or ASME if required). Title blocks, tolerancing, surface finish symbols, weld symbols, and projection angles all comply with the appropriate engineering drawing standard for your application.' },
];

const CADDraftingPage = () => (
  <div className="service-page">
    <SEO
      title="Mechanical CAD Drafting & Design Services — South Africa"
      description="Professional mechanical CAD drafting, 2D and 3D design, manufacturing drawings, and technical documentation from R3,500. Serving Pretoria and South Africa. SkillAxis Dynamics."
      canonical="/cad-design-drafting"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Mechanical CAD Drafting and Design',
        provider: { '@type': 'LocalBusiness', name: 'SkillAxis Dynamics' },
        areaServed: 'South Africa',
        description: 'Professional mechanical CAD drafting and 3D design services in South Africa. Manufacturing-ready drawings to ISO standard.',
      }}
    />

    <section className="sp-hero">
      <div className="container">
        <span className="page-hero-tag">Mechanical Engineering · South Africa</span>
        <h1>Mechanical CAD Drafting &amp; Design Services — South Africa</h1>
        <p>Accurate, manufacturing-ready mechanical drawings. We produce detailed assembly drawings, part drawings, fabrication drawings, and 3D models — to ISO standard, in your required format, on deadline.</p>
        <div className="sp-hero-actions">
          <Link to="/quote" className="btn btn-cta">Get a Quote</Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
          </a>
        </div>
        <div className="sp-hero-meta">
          <span>From R3,500 per drawing set</span><span className="sp-meta-div">·</span>
          <span>Fusion 360 · AutoCAD · SolidWorks</span><span className="sp-meta-div">·</span>
          <span>ISO 128 compliant</span>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">The Problem</span>
          <h2 className="section-title">When You Need Professional CAD Drafting</h2>
        </div>
        <div className="sp-pain-grid">
          <div className="sp-pain-card"><span className="sp-pain-num">01</span><h3>Your workshop sketches aren't good enough for fabrication</h3><p>Fabricators and machinists need dimensioned, toleranced drawings — not sketches. Poor drawings cause costly errors, rework, and disputes over who is at fault.</p></div>
          <div className="sp-pain-card"><span className="sp-pain-num">02</span><h3>You need drawings for quotes or compliance</h3><p>Funding applications, engineering compliance submissions, and supplier quotes all require professional technical drawings. We produce drawings that meet the standard your application requires.</p></div>
          <div className="sp-pain-card"><span className="sp-pain-num">03</span><h3>Your existing drawings are outdated or in the wrong format</h3><p>Legacy drawings on paper or in obsolete software formats need converting. We digitise and update drawings to current standards and modern file formats.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Deliver</span>
          <h2 className="section-title">CAD Drafting Capabilities</h2>
        </div>
        <div className="sp-two-col">
          <div>
            <p className="sp-lead">We produce drawings for fabrication, machining, welding, and client presentation — from detailed parts to full assembly documentation packages.</p>
            <ul className="sp-list">
              <li>General assembly (GA) drawings</li>
              <li>Part detail drawings with GD&amp;T tolerancing</li>
              <li>Weld assembly drawings (AWS/ISO symbols)</li>
              <li>Machining drawings with surface finish callouts</li>
              <li>Fabrication and sheet metal drawings</li>
              <li>Piping and pipeline layout drawings</li>
              <li>Bill of materials (BOM) and parts lists</li>
              <li>3D solid models (Fusion 360, STEP/IGES export)</li>
              <li>Reverse engineering from physical parts</li>
            </ul>
          </div>
          <div className="sp-highlight-box">
            <h3>File Formats Delivered</h3>
            <div className="sp-tech-list">
              <span>DWG / DXF</span><span>PDF (A3/A1)</span><span>STEP</span>
              <span>IGES</span><span>STL (3D print)</span><span>SolidWorks (.sldprt)</span>
              <span>Fusion 360</span><span>Raster images</span>
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
          <div className="process-step"><div className="process-number">01</div><h3>Brief &amp; Scope</h3><p>You send your requirements: sketches, photos, reference drawings, or verbal description. We clarify scope, format, and standard, then provide a quote.</p></div>
          <div className="process-step"><div className="process-number">02</div><h3>Draft &amp; Review</h3><p>We produce the first draft and send it for your review. You mark up corrections or changes — we revise until the drawing is exactly right.</p></div>
          <div className="process-step"><div className="process-number">03</div><h3>Final Delivery</h3><p>Final drawings are delivered in your required formats with revision history, title block populated, and all revision marks cleared.</p></div>
          <div className="process-step"><div className="process-number">04</div><h3>Ongoing Support</h3><p>Need revisions as the design evolves? We maintain source files and can issue revised drawings quickly as your project progresses.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container sp-case-container">
        <div className="section-header">
          <span className="section-tag">Real Project</span>
          <h2 className="section-title">Custom Jig Drawing Package — Automotive Supplier</h2>
        </div>
        <div className="sp-case-grid">
          <div className="sp-case-block"><span className="sp-case-label">The Problem</span><p>An automotive component supplier needed manufacturing drawings for a custom welding jig. They had a hand sketch and verbal description — no existing drawings that could be sent to their fabricator.</p></div>
          <div className="sp-case-block"><span className="sp-case-label">The Solution</span><p>Full 3D model in Fusion 360, GA drawing with tolerances and material callouts, individual part drawings for all machined components, weld assembly drawing, and a BOM — all delivered in DWG and PDF within 5 working days.</p></div>
          <div className="sp-case-block sp-result"><span className="sp-case-label">The Result</span><p>Fabrication went ahead without a single query back to the design team. First article passed dimensional inspection first time. The client now outsources all their drawing work to us.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Investment</span>
          <h2 className="section-title">CAD Drafting Pricing</h2>
        </div>
        <div className="pricing-highlight">
          <p className="price-from">Starting from</p>
          <div className="price-amount">R3,500</div>
          <p>Per drawing set including 2D detail drawing with tolerances, revision block, and PDF delivery. Full project drawing packages from R8,000.</p>
          <Link to="/quote" className="btn btn-cta">Get a Project Quote</Link>
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
        <h2>Need Professional Drawings?</h2>
        <p>Send us your sketch, photo, or description and we'll quote you a drawing package within 24 hours.</p>
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

export default CADDraftingPage;
