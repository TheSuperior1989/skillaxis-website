import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { waLink, trackLead } from '../../data/contact';
import '../cnc-conversions/CNCConversionsPage.css';
import './ServiceBlocks.css';

export const PageHero = ({ tag, title, intro, meta = [], service, waMessage, primaryLabel = 'Get a Fixed-Price Quote' }) => (
  <section className="sp-hero sb-hero">
    <div className="sb-hero-glow" aria-hidden="true" />
    <div className="container sb-hero-inner">
      <span className="page-hero-tag">{tag}</span>
      <h1>{title}</h1>
      <p>{intro}</p>
      <div className="sp-hero-actions">
        <Link to={`/contact?service=${encodeURIComponent(service)}`} className="btn btn-primary" onClick={() => trackLead(`hero_form_${service}`)}>
          {primaryLabel}
        </Link>
        <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" onClick={() => trackLead(`hero_whatsapp_${service}`)}>
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
        </a>
      </div>
      {meta.length > 0 && (
        <ul className="sb-meta">
          {meta.map((m) => (
            <li key={m}><FontAwesomeIcon icon={faCheck} /> {m}</li>
          ))}
        </ul>
      )}
    </div>
  </section>
);

export const SectionHeader = ({ tag, title, subtitle }) => (
  <div className="section-header">
    <span className="section-tag">{tag}</span>
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>
);

export const PainGrid = ({ tag = 'Sound familiar?', title, items, alt = false }) => (
  <section className={`sp-section${alt ? ' sp-alt' : ''}`}>
    <div className="container">
      <SectionHeader tag={tag} title={title} />
      <div className="sp-pain-grid">
        {items.map((item, i) => (
          <div key={item.title} className="sp-pain-card">
            <span className="sp-pain-num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Deliverables = ({ tag = 'What you get', title, lead, items, sideTitle, sideItems, alt = true }) => (
  <section className={`sp-section${alt ? ' sp-alt' : ''}`}>
    <div className="container">
      <SectionHeader tag={tag} title={title} />
      <div className="sp-two-col">
        <div>
          {lead && <p className="sp-lead">{lead}</p>}
          <ul className="sb-check-list">
            {items.map((item) => (
              <li key={item}><FontAwesomeIcon icon={faCheck} /> <span>{item}</span></li>
            ))}
          </ul>
        </div>
        {sideItems && (
          <div className="sp-highlight-box">
            <h3>{sideTitle}</h3>
            <ul className="sp-list">
              {sideItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  </section>
);

export const Steps = ({ tag = 'How it works', title, steps, alt = false }) => (
  <section className={`sp-section${alt ? ' sp-alt' : ''}`}>
    <div className="container">
      <SectionHeader tag={tag} title={title} />
      <div className="process-grid">
        {steps.map((step, i) => (
          <div key={step.title} className="process-step">
            <div className="process-number">{String(i + 1).padStart(2, '0')}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ProofBlock = ({ tag = 'Real work', title, situation, work, result, link, alt = true }) => (
  <section className={`sp-section${alt ? ' sp-alt' : ''}`}>
    <div className="container sp-case-container">
      <SectionHeader tag={tag} title={title} />
      <div className="sp-case-grid">
        <div className="sp-case-block">
          <span className="sp-case-label">The situation</span>
          <p>{situation}</p>
        </div>
        <div className="sp-case-block">
          <span className="sp-case-label">What we did</span>
          <p>{work}</p>
        </div>
        <div className="sp-case-block sp-result">
          <span className="sp-case-label">The result</span>
          <p>{result}</p>
        </div>
      </div>
      {link && (
        <div className="sb-center">
          <Link to={link.to} className="sb-text-link">{link.label} →</Link>
        </div>
      )}
    </div>
  </section>
);

export const PriceBlock = ({ from, amount, unit, text, service, tiers }) => (
  <section className="sp-section">
    <div className="container">
      <SectionHeader tag="Pricing" title="What it costs" />
      {tiers ? (
        <div className="sb-tier-grid">
          {tiers.map((tier) => (
            <div key={tier.label} className={`sb-tier${tier.featured ? ' sb-tier--featured' : ''}`}>
              {tier.featured && <span className="sb-tier-badge">Most requested</span>}
              <div className="sb-tier-label">{tier.label}</div>
              <div className="sb-tier-price">{tier.price}</div>
              <p>{tier.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="pricing-highlight">
          <p className="price-from">{from}</p>
          <div className="price-amount">{amount}{unit && <span className="sb-unit">{unit}</span>}</div>
          <p>{text}</p>
        </div>
      )}
      <p className="sb-price-note">
        Every job gets a fixed price in writing before work starts. Design and manufacturing are quoted as separate lines, so you only pay for what you need.
      </p>
      <div className="sb-center">
        <Link to={`/contact?service=${encodeURIComponent(service)}`} className="btn btn-primary">Get your fixed price</Link>
      </div>
    </div>
  </section>
);

export const FaqSection = ({ faqs, alt = true }) => (
  <section className={`sp-section${alt ? ' sp-alt' : ''}`}>
    <div className="container">
      <SectionHeader tag="Questions" title="Straight answers" />
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.q} className="faq-item sb-faq">
            <summary><h3>{faq.q}</h3></summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export const CtaSection = ({ title, text, service, waMessage }) => (
  <section className="cta-section sb-cta">
    <div className="container">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="cta-buttons">
        <Link to={`/contact?service=${encodeURIComponent(service)}`} className="btn btn-primary" onClick={() => trackLead(`cta_form_${service}`)}>
          Send us the details
        </Link>
        <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" onClick={() => trackLead(`cta_whatsapp_${service}`)}>
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp photos or drawings
        </a>
      </div>
    </div>
  </section>
);
