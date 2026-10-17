import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import './ServicesPage.css';

const services = [
  {
    tag: 'Product',
    title: 'Workshop Management System',
    description: 'Job cards, live workshop board, customer history, parts and queues. The system running a Pretoria turbo workshop daily, set up for yours.',
    from: 'R7,500 + R2,500/month',
    link: '/workshop-software',
  },
  {
    tag: 'Product',
    title: 'MotorArmour™ Motor Protection',
    description: 'Protection treatment for electric motors in wet and wash-down environments. Every motor tested, certified and tracked by serial number.',
    from: 'Quoted per motor',
    link: '/motorarmour',
  },
  {
    tag: 'Engineering',
    title: 'CAD Drawings, Plant Layouts & Patent Sets',
    description: 'Manufacturing drawings and BOMs, 3D factory layouts, patent drawing sets and reverse engineering, from a sketch, photo or part.',
    from: 'From R3,500',
    link: '/cad-design-drafting',
  },
  {
    tag: 'Engineering',
    title: 'CNC Conversions & G-code Programming',
    description: 'Manual mills and lathes converted to CNC, tool changers fitted, and production parts programmed, on site or remotely.',
    from: 'From R25,000',
    link: '/cnc-conversions',
  },
  {
    tag: 'Engineering',
    title: 'Custom Machinery & Equipment',
    description: 'Jigs, fixtures, tooling, test benches, racking, trolleys and process equipment. Design and manufacturing priced as separate fixed lines.',
    from: 'Fixed quote',
    link: '/custom-machinery-design',
  },
  {
    tag: 'Engineering',
    title: 'Machine Controls & Retrofits',
    description: 'Servo and stepper drives, spindle control, tool changers, electronic lead screws and control panel layouts for existing machines.',
    from: 'From R15,000',
    link: '/automation-retrofits',
  },
  {
    tag: 'Digital',
    title: 'Websites & Business Software',
    description: 'Business websites from R1,500, plus inventory, quoting, invoicing and booking systems built around how your team works.',
    from: 'From R1,500',
    link: '/web-software-engineering',
  },
  {
    tag: 'Digital',
    title: 'Google Ads Management',
    description: 'Search campaigns, landing pages, lead tracking and weekly clean-ups. 82 leads in a month at R31.69 each for a parts distributor.',
    from: 'From R4,400/month',
    link: '/google-ads',
  },
  {
    tag: 'Digital',
    title: 'Graphic Design & Branding',
    description: 'Logos, brand identity, company profiles, stationery and marketing material for technical businesses.',
    from: 'From R2,500',
    link: '/contact?service=Graphic%20Design',
  },
];

const ServicesPage = () => (
  <div className="service-page">
    <SEO
      title="Engineering, CNC, Drawings and Software Services | Pretoria"
      description="Workshop management software, MotorArmour motor protection, CAD and plant drawings, CNC conversions and programming, custom machinery, machine controls, websites and Google Ads. Fixed prices. SkillAxis Dynamics, Pretoria."
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
        <h1>Everything we do, with starting prices</h1>
        <p>Two proven products, five engineering services and the digital work that brings customers in. Every service lists a starting price, and every job gets a fixed price in writing.</p>
        <div className="sp-hero-meta">
          <span>Fixed-price quotes</span><span className="sp-meta-div">·</span>
          <span>No hourly rates</span><span className="sp-meta-div">·</span>
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
                <span className={`svc-hub-tag ${svc.tag === 'Digital' ? 'tag-digital' : 'tag-eng'}`}>{svc.tag}</span>
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
            <h3>One engineer, the whole chain</h3>
            <p>The person who scopes your job designs, draws, programs or builds it. Our CNC work runs on machines we built, and our software runs real businesses daily.</p>
          </div>
          <div className="sp-pain-card">
            <span className="sp-pain-num">02</span>
            <h3>Fixed-price contracts, not hourly retainers</h3>
            <p>Every project is scoped upfront and priced as a fixed cost. You know what you're paying before we start. Design, manufacturing and installation are separate fixed lines, so you see what each part costs.</p>
          </div>
          <div className="sp-pain-card">
            <span className="sp-pain-num">03</span>
            <h3>You own everything we produce</h3>
            <p>Source code, CAD files, drawings, brand assets - you receive full ownership and copies of everything we create. No vendor lock-in, no withholding deliverables.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="container">
        <h2>Which Service Do You Need?</h2>
        <p>Tell us what you are trying to solve. Send photos, a sketch or two lines on WhatsApp and we will come back with questions and a ballpark.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">Send an enquiry</Link>
          <a href="https://wa.me/27782964786?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20SkillAxis%20Dynamics." target="_blank" rel="noopener noreferrer" className="btn btn-ghost">WhatsApp Us</a>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
