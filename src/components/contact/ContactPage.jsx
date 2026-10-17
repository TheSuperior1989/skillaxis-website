import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SEO from '../common/SEO';
import { sendContactForm } from '../../services/emailService';
import { waLink, trackLead, PHONE_PRIMARY, PHONE_SECONDARY, EMAIL } from '../../data/contact';
import '../cnc-conversions/CNCConversionsPage.css';
import './ContactPage.css';

const WA_URL = waLink();

const SERVICE_OPTIONS = [
  'Workshop Management System',
  'MotorArmour Motor Protection',
  'CAD Drawings',
  'CNC Conversion',
  'Custom Machinery',
  'Machine Controls and Retrofits',
  'Website or Business Software',
  'Google Ads',
  'Graphic Design',
  'Not sure yet',
];

const ContactPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const presetService = searchParams.get('service') || '';
  const serviceOptions = presetService && !SERVICE_OPTIONS.includes(presetService)
    ? [presetService, ...SERVICE_OPTIONS]
    : SERVICE_OPTIONS;

  useEffect(() => {
    if (presetService) setFormData((prev) => ({ ...prev, service: presetService }));
  }, [presetService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const result = await sendContactForm({
        ...formData,
        subject: formData.service || 'General Inquiry',
      });

      if (result.success) {
        trackLead(`contact_form_${formData.service || 'general'}`);
        navigate('/thank-you');
      } else {
        setError(result.message);
        setIsSubmitting(false);
      }
    } catch {
      setError('Failed to send your inquiry. Please try WhatsApp or email us directly.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="service-page">
      <SEO
        title="Contact SkillAxis Dynamics | Get a Fixed-Price Quote | Pretoria"
        description="Send SkillAxis Dynamics your drawing, CNC, machinery, workshop software, MotorArmour or Google Ads enquiry. WhatsApp 078 296 4786 or use the form. Fixed prices. Pretoria, South Africa."
        canonical="/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact SkillAxis Dynamics',
          description: 'Contact page for SkillAxis Dynamics engineering and digital services, Pretoria.',
        }}
      />

      <section className="sp-hero">
        <div className="container">
          <span className="page-hero-tag">Contact · Pretoria, South Africa</span>
          <h1>Tell us about the job</h1>
          <p>Photos, a sketch, a part number or two lines is enough to start. WhatsApp is fastest, and you can send pictures straight from your phone.</p>
          <div className="sp-hero-meta">
            <span>Fixed-price quotes</span><span className="sp-meta-div">·</span>
            <span>No hourly rates</span><span className="sp-meta-div">·</span>
            <span>No obligation</span>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-side">
              <div className="section-header">
                <span className="section-tag">Enquiry form</span>
                <h2 className="section-title">Send us the details</h2>
              </div>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 ..."
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Description *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What needs to be built, drawn, fixed or programmed? Quantities, deadline and where it is all help."
                    required
                  />
                </div>

                {error && (
                  <div className="form-error">{error}</div>
                )}

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send enquiry'}
                </button>
                <p className="form-note">Prefer to send photos? <a href={WA_URL} target="_blank" rel="noopener noreferrer">WhatsApp us instead</a>.</p>
              </form>
            </div>

            <div className="contact-info-side">
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div>
                    <strong>Location</strong>
                    <p>Pretoria, Gauteng<br />South Africa</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p><a href={PHONE_PRIMARY.href}>{PHONE_PRIMARY.label}</a><br /><a href={PHONE_SECONDARY.href}>{PHONE_SECONDARY.label}</a></p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon wa">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <div>
                    <strong>WhatsApp</strong>
                    <p><a href={WA_URL} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a><br /><span className="contact-info-sub">Fastest, and you can send photos</span></p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>
                    <strong>Hours</strong>
                    <p>Mon-Fri: 8am-6pm<br />Sat: 9am-1pm</p>
                  </div>
                </div>
              </div>

              <div className="contact-next-steps">
                <h3>What Happens Next</h3>
                <div className="next-step">
                  <span className="next-step-num">1</span>
                  <p>We read your enquiry and come back with <strong>questions or a ballpark</strong></p>
                </div>
                <div className="next-step">
                  <span className="next-step-num">2</span>
                  <p>A short scoping call or site visit if the job needs one</p>
                </div>
                <div className="next-step">
                  <span className="next-step-num">3</span>
                  <p>You receive a <strong>fixed-price quote in writing</strong>. A deposit starts the job</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
