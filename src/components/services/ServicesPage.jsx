import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import './ServicesPage.css';

const services = [
  {
    tag: 'Engineering',
    title: 'CNC Conversions',
    description: 'Convert manual mills and lathes to full CNC operation. LinuxCNC, Mach3, and GRBL-based systems. Servo and stepper drives. Full commissioning and operator training.',
    from: 'From R25,000',
    link: '/cnc-conversions',
  },
  {
    tag: 'Engineering',
    title: 'Industrial Automation Retrofits',
    description: 'Upgrade manual or legacy machines with modern PLC controls, sensors, HMIs, and safety interlocks. Reduce downtime and eliminate operator error.',
    from: 'From R15,000',
    link: '/automation-retrofits',
  },
  {
    tag: 'Engineering',
    title: 'Mechanical CAD Drafting',
    description: 'Manufacturing-ready 2D and 3D drawings produced to ISO standard. GA drawings, part details, weld assemblies, machining drawings, and full project documentation packages.',
    from: 'From R3,500',
    link: '/cad-design-drafting',
  },
  {
    tag: 'Engineering',
    title: 'Custom Machinery Design & Build',
    description: 'Bespoke jigs, fixtures, production aids, and purpose-built machines. We manage the full project from concept design through fabrication management to on-site commissioning.',
    from: 'From R45,000',
    link: '/custom-machinery-design',
  },
  {
    tag: 'Digital',
    title: 'Web & Software Engineering',
    description: 'Custom websites, web applications, e-commerce stores, and business automation tools. React, Node.js, Python, and WordPress. SEO-ready, mobile-first.',
    from: 'From R1,500',
    link: '/web-software-engineering',
  },
  {
    tag: 'Digital',
    title: 'Google Ads Management',
    description: 'Google Ads campaigns that generate leads, not just clicks. Dedicated landing pages, conversion tracking, live dashboards, and weekly optimisation included in every package.',
    from: 'From R4,400/month',
    link: '/google-ads',
  },
  {
    tag: 'Digital',
    title: 'Graphic Design & Branding',
    description: 'Logo design, full brand identity packages, stationery, marketing materials, and social media graphics. Clean, professional design that communicates competence.',
    from: 'From R2,500',
    link: '/quote',
  },
];

const ServicesPage = () => (
  <div className="service-page">
    <SEO
      title="Engineering & Digital Services — Pretoria, South Africa"
      description="CNC conversions, automation retrofits, CAD drafting, custom machinery, web development, and graphic design. Full-spectrum engineering and digital services from Pretoria, South Africa."
      canonical="/services"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Services',
        description: 'Engineering and digital services from SkillAxis Dynamics, Pretoria, South Africa.',
        provider: { '@type': 'LocalBusiness', name: 'SkillAxis Dynamics' },
      }}
    />

    <section className="sp-hero">
      <div className="container">
        <span className="page-hero-tag">Services · Pretoria, South Africa</span>
        <h1>Engineering &amp; Digital Services — Pretoria</h1>
        <p>Five engineering disciplines and two digital verticals — all under one technical team. We don't subcontract to generalists. Every service is delivered by someone with hands-on experience in that specific discipline.</p>
        <div className="sp-hero-meta">
          <span>Fixed-price quotes</span><span className="sp-meta-div">·</span>
          <span>Quote within 24 hours</span><span className="sp-meta-div">·</span>
          <span>Pretoria-based, nationwide delivery</span>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">All Services</h2>
        </div>
        <div className="svc-hub-grid">
          {services.map((svc) => (
            <Link to={svc.link} key={svc.title} className="svc-hub-card">
              <div className="svc-hub-top">
                <span className={`svc-hub-tag ${svc.tag === 'Engineering' ? 'tag-eng' : 'tag-digital'}`}>{svc.tag}</span>
                <span className="svc-hub-from">{svc.from}</span>
              </div>
              <h3 className="svc-hub-title">{svc.title}</h3>
              <p className="svc-hub-desc">{svc.description}</p>
              <span className="svc-hub-link">Full details →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why SkillAxis</span>
          <h2 className="section-title">What Makes Us Different</h2>
        </div>
        <div className="sp-pain-grid">
          <div className="sp-pain-card">
            <span className="sp-pain-num">01</span>
            <h3>Specialist delivery, not generalist outsourcing</h3>
            <p>CNC work is done by engineers who operate CNC machines. Web work is done by developers who build production systems. We don't use a VA or a subcontractor to deliver work we can't do ourselves.</p>
          </div>
          <div className="sp-pain-card">
            <span className="sp-pain-num">02</span>
            <h3>Fixed-price contracts, not hourly retainers</h3>
            <p>Every project is scoped upfront and priced as a fixed cost. You know what you're paying before we start. We absorb overruns — they're not passed to you as a "change order."</p>
          </div>
          <div className="sp-pain-card">
            <span className="sp-pain-num">03</span>
            <h3>You own everything we produce</h3>
            <p>Source code, CAD files, drawings, brand assets — you receive full ownership and copies of everything we create. No vendor lock-in, no withholding deliverables.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="container">
        <h2>Which Service Do You Need?</h2>
        <p>Tell us what you're trying to solve — engineering or digital. We'll respond within 4 business hours with a scoping response or preliminary quote.</p>
        <div className="cta-buttons">
          <Link to="/quote" className="btn btn-cta">Get a Quote</Link>
          <a href="https://wa.me/27782964786?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20SkillAxis%20Dynamics." target="_blank" rel="noopener noreferrer" className="btn btn-ghost">WhatsApp Us</a>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
