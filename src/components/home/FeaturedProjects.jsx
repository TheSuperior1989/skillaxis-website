import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ProjectVisual from '../common/ProjectVisual';
import { projects as allProjects, getProject } from '../../data/projects';
import './FeaturedProjects.css';

const FEATURED_IDS = ['workshop-app', 'motorarmour', 'cnc-builds', 'ads'];

const FeaturedProjects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const projects = FEATURED_IDS.map(getProject);

  return (
    <section className="featured-projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Proof, not promises</span>
          <h2 className="section-title">Work that is running right now</h2>
          <p className="section-subtitle">
            No invented testimonials. These are live systems, paying clients and numbers you can ask us to show you.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="fp-list"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`fp-item${idx % 2 === 1 ? ' fp-item--reversed' : ''}`}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <div className="fp-img-wrap">
                <ProjectVisual variant={project.visual} />
              </div>
              <div className="fp-content">
                <div className="fp-meta">
                  <span className="fp-tag">{project.tag}</span>
                  <span className="fp-metric">{project.metric}</span>
                </div>
                <h3 className="fp-title">{project.title}</h3>
                <p className="fp-client">{project.client}</p>
                <div className="fp-row">
                  <span className="fp-label">Problem</span>
                  <p>{project.problem}</p>
                </div>
                <div className="fp-row fp-row--result">
                  <span className="fp-label">Result</span>
                  <p>{project.result}</p>
                </div>
                <Link to={project.link} className="fp-link">
                  See the service <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="fp-cta">
          <Link to="/case-studies" className="btn btn-ghost">
            See all {allProjects.length} projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
