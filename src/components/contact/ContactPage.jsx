import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SEO from '../common/SEO';
import { sendContactForm } from '../../services/emailService';
import '../cnc-conversions/CNCConversionsPage.css';
import './ContactPage.css';

const WA_URL = 'https://wa.me/27782964786?text=' + encodeURIComponent('Hi, I\'d like to discuss a project with SkillAxis Dynamics.');

const ContactPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

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
        title="Contact SkillAxis Dynamics — Pretoria, South Africa"
        description="Get in touch with SkillAxis Dynamics. Engineering and digital project inquiries. Based in Pretoria, South Africa. Response within 4 business hours."
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
          <h1>Get in Touch</h1>
          <p>Tell us what you need — engineering or digital. We respond to every serious inquiry within 4 business hours.</p>
          <div className="sp-hero-meta">
            <span>Response within 4 hours</span><span className="sp-meta-div">·</span>
            <span>Fixed-price quote within 3 days</span><span className="sp-meta-div">·</span>
            <span>No-obligation</span>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-side">
              <div className="section-header">
                <span className="section-tag">Inquiry Form</span>
                <h2 className="section-title">Start a Conversation</h2>
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
                    <option value="CNC Conversions">CNC Conversions</option>
                    <option value="Automation Retrofits">Industrial Automation Retrofits</option>
                    <option value="CAD Drafting">Mechanical CAD Drafting</option>
                    <option value="Custom Machinery">Custom Machinery Design &amp; Build</option>
                    <option value="Web / Software Development">Web / Software Development</option>
                    <option value="Graphic Design / Branding">Graphic Design / Branding</option>
                    <option value="Not Sure">Not Sure — I Need Advice</option>
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
                    placeholder="Tell us about your project — what you need built, your timeline, and any budget constraints."
                    required
                  />
                </div>

                {error && (
                  <div className="form-error">{error}</div>
                )}

                <button type="submit" className="btn btn-cta" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending…' : 'Send Inquiry'}
                </button>
                <p className="form-note">We'll respond within 4 business hours with a scoping response or preliminary quote.</p>
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
                    <p><a href="tel:+27782964786">+27 78 296 4786</a><br /><a href="tel:+27824651089">+27 82 465 1089</a></p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon wa">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <div>
                    <strong>WhatsApp</strong>
                    <p><a href={WA_URL} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a><br /><span className="contact-info-sub">Fastest response</span></p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@skillaxisdynamics.co.za">info@skillaxisdynamics.co.za</a></p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>
                    <strong>Hours</strong>
                    <p>Mon–Fri: 8am–6pm<br />Sat: 9am–1pm</p>
                  </div>
                </div>
              </div>

              <div className="contact-next-steps">
                <h3>What Happens Next</h3>
                <div className="next-step">
                  <span className="next-step-num">1</span>
                  <p>We review your inquiry within <strong>4 business hours</strong></p>
                </div>
                <div className="next-step">
                  <span className="next-step-num">2</span>
                  <p>We send a scoping questionnaire or schedule a call</p>
                </div>
                <div className="next-step">
                  <span className="next-step-num">3</span>
                  <p>You receive a <strong>fixed-price proposal</strong> within 3 business days</p>
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
