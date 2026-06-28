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
        title="Your Inquiry Has Been Received"
        description="Your project inquiry has been received. We'll respond within 4 business hours."
        canonical="/thank-you"
      />

      <section className="thankyou-hero">
        <div className="container">
          <div className="thankyou-icon">✓</div>
          <h1>Your inquiry has been received.</h1>
          <p className="thankyou-sub">We'll review it and respond within <strong>4 business hours</strong>. Here's what happens next.</p>

          <div className="thankyou-steps">
            <div className="thankyou-step">
              <div className="thankyou-step-num">01</div>
              <div>
                <strong>Check your email</strong>
                <p>You'll receive a confirmation email shortly. If you don't see it, check your spam folder.</p>
              </div>
            </div>
            <div className="thankyou-step">
              <div className="thankyou-step-num">02</div>
              <div>
                <strong>We'll send a detailed response</strong>
                <p>Depending on your project, we'll either send a scoping questionnaire or a preliminary quote within 4 business hours.</p>
              </div>
            </div>
            <div className="thankyou-step">
              <div className="thankyou-step-num">03</div>
              <div>
                <strong>You receive a fixed-price proposal</strong>
                <p>Once we have enough information, you receive a detailed, fixed-price proposal with scope, timeline, and payment terms.</p>
              </div>
            </div>
          </div>

          <div className="thankyou-actions">
            <Link to="/case-studies" className="btn btn-cta">Browse Case Studies</Link>
            <Link to="/pricing" className="btn btn-ghost">View Pricing</Link>
          </div>

          <p className="thankyou-urgent">
            Need to speak to us now?{' '}
            <a href="https://wa.me/27782964786?text=Hi%2C%20I%20just%20submitted%20an%20inquiry%20and%20need%20to%20discuss%20urgently." target="_blank" rel="noopener noreferrer">
              Message us on WhatsApp
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThankYouPage;
