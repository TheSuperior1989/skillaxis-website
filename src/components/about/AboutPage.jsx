import SEO from '../common/SEO';
import { PageHero, Steps, CtaSection, SectionHeader } from '../common/ServiceBlocks';
import './AboutPage.css';

const SERVICE = 'General enquiry';

const numbers = [
  { value: '11,000+', label: 'part and assembly files in our CAD library, every one checked for fit' },
  { value: 'R132,500', label: 'largest single job: a manual lathe converted to CNC under a written agreement' },
  { value: '3,300+', label: 'job cards run through our workshop software' },
  { value: '1,100', label: 'motors in the MotorArmour programme for one national distributor' },
];

const capabilities = [
  { title: 'Mechanical design', items: ['3D design and manufacturing drawings', 'Plant and factory layouts', 'Patent drawing sets', 'Reverse engineering'] },
  { title: 'Machining and controls', items: ['CNC mill and lathe conversions', 'CAM and G-code programming', 'Tool changers and lead screws', 'Jigs, fixtures and tooling'] },
  { title: 'Software and marketing', items: ['Workshop management system', 'Inventory, quoting and booking systems', 'Business websites', 'Google Ads management'] },
  { title: 'Products', items: ['MotorArmour™ motor protection', 'Workshop Management System', 'Custom equipment packages'] },
];

const AboutPage = () => (
  <div className="service-page">
    <SEO
      title="About SkillAxis Dynamics | Founder-led Engineering Company, Pretoria"
      description="SkillAxis Dynamics (Pty) Ltd is a founder-led engineering and software company in Pretoria. Design, drawings, CNC, custom machinery, workshop software and MotorArmour motor protection from one engineer."
      canonical="/about"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About SkillAxis Dynamics',
        description: 'Founder-led engineering and software company based in Pretoria, South Africa.',
        provider: { '@type': 'LocalBusiness', name: 'SkillAxis Dynamics' },
      }}
    />

    <PageHero
      tag="About · Pretoria, South Africa"
      title="An engineering company built on the workshop floor."
      intro="SkillAxis Dynamics (Pty) Ltd started where most of our clients are: in a working turbocharger workshop, designing tools, converting machines to CNC and writing the software to run the place. Everything we sell today grew out of solving those problems for real."
      meta={['Founder-led', 'Registered (Pty) Ltd', 'Pretoria, serving South Africa']}
      service={SERVICE}
      waMessage="Hi, I'd like to find out more about SkillAxis Dynamics."
      primaryLabel="Talk to us"
    />

    <section className="sp-section">
      <div className="container about-story">
        <div>
          <SectionHeader tag="The story" title="Why one engineer does the whole chain" />
          <p className="sp-lead">
            Most technical jobs fail in the gaps: the designer who has never machined a part, the programmer who has never stood next to the machine, the software that was built for someone else's business.
          </p>
          <p>
            SkillAxis was set up to close those gaps. The same person designs the part, draws it, programs the CNC, builds the fixture and writes the system that tracks the job. That is why our drawings machine properly, our machines get commissioned without drama, and our software gets used.
          </p>
          <p>
            We are deliberately small. You deal with the founder, not an account manager. For bigger builds we bring in trusted fabricators and electricians, and we manage them for you.
          </p>
        </div>
        <dl className="about-numbers">
          {numbers.map((n) => (
            <div key={n.label}>
              <dt>{n.value}</dt>
              <dd>{n.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <SectionHeader tag="People" title="Who you will work with" />
        <div className="about-team-grid">
          <div className="about-team-member">
            <div className="about-avatar" aria-hidden="true">CvS</div>
            <h3>Christiaan von Stade</h3>
            <p className="about-team-role">Founder and Lead Engineer</p>
            <p className="about-team-bio">
              Turbomachinery engineer and draughtsman. Designs, draws, programs and builds: CNC conversions, tooling, plant layouts, custom machinery and the software behind it. Leads every engineering job personally.
            </p>
            <div className="about-team-skills">
              <span>Mechanical design</span><span>CNC and CAM</span><span>Controls</span><span>Software</span>
            </div>
          </div>
          <div className="about-team-member">
            <div className="about-avatar" aria-hidden="true">RvS</div>
            <h3>Ruan von Stade</h3>
            <p className="about-team-role">Turbocharger and Machining Specialist</p>
            <p className="about-team-bio">
              Turbocharger builds, billet upgrades and the CNC machining behind them: housings, flanges, jigs and fixtures made to the drawing.
            </p>
            <div className="about-team-skills">
              <span>Turbochargers</span><span>CNC machining</span><span>Balancing</span>
            </div>
          </div>
          <div className="about-team-member">
            <div className="about-avatar" aria-hidden="true">M</div>
            <h3>Morgan</h3>
            <p className="about-team-role">AI Operations</p>
            <p className="about-team-bio">
              Our AI engineer. Runs the Google Ads campaigns and budget pacing, writes the monthly reports, keeps the job and certificate systems in order and does the first pass on drawings, costings and documents so the engineers spend their hours on engineering.
            </p>
            <div className="about-team-skills">
              <span>Google Ads</span><span>Reporting</span><span>Automation</span>
            </div>
          </div>
          <div className="about-team-member">
            <div className="about-avatar" aria-hidden="true">SvS</div>
            <h3>Sure von Stade</h3>
            <p className="about-team-role">Co-Founder, Design and Brand</p>
            <p className="about-team-bio">
              Handles brand identity, graphic design and marketing material for SkillAxis clients.
            </p>
            <div className="about-team-skills">
              <span>Brand identity</span><span>Graphic design</span><span>Content</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <SectionHeader tag="Capabilities" title="What we cover" />
        <div className="about-capabilities-grid">
          {capabilities.map((c) => (
            <div key={c.title} className="about-cap-item">
              <span className="about-cap-label">{c.title}</span>
              <ul className="sp-list">
                {c.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Steps
      tag="How we work"
      title="The rules we work by"
      alt
      steps={[
        { title: 'Scope before price', text: 'We ask the engineering questions first, so the price is based on the real job.' },
        { title: 'Fixed prices', text: 'Never hourly. Design, manufacturing and installation as separate fixed lines.' },
        { title: 'Documented delivery', text: 'Drawings, files, programs or source handed over with the job. You own what you paid for.' },
        { title: 'Honest answers', text: 'If a machine is not worth converting or a job is not for us, we say so up front.' },
      ]}
    />

    <CtaSection
      title="Got a job that needs an engineer?"
      text="Send a photo, a sketch or two lines on WhatsApp. You will get a straight answer."
      service={SERVICE}
      waMessage="Hi, I'd like to discuss a project with SkillAxis Dynamics."
    />
  </div>
);

export default AboutPage;
