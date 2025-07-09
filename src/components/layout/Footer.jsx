import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">SkillAxis Dynamics</h3>
          <p className="footer-description">
            Transforming ideas into digital masterpieces with precision in code and creativity in design.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100092689467268" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/quote">Get a Quote</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li><Link to="/services#cnc">Mill and Lathe CNC Conversions</Link></li>
            <li><Link to="/services#engineering">Engineering Design Services</Link></li>
            <li><Link to="/services#design">Creative Design & Visualization</Link></li>
            <li><Link to="/services#web">Website Development</Link></li>
            <li><Link to="/services#graphic">Graphic Design & Branding</Link></li>
            <li><Link to="/services#social">Social Media Marketing</Link></li>
            <li><Link to="/services#software">Software Development</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-links">
            <li>Email: info@skillaxisdynamics.com</li>
            <li>Phone: +27 78 296 4786</li>
            <li>Phone: +27 82 465 1089</li>
            <li>Location: South Africa, Pretoria</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} SkillAxis Dynamics. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
