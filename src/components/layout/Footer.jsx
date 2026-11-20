import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { waLink } from '../../data/contact';
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
            Engineering and software company in Pretoria. We design, draw, machine and build the software for South African workshops and factories.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=100092689467268" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul>
            <li><Link to="/design-pack">Design Pack</Link></li>
            <li><Link to="/plant-visualisation">Plant Layouts &amp; Films</Link></li>
            <li><Link to="/machine-capacity-report">Capacity Reports</Link></li>
            <li><Link to="/workshop-software">Workshop Management System</Link></li>
            <li><Link to="/motorarmour">MotorArmour™</Link></li>
            <li><Link to="/products/ct12-420">CT12-420 Chain Tensioner</Link></li>
            <li><Link to="/cad-design-drafting">CAD Drawings & Layouts</Link></li>
            <li><Link to="/cnc-conversions">CNC Conversions</Link></li>
            <li><Link to="/custom-machinery-design">Custom Machinery</Link></li>
            <li><Link to="/automation-retrofits">Machine Controls</Link></li>
            <li><Link to="/web-software-engineering">Websites & Software</Link></li>
            <li><Link to="/google-ads">Google Ads</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Company</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/case-studies">Projects</Link></li>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><Link to="/services">All Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Get a Quote</Link></li>
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
              <a href="tel:+27782964786">078 296 4786</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+27824651089">082 465 1089</a>
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
          <p>&copy; {year} SkillAxis Dynamics (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
