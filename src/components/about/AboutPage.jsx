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

const moreTeam = [
  { name: 'Morgan', initial: 'M', role: 'Growth and reporting', bio: 'Runs the Google Ads campaigns and the daily budget pacer, writes the monthly client reports and keeps the lead dashboards honest.', skills: ['Google Ads', 'Reports', 'Dashboards'] },
  { name: 'Vera', initial: 'V', role: 'Drawings and documentation', bio: 'Turns a released model into the drawing set, bill of materials, flat patterns, datasheet and manufacturing pack, and keeps revisions straight.', skills: ['Drawing sets', 'BOMs', 'Manuals'] },
  { name: 'Dax', initial: 'D', role: 'CAM and programs', bio: 'Writes and checks production programs against the machine limits, posts them for the controller and keeps the tool library current.', skills: ['G-code', 'Tool libraries', 'Checks'] },
  { name: 'Nia', initial: 'N', role: 'Quotes and scheduling', bio: 'Builds the costing from the bill of materials, prepares the fixed-price quote, tracks deposits and keeps every job on the timeline.', skills: ['Costing', 'Quotes', 'Timelines'] },
  { name: 'Remy', initial: 'R', role: 'Films and renders', bio: 'Produces the renders, explainer films and boards from the model for every design review and client package.', skills: ['Renders', 'Films', 'Boards'] },
];

const capabilities = [
  { title: 'Mechanical design', items: ['3D design and manufacturing drawings', 'Plant and factory layouts', 'Patent drawing sets', 'Reverse engineering'] },
  { title: 'Machining and controls', items: ['CNC mill and lathe conversions', 'CAM and G-code programming', 'Tool changers and lead screws', 'Jigs, fixtures and tooling'] },
  { title: 'Software and marketing', items: ['Workshop management system', 'Inventory, quoting and booking systems', 'Business websites', 'Google Ads management'] },
  { title: 'Products', items: ['MotorArmour™ motor protection', 'Workshop Management System', 'CT12-420 chain tensioner', 'Design Packs'] },
];

const AboutPage = () => (
  <div className="service-page">
    <SEO
      title="About SkillAxis Dynamics | Engineering and Software Company, Pretoria"
      description="SkillAxis Dynamics (Pty) Ltd is an engineering and software company in Pretoria. Design, drawings, CNC, custom machinery, workshop software and MotorArmour motor protection from one team."
      canonical="/about"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About SkillAxis Dynamics',
        description: 'Engineering and software company based in Pretoria, South Africa.',
        provider: { '@type': 'LocalBusiness', name: 'SkillAxis Dynamics' },
      }}
    />

    <PageHero
      tag="About · Pretoria, South Africa"
      title="An engineering company built on the workshop floor."
      intro="SkillAxis Dynamics (Pty) Ltd started where most of our clients are: in a working turbocharger workshop, designing tools, converting machines to CNC and writing the software to run the place. Everything we sell today grew out of solving those problems for real."
      meta={['Engineering and software under one roof', 'Registered (Pty) Ltd', 'Pretoria, serving South Africa']}
      service={SERVICE}
      waMessage="Hi, I'd like to find out more about SkillAxis Dynamics."
      primaryLabel="Talk to us"
    />

    <section className="sp-section">
      <div className="container about-story">
        <div>
          <SectionHeader tag="The story" title="Why we do the whole chain in-house" />
          <p className="sp-lead">
            Most technical jobs fail in the gaps: the designer who has never machined a part, the programmer who has never stood next to the machine, the software that was built for someone else's business.
          </p>
          <p>
            SkillAxis was set up to close those gaps. The team that designs the part also draws it, programs the CNC, builds the fixture and writes the system that tracks the job. That is why our drawings machine properly, our machines get commissioned without drama, and our software gets used.
          </p>
          <p>
            You deal with the engineers, not an account manager. Our team carries the drafting, documentation, reporting and campaign work behind every job, and for bigger builds we bring in trusted fabricators and electricians and manage them for you.
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
            <p className="about-team-role">Managing Director and Lead Engineer</p>
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
            <div className="about-avatar" aria-hidden="true">SvS</div>
            <h3>Sure von Stade</h3>
            <p className="about-team-role">Director, Design and Brand</p>
            <p className="about-team-bio">
              Handles brand identity, graphic design and marketing material for SkillAxis clients.
            </p>
            <div className="about-team-skills">
              <span>Brand identity</span><span>Graphic design</span><span>Content</span>
            </div>
          </div>
          {moreTeam.map((m) => (
            <div key={m.name} className="about-team-member">
              <div className="about-avatar" aria-hidden="true">{m.initial}</div>
              <h3>{m.name}</h3>
              <p className="about-team-role">{m.role}</p>
              <p className="about-team-bio">{m.bio}</p>
              <div className="about-team-skills">
                {m.skills.map((k) => <span key={k}>{k}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
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
