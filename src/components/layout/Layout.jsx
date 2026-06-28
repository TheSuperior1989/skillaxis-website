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
  image: 'https://www.skillaxisdynamics.co.za/skillaxis-social-preview.svg',
  description:
    'Precision CNC conversions, automation retrofits, CAD drafting, custom machinery design, and web & software engineering in Pretoria, South Africa.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pretoria',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  telephone: '+27782964786',
  email: 'info@skillaxisdynamics.co.za',
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-14:00'],
  areaServed: 'South Africa',
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
