import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import aboutHero from '../../assets/images/hero/about-hero.jpg';
import team1 from '../../assets/images/team/team1.jpg';
import team2 from '../../assets/images/team/team2.jpg';
import '../cnc-conversions/CNCConversionsPage.css';
import './AboutPage.css';

const AboutPage = () => (
  <div className="service-page">
    <SEO
      title="About SkillAxis Dynamics — Pretoria Engineering & Digital Services"
      description="SkillAxis Dynamics is a Pretoria-based engineering and digital services firm. CNC conversions, automation retrofits, CAD drafting, custom machinery, web development, and graphic design."
      canonical="/about"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About SkillAxis Dynamics',
        description: 'Engineering and digital services firm based in Pretoria, South Africa.',
        provider: { '@type': 'LocalBusiness', name: 'SkillAxis Dynamics' },
      }}
    />

    <section className="sp-hero about-hero-bg" style={{ backgroundImage: `linear-gradient(rgba(8,8,8,0.70), rgba(8,8,8,0.82)), url(${aboutHero})` }}>
      <div className="container">
        <span className="page-hero-tag">About · Pretoria, South Africa</span>
        <h1>About SkillAxis Dynamics</h1>
        <p>We're a technical services firm based in Pretoria, South Africa. Engineering precision meets digital execution — one team, fixed prices, measurable outcomes.</p>
        <div className="sp-hero-meta">
          <span>Pretoria, Gauteng</span><span className="sp-meta-div">·</span>
          <span>Engineering + Digital</span><span className="sp-meta-div">·</span>
          <span>Fixed-price projects</span>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="sp-two-col">
          <div>
            <div className="section-header">
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">What We Are</h2>
            </div>
            <p className="sp-lead">SkillAxis Dynamics started as a CNC conversion and mechanical engineering operation and expanded into digital services as clients asked for more.</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '16px' }}>
              The thread connecting everything we do is technical rigour. Whether we're commissioning a CNC lathe conversion or deploying a React-based web application, we apply the same discipline: understand the requirement properly, scope it clearly, execute to a fixed price, and deliver documentation.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We work with manufacturers, workshops, engineering firms, and businesses that want quality work done by people who know what they're doing — not agencies that subcontract to the cheapest available resource.
            </p>
          </div>
          <div className="sp-highlight-box">
            <h3>Technical Stack</h3>
            <div className="sp-tech-list">
              <span>LinuxCNC</span><span>GRBL</span><span>Mach3</span>
              <span>Fusion 360</span><span>AutoCAD</span><span>SolidWorks</span>
              <span>Siemens S7</span><span>Delta PLC</span><span>React</span>
              <span>Node.js</span><span>Python</span><span>WordPress</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">What We Deliver</h2>
        </div>
        <div className="about-capabilities-grid">
          <div className="about-cap-item">
            <span className="about-cap-label">Industries Served</span>
            <ul className="sp-list">
              <li>Manufacturing and machining</li>
              <li>Fabrication and welding shops</li>
              <li>Engineering consulting firms</li>
              <li>Industrial equipment suppliers</li>
              <li>Retail and e-commerce</li>
              <li>Professional services</li>
            </ul>
          </div>
          <div className="about-cap-item">
            <span className="about-cap-label">Engineering Services</span>
            <ul className="sp-list">
              <li>CNC mill and lathe conversions</li>
              <li>Industrial automation retrofits</li>
              <li>Mechanical CAD drafting (ISO)</li>
              <li>Custom machinery design and build</li>
              <li>Reverse engineering</li>
              <li>Machine guarding and compliance</li>
            </ul>
          </div>
          <div className="about-cap-item">
            <span className="about-cap-label">Digital Services</span>
            <ul className="sp-list">
              <li>Business websites (from R1,500)</li>
              <li>E-commerce stores</li>
              <li>Custom web applications</li>
              <li>REST API development</li>
              <li>Logo and brand identity</li>
              <li>Social media management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">The Team</span>
          <h2 className="section-title">Our Founders</h2>
        </div>
        <div className="about-team-grid">
          <div className="about-team-member">
            <div className="about-team-photo-wrap">
              <img src={team1} alt="Christiaan Von Stade" className="about-team-photo" loading="lazy" />
            </div>
            <h3>Christiaan Von Stade</h3>
            <p className="about-team-role">Founder &amp; Lead Engineer</p>
            <p className="about-team-bio">Mechanical engineer with hands-on experience in CNC conversions, PLC automation, and CAD design. Manages all engineering projects and technical scoping.</p>
            <div className="about-team-skills">
              <span>CNC systems</span><span>PLC programming</span><span>CAD/CAM</span><span>Web dev</span>
            </div>
          </div>
          <div className="about-team-member">
            <div className="about-team-photo-wrap">
              <img src={team2} alt="Sure Von Stade" className="about-team-photo" loading="lazy" />
            </div>
            <h3>Sure Von Stade</h3>
            <p className="about-team-role">Co-Founder &amp; Creative Director</p>
            <p className="about-team-bio">Graphic designer and brand strategist specialising in visual identity for engineering and industrial clients. Manages all design and marketing projects.</p>
            <div className="about-team-skills">
              <span>Brand identity</span><span>Graphic design</span><span>Social media</span><span>Content</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">Our Approach</h2>
        </div>
        <div className="process-grid">
          <div className="process-step"><div className="process-number">01</div><h3>Scope before quoting</h3><p>We don't give you a number before we understand what you need. Every project starts with a proper brief — we ask the right questions before we price anything.</p></div>
          <div className="process-step"><div className="process-number">02</div><h3>Fixed-price contracts</h3><p>Your quote is your cost. We don't add change orders for work that was always part of the scope. Overruns are our problem, not yours.</p></div>
          <div className="process-step"><div className="process-number">03</div><h3>Documented delivery</h3><p>Every project is delivered with documentation: drawings, source code, credentials, or brand files. You own everything we produce.</p></div>
          <div className="process-step"><div className="process-number">04</div><h3>Post-delivery support</h3><p>30 days of support after handover, included on all projects. We don't disappear after we invoice.</p></div>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="container">
        <h2>Ready to Work With Us?</h2>
        <p>Engineering or digital — tell us what you need and we'll respond within 4 business hours.</p>
        <div className="cta-buttons">
          <Link to="/quote" className="btn btn-cta">Get a Quote</Link>
          <Link to="/case-studies" className="btn btn-ghost">View Case Studies</Link>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
