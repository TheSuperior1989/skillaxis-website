import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import proj1 from '../../assets/images/projects/project1.jpg';
import proj2 from '../../assets/images/projects/project2.jpg';
import proj3 from '../../assets/images/projects/project3.jpg';
import './FeaturedProjects.css';

const projects = [
  {
    id: 1,
    tag: 'Engineering',
    title: 'Harrison Lathe CNC Conversion',
    problem: 'Manual lathe with no repeatability — operator-dependent accuracy.',
    result: 'Full CNC retrofit with LinuxCNC, servo drives, and custom control panel. Accuracy improved to ±0.01mm.',
    image: proj1,
    link: '/case-studies',
  },
  {
    id: 2,
    tag: 'Web & Software',
    title: 'E-Commerce Platform Build',
    problem: 'Cape Town retailer running sales through WhatsApp with no scalable online presence.',
    result: 'Custom React storefront with payment gateway, inventory sync, and mobile-first design. 3× order volume in 60 days.',
    image: proj2,
    link: '/case-studies',
  },
  {
    id: 3,
    tag: 'Automation',
    title: 'Conveyor Line Automation Retrofit',
    problem: 'Manually-operated conveyor causing bottlenecks and inconsistent throughput.',
    result: 'PLC-based automation with sensor array and HMI dashboard. Throughput up 40%, one less operator required.',
    image: proj3,
    link: '/case-studies',
  },
];

const FeaturedProjects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="featured-projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Case Studies</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real projects, real results — from the workshop floor to the browser.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="fp-list"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`fp-item${idx % 2 === 1 ? ' fp-item--reversed' : ''}`}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="fp-img-wrap">
                <img src={project.image} alt={project.title} className="fp-img" />
              </div>
              <div className="fp-content">
                <span className="fp-tag">{project.tag}</span>
                <h3 className="fp-title">{project.title}</h3>
                <div className="fp-row">
                  <span className="fp-label">Challenge</span>
                  <p>{project.problem}</p>
                </div>
                <div className="fp-row fp-row--result">
                  <span className="fp-label">Result</span>
                  <p>{project.result}</p>
                </div>
                <Link to={project.link} className="fp-link">
                  View Case Study <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="fp-cta">
          <Link to="/case-studies" className="btn btn-primary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
