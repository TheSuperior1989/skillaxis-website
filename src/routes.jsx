import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ServicesPage from './components/services/ServicesPage';
import PortfolioPage from './components/portfolio/PortfolioPage';
import ContactPage from './components/contact/ContactPage';
import QuotingPage from './components/quoting/QuotingPage';
import CNCConversionsPage from './components/cnc-conversions/CNCConversionsPage';
import AutomationRetrofitsPage from './components/automation-retrofits/AutomationRetrofitsPage';
import CADDraftingPage from './components/cad-drafting/CADDraftingPage';
import CustomMachineryPage from './components/custom-machinery/CustomMachineryPage';
import WebSoftwarePage from './components/web-software/WebSoftwarePage';
import GoogleAdsPage from './components/google-ads/GoogleAdsPage';
import CaseStudiesPage from './components/case-studies/CaseStudiesPage';
import PricingPage from './components/pricing/PricingPage';
import ThankYouPage from './components/thank-you/ThankYouPage';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'quote', element: <QuotingPage /> },
      { path: 'cnc-conversions', element: <CNCConversionsPage /> },
      { path: 'automation-retrofits', element: <AutomationRetrofitsPage /> },
      { path: 'cad-design-drafting', element: <CADDraftingPage /> },
      { path: 'custom-machinery-design', element: <CustomMachineryPage /> },
      { path: 'web-software-engineering', element: <WebSoftwarePage /> },
      { path: 'google-ads', element: <GoogleAdsPage /> },
      { path: 'case-studies', element: <CaseStudiesPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'thank-you', element: <ThankYouPage /> },
    ],
  },
];
