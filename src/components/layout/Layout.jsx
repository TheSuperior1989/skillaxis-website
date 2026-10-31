import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Head } from 'vite-react-ssg';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyWhatsApp from '../common/StickyWhatsApp';
import './Layout.css';

const ScrollRestorer = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'SkillAxis Dynamics',
  url: 'https://www.skillaxisdynamics.co.za',
  logo: 'https://www.skillaxisdynamics.co.za/skillaxis-favicon.svg',
  image: 'https://www.skillaxisdynamics.co.za/og/skillaxis-og.jpg',
  legalName: 'SkillAxis Dynamics (Pty) Ltd',
  description:
    'Engineering and software company in Pretoria: CAD and plant drawings, CNC conversions and programming, custom machinery, workshop management software, MotorArmour motor protection and Google Ads.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pretoria',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  telephone: '+27782964786',
  email: 'info@skillaxisdynamics.co.za',
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-13:00'],
  areaServed: 'South Africa',
  priceRange: 'R1,500 - R150,000',
  knowsAbout: ['CNC conversion', 'G-code programming', 'Mechanical drafting', 'Plant layout', 'Patent drawings', 'Custom machinery', 'Workshop management software', 'Electric motor protection', 'Google Ads'],
  sameAs: [
    'https://www.facebook.com/profile.php?id=100092689467268',
  ],
};

const Layout = () => (
  <>
    <Head>
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
    </Head>
    <ScrollRestorer />
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  </>
);

export default Layout;
