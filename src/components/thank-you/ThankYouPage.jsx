import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import './ThankYouPage.css';

const ThankYouPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion_form_submit', {
        event_category: 'Lead',
        event_label: 'Contact Form Submission',
      });
    }
  }, []);

  return (
    <div className="thankyou-page">
      <SEO
        title="Enquiry Received"
        description="Your enquiry has been received by SkillAxis Dynamics."
        canonical="/thank-you"
      />

      <section className="thankyou-hero">
        <div className="container">
          <div className="thankyou-icon">✓</div>
          <h1>Got it. Your enquiry is with us.</h1>
          <p className="thankyou-sub">The engineer who will handle your job reads every enquiry personally. Here is what happens next.</p>

          <div className="thankyou-steps">
            <div className="thankyou-step">
              <div className="thankyou-step-num">01</div>
              <div>
                <strong>Send photos if you have them</strong>
                <p>Photos, sketches or drawings speed things up a lot. WhatsApp them to 078 296 4786 with your name.</p>
              </div>
            </div>
            <div className="thankyou-step">
              <div className="thankyou-step-num">02</div>
              <div>
                <strong>We come back with questions</strong>
                <p>Usually a few engineering questions or a ballpark price, and a short call or site visit if the job needs it.</p>
              </div>
            </div>
            <div className="thankyou-step">
              <div className="thankyou-step-num">03</div>
              <div>
                <strong>You get a fixed price in writing</strong>
                <p>Scope, timeline and price, with design, manufacturing and installation as separate lines. A deposit starts the job.</p>
              </div>
            </div>
          </div>

          <div className="thankyou-actions">
            <Link to="/case-studies" className="btn btn-primary">See our projects</Link>
            <Link to="/pricing" className="btn btn-ghost">View Pricing</Link>
          </div>

          <p className="thankyou-urgent">
            Need to speak to us now?{' '}
            <a href="https://wa.me/27782964786?text=Hi%2C%20I%20just%20sent%20an%20enquiry%20on%20your%20website.%20Here%20are%20some%20photos%3A" target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThankYouPage;
