import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import ProjectVisual from '../common/ProjectVisual';
import { CtaSection } from '../common/ServiceBlocks';
import { projects as caseStudies } from '../../data/projects';
import './CaseStudiesPage.css';

const categories = ['All', 'Engineering', 'Software', 'Marketing', 'Branding'];

const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeCategory);

  return (
    <div className="service-page">
      <SEO
        title="Projects and Case Studies | Real Engineering and Software Work"
        description="Real SkillAxis Dynamics projects: workshop software with 3,300+ job cards, MotorArmour motor protection, CNC conversions, plant layouts, pipework and patent drawings, inventory and booking systems, and Google Ads at about R32 per lead."
        canonical="/case-studies"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Case Studies',
          description: 'Portfolio of engineering and digital projects by SkillAxis Dynamics, Pretoria.',
          provider: { '@type': 'LocalBusiness', name: 'SkillAxis Dynamics' },
        }}
      />

      <section className="sp-hero">
        <div className="container">
          <span className="page-hero-tag">Projects · No invented testimonials</span>
          <h1>Real projects, real clients, real numbers</h1>
          <p>Every project here is real. We never name clients on our website, so each one is described by industry. Ask us on WhatsApp and we will walk you through the work that matches your job.</p>
          <div className="sp-hero-meta">
            <span>CNC and machining</span><span className="sp-meta-div">·</span>
            <span>Drawings and layouts</span><span className="sp-meta-div">·</span>
            <span>Software</span><span className="sp-meta-div">·</span>
            <span>Google Ads</span>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="cs-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`cs-filter-btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="cs-grid">
            {filtered.map(cs => (
              <div key={cs.id} className="cs-card">
                <div className="cs-card-img-wrap">
                  <ProjectVisual variant={cs.visual} />
                </div>
                <div className="cs-card-content">
                  <div className="cs-card-top">
                    <span className="cs-tag">{cs.tag}</span>
                    <span className="cs-metric">{cs.metric}</span>
                  </div>
                  <h3 className="cs-title">{cs.title}</h3>
                  <p className="cs-client">{cs.client}</p>
                  <p className="cs-problem-preview">{cs.problem}</p>
                  <Link to={`/projects/${cs.id}`} className="cs-read-more">
                    Read the project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Have a similar job?"
        text="Tell us what you need. If we have done something like it, we will show you."
        service="Similar project"
        waMessage="Hi, I saw your projects page and have a similar job."
      />
    </div>
  );
};

export default CaseStudiesPage;
