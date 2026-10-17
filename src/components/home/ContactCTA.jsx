import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { waLink, trackLead, PHONE_PRIMARY, EMAIL } from '../../data/contact';
import './ContactCTA.css';

const ContactCTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="contact-cta-section">
      <div className="contact-cta-grid" aria-hidden="true" />
      <motion.div
        ref={ref}
        className="container contact-cta-inner"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Next step</span>
        <h2 className="cta-main-title">Tell us what you need built, drawn, fixed or found.</h2>
        <p className="cta-main-sub">
          Send a photo, a sketch or two lines on WhatsApp. You will get straight answers, a realistic timeline and a fixed price, not a sales pitch.
        </p>

        <div className="cta-buttons">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={() => trackLead('home_cta_whatsapp')}>
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp us
          </a>
          <Link to="/contact" className="btn btn-ghost" onClick={() => trackLead('home_cta_form')}>
            Send an enquiry
          </Link>
        </div>

        <div className="cta-direct">
          <a href={PHONE_PRIMARY.href}><FontAwesomeIcon icon={faPhone} /> {PHONE_PRIMARY.label}</a>
          <a href={`mailto:${EMAIL}`}><FontAwesomeIcon icon={faEnvelope} /> {EMAIL}</a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
