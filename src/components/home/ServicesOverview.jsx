import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faBolt,
  faDraftingCompass,
  faIndustry,
  faLaptopCode,
  faShieldAlt,
  faChartLine,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import './ServicesOverview.css';

const services = [
  {
    id: 'workshop',
    icon: faClipboardList,
    problem: 'Job cards on paper and parts going missing?',
    title: 'Workshop Management System',
    description: 'The job card, inventory and workflow system a working turbo workshop runs on every day, set up for your workshop.',
    price: 'R7,500 setup + R2,500/month',
    link: '/workshop-software',
    featured: true,
  },
  {
    id: 'motorarmour',
    icon: faShieldAlt,
    problem: 'Motors dying from water and wash-down?',
    title: 'MotorArmour™ Motor Protection',
    description: 'Our motor protection treatment for harsh, wet environments. Every motor tested, certified and tracked by serial number.',
    price: 'Quoted per motor',
    link: '/motorarmour',
    featured: true,
  },
  {
    id: 'cad',
    icon: faDraftingCompass,
    problem: 'Need drawings a workshop can build from?',
    title: 'Drawings, Plant Layouts & Patent Sets',
    description: 'Manufacturing drawings, BOMs, 3D plant and factory layouts, and formal patent drawing sets. From a sketch, a photo or the part itself.',
    price: 'From R3,500',
    link: '/cad-design-drafting',
  },
  {
    id: 'cnc',
    icon: faCogs,
    problem: 'Manual machine that should be CNC?',
    title: 'CNC Conversions & G-code Programming',
    description: 'Mill and lathe conversions, tool changers and production CAM programming, on CNC machines we built and run ourselves.',
    price: 'From R25,000',
    link: '/cnc-conversions',
  },
  {
    id: 'machinery',
    icon: faIndustry,
    problem: 'Nothing off the shelf does the job?',
    title: 'Custom Machinery & Equipment',
    description: 'Jigs, fixtures, test benches, process equipment and racking, designed and costed with design and manufacturing as separate fixed lines.',
    price: 'Quoted per project',
    link: '/custom-machinery-design',
  },
  {
    id: 'automation',
    icon: faBolt,
    problem: 'Old machine controls letting you down?',
    title: 'Machine Controls & Retrofits',
    description: 'Servo and stepper drives, VFD spindle control, tool changers, electronic lead screws and control panel layouts for existing machines.',
    price: 'From R15,000',
    link: '/automation-retrofits',
  },
  {
    id: 'web',
    icon: faLaptopCode,
    problem: 'Running the business on spreadsheets?',
    title: 'Websites & Business Software',
    description: 'Business websites from R1,500, and custom systems for inventory, bookings, quotes and invoices that staff actually use.',
    price: 'From R1,500',
    link: '/web-software-engineering',
  },
  {
    id: 'ads',
    icon: faChartLine,
    problem: 'The phone isn\'t ringing enough?',
    title: 'Google Ads Management',
    description: 'Campaigns, landing pages and lead tracking, with a daily budget pacer and monthly reports. One client campaign brought in 82 leads last month at R31.69 each.',
    price: 'From R4,400/month',
    link: '/google-ads',
  },
];

const ServicesOverview = () => (
  <section className="services-overview" id="services">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Start with your problem</span>
        <h2 className="section-title">What do you need fixed?</h2>
        <p className="section-subtitle">
          Pick the line that sounds like your week. Every service has a starting price on the page, and every job gets a fixed price in writing.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <Link key={service.id} to={service.link} className={`service-card${service.featured ? ' service-card--featured' : ''}`}>
            <div className="service-card-top">
              <div className="service-icon-wrap">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              {service.featured && <span className="service-badge">Proven offer</span>}
            </div>
            <p className="service-problem">{service.problem}</p>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.description}</p>
            <div className="service-card-foot">
              <span className="service-price">{service.price}</span>
              <span className="service-card-link">Details →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
