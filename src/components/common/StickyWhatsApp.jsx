import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './StickyWhatsApp.css';

const WA_NUMBER = '27782964786';
const WA_MESSAGE = encodeURIComponent("Hi, I'd like to discuss a project with SkillAxis Dynamics.");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const trackWA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: 'sticky_button',
    });
  }
};

const StickyWhatsApp = () => (
  <a
    href={WA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="sticky-whatsapp"
    aria-label="Chat on WhatsApp"
    onClick={trackWA}
  >
    <FontAwesomeIcon icon={faWhatsapp} className="wa-icon" />
    <span className="wa-label">WhatsApp Us</span>
  </a>
);

export default StickyWhatsApp;
