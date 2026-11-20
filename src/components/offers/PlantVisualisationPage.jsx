import SEO from '../common/SEO';
import {
  PageHero, PainGrid, Deliverables, Steps, ProofBlock, PriceBlock, FaqSection, CtaSection, SectionHeader,
} from '../common/ServiceBlocks';
import { VideoLoop, MediaGrid } from '../common/Media';
import { plant } from '../../data/media';
import { faqSchemaFrom, serviceSchema } from '../../data/schema';
import '../cnc-conversions/CNCConversionsPage.css';
import './OfferPages.css';

const SERVICE = 'Plant Layout and Visualisation';
const WA = 'Hi, we are planning a factory or production line and would like a 3D layout and walkthrough film.';

const faqs = [
  { q: 'What do you need to start?', a: 'The building drawings or a site survey, the machine list with footprints (brochures are enough), the process flow and the throughput you are planning for. Photos of the existing site help with the finish.' },
  { q: 'How accurate is the layout?', a: 'Buildings and machines are modelled to the drawings and nameplates you give us, and every dimension we had to estimate is labelled as an estimate. Clearances, crane reach, walkways and material flow are checked in the model, so you find the clashes on screen instead of on the floor.' },
  { q: 'What is the film for?', a: 'Board approval, investors, tenders and staff. A three-minute walkthrough shows what a 60-page layout drawing cannot: how material moves, where people stand and what the plant will look like.' },
  { q: 'Can you update it as the plan changes?' , a: 'Yes. The layout is built from a machine list and positions, so moving a line or adding a machine is a quick update to the model, and a new film render costs hours, not weeks.' },
  { q: 'Do you also design the machines?', a: 'Yes. Presses, conveyors, feed tables, lifts and tooling can be designed into the same layout with finite-element checks and drawings. See Custom Machinery.' },
];

const PlantVisualisationPage = () => (
  <div className="service-page">
    <SEO
      title="3D Plant Layout and Walkthrough Films | See Your Factory Before You Build It"
      description="3D layout of your factory or production line, machine by machine, with clearances, crane reach and material flow checked, plus 4K stills, A1 boards and a walkthrough film for the board, investors and tenders. SkillAxis Dynamics, Pretoria."
      canonical="/plant-visualisation"
      schema={[
        faqSchemaFrom(faqs),
        serviceSchema('Plant layout and visualisation', '3D factory layout, clearance and flow checks, 4K stills, boards and walkthrough films.'),
      ]}
    />

    <PageHero
      tag="Plant layouts · Walkthrough films · Boards"
      title="See your factory working before you pour the floor."
      intro="We model the building and every machine, check flow, clearances and crane reach, and hand you a layout drawing, a bill of machines, 4K stills, A1 boards and a walkthrough film your board, bank or tender panel can understand in three minutes."
      meta={['Layout built from your machine list', 'Clashes found on screen, not on site', '4K stills, A1 boards and a film', 'Films re-rendered in hours when the plan changes']}
      service={SERVICE}
      waMessage={WA}
      primaryLabel="Discuss a layout"
    />

    <section className="sp-section">
      <div className="container">
        <div className="offer-hero-media">
          <VideoLoop src={plant.heroLoop.src} poster={plant.heroLoop.poster} label={plant.heroLoop.caption} />
        </div>
        <div className="offer-split">
          <VideoLoop src={plant.latticeLines.src} poster={plant.latticeLines.poster} label={plant.latticeLines.caption} />
          <VideoLoop src={plant.flyover.src} poster={plant.flyover.poster} label={plant.flyover.caption} />
        </div>
      </div>
    </section>

    <PainGrid
      title="What goes wrong without a 3D layout"
      alt
      items={[
        { title: 'The crane cannot reach', text: 'A machine goes in where the drawing said it fits, and the crane hook stops a metre short of the feed table.' },
        { title: 'Flow that fights itself', text: 'Raw material and finished product cross paths, forklifts queue, and a line that should do 4,000 tonnes a month does 2,500.' },
        { title: 'Nobody can picture it', text: 'The board, the bank and the tender panel see a 2D drawing and ask the same questions. A film answers them before they are asked.' },
      ]}
    />

    <Deliverables
      alt={false}
      title="What you receive"
      items={[
        '3D model of the building and every machine, crane, conveyor, store and walkway',
        'Layout drawing with grid references and a machine schedule',
        'Clearance, crane-reach and material-flow checks with a list of clashes resolved',
        'Bill of machines and services (power, air, gas, extraction)',
        '4K stills from agreed viewpoints and A1 presentation boards',
        'Walkthrough film, two to five minutes, silent or with music',
        'Phase variants: the plant now, and the plant after expansion',
        'Files to re-render when the plan changes',
      ]}
      sideTitle="A recent plant"
      sideItems={[
        'Steel lattice-tower fabrication plant, two phases',
        '9 CNC angle punching lines, a heavy-section drill line, a heat-bend and straightening line',
        'Feed tables, lifts, stock stacks, cranes and the full site',
        'Three films (3 to 4.5 minutes each), 30 stills at 4K, two A1 boards',
        'Layout updated as the client moved lines',
      ]}
    />

    <section className="sp-section sp-alt">
      <div className="container">
        <SectionHeader tag="Stills" title="Every viewpoint the board asks for" />
        <MediaGrid items={[plant.overviewAerial, plant.punchLinesHigh, plant.craneAisle, plant.feedTables, plant.drillLineStill, plant.punchLineEye]} columns={3} />
      </div>
    </section>

    <ProofBlock
      alt={false}
      title="A 4,000 t/month plant, modelled and filmed for a R16M fit-out"
      situation="A fabricator was fitting out a hall to make transmission-tower angle iron, with nine punching lines, a drill line and a heat-bend line to place around cranes, services and a second phase."
      work="Modelled the building from the structural drawings and every machine from drawings and brochures, built the layout from a machine list so lanes could be moved, checked crane reach and walkway widths, then rendered three walkthrough films, 30 stills and two A1 boards."
      result="The client pitched the programme with the renderings and sold the next stage off the back of them. The same model now carries the machine design work for the line."
      link={{ to: '/projects/plant-layout', label: 'See the plant project' }}
    />

    <Steps
      title="How a layout runs"
      alt
      steps={[
        { title: 'Inputs', text: 'Building drawings, machine list, process and throughput. We confirm what is measured and what is estimated.' },
        { title: 'Layout', text: 'Building and machines modelled, flow and clearances checked, first layout drawing and stills for review.' },
        { title: 'Film', text: 'Camera path agreed on the stills, film rendered and delivered with boards.' },
        { title: 'Updates', text: 'Lines move, machines change: the layout is updated and the film re-rendered in hours.' },
      ]}
    />

    <PriceBlock
      service={SERVICE}
      tiers={[
        { label: 'Layout and stills', price: 'From R45,000', text: 'Building and machines modelled, checks, layout drawing, machine schedule and 4K stills.' },
        { label: 'Layout, boards and film', price: 'From R85,000', text: 'Everything above plus A1 boards and a two-to-five-minute walkthrough film.', featured: true },
        { label: 'Two-phase plant', price: 'Quoted per plant', text: 'Phase variants, process film and machine design for the lines, priced on scope.' },
      ]}
    />

    <FaqSection faqs={faqs} alt={false} />

    <CtaSection
      title="Send the building drawing and the machine list"
      text="We come back with questions, a viewpoint list and a fixed price."
      service={SERVICE}
      waMessage={WA}
    />
  </div>
);

export default PlantVisualisationPage;
