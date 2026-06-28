import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import skillAxisLogo from '../../assets/skillaxis-logo.svg';
import './Navbar.css';

const services = [
  { label: 'CNC Conversions', path: '/cnc-conversions' },
  { label: 'Automation Retrofits', path: '/automation-retrofits' },
  { label: 'CAD Drafting', path: '/cad-design-drafting' },
  { label: 'Custom Machinery', path: '/custom-machinery-design' },
  { label: 'Web & Software', path: '/web-software-engineering' },
  { label: 'Google Ads', path: '/google-ads' },
  { label: 'All Services', path: '/services', divider: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : 'unset';
      return !prev;
    });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  useEffect(() => {
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServiceActive = services.some(s => location.pathname === s.path);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={skillAxisLogo} alt="SkillAxis Dynamics" className="logo-image" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
          </li>

          <li className={`nav-item has-dropdown ${servicesOpen ? 'open' : ''}`} ref={dropdownRef}>
            <button
              className={`nav-link dropdown-toggle ${isServiceActive ? 'active' : ''}`}
              onClick={() => setServicesOpen(prev => !prev)}
              aria-expanded={servicesOpen}
            >
              Services <FontAwesomeIcon icon={faChevronDown} className="chevron" />
            </button>
            <ul className="dropdown-menu">
              {services.map(({ label, path, divider }) => (
                <li key={path} className={divider ? 'dropdown-divider' : ''}>
                  <Link
                    to={path}
                    className={location.pathname === path ? 'dropdown-link active' : 'dropdown-link'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/case-studies" className={location.pathname === '/case-studies' ? 'nav-link active' : 'nav-link'}>
              Case Studies
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/pricing" className={location.pathname === '/pricing' ? 'nav-link active' : 'nav-link'}>
              Pricing
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </Link>
          </li>

          <li className="nav-item nav-cta">
            <Link to="/quote" className="btn btn-cta nav-quote-btn">
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
