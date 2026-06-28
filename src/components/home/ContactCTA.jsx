import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ctaBg from '../../assets/images/hero/cta-bg.jpg';
import './ContactCTA.css';

const WA_URL = 'https://wa.me/27782964786?text=' + encodeURIComponent("Hi, I'd like to discuss a project with SkillAxis Dynamics.");

const ContactCTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="contact-cta-section" style={{ backgroundImage: `linear-gradient(rgba(8,8,8,0.75), rgba(8,8,8,0.88)), url(${ctaBg})` }}>
      <motion.div
        ref={ref}
        className="container contact-cta-inner"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="cta-urgency">
          <span className="cta-badge">Limited Capacity</span>
          <span className="cta-lead-time">Current lead time: 2–4 weeks</span>
        </div>

        <h2 className="cta-main-title">Ready to Start Your Project?</h2>
        <p className="cta-main-sub">
          We take on a limited number of projects per month to ensure every client gets our full attention. Tell us what you need — we'll respond within 4 business hours.
        </p>

        <div className="cta-buttons">
          <Link to="/quote" className="btn btn-cta">
            Get a Quote
          </Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            WhatsApp Us Now
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
