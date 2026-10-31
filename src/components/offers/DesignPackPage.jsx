import SEO from '../common/SEO';
import {
  PageHero, PainGrid, Deliverables, Steps, ProofBlock, PriceBlock, FaqSection, CtaSection, SectionHeader,
} from '../common/ServiceBlocks';
import { VideoLoop, MediaGrid } from '../common/Media';
import { packs, press } from '../../data/media';
import { faqSchemaFrom, serviceSchema } from '../../data/schema';
import '../cnc-conversions/CNCConversionsPage.css';
import './OfferPages.css';

const SERVICE = 'Design Pack';
const WA = 'Hi, I would like a Design Pack. Here is what the part or machine has to do:';

const faqs = [
  { q: 'What exactly is in a Design Pack?', a: 'A parametric 3D model, general-arrangement and detail drawings with balloons and parts lists, DXF flat patterns for sheet-metal parts, a bill of materials with catalogue part numbers, a costing with low, likely and high figures, a two-page datasheet, renders and a short how-it-works film. One revision round is included.' },
  { q: 'How can it be that fast?', a: 'We work from the governing dimensions and check the model for interference, fit, mass and envelope before you see it. The drawings, BOM, costing and film come from that same model, so there is no redrawing between steps. A chain tensioner package took one day; a set of food-factory trays, racking and trolleys took three.' },
  { q: 'What do you need from me?', a: 'The governing dimensions (a drawing, a nameplate, a sketch with sizes, or the physical part), what it must do, how many you need and what it must survive. We ask the rest in a short call.' },
  { q: 'Who owns the design?', a: 'You do, on payment of the design line. Files are released in PDF, STEP and DXF so any fabricator can quote and build from them.' },
  { q: 'Can you also build it?', a: 'Yes. Manufacturing is quoted as a separate fixed line per item, so you can have us build it, build in-house or take the pack elsewhere.' },
  { q: 'Do you work for clients outside South Africa?', a: 'Yes. The whole pack is delivered remotely, and we quote in US dollars for clients abroad.' },
];

const DesignPackPage = () => (
  <div className="service-page">
    <SEO
      title="Design Pack: Model, Drawings, BOM, Costing and Film in Days"
      description="A complete engineering design pack in two to five working days: parametric 3D model, drawings, DXF flat patterns, bill of materials, costing, datasheet, renders and a how-it-works film. Checked part by part. From R18,000. SkillAxis Dynamics, Pretoria."
      canonical="/design-pack"
      schema={[
        faqSchemaFrom(faqs),
        serviceSchema('Engineering Design Pack', 'Complete design package: 3D model, drawings, flat patterns, BOM, costing, datasheet and explainer film, delivered in days.', '18000'),
      ]}
    />

    <PageHero
      tag="Design Pack · Days, not weeks"
      title="A complete, build-ready design package in two to five working days."
      intro="Model, drawings, flat patterns, bill of materials, costing, datasheet and a short film of the thing working, all from one set of agreed dimensions. Built as one model, so a change flows through the whole pack and what you receive fits together."
      meta={['From R18,000, fixed', '2 to 5 working days from deposit', 'PDF, STEP and DXF released to you', 'Local and export clients']}
      service={SERVICE}
      waMessage={WA}
      primaryLabel="Get a fixed price"
    />

    <section className="sp-section">
      <div className="container">
        <SectionHeader tag="One day, one pack" title="A chain tensioner, from reference to client package in a day" subtitle="Reverse-engineered, redesigned with a replaceable wear shoe, modelled, drawn, costed and filmed in about ten hours." />
        <div className="offer-split">
          <VideoLoop src={packs.ct12HowItWorks.src} poster={packs.ct12HowItWorks.poster} label={packs.ct12HowItWorks.caption} ratio="1920 / 904" />
          <VideoLoop src={packs.ct12ShoeChange.src} poster={packs.ct12ShoeChange.poster} label={packs.ct12ShoeChange.caption} ratio="1920 / 904" />
        </div>
        <MediaGrid items={[packs.ct12Drawing, packs.ct12Datasheet, packs.ct12Service]} columns={3} />
      </div>
    </section>

    <PainGrid
      title="Why a pack beats a drawing"
      alt
      items={[
        { title: 'A drawing alone does not get you a price', text: 'Fabricators quote from flat patterns, a BOM and a cut list. A pack gives them everything, so quotes come back faster and closer together.' },
        { title: 'Changes used to mean redrawing', text: 'When drawings, BOM, costing and film all come from one model, a size change flows through in minutes.' },
        { title: 'Nobody checks the model', text: 'We check interference, fit, mass and envelope and report them as numbers before you see the design. Zero clashes is a result, not an opinion.' },
      ]}
    />

    <Deliverables
      alt={false}
      title="What is in the pack"
      lead="The same menu every time, so you know what you are buying."
      items={[
        'Parametric 3D model with the governing dimensions as parameters',
        'General-arrangement drawing with balloons and parts list',
        'Detail drawings of every made part',
        'DXF flat patterns for laser or plasma cutting',
        'Bill of materials with catalogue part numbers and a bought-item register',
        'Costing with low, likely and high figures per item',
        'Two-page datasheet and renders',
        'A 30 to 60 second how-it-works film',
        'Check report: interference, fit, mass and envelope',
        'One revision round, then release in PDF, STEP and DXF',
      ]}
      sideTitle="Recent packs"
      sideItems={[
        'Chain tensioner with replaceable shoe: 32 parts, 12 drawings, costing at three batch sizes, three films, one day',
        'Food-factory trays, racking and trolleys: 27 drawings, 15 flat patterns, costed, three days',
        'Welded motor fixture from a hand sketch: model, three-sheet fabrication pack, an afternoon',
        '14 m roof structure: four arrangements compared with frame analysis, same afternoon',
      ]}
    />

    <section className="sp-section sp-alt">
      <div className="container">
        <SectionHeader tag="More packs" title="Sheet metal, weldments and structures" />
        <MediaGrid items={[packs.foodTray, packs.trayRack, packs.motorFixture, packs.motorFixtureSheet2, packs.roofFrame, packs.roofFea]} columns={3} />
      </div>
    </section>

    <ProofBlock
      alt={false}
      title="A press designed, analysed and filmed in two days"
      situation="A fabricator needed a press to open and close the legs of angle sections for transmission towers, and nobody could say what force the job needed."
      work="Calculated the forming force for every section, designed a 60 t press around a standard cylinder and power pack, produced the 49-drawing set and a bought-item register, ran finite-element checks on the frame and produced a 136 second explainer film."
      result="The client had a priced, checked machine design to decide on within two days of the brief."
      link={{ to: '/projects/press-design', label: 'See the press project' }}
    />

    <section className="sp-section">
      <div className="container">
        <div className="offer-split">
          <VideoLoop src={press.cycle.src} poster={press.cycle.poster} label={press.cycle.caption} />
          <VideoLoop src={press.tooling.src} poster={press.tooling.poster} label={press.tooling.caption} />
        </div>
      </div>
    </section>

    <Steps
      title="How a pack runs"
      alt
      steps={[
        { title: 'Dimensions and purpose', text: 'Send a sketch, drawing, nameplate or the part. A short call fixes the governing dimensions.' },
        { title: 'Fixed price and deposit', text: 'A written quote for the pack. The deposit starts the clock.' },
        { title: 'Modelled and checked', text: 'Model, drawings, BOM, costing and film produced from one agreed spec and checked part by part.' },
        { title: 'Review and release', text: 'You mark up, we revise once, and the pack is released in PDF, STEP and DXF.' },
      ]}
    />

    <PriceBlock
      service={SERVICE}
      tiers={[
        { label: 'Sketch-to-Pack', price: 'From R18,000', text: 'A single part, fixture, stand or bracket: model, drawings, flat patterns, BOM, costing, datasheet and film.' },
        { label: 'Equipment Pack', price: 'From R45,000', text: 'A machine or an equipment set with moving parts: everything above plus a motion check, a strength check and a bought-item register.', featured: true },
        { label: 'Line or Plant Pack', price: 'Quoted per project', text: 'A production line or plant: layout, every machine, flows, films and boards for the board meeting.' },
      ]}
    />

    <section className="sp-section sp-alt">
      <div className="container offer-export">
        <SectionHeader tag="Export clients" title="Remote delivery, quoted in US dollars" subtitle="The whole pack is produced and delivered remotely. Clients in the UK, Europe, the USA and Australia pay from USD 1,100 for a Sketch-to-Pack and from USD 2,700 for an Equipment Pack, with the same two-to-five-day turnaround." />
      </div>
    </section>

    <FaqSection faqs={faqs} alt={false} />

    <CtaSection
      title="Send the sketch today, review the model this week"
      text="A photo of a sketch with sizes, or the part itself, is enough for a fixed price."
      service={SERVICE}
      waMessage={WA}
    />
  </div>
);

export default DesignPackPage;
