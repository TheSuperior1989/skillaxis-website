import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="container footer-grid">
        <div className="footer-brand">
          <h3 className="footer-name">SkillAxis Dynamics</h3>
          <p className="footer-tagline">
            Precision engineering and digital solutions from Pretoria, South Africa. CNC conversions, automation, CAD drafting, custom machinery, web and software development.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=100092689467268" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul>
            <li><Link to="/cnc-conversions">CNC Conversions</Link></li>
            <li><Link to="/automation-retrofits">Automation Retrofits</Link></li>
            <li><Link to="/cad-design-drafting">CAD Drafting</Link></li>
            <li><Link to="/custom-machinery-design">Custom Machinery</Link></li>
            <li><Link to="/web-software-engineering">Web & Software</Link></li>
            <li><Link to="/google-ads">Google Ads</Link></li>
            <li><Link to="/services">All Services</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Company</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/quote">Get a Quote</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-contact">
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Pretoria, Gauteng, South Africa</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+27782964786">+27 78 296 4786</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+27824651089">+27 82 465 1089</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:info@skillaxisdynamics.co.za">info@skillaxisdynamics.co.za</a>
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} SkillAxis Dynamics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
