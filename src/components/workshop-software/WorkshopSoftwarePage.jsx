import SEO from '../common/SEO';
import ProjectVisual from '../common/ProjectVisual';
import {
  PageHero, PainGrid, Deliverables, Steps, ProofBlock, PriceBlock, FaqSection, CtaSection, SectionHeader,
} from '../common/ServiceBlocks';
import { faqSchemaFrom, serviceSchema } from '../../data/schema';
import './WorkshopSoftwarePage.css';

const SERVICE = 'Workshop Management System';
const WA = 'Hi, I run a workshop and would like a demo of the Workshop Management System.';

const features = [
  { title: 'Digital job cards', text: 'Every job gets a card with customer, unit, work done, parts used and photos taken on the phone. Status moves from booked in to ready for collection.' },
  { title: 'Barcode scanning', text: 'Scan a job or part instead of typing it. Faster on the floor and no mistyped numbers.' },
  { title: 'Warranty claims', text: 'A claim links back to the original job card, with a failure-analysis form, a PDF report and an approval step nobody can sign off on their own work.' },
  { title: 'Test and quality screens', text: 'Record bench test results and kit quality checks against the job, so the evidence is there when a customer asks.' },
  { title: 'Customers, parts and pricing', text: 'Customer history, inventory with spreadsheet import and export, a pricing calculator and a daily parts order sheet.' },
  { title: 'Management reports', text: 'Revenue summary, task completion, exceptions and staff stats, plus tools to find duplicate jobs and merge customers.' },
  { title: 'Queues and tasks', text: 'Run queues for wash bays, test benches or any station jobs wait for, and hand out tasks to the team.' },
  { title: 'Works offline', text: 'Workshops have bad signal. The app keeps working offline and only downloads what changed, so it stays fast as the job count grows.' },
];

const faqs = [
  {
    q: 'What kind of workshops is it for?',
    a: 'It was built for a turbocharger repair workshop, so it fits any job-card workshop: turbo, diesel and injector shops, auto and truck workshops, machine shops and repair centres. Your statuses, fields and job types are set up for how you work.',
  },
  {
    q: 'Is this a proven system or something you will build from scratch?',
    a: 'Proven. The same system runs a Pretoria turbo workshop every working day and has logged more than 3,300 job cards with over 20 users. You get that system set up for your workshop, not an experiment.',
  },
  {
    q: 'What does it run on?',
    a: 'Android phones and tablets on the workshop floor, and any web browser in the office. Data is stored in the cloud and backed up, and the app keeps working when the signal drops.',
  },
  {
    q: 'What does the monthly fee cover?',
    a: 'Hosting, backups, updates and support, so the system keeps running and improving without you managing servers.',
  },
  {
    q: 'Can you bring in our existing customer and parts lists?',
    a: 'Yes. Send your spreadsheets or exports and we import customers and parts as part of the setup.',
  },
  {
    q: 'Can you add something specific to our workshop?',
    a: 'Yes. Extra modules (for example quotes, test reports or certificates) are quoted as fixed-price additions.',
  },
];

const WorkshopSoftwarePage = () => (
  <div className="service-page">
    <SEO
      title="Workshop Management System for South African Workshops | Job Cards and Inventory"
      description="Job cards, live workshop board, customer history, parts inventory and offline support. A proven workshop management system running daily in a Pretoria turbo workshop. R7,500 setup + R2,500/month."
      canonical="/workshop-software"
      schema={[
        faqSchemaFrom(faqs),
        serviceSchema(SERVICE, 'Workshop management software with job cards, inventory and offline support for South African workshops.', '7500'),
      ]}
    />

    <PageHero
      tag="Workshop software · Proven in production"
      title="Run your workshop from one screen, not a stack of job cards."
      intro="The workshop management system behind a busy Pretoria turbocharger workshop, set up for yours. Job cards, live job status, customer history and parts in one app that works on the floor, in the office and offline."
      meta={['3,300+ job cards in production', 'Android + web', 'Works offline', 'R7,500 setup + R2,500/month']}
      service={SERVICE}
      waMessage={WA}
      primaryLabel="Book a live demo"
    />

    <PainGrid
      title="Is your workshop running on paper and memory?"
      items={[
        { title: '"Where is that job?"', text: 'Customers phone for updates and someone has to walk the floor to find out. Every call costs time and makes you look disorganised.' },
        { title: 'Parts that vanish', text: 'Parts get used and nobody records which job they went on. Stock runs out at the worst time and jobs never get fully billed.' },
        { title: 'No history, no numbers', text: 'When a unit comes back you cannot see what was done last time, and you have no real idea which jobs make money.' },
      ]}
    />

    <section className="sp-section sp-alt">
      <div className="container">
        <SectionHeader tag="What it does" title="Everything a job touches, in one place" />
        <div className="ws-layout">
          <div className="ws-visual"><ProjectVisual variant="app" /></div>
          <div className="ws-features">
            {features.map((f) => (
              <div key={f.title} className="ws-feature">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <ProofBlock
      tag="In production"
      title="Running a turbocharger workshop every day"
      alt={false}
      situation="A Pretoria turbocharger workshop ran job cards, parts and the wash-bay queue on paper. Job status lived in people's heads and nothing could be reported on."
      work="We built and rolled out the workshop management system on Android tablets and the office browser, with offline support for the workshop floor, and keep it maintained and improving."
      result="More than 3,300 job cards logged by over 20 users, with around 300 new jobs a month. The owner can see every job without leaving the office."
    />

    <Deliverables
      title="What the setup includes"
      lead="You are not buying a blank app. Setup gets you a working system configured for your workshop."
      items={[
        'Your company name and logo on the app and job cards',
        'Job types, statuses and fields set up for how your workshop works',
        'Customer and parts lists imported from your spreadsheets',
        'Phones and tablets set up for your team',
        'Hands-on training for the floor and the office',
        'Support while your team gets used to it',
      ]}
      sideTitle="Monthly fee covers"
      sideItems={['Cloud hosting and backups', 'Updates and improvements', 'Support by WhatsApp and phone']}
    />

    <Steps
      title="From demo to running in your workshop"
      steps={[
        { title: 'Live demo', text: 'We show you the real system on a call or at your workshop, using workflows like yours.' },
        { title: 'Set up', text: 'We configure job types and statuses, add your branding and import your customers and parts.' },
        { title: 'Roll out', text: 'Devices set up and the team trained on the floor. Paper and app can run side by side for the first week.' },
        { title: 'Run and improve', text: 'Monthly support, updates and backups. Extra modules quoted at a fixed price when you need them.' },
      ]}
    />

    <PriceBlock
      service={SERVICE}
      tiers={[
        { label: 'Once-off setup', price: 'R7,500', text: 'Configuration, branding, data import, device setup and training.', featured: true },
        { label: 'Monthly', price: 'R2,500/month', text: 'Hosting, backups, updates and support.' },
        { label: 'Extra modules', price: 'Fixed quote', text: 'Quotes, test reports, certificates or anything specific to your workshop.' },
      ]}
    />

    <FaqSection faqs={faqs} />

    <CtaSection
      title="See it running before you decide"
      text="Ask for a live demo. If it does not fit your workshop, we will tell you."
      service={SERVICE}
      waMessage={WA}
    />
  </div>
);

export default WorkshopSoftwarePage;
