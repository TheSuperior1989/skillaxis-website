import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import SEO from '../common/SEO';
import { waLink, trackLead } from '../../data/contact';
import { plant } from '../../data/media';
import './Hero.css';

const proof = [
  { value: '3,300+', label: 'job cards run through workshop software we built' },
  { value: '3 days', label: 'from engineering review to a redesigned, fully checked mechanism with client documents' },
  { value: '29', label: 'motors ordered for MotorArmour by one distributor, starting from a 2-motor pilot' },
  { value: '82', label: 'leads in one month from R2,599 of Google Ads spend' },
];

const lines = ['design it', 'draw it', 'analyse it', 'film it', 'machine it', 'build the software that runs it'];

// Background film: the plant walkthrough loop, muted, started after first paint so the
// text renders immediately. Respects prefers-reduced-motion by leaving the poster in place.
const HeroFilm = () => {
  const ref = useRef(null);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setTimeout(() => setPlay(true), 300);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (play && ref.current) ref.current.play().catch(() => {});
  }, [play]);
  return (
    <div className="hero-film" aria-hidden="true">
      <video
        ref={ref}
        src={play ? plant.heroLoop.src : undefined}
        poster={plant.heroLoop.poster}
        muted
        loop
        playsInline
        preload="none"
      />
      <div className="hero-film-shade" />
    </div>
  );
};

const Hero = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % lines.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <SEO
        title="Engineering, CNC, Drawings and Workshop Software | Pretoria"
        description="SkillAxis Dynamics designs, draws, analyses, films, machines and builds the software for South African workshops and factories. Design packs in days, CNC conversions, custom machinery, workshop management software, MotorArmour motor protection and Google Ads. Fixed prices. Pretoria."
        canonical="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'SkillAxis Dynamics',
          url: 'https://www.skillaxisdynamics.co.za',
        }}
      />
      <section className="hero hero--film" aria-label="SkillAxis Dynamics">
        <HeroFilm />
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-content container hero-content--single">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-text"
          >
            <span className="hero-tag"><span className="hero-dot" /> Engineering and software · Pretoria, South Africa</span>
            <h1 className="hero-title">
              We <span className="hero-accent hero-rotate" key={lines[i]}>{lines[i]}</span>.
              <br />Designed properly. Checked part by part. Delivered in days.
            </h1>
            <p className="hero-subtitle">
              SkillAxis Dynamics is a hands-on engineering company for workshops, factories and technical businesses. Plant layouts and walkthrough films, machine design with finite-element checks, manufacturing drawings, CNC conversions and programming, workshop management software and MotorArmour motor protection, all from the engineer who does the work.
            </p>
            <ul className="hero-checks">
              <li><FontAwesomeIcon icon={faCheck} /> Fixed price in writing before we start</li>
              <li><FontAwesomeIcon icon={faCheck} /> Design packs in two to five working days</li>
              <li><FontAwesomeIcon icon={faCheck} /> You own the drawings, files and programs</li>
            </ul>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary" onClick={() => trackLead('home_hero_form')}>
                Get a fixed-price quote
              </Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" onClick={() => trackLead('home_hero_whatsapp')}>
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp 078 296 4786
              </a>
              <Link to="/how-it-works" className="hero-link">How a project runs →</Link>
            </div>
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
};

export default Hero;
