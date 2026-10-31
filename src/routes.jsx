import { Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ServicesPage from './components/services/ServicesPage';
import ContactPage from './components/contact/ContactPage';
import CNCConversionsPage from './components/cnc-conversions/CNCConversionsPage';
import AutomationRetrofitsPage from './components/automation-retrofits/AutomationRetrofitsPage';
import CADDraftingPage from './components/cad-drafting/CADDraftingPage';
import CustomMachineryPage from './components/custom-machinery/CustomMachineryPage';
import WebSoftwarePage from './components/web-software/WebSoftwarePage';
import GoogleAdsPage from './components/google-ads/GoogleAdsPage';
import CaseStudiesPage from './components/case-studies/CaseStudiesPage';
import PricingPage from './components/pricing/PricingPage';
import ThankYouPage from './components/thank-you/ThankYouPage';
import WorkshopSoftwarePage from './components/workshop-software/WorkshopSoftwarePage';
import MotorArmourPage from './components/motorarmour/MotorArmourPage';
import ProjectPage from './components/projects/ProjectPage';
import HowItWorksPage from './components/how-it-works/HowItWorksPage';
import DesignPackPage from './components/offers/DesignPackPage';
import PlantVisualisationPage from './components/offers/PlantVisualisationPage';
import CapacityReportPage from './components/offers/CapacityReportPage';
import CT12ProductPage from './components/offers/CT12ProductPage';
import { projects } from './data/projects';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'portfolio', element: <Navigate to="/case-studies" replace /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'quote', element: <Navigate to="/pricing" replace /> },
      { path: 'projects/:id', element: <ProjectPage />, getStaticPaths: () => projects.map((p) => `/projects/${p.id}`) },
      { path: 'cnc-conversions', element: <CNCConversionsPage /> },
      { path: 'automation-retrofits', element: <AutomationRetrofitsPage /> },
      { path: 'cad-design-drafting', element: <CADDraftingPage /> },
      { path: 'custom-machinery-design', element: <CustomMachineryPage /> },
      { path: 'web-software-engineering', element: <WebSoftwarePage /> },
      { path: 'google-ads', element: <GoogleAdsPage /> },
      { path: 'workshop-software', element: <WorkshopSoftwarePage /> },
      { path: 'motorarmour', element: <MotorArmourPage /> },
      { path: 'case-studies', element: <CaseStudiesPage /> },
      { path: 'how-it-works', element: <HowItWorksPage /> },
      { path: 'design-pack', element: <DesignPackPage /> },
      { path: 'plant-visualisation', element: <PlantVisualisationPage /> },
      { path: 'machine-capacity-report', element: <CapacityReportPage /> },
      { path: 'products/ct12-420', element: <CT12ProductPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'thank-you', element: <ThankYouPage /> },
    ],
  },
];
