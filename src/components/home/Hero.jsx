import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import SEO from '../common/SEO';
import ProjectVisual from '../common/ProjectVisual';
import { waLink, trackLead } from '../../data/contact';
import './Hero.css';

const proof = [
  { value: '3,300+', label: 'job cards run through workshop software we built' },
  { value: '3 days', label: 'from engineering review to a redesigned, audited mechanism with client documents' },
  { value: '29', label: 'motors ordered for MotorArmour by one distributor, starting from a 2-motor pilot' },
  { value: '82', label: 'leads in one month from R2,599 of Google Ads spend' },
];

const Hero = () => (
  <>
    <SEO
      title="Engineering, CNC, Drawings and Workshop Software | Pretoria"
      description="SkillAxis Dynamics designs, draws, machines and builds the software for South African workshops and factories. CNC conversions, CAD and plant drawings, workshop management systems, MotorArmour motor protection and Google Ads. Fixed prices. Pretoria."
      canonical="/"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SkillAxis Dynamics',
        url: 'https://www.skillaxisdynamics.co.za',
      }}
    />
    <section className="hero" aria-label="SkillAxis Dynamics">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-content container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-text"
        >
          <span className="hero-tag"><span className="hero-dot" /> Engineering and software · Pretoria, South Africa</span>
          <h1 className="hero-title">
            We design it, draw it, <span className="hero-accent">machine it</span> and build the software that runs it.
          </h1>
          <p className="hero-subtitle">
            SkillAxis Dynamics is a hands-on engineering company for workshops, factories and technical businesses. CNC conversions and programming, manufacturing and plant drawings, custom machinery, workshop management software and motor protection, all from the engineer who does the work.
          </p>
          <ul className="hero-checks">
            <li><FontAwesomeIcon icon={faCheck} /> Fixed price in writing before we start</li>
            <li><FontAwesomeIcon icon={faCheck} /> You speak to the engineer, not a salesperson</li>
            <li><FontAwesomeIcon icon={faCheck} /> Everything we sell, we run ourselves</li>
          </ul>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary" onClick={() => trackLead('home_hero_form')}>
              Get a fixed-price quote
            </Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" onClick={() => trackLead('home_hero_whatsapp')}>
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp 078 296 4786
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          aria-hidden="true"
        >
          <div className="hero-visual-card hero-visual-card--back"><ProjectVisual variant="drawing" /></div>
          <div className="hero-visual-card hero-visual-card--front"><ProjectVisual variant="app" /></div>
        </motion.div>
      </div>

      <div className="container">
        <dl className="hero-proof">
          {proof.map((p) => (
            <div key={p.value} className="hero-proof-item">
              <dt>{p.value}</dt>
              <dd>{p.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  </>
);

export default Hero;
