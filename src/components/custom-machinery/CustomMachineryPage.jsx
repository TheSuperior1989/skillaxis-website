import SEO from '../common/SEO';
import { VideoLoop, MediaGrid, PlayVideo } from '../common/Media';
import { press, packs, bloomforge } from '../../data/media';
import {
  PageHero, PainGrid, Deliverables, Steps, ProofBlock, FaqSection, CtaSection, SectionHeader,
} from '../common/ServiceBlocks';
import { faqSchemaFrom, serviceSchema } from '../../data/schema';
import '../cad-drafting/CADDraftingPage.css';
import '../offers/OfferPages.css';

const SERVICE = 'Custom Machinery';
const WA = 'Hi, I need a custom machine or piece of equipment designed. Here is what it has to do:';

const priceLines = [
  { title: 'Design and engineering', text: '3D design, drawings and BOM. Fixed price, paid as the deposit, and the drawings are yours.', price: 'Fixed line' },
  { title: 'Manufacturing', text: 'Priced per item, so you can change quantities and see the cost move. Built by us and trusted fabricators.', price: 'Fixed per unit' },
  { title: 'Delivery and installation', text: 'Transport, installation and commissioning on site, anywhere in South Africa.', price: 'Fixed line' },
];

const faqs = [
  {
    q: 'What kind of equipment do you design?',
    a: 'Jigs and fixtures, workshop tooling, test benches and balancers, material handling like racking and trolleys, food processing equipment such as trays and mixers, and special-purpose machines that do one job well.',
  },
  {
    q: 'Do you build it or only design it?',
    a: 'Either. Some clients only want the design and drawings so they can build in-house. Others want us to manage the full build. Design and manufacturing are separate fixed lines, so you choose.',
  },
  {
    q: 'How do you price a custom machine?',
    a: 'Fixed prices in three lines: design and engineering, manufacturing per item, and delivery and installation. Each gets a low, likely and high estimate at concept stage, then a fixed price once the design is agreed.',
  },
  {
    q: 'Can you copy or improve an existing machine?',
    a: 'Yes. We measure and model the existing machine, fix what wears or breaks, and produce full drawings so it can be built again.',
  },
  {
    q: 'Do you work outside Gauteng?',
    a: 'Yes. Design is done remotely, and we deliver and install nationwide with travel priced as its own line.',
  },
];

const CustomMachineryPage = () => (
  <div className="service-page">
    <SEO
      title="Custom Machinery and Equipment Design | Jigs, Fixtures, Process Equipment | South Africa"
      description="Custom machines, jigs, fixtures, test benches, racking, trolleys and food processing equipment, designed and built in South Africa. Fixed prices with design and manufacturing as separate lines. SkillAxis Dynamics, Pretoria."
      canonical="/custom-machinery-design"
      schema={[
        faqSchemaFrom(faqs),
        serviceSchema('Custom machinery design', 'Design, drawings and build management for custom machines, jigs, fixtures and process equipment.'),
      ]}
    />

    <PageHero
      tag="Custom machinery · Pretoria, nationwide"
      title="When nothing off the shelf does the job, we design the machine that does."
      intro="Jigs, fixtures, tooling, test benches, racking, trolleys and process equipment, designed in 3D, drawn for manufacture and built to a fixed price. You see the machine working on screen before any steel is cut."
      meta={['Design and manufacturing priced separately', 'Full drawings handed over', 'Delivery and installation nationwide']}
      service={SERVICE}
      waMessage={WA}
    />

    <section className="sp-section">
      <div className="container">
        <SectionHeader tag="A machine in two days" title="A 60 t angle-flaring press: sized, designed, analysed and filmed" subtitle="Force calculations for every section, 69 parts around a standard cylinder and power pack, a 49-drawing set, finite-element checks on the frame and a film the client could show his team." />
        <div className="offer-split" style={{ marginTop: 32 }}>
          <VideoLoop src={press.cycle.src} poster={press.cycle.poster} label={press.cycle.caption} />
          <VideoLoop src={press.hotbend.src} poster={press.hotbend.poster} label={press.hotbend.caption} />
        </div>
        <MediaGrid items={[press.overview, press.operator, press.pack, press.hotbendHot, press.adjustableDie, press.quickChange]} columns={3} />
      </div>
    </section>

    <PainGrid
      alt
      title="Why clients ask for custom"
      items={[
        { title: 'Your process is unusual', text: 'Your part, product or space does not match anything you can buy. A machine designed for your job beats a standard one you have to work around.' },
        { title: 'Manual work is the bottleneck', text: 'People lifting, positioning or repeating the same step all day. The right fixture or machine takes the strain and the variation out.' },
        { title: 'You need a price before you commit', text: 'Investors, owners and banks want a costed design. We give you 3D, drawings and a priced BOM to take to them.' },
      ]}
    />

    <Deliverables
      title="What we design and build"
      items={[
        'Welding, assembly and machining jigs and fixtures',
        'Workshop tooling and special tools',
        'Test benches, balancers and measuring rigs',
        'Racking, trolleys and material handling',
        'Food processing equipment: trays, racking, mixers',
        'Special-purpose machines and frames',
        'Rebuilds and improvements of existing machines',
      ]}
      sideTitle="Designed by SkillAxis"
      sideItems={[
        'Turbocharger tooling, fixtures and jigs designed and machined weekly',
        'A 60 t angle-flaring press and adjustable hot-bend tooling for tower steel',
        'A two-plane dynamic balancer for turbochargers',
        'Factory equipment package: trays, blast-room racking, trolleys and a mixer',
        'An automatic tool changer and CNC conversion hardware',
      ]}
    />

    <section className="sp-section">
      <div className="container">
        <SectionHeader
          tag="How we price"
          title="Three fixed lines, no hourly surprises"
          subtitle="Every custom job is split so you can see, change and approve each part of the cost."
        />
        <div className="cad-lanes cad-lanes--three">
          {priceLines.map((line) => (
            <div key={line.title} className="cad-lane">
              <h3>{line.title}</h3>
              <p>{line.text}</p>
              <span className="cad-lane-price">{line.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <SectionHeader tag="Everything we do, in one machine" title="Bloomforge: a motorised five-mode hearth, concept to build guide in four days" subtitle="Feasibility against heat, patents and standards; a full assembly of 113 parts and 1,270 fasteners, checked for clashes in every mode; bolted and welded manufacturing guides with flat patterns; a promo film and an exploded assembly film. Highlights shown here; the full films and the build guide are shared with clients under agreement." />
        <PlayVideo src={bloomforge.promo.src} poster={bloomforge.promo.poster} label={bloomforge.promo.caption} />
        <MediaGrid items={[bloomforge.closed, bloomforge.boma, bloomforge.braai, bloomforge.rotisserie, bloomforge.plancha, bloomforge.night]} columns={3} />
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <SectionHeader tag="Process equipment" title="Stainless trays, racking and trolleys for a food factory" subtitle="Weld-free sheet-metal design with tab-locked fins, 27 drawings, 15 flat patterns and a costing, quoted in three days." />
        <div className="offer-split" style={{ marginTop: 32 }}>
          <VideoLoop src={packs.trayTabLock.src} poster={packs.trayTabLock.poster} label={packs.trayTabLock.caption} ratio="1280 / 570" />
          <MediaGrid items={[packs.foodTray, packs.trayRack]} columns={2} />
        </div>
      </div>
    </section>

    <ProofBlock
      alt={false}
      title="Special tooling for a turbo workshop"
      situation="A turbocharger workshop needed special tools, jigs and fixtures that nobody sells: compressor wheel removal, balancing adapters, disassembly jigs and manifold flanges."
      work="Designed over a hundred tools, fixtures and adapters, drew them for manufacture and machined many of them on CNC machines we converted."
      result="Purpose-made tooling for jobs no catalogue covers, designed by an engineer who does this kind of work every week."
      link={{ to: '/case-studies', label: 'See all engineering projects' }}
    />

    <Steps
      title="From idea to installed machine"
      alt
      steps={[
        { title: 'Requirements', text: 'What it must do, how fast, how big, where it goes and what it must survive.' },
        { title: 'Concept and estimate', text: '3D concept and a low, likely and high price for each line, so you can decide early.' },
        { title: 'Detailed design', text: 'Full 3D model, drawings and BOM. Paid as the deposit, and the design is yours.' },
        { title: 'Build and install', text: 'Manufactured, assembled, delivered and commissioned on site.' },
      ]}
    />

    <FaqSection faqs={faqs} alt={false} />

    <CtaSection
      title="Describe the job the machine has to do"
      text="Two lines and a photo of the current process is enough to start. We will come back with questions and a ballpark."
      service={SERVICE}
      waMessage={WA}
    />
  </div>
);

export default CustomMachineryPage;
