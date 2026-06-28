import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faBolt,
  faDraftingCompass,
  faIndustry,
  faCode,
  faPaintBrush,
} from '@fortawesome/free-solid-svg-icons';
import imgCnc from '../../assets/images/services/service-cnc.jpg';
import imgAutomation from '../../assets/images/services/service-automation.jpg';
import imgCad from '../../assets/images/services/service-cad.jpg';
import imgMachinery from '../../assets/images/services/service-machinery.jpg';
import imgWeb from '../../assets/images/services/service-web.jpg';
import imgGraphic from '../../assets/images/services/service-graphic.jpg';
import './ServicesOverview.css';

const services = [
  {
    id: 'cnc',
    icon: faCogs,
    tag: 'Engineering',
    title: 'CNC Conversions',
    description: 'Turn manual mills and lathes into precision CNC machines. Servo drives, motion controllers, and full commissioning.',
    link: '/cnc-conversions',
    image: imgCnc,
  },
  {
    id: 'automation',
    icon: faBolt,
    tag: 'Engineering',
    title: 'Automation Retrofits',
    description: 'Upgrade aging equipment with modern PLCs, sensors, and HMI systems. Increase throughput and reduce downtime.',
    link: '/automation-retrofits',
    image: imgAutomation,
  },
  {
    id: 'cad',
    icon: faDraftingCompass,
    tag: 'Engineering',
    title: 'CAD Drafting',
    description: 'Mechanical 2D and 3D drawings to manufacturing standard. Fusion 360, AutoCAD, and SolidWorks workflows.',
    link: '/cad-design-drafting',
    image: imgCad,
  },
  {
    id: 'machinery',
    icon: faIndustry,
    tag: 'Engineering',
    title: 'Custom Machinery',
    description: "Bespoke machine design and fabrication management for applications where off-the-shelf simply doesn't exist.",
    link: '/custom-machinery-design',
    image: imgMachinery,
  },
  {
    id: 'web',
    icon: faCode,
    tag: 'Digital',
    title: 'Web & Software',
    description: 'From a R1,500 single-page site to a full custom web app. Fast, SEO-ready, and built to convert visitors into clients.',
    link: '/web-software-engineering',
    image: imgWeb,
  },
  {
    id: 'design',
    icon: faPaintBrush,
    tag: 'Digital',
    title: 'Graphic Design & Branding',
    description: 'Logo design, brand identity, social media content, and print-ready materials that position your business professionally.',
    link: '/services',
    image: imgGraphic,
  },
];

const ServicesOverview = () => (
  <section className="services-overview" id="services">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">What We Do</span>
        <h2 className="section-title">Engineering &amp; Digital Services</h2>
        <p className="section-subtitle">
          From CNC retrofits to custom web apps — one team, six disciplines, zero outsourcing.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-card-img-wrap">
              <img src={service.image} alt={service.title} className="service-card-img" loading="lazy" />
            </div>
            <div className="service-card-body">
              <div className="service-card-top">
                <div className="service-icon-wrap">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <span className="service-tag">{service.tag}</span>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <Link to={service.link} className="service-card-link">
                Explore →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <Link to="/services" className="btn btn-primary">
          All Services
        </Link>
        <Link to="/quote" className="btn btn-cta">
          Get a Quote
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesOverview;
