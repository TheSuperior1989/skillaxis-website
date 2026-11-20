import SEO from '../common/SEO';
import Timeline from '../common/Timeline';
import { PageHero, FaqSection, CtaSection, SectionHeader } from '../common/ServiceBlocks';
import { VideoLoop } from '../common/Media';
import { payment } from '../../data/timeline';
import { press, packs } from '../../data/media';
import { faqSchemaFrom } from '../../data/schema';
import '../cnc-conversions/CNCConversionsPage.css';
import '../common/Timeline.css';
import './HowItWorksPage.css';

const SERVICE = 'Not sure yet';
const WA = 'Hi, I read how a project runs on your site and would like to start one.';

const faqs = [
  { q: 'What if I change my mind halfway?', a: 'Early changes are cheap because the drawings, lists and costing all follow the model. One revision round is included in every design line; a change of scope after release is quoted as a new fixed line, never billed by the hour.' },
  { q: 'Do I own the design?', a: 'Yes. On payment of the design line the drawings, models and files are yours in PDF, STEP and DXF. You can build with us, build in-house or take them to any fabricator.' },
  { q: 'Do you sign off structures and pressure equipment?', a: 'We produce the engineering: models, calculations, finite-element checks and reports with every assumption labelled. Where a registered professional must sign (structures, lifting equipment, pressure systems) we work with one and say so up front.' },
  { q: 'What happens if the job goes wrong?', a: 'We tell you early and fix it. Every stage has a check before the next one starts: a clash and fit check on the model, a factory acceptance check before delivery, commissioning on site.' },
  { q: 'Do you work outside Gauteng?', a: 'Design, drawings, reports, software and ads are done remotely for clients anywhere. Installation and treatment work is quoted with travel as its own line.' },
];

const HowItWorksPage = () => (
  <div className="service-page">
    <SEO
      title="How a Project Runs | From First Message to Handover"
      description="What to expect when you work with SkillAxis Dynamics: send a photo, get a fixed price in writing, see the design modelled and checked before anything is built, then build, install and hand over. What you get at each stage and when you pay."
      canonical="/how-it-works"
      schema={faqSchemaFrom(faqs)}
    />

    <PageHero
      tag="How it works · What to expect"
      title="From a WhatsApp photo to a finished job, in six steps."
      intro="Every job runs the same way, whether it is a drawing, a machine, a software system or a batch of motors. You always know what happens next, what you will receive and what we need from you."
      meta={['Fixed price in writing before work starts', 'Every part checked before you see it', 'You own the files on release', 'One team, start to finish']}
      service={SERVICE}
      waMessage={WA}
      primaryLabel="Start a job"
    />

    <section className="sp-section">
      <div className="container">
        <SectionHeader tag="The journey" title="Six stages, no surprises" subtitle="What you get and what we need at every stage. Your written quote carries the dates." />
        <Timeline />
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container hw-split">
        <div>
          <SectionHeader tag="How we work" title="One model, everything from it" />
          <p className="sp-lead">We model from the agreed dimensions and check every part for clashes, fit, mass and envelope before you see it. The drawings, bill of materials, costing, datasheet and explainer film all come from that one model, so a change flows through the whole package instead of costing a week of redrawing.</p>
          <ul className="sp-list">
            <li>Checks report numbers, not opinions: zero interferences at every position</li>
            <li>Every estimate is labelled as an estimate until it is measured</li>
            <li>Renders and a short film with every design review</li>
            <li>Drawings released in PDF, STEP and DXF</li>
          </ul>
        </div>
        <div className="hw-media">
          <VideoLoop src={press.cycle.src} poster={press.cycle.poster} label="A 60 t press designed, analysed and filmed in two days" />
          <VideoLoop src={packs.ct12HowItWorks.src} poster={packs.ct12HowItWorks.poster} label="A chain tensioner: model, drawings, costing and films in one day" ratio="1920 / 904" />
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <SectionHeader tag="Payment points" title="When you pay, and for what" subtitle="Design, manufacturing and installation are separate fixed lines, so you only pay for what you need." />
        <table className="tl-table">
          <thead>
            <tr><th>Point</th><th>What is due</th></tr>
          </thead>
          <tbody>
            {payment.map((p) => (
              <tr key={p.point}><td>{p.point}</td><td>{p.what}</td></tr>
            ))}
          </tbody>
        </table>
        <p className="sb-price-note">Prices exclude VAT. SkillAxis Dynamics is not VAT registered, so no VAT is added to our invoices.</p>
      </div>
    </section>

    <FaqSection faqs={faqs} alt={false} />

    <CtaSection
      title="Start with a photo"
      text="Send a picture of the part, the sketch or the problem. You will get the engineering questions, or a ballpark if the job is clear."
      service={SERVICE}
      waMessage={WA}
    />
  </div>
);

export default HowItWorksPage;
