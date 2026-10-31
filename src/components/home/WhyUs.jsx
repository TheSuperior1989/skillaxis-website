import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faFileSignature, faTools, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import './WhyUs.css';

const reasons = [
  {
    icon: faUserCog,
    title: 'You deal with engineers',
    text: 'No account managers and no hand-offs. The engineers who scope your job are the ones who design, draw, program or build it.',
  },
  {
    icon: faFileSignature,
    title: 'Fixed prices, not hourly rates',
    text: 'You get a fixed price in writing before work starts. Design, manufacturing and installation are separate lines, so you can see what each part costs.',
  },
  {
    icon: faTools,
    title: 'We run what we sell',
    text: 'Our workshop software runs a real workshop daily. Our CNC work runs on machines we built. Our ads run for paying clients. Nothing here is theory.',
  },
  {
    icon: faFolderOpen,
    title: 'You own the files',
    text: 'Drawings, 3D models, G-code and source files are handed over with the job. No lock-in and no holding your designs hostage.',
  },
];

const inUse = ['A turbocharger repair workshop', 'A turbo parts distributor', 'An industrial contractor'];
const sectors = [
  'Turbocharger workshops',
  'Parts distributors',
  'Steel fabrication',
  'Rail machinery',
  'Freight and logistics',
  'Agriculture',
  'Mining equipment',
  'Food processing',
  'Industrial bearings and motors',
  'Hospitality',
];

const WhyUs = () => (
  <section className="why-us" id="why">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Why SkillAxis</span>
        <h2 className="section-title">One team for the whole chain</h2>
        <p className="section-subtitle">
          Most firms do one piece and hand the rest to someone else. We cover design, drawings, machining, controls and software, so nothing gets lost between suppliers.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((r) => (
          <div key={r.title} className="why-card">
            <div className="why-icon"><FontAwesomeIcon icon={r.icon} /></div>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        ))}
      </div>

      <div className="clients-band">
        <div className="clients-col">
          <span className="clients-label">Systems we built, in use right now at</span>
          <ul className="clients-names">
            {inUse.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
        <div className="clients-col">
          <span className="clients-label">Industries we have worked in</span>
          <ul className="clients-sectors">
            {sectors.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
