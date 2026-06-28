import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SEO from '../common/SEO';
import '../cnc-conversions/CNCConversionsPage.css';

const WA_URL = 'https://wa.me/27782964786?text=' + encodeURIComponent('Hi, I need a quote for a web or software development project.');

const faqData = [
  { q: 'How much does a website cost in South Africa?', a: 'A single-page business website starts from R1,500. A standard multi-page business website with contact forms and CMS ranges from R6,000 to R18,000. E-commerce stores start from R12,000. Custom web applications (booking systems, portals, dashboards) start from R25,000. We provide a fixed-price quote for every project.' },
  { q: 'How long does it take to build a website?', a: 'A single-page site typically takes 3–5 working days. A standard multi-page business website takes 2–4 weeks. E-commerce and custom applications take 4–12 weeks depending on complexity. We provide a timeline in your quote and stick to it.' },
  { q: 'Do you build websites that work on mobile?', a: 'Yes. Every website we build is fully responsive — it adapts to mobile phones, tablets, and desktops automatically. We test on multiple devices and screen sizes before delivery.' },
  { q: 'Will my website show up on Google?', a: 'We build every site with basic on-page SEO — meta titles, descriptions, structured data, sitemap, robots.txt, and fast loading performance. For ongoing SEO campaigns, we can recommend additional services.' },
  { q: 'What do I get after the project is complete?', a: 'You receive full ownership of the website, source code, hosting credentials, and domain (if we registered it). We provide a handover document and 30 days of post-launch support for bug fixes.' },
];

const WebSoftwarePage = () => (
  <div className="service-page">
    <SEO
      title="Web & Software Engineering Services — South Africa | From R1,500"
      description="Custom websites, web applications, and software development in South Africa. Single-page sites from R1,500. E-commerce, custom apps, and enterprise software. SkillAxis Dynamics, Pretoria."
      canonical="/web-software-engineering"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Web and Software Engineering',
        provider: { '@type': 'LocalBusiness', name: 'SkillAxis Dynamics' },
        areaServed: 'South Africa',
        description: 'Custom web development, web applications, and software engineering in South Africa.',
      }}
    />

    <section className="sp-hero">
      <div className="container">
        <span className="page-hero-tag">Web & Software Engineering · South Africa</span>
        <h1>Web &amp; Software Engineering Services — South Africa</h1>
        <p>Fast, professional websites and custom software solutions. From a single-page business site to a complex web application — we build what you need, priced fairly, delivered on time.</p>
        <div className="sp-hero-actions">
          <Link to="/quote" className="btn btn-cta">Get a Quote</Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
          </a>
        </div>
        <div className="sp-hero-meta">
          <span>From R1,500</span><span className="sp-meta-div">·</span>
          <span>React · Node.js · Python</span><span className="sp-meta-div">·</span>
          <span>Mobile-first, SEO-ready</span>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">The Problem</span>
          <h2 className="section-title">Why Clients Need Better Digital Solutions</h2>
        </div>
        <div className="sp-pain-grid">
          <div className="sp-pain-card"><span className="sp-pain-num">01</span><h3>Your current website doesn't generate leads</h3><p>A website that doesn't convert visitors into inquiries is just a cost centre. We build sites architected around conversion — clear messaging, strong CTAs, and fast performance.</p></div>
          <div className="sp-pain-card"><span className="sp-pain-num">02</span><h3>You're managing business processes manually or in spreadsheets</h3><p>Quoting, job tracking, invoicing, inventory — if you're doing it in spreadsheets or on paper, a custom web application can automate and streamline it significantly.</p></div>
          <div className="sp-pain-card"><span className="sp-pain-num">03</span><h3>Your website is slow, broken, or doesn't show on Google</h3><p>Slow load times, broken mobile layouts, and poor SEO directly cost you business. We fix these — or build from scratch if the existing site isn't worth saving.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Services</span>
          <h2 className="section-title">Web &amp; Software Offerings</h2>
        </div>
        <div className="sp-two-col">
          <div>
            <p className="sp-lead">We build websites that rank, load fast, and convert — and custom software that solves real business problems.</p>
            <ul className="sp-list">
              <li>Single-page business websites (from R1,500)</li>
              <li>Multi-page business websites with CMS</li>
              <li>E-commerce stores (WooCommerce, custom)</li>
              <li>Custom web applications and portals</li>
              <li>Business automation and workflow tools</li>
              <li>REST API development and integration</li>
              <li>Mobile-responsive redesigns</li>
              <li>SEO technical optimisation</li>
              <li>Website speed and performance audits</li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '4px' }}>Also available as part of our full digital service:</p>
              <ul className="sp-list">
                <li>Graphic design and brand identity</li>
                <li>Social media marketing and management</li>
                <li>Content creation and copywriting</li>
              </ul>
            </div>
          </div>
          <div className="sp-highlight-box">
            <h3>Technologies We Use</h3>
            <div className="sp-tech-list">
              <span>React</span><span>Next.js</span><span>Node.js</span>
              <span>Python</span><span>WordPress</span><span>WooCommerce</span>
              <span>PostgreSQL</span><span>MongoDB</span><span>Vite</span>
              <span>Tailwind CSS</span><span>EmailJS</span><span>Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Process</span>
          <h2 className="section-title">How We Build</h2>
        </div>
        <div className="process-grid">
          <div className="process-step"><div className="process-number">01</div><h3>Discovery &amp; Brief</h3><p>We understand your business, target audience, goals, and technical requirements. We ask the questions that ensure we build the right thing — not just what you described.</p></div>
          <div className="process-step"><div className="process-number">02</div><h3>Design &amp; Prototype</h3><p>We produce wireframes or design mockups for your approval before writing code. You know exactly what you're getting before we build it.</p></div>
          <div className="process-step"><div className="process-number">03</div><h3>Build &amp; Test</h3><p>Development in sprints with regular progress updates. Full testing across devices, browsers, and screen sizes before delivery.</p></div>
          <div className="process-step"><div className="process-number">04</div><h3>Launch &amp; Support</h3><p>We deploy to production, configure hosting and DNS, submit to Google Search Console, and provide 30 days post-launch support.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container sp-case-container">
        <div className="section-header">
          <span className="section-tag">Real Project</span>
          <h2 className="section-title">Engineering Firm Website — Cape Town</h2>
        </div>
        <div className="sp-case-grid">
          <div className="sp-case-block"><span className="sp-case-label">The Problem</span><p>A Cape Town structural engineering firm had a 2015 WordPress site that was loading in 8+ seconds, not ranking on Google, and generating zero online inquiries. Their competitors were winning work through their online presence.</p></div>
          <div className="sp-case-block"><span className="sp-case-label">The Solution</span><p>Complete rebuild in React with Vite. New content architecture focused on their key services. On-page SEO, schema markup, sitemap, and Google Search Console setup. Static site generation for optimal performance.</p></div>
          <div className="sp-case-block sp-result"><span className="sp-case-label">The Result</span><p>Load time reduced from 8.2s to under 1.5s. Ranked on page 1 of Google for 3 target keywords within 90 days. 4 qualified project inquiries generated in the first month after launch.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">Website &amp; Software Pricing</h2>
        </div>
        <div className="pricing-highlight">
          <p className="price-from">Single-page website from</p>
          <div className="price-amount">R1,500</div>
          <p>Multi-page business sites from R6,000. E-commerce from R12,000. Custom web applications from R25,000. Fixed-price quotes — no hidden costs.</p>
          <Link to="/quote" className="btn btn-cta">Get Your Quote</Link>
        </div>
        <div className="sp-pricing-factors" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <Link to="/pricing" style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>
            View full pricing breakdown →
          </Link>
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
        <h2>Ready to Build Something?</h2>
        <p>Tell us what you need — website, app, or software tool. We'll quote it within 24 hours.</p>
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

export default WebSoftwarePage;
