import SEO from '../common/SEO';
import { MediaGrid, VideoLoop } from '../common/Media';
import { electronics, controls } from '../../data/media';
import {
  PageHero, PainGrid, Deliverables, Steps, ProofBlock, PriceBlock, FaqSection, CtaSection, SectionHeader,
} from '../common/ServiceBlocks';
import '../offers/OfferPages.css';
import { faqSchemaFrom, serviceSchema } from '../../data/schema';

const SERVICE = 'Machine Controls and Retrofits';
const WA = 'Hi, I have a machine that needs a controls upgrade or retrofit. Here are some details:';

const faqs = [
  {
    q: 'What kind of retrofit work do you do?',
    a: 'Motion and machine controls: servo and stepper drives, spindle speed control, handwheels and pendants, automatic tool changers, electronic lead screws for threading, limit and home switches, and control panel layouts. Mostly on machine tools and workshop equipment.',
  },
  {
    q: 'Do you do full factory PLC and SCADA systems?',
    a: 'That is not our core work. We focus on individual machines and workshop equipment. If your job needs plant-wide PLC or SCADA work, we will tell you up front and can design the mechanical side alongside your controls contractor.',
  },
  {
    q: 'Can you work on old machines with no documentation?',
    a: 'Yes. We measure, model and document the machine as part of the job, so you end up with drawings and a wiring layout you never had.',
  },
  {
    q: 'Who does the electrical installation?',
    a: 'We design the panel layout and wiring and do the machine-side work. Where a job needs a registered electrician for supply or compliance, we bring one in and include it as a separate fixed line.',
  },
];

const AutomationRetrofitsPage = () => (
  <div className="service-page">
    <SEO
      title="Machine Controls and Retrofits | Drives, Tool Changers, Lead Screws | Pretoria"
      description="Upgrade the controls on machine tools and workshop equipment: servo and stepper drives, spindle control, automatic tool changers, electronic lead screws and control panel layouts. From R15,000. Pretoria."
      canonical="/automation-retrofits"
      schema={[
        faqSchemaFrom(faqs),
        serviceSchema('Machine controls and retrofits', 'Drive, spindle control, tool changer and control panel retrofits for machine tools and workshop equipment.', '15000'),
      ]}
    />

    <PageHero
      tag="Machine controls · Retrofits · Pretoria"
      title="Give a good machine modern controls instead of replacing it."
      intro="Drives, spindle control, tool changers, electronic lead screws and control panels for machine tools and workshop equipment, from the engineer who developed them for our own machines."
      meta={['From R15,000', 'Own tool changer design', 'Own electronic lead screw', 'Panel layouts documented']}
      service={SERVICE}
      waMessage={WA}
    />

    <section className="sp-section">
      <div className="container">
        <SectionHeader tag="Controllers we built" title="Circuit, board, enclosure and firmware, all in-house" subtitle="The tool changer controller: schematic, a two-layer shield board we laid out and had made, the enclosure, and the firmware that talks to the CNC control over Modbus. The same family of boards runs our electronic lead screw and balancer." />
        <MediaGrid items={[electronics.schematic, electronics.pcb, electronics.shieldPhoto, electronics.prototype, electronics.elsEnclosure, electronics.solenoid]} columns={3} />
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container offer-split offer-split--text">
        <div>
          <SectionHeader tag="For client machines" title="A controller designed before the hardware is bought" />
          <p className="sp-lead">For a client's vehicle-mounted mechanism we designed the enclosure, harness and schematics together and ran the firmware through 160 bench-simulated checks, including a jammed drive, a slow motor, a broken sensor wire and a power loss mid-move, before a single part was ordered.</p>
          <ul className="sp-list">
            <li>Enclosure, drivers, terminals and harness designed as one</li>
            <li>Schematics and a drilling template for the panel builder</li>
            <li>Fault codes shown on the dash and explained on a card</li>
          </ul>
        </div>
        <div>
          <VideoLoop src={controls.boxBuild.src} poster={controls.boxBuild.poster} label={controls.boxBuild.caption} ratio="1920 / 1444" />
        </div>
      </div>
    </section>

    <PainGrid
      title="When a controls retrofit makes sense"
      items={[
        { title: 'Solid machine, tired controls', text: 'The castings, ways and spindle are fine, but the drives or controls are failing or obsolete. Replacing the whole machine wastes good iron.' },
        { title: 'Slow, manual operations', text: 'Tool changes, threading set-ups and repeat moves eat operator time. The right controls take those steps out.' },
        { title: 'Nobody knows how it is wired', text: 'No drawings, no wiring layout, and every fault is a guessing game. We leave you with documentation.' },
      ]}
    />

    <Deliverables
      title="What we retrofit"
      items={[
        'Servo and stepper drive upgrades',
        'Spindle speed control with a variable speed drive',
        'Automatic tool changers',
        'Electronic lead screws for threading on manual lathes',
        'Handwheels, pendants and operator controls',
        'Limit, home and safety stop circuits',
        'Control panel layout and wiring documentation',
      ]}
      sideTitle="Built for our own machines first"
      sideItems={[
        'A 12-position automatic tool changer with its own electronics',
        'An electronic lead screw for threading, refined over many versions',
        'A handwheel controller for a CNC machine',
        'Full mill and lathe CNC conversions',
      ]}
    />

    <ProofBlock
      title="Controls engineering we developed ourselves"
      situation="Our own CNC and lathe work needed automatic tool changes and better threading, and nothing off the shelf fitted the machines."
      work="Designed and developed a 12-position automatic tool changer with its own electronics and controller integration, and an electronic lead screw for threading, refined over many versions."
      result="When we retrofit your machine, you get someone who has designed drives, electronics and controller integration for real machines, not only installed kits."
      link={{ to: '/cnc-conversions', label: 'See full CNC conversions' }}
    />

    <Steps
      title="How a retrofit runs"
      steps={[
        { title: 'Tell us about the machine', text: 'Photos, nameplates and what you want it to do better.' },
        { title: 'Assessment', text: 'We check the machine and confirm what is worth upgrading and what is not.' },
        { title: 'Fixed-price proposal', text: 'Parts, design, installation and any electrician as separate fixed lines.' },
        { title: 'Build, test, document', text: 'Installed, tested on your work, and handed over with the wiring layout.' },
      ]}
      alt
    />

    <PriceBlock
      service={SERVICE}
      from="Starting from"
      amount="R15,000"
      text="A single drive or spindle control upgrade, installed and tested. Tool changers and multi-axis retrofits are quoted per machine."
    />

    <FaqSection faqs={faqs} />

    <CtaSection
      title="Tell us what the machine should do"
      text="Send photos and a line about what is wrong or slow. We will tell you whether a retrofit is worth it."
      service={SERVICE}
      waMessage={WA}
    />
  </div>
);

export default AutomationRetrofitsPage;
