import { Link, useParams, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SEO from '../common/SEO';
import ProjectVisual from '../common/ProjectVisual';
import { VideoLoop, MediaFigure, MediaGrid } from '../common/Media';
import { CtaSection } from '../common/ServiceBlocks';
import { projects, getProject } from '../../data/projects';
import '../cnc-conversions/CNCConversionsPage.css';
import './ProjectPage.css';

const SERVICE_LABELS = {
  '/workshop-software': 'Workshop Management System',
  '/motorarmour': 'MotorArmour Motor Protection',
  '/cad-design-drafting': 'CAD Drawings',
  '/cnc-conversions': 'CNC Conversion',
  '/custom-machinery-design': 'Custom Machinery',
  '/web-software-engineering': 'Website or Business Software',
  '/google-ads': 'Google Ads',
  '/services': 'Not sure yet',
  '/plant-visualisation': 'Plant Layout and Visualisation',
  '/design-pack': 'Design Pack',
  '/machine-capacity-report': 'Machine Capacity Report',
};

const Lead = ({ project }) => {
  const m = project.media;
  if (m?.hero?.type === 'video') return <VideoLoop src={m.hero.src} poster={m.hero.poster} label={m.hero.caption} className="pp-hero-media" />;
  if (m?.hero?.type === 'image') return <MediaFigure src={m.hero.src} srcSmall={m.hero.srcSmall} alt={m.hero.caption} caption={m.hero.caption} className="pp-hero-media" />;
  return <div className="pp-hero-visual"><ProjectVisual variant={project.visual} /></div>;
};

const ProjectPage = () => {
  const { id } = useParams();
  const project = getProject(id);
  if (!project) return <Navigate to="/case-studies" replace />;

  const idx = projects.findIndex((p) => p.id === id);
  const next = projects[(idx + 1) % projects.length];
  const service = SERVICE_LABELS[project.link] || 'Not sure yet';
  const gallery = project.media?.gallery || [];

  return (
    <div className="service-page">
      <SEO
        title={`${project.title} | Project`}
        description={`${project.problem} ${project.result}`.slice(0, 300)}
        canonical={`/projects/${project.id}`}
        ogImage={project.media?.hero?.poster || project.media?.hero?.src ? `https://www.skillaxisdynamics.co.za${project.media.hero.poster || project.media.hero.src}` : undefined}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.solution,
          creator: { '@type': 'Organization', name: 'SkillAxis Dynamics' },
          about: project.client,
          keywords: project.tags.join(', '),
        }}
      />

      <section className="sp-hero pp-hero">
        <div className="container">
          <Link to="/case-studies" className="pp-back"><FontAwesomeIcon icon={faArrowLeft} /> All projects</Link>
          <div className="pp-meta">
            <span className="cs-tag">{project.tag}</span>
            <span className="pp-metric">{project.metric}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="pp-client">{project.client}</p>
        </div>
      </section>

      <section className="sp-section pp-body">
        <div className="container pp-grid">
          <div className="pp-media">
            <Lead project={project} />
            {gallery.length > 0 && <MediaGrid items={gallery} columns={gallery.length >= 3 ? 3 : 2} />}
          </div>
          <div className="pp-text">
            <div className="pp-block">
              <span className="sp-case-label">The problem</span>
              <p>{project.problem}</p>
            </div>
            <div className="pp-block">
              <span className="sp-case-label">What we did</span>
              <p>{project.solution}</p>
            </div>
            <div className="pp-block pp-block--result">
              <span className="sp-case-label">The result</span>
              <p>{project.result}</p>
            </div>
            <ul className="pp-tags">
              {project.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="pp-actions">
              <Link to={`/contact?service=${encodeURIComponent(service)}`} className="btn btn-primary">I have a job like this</Link>
              <Link to={project.link} className="btn btn-ghost">See the service</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-alt pp-next">
        <div className="container">
          <span className="section-tag">Next project</span>
          <Link to={`/projects/${next.id}`} className="pp-next-link">
            {next.title} <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>

      <CtaSection
        title="Got something similar on your bench?"
        text="Send a photo, a sketch or two lines. Every project here started that way."
        service={service}
        waMessage={`Hi, I saw the project "${project.title}" on your website and have something similar.`}
      />
    </div>
  );
};

export default ProjectPage;
