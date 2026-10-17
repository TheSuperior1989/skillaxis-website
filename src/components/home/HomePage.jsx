import { Head } from 'vite-react-ssg';
import Hero from './Hero';
import ServicesOverview from './ServicesOverview';
import FeaturedProjects from './FeaturedProjects';
import WhyUs from './WhyUs';
import ContactCTA from './ContactCTA';
import {
  Steps, FaqSection,
} from '../common/ServiceBlocks';
import { faqSchemaFrom } from '../../data/schema';
import './HomePage.css';

const steps = [
  {
    title: 'Send us what you have',
    text: 'WhatsApp or email photos, a sketch, a drawing, the part number or a short voice note. You do not need a formal spec to start.',
  },
  {
    title: 'Short scoping call',
    text: 'We ask the engineering questions up front: tolerances, quantities, deadlines, where it has to go and what it has to survive.',
  },
  {
    title: 'Fixed price in writing',
    text: 'A written quote with design, manufacturing and installation as separate fixed lines. A deposit starts the job.',
  },
  {
    title: 'Delivered and handed over',
    text: 'Drawings, files, machines or software handed over and explained. If something is not right, we fix it.',
  },
];

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
    <ServicesOverview />
    <FeaturedProjects />
    <WhyUs />
    <Steps tag="How it works" title="From WhatsApp message to finished job" steps={steps} alt />
    <FaqSection faqs={faqs} alt={false} />
    <ContactCTA />
  </div>
);

export default HomePage;
