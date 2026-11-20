// Single source for contact details used across the site.
export const WA_NUMBER = '27782964786';
export const PHONE_PRIMARY = { href: 'tel:+27782964786', label: '078 296 4786' };
export const PHONE_SECONDARY = { href: 'tel:+27824651089', label: '082 465 1089' };
export const EMAIL = 'info@skillaxisdynamics.co.za';

export const waLink = (message = "Hi, I'd like to discuss a project with SkillAxis Dynamics.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

// Fires a GA4 generate_lead event when analytics is loaded (VITE_GA_ID set), and
// always records the click on the dataLayer so a tag manager can pick it up.
export const trackLead = (label) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'generate_lead', lead_label: label });
  if (window.gtag) {
    window.gtag('event', 'generate_lead', { event_category: 'engagement', event_label: label });
  }
};
