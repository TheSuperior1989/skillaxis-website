import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import ProjectVisual from '../common/ProjectVisual';
import {
  PageHero, PainGrid, Deliverables, Steps, PriceBlock, FaqSection, CtaSection, SectionHeader,
} from '../common/ServiceBlocks';
import { faqSchemaFrom, serviceSchema } from '../../data/schema';
import { getProject } from '../../data/projects';
import './WebSoftwarePage.css';

const SERVICE = 'Website or Business Software';
const WA = 'Hi, I need a website or business system. Here is what I have in mind:';

const SHOWCASE = ['workshop-app', 'inventory', 'programme-system', 'booking'];

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'A single-page business website starts from R1,500. Multi-page business sites start from R6,000, online stores from R12,000 and custom business systems from R25,000. You get a fixed price before we start.',
  },
  {
    q: 'How long does it take?',
    a: 'A single-page site usually takes about a week once we have your content. Multi-page sites take a few weeks. Custom systems are planned in stages, with a timeline in your quote.',
  },
  {
    q: 'Will it work on phones and show up on Google?',
    a: 'Yes. Every site is built mobile-first, loads fast and is set up with page titles, descriptions, structured data and a sitemap so Google can find it. Pair it with Google Ads if you need calls quickly.',
  },
  {
    q: 'Can you build a system like the workshop or inventory apps for my business?',
    a: 'Yes. Those systems handle job cards, stock, quotes, invoices and bookings for real businesses every day. If you run a job-card workshop, see our ready-made Workshop Management System first, it is faster and cheaper than a custom build.',
  },
  {
    q: 'Do I own it?',
    a: 'Yes. Your domain, your content and your site are yours. We can host and maintain it for a monthly fee, or hand it over.',
  },
];

const WebSoftwarePage = () => (
  <div className="service-page">
    <SEO
      title="Websites and Business Software | From R1,500 | Pretoria, South Africa"
      description="Business websites from R1,500, and custom software for inventory, job cards, bookings, quotes and invoices. Systems we built run real South African businesses every day. SkillAxis Dynamics, Pretoria."
      canonical="/web-software-engineering"
      schema={[
        faqSchemaFrom(faqs),
        serviceSchema('Web and software development', 'Business websites and custom business software for South African companies.', '1500'),
      ]}
    />

    <PageHero
      tag="Websites · Business software · Pretoria"
      title="Websites that bring in work, and software your staff actually use."
      intro="From a R1,500 single-page site to the system a business runs on every day. Our software handles job cards, inventory, quotes, invoices and bookings for real South African businesses right now."
      meta={['Sites from R1,500', 'Systems in daily production use', 'Mobile-first and fast', 'Hosting and support available']}
      service={SERVICE}
      waMessage={WA}
    />

    <PainGrid
      title="Sound familiar?"
      items={[
        { title: 'Your website does not bring in calls', text: 'It looks fine but nobody phones. We build pages around what your customers search for, with a clear way to contact you on every screen.' },
        { title: 'The business runs on spreadsheets', text: 'Stock, quotes, invoices and jobs live in five spreadsheets and someone\'s head. A proper system puts them in one place.' },
        { title: 'Software that nobody uses', text: 'Off-the-shelf systems built for someone else\'s business get abandoned. We build around how your people already work.' },
      ]}
    />

    <section className="sp-section sp-alt">
      <div className="container">
        <SectionHeader tag="Running in production" title="Systems we built, in daily use" />
        <div className="web-showcase">
          {SHOWCASE.map(getProject).map((p) => (
            <div key={p.id} className="web-card">
              <div className="web-card-visual"><ProjectVisual variant={p.visual} /></div>
              <div className="web-card-body">
                <span className="web-card-metric">{p.metric}</span>
                <h3>{p.title}</h3>
                <p className="web-card-client">{p.client}</p>
                <p>{p.result}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sb-center">
          <Link to="/workshop-software" className="btn btn-primary">Run a workshop? See the Workshop Management System</Link>
        </div>
      </div>
    </section>

    <Deliverables
      alt={false}
      title="What we build"
      items={[
        'Single-page and multi-page business websites',
        'Online stores and product catalogues',
        'Inventory, quoting and invoicing systems',
        'Job card and workshop systems',
        'Booking and reservation systems',
        'Customer portals and dashboards',
        'Landing pages for Google Ads campaigns',
        'Project and programme control systems',
        'Job tracking and certificate systems',
        'Interactive proposal sites with a live quote builder',
      ]}
      sideTitle="Every website includes"
      sideItems={[
        'Mobile-first design',
        'Contact form, click-to-call and WhatsApp buttons',
        'Page titles, descriptions and structured data for Google',
        'Fast loading',
        'Help getting your domain and email set up',
      ]}
    />

    <Steps
      title="How we build"
      alt
      steps={[
        { title: 'Brief', text: 'What the business does, who the customers are and what the site or system must achieve.' },
        { title: 'Fixed price', text: 'Scope, pages or features, timeline and price in writing.' },
        { title: 'Build and review', text: 'You see it working early and give feedback before launch.' },
        { title: 'Launch and support', text: 'Live on your domain, with hosting and support available monthly.' },
      ]}
    />

    <PriceBlock
      service={SERVICE}
      tiers={[
        { label: 'Single-page website', price: 'From R1,500', text: 'One page: services, about, contact form and WhatsApp button.', featured: true },
        { label: 'Multi-page website', price: 'From R6,000', text: 'Five to eight pages, contact forms and search setup.' },
        { label: 'Online store', price: 'From R12,000', text: 'Product catalogue, cart and payment gateway.' },
        { label: 'Business system', price: 'From R25,000', text: 'Inventory, bookings, quotes, invoices or portals, quoted per scope.' },
      ]}
    />

    <FaqSection faqs={faqs} />

    <CtaSection
      title="Tell us what you need built"
      text="A website, an online store or a system to replace the spreadsheets. Two lines on WhatsApp is enough to start."
      service={SERVICE}
      waMessage={WA}
    />
  </div>
);

export default WebSoftwarePage;
