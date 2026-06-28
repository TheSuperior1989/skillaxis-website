import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import heroBg from '../../assets/images/hero/hero-bg.jpg';
import './Hero.css';

const WA_URL = 'https://wa.me/27782964786?text=' + encodeURIComponent("Hi, I'd like to discuss a project with SkillAxis Dynamics.");

const Hero = () => (
  <>
    <SEO
      title="CNC Conversions, Automation & Engineering Solutions — Pretoria, South Africa"
      description="Precision CNC conversions, automation retrofits, CAD drafting, custom machinery design, web and software engineering from one technical team in Pretoria, South Africa."
      canonical="/"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SkillAxis Dynamics',
        url: 'https://www.skillaxisdynamics.co.za',
      }}
    />
    <section
      className="hero"
      aria-label="SkillAxis Dynamics hero"
      style={{ backgroundImage: `linear-gradient(rgba(8,8,8,0.65), rgba(8,8,8,0.82)), url(${heroBg})` }}
    >
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-content container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-text"
        >
          <span className="hero-tag">Pretoria, South Africa</span>
          <h1 className="hero-title">
            Precision Engineering.<br />
            <span className="hero-accent">Digital Solutions.</span><br />
            Built to Perform.
          </h1>
          <p className="hero-subtitle">
            CNC conversions, automation retrofits, CAD drafting, custom machinery design, and web development — from one technical team in Pretoria.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              View Services
            </Link>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  </>
);

export default Hero;
