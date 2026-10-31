import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Showreel from './Showreel';
import Timeline from '../common/Timeline';
import ServicesOverview from './ServicesOverview';
import FeaturedProjects from './FeaturedProjects';
import WhyUs from './WhyUs';
import ContactCTA from './ContactCTA';
import { FaqSection, SectionHeader } from '../common/ServiceBlocks';
import { faqSchemaFrom } from '../../data/schema';
import './HomePage.css';

const faqs = [
  {
    q: 'Do you work outside Pretoria?',
    a: 'Yes. Drawings, CAM programming, software and Google Ads are done remotely for clients anywhere in South Africa. Machine and installation work is done on site, with travel quoted as its own fixed line.',
  },
  {
    q: 'I only have a sketch or a broken part. Can you still help?',
    a: 'That is how most jobs start. We work from sketches, photos, measurements and physical parts, and turn them into proper 3D models and manufacturing drawings.',
  },
  {
    q: 'How do you price?',
    a: 'Fixed prices only, never hourly. Each page lists a starting price so you know the ballpark before you contact us. Your written quote splits design, manufacturing and installation so you can see exactly what you are paying for.',
  },
  {
    q: 'Are you a big company?',
    a: 'No, and that is the point. SkillAxis is a small, founder-led engineering company. You get the engineer who does the work, not a junior and an account manager. For larger builds we bring in trusted fabricators and electricians and manage them for you.',
  },
  {
    q: 'Can I see the work before I commit?',
    a: 'Yes. Ask on WhatsApp and we will walk you through a live demo of the workshop software, sample drawing packages or campaign reports relevant to your job.',
  },
];

const HomePage = () => (
  <div className="home-page">
    <Head>
      <script type="application/ld+json">{JSON.stringify(faqSchemaFrom(faqs))}</script>
    </Head>
    <Hero />
    <Showreel />
    <ServicesOverview />
    <FeaturedProjects />
    <section className="sp-section sp-alt home-timeline">
      <div className="container">
        <SectionHeader tag="How it works" title="From a WhatsApp photo to a finished job" subtitle="Six stages, each with a fixed price, a check and a handover. The full version shows typical timelines and payment points." />
        <Timeline compact />
        <div className="sb-center">
          <Link to="/how-it-works" className="btn btn-ghost">See the full journey, timelines and payment points</Link>
        </div>
      </div>
    </section>
    <WhyUs />
    <FaqSection faqs={faqs} alt={false} />
    <ContactCTA />
  </div>
);

export default HomePage;
