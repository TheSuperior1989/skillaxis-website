// Single source for contact details used across the site.
export const WA_NUMBER = '27782964786';
export const PHONE_PRIMARY = { href: 'tel:+27782964786', label: '078 296 4786' };
export const PHONE_SECONDARY = { href: 'tel:+27824651089', label: '082 465 1089' };
export const EMAIL = 'info@skillaxisdynamics.co.za';

export const waLink = (message = "Hi, I'd like to discuss a project with SkillAxis Dynamics.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const trackLead = (label) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', { event_category: 'engagement', event_label: label });
  }
};
