import { Link } from 'react-router-dom';
import { VideoLoop, MediaFigure } from '../common/Media';
import { plant, press, packs, software, turbo, motorarmour } from '../../data/media';
import './Showreel.css';

// What the work looks like: short muted loops and stills from real jobs, each linked to
// the page that sells that kind of work.
const reel = [
  { media: plant.process, title: 'Plant layouts and walkthrough films', text: 'A two-phase steel fabrication plant modelled machine by machine, then filmed for the board.', to: '/plant-visualisation', span: 2 },
  { media: press.cycle, title: 'Machine design with FEA', text: 'A 60 t angle-flaring press: force sizing, 49 drawings, stress checks and a film in two days.', to: '/custom-machinery-design' },
  { media: turbo.cutaway, title: 'Explainer animations from CAD', text: 'A VNT turbocharger explained, generated from the model with nothing hand-animated.', to: '/design-pack' },
  { media: software.promoMuted, title: 'Workshop management software', text: 'Job cards, inventory, warranty claims and reports, live in a workshop every day.', to: '/workshop-software' },
  { media: packs.ct12HowItWorks, title: 'Design packs in days', text: 'A chain tensioner from reference to drawings, costing and films in one day.', to: '/design-pack' },
  { media: motorarmour.installed, title: 'MotorArmour motor protection', text: 'Treated motors on a wash-down line, each tested and certified.', to: '/motorarmour' },
  { media: press.feaAsFound, title: 'Press and machine capacity reports', text: 'Is the press in the corner really 100 t? A report with the numbers, from photos and a measurement sheet.', to: '/machine-capacity-report' },
];

const Showreel = () => (
  <section className="showreel" id="showreel">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">What the work looks like</span>
        <h2 className="section-title">Real models, real films, real machines</h2>
        <p className="section-subtitle">
          Everything here was generated from our own models and photographed on real jobs. Clients are never named; the work speaks.
        </p>
      </div>
      <div className="reel-grid">
        {reel.map((r) => (
          <Link key={r.title} to={r.to} className={`reel-item${r.span === 2 ? ' reel-item--wide' : ''}`}>
            {r.media.type === 'video'
              ? <VideoLoop src={r.media.src} poster={r.media.poster} className="reel-media" ratio={r.media.ratio || '16 / 9'} />
              : <MediaFigure src={r.media.src} srcSmall={r.media.srcSmall} alt={r.media.caption} className="reel-media" ratio="16 / 9" />}
            <div className="reel-text">
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <span className="reel-link">See the service →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Showreel;
