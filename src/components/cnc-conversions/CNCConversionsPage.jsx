import SEO from '../common/SEO';
import {
  PageHero, PainGrid, Deliverables, Steps, ProofBlock, PriceBlock, FaqSection, CtaSection,
} from '../common/ServiceBlocks';
import { faqSchemaFrom, serviceSchema } from '../../data/schema';
import './CNCConversionsPage.css';

const SERVICE = 'CNC Conversion';
const WA = 'Hi, I would like a quote for a CNC conversion or CNC programming. Here are photos of the machine:';

const faqs = [
  {
    q: 'How much does a CNC conversion cost in South Africa?',
    a: 'A conversion starts from about R25,000 for a smaller machine. The final price depends on the number of axes, the size and condition of the machine, the drives you choose and whether you need a tool changer or a new control panel. You get a fixed price in writing after we have seen the machine.',
  },
  {
    q: 'Which machines can be converted?',
    a: 'Most manual mills and lathes in reasonable mechanical condition. We assess each machine from photos and a visit, and tell you honestly if it is not worth converting.',
  },
  {
    q: 'Do you only do conversions, or also programming?',
    a: 'Both. We write CAM and G-code for production parts and can program parts remotely for machine shops that already have CNC machines but no programmer.',
  },
  {
    q: 'How long does a conversion take?',
    a: 'Most conversions take a few weeks from approval, depending on parts lead times and the condition of the machine. You get a realistic timeline with the quote.',
  },
  {
    q: 'Do you train our operator?',
    a: 'Yes. Commissioning includes running test programs with your operator and handing over the setup notes for the machine.',
  },
];

const CNCConversionsPage = () => (
  <div className="service-page">
    <SEO
      title="CNC Mill and Lathe Conversions and G-code Programming | Pretoria, South Africa"
      description="Convert a manual mill or lathe to CNC, add a tool changer, or get production parts programmed. 1,000+ CNC programs written on machines we built ourselves. From R25,000. Pretoria, nationwide."
      canonical="/cnc-conversions"
      schema={[
        faqSchemaFrom(faqs),
        serviceSchema('CNC mill and lathe conversions', 'Conversion of manual mills and lathes to CNC, tool changers and production G-code programming.', '25000'),
      ]}
    />

    <PageHero
      tag="CNC conversions · CAM and G-code · Pretoria"
      title="Turn your manual mill or lathe into a CNC production machine."
      intro="We design the mounting parts, lay out the control panel, fit the drives, commission the machine and write the programs for your parts. The CNC work we quote on runs on machines we converted and built ourselves."
      meta={['From R25,000', '1,000+ CNC programs written', '56 machining jobs in five months', 'Remote G-code programming']}
      service={SERVICE}
      waMessage={WA}
    />

    <PainGrid
      title="Why workshops call us"
      items={[
        { title: 'A new CNC machine is out of budget', text: 'A good manual machine with solid ways and spindle can often be converted for a fraction of a new CNC machine, and it keeps the iron you already trust.' },
        { title: 'Repeat parts take forever by hand', text: 'Batches of the same part depend on one skilled machinist and still vary. CNC makes the hundredth part the same as the first.' },
        { title: 'You have CNC but nobody to program it', text: 'The machine sits idle while you wait for programs. We write production G-code remotely and send it ready to run.' },
      ]}
    />

    <Deliverables
      title="What a conversion includes"
      lead="One engineer handles the mechanical design, the electrical layout and the programming, so the machine works as one system."
      items={[
        'Machine assessment from photos and a site visit',
        '3D design of motor, encoder, gearbox and drive mounting parts',
        'Ballscrew and drive selection matched to your work',
        'Control panel layout and wiring',
        'Spindle speed control',
        'Optional automatic tool changer and electronic lead screw for threading',
        'Commissioning, test programs and operator training',
        'Production G-code for your first parts',
      ]}
      sideTitle="Also available on its own"
      sideItems={[
        'CAM and G-code programming for production parts',
        'Program fixes and cycle-time improvements',
        'Fixtures and jigs designed for your CNC',
        'Drawings for parts you want machined elsewhere',
        'Fast roughing programs from our own lathe G-code generator',
      ]}
    />

    <ProofBlock
      title="A manual lathe, converted and making parts"
      situation="A client needed a manual lathe turned into a CNC production machine, and the parts it had to make programmed and running."
      work="Designed every mounting part for the conversion (servo, encoder, gearbox and drive brackets), laid out the control panel, then wrote the G-code for bushes with copper inserts, feed pistons, threaded glands and pulleys."
      result="A working CNC lathe producing the client's own parts. Design, drawings, programming and commissioning from one engineer."
      link={{ to: '/case-studies', label: 'More CNC and machining projects' }}
    />

    <Steps
      title="How a conversion runs"
      steps={[
        { title: 'Photos and assessment', text: 'Send photos of the machine and the parts you want to make. We check suitability, then visit if it is worth converting.' },
        { title: 'Fixed-price proposal', text: 'Parts, design, installation and travel as separate fixed lines, with a realistic timeline.' },
        { title: 'Design and build', text: 'Mounting parts designed and machined, drives and panel fitted, every axis tested.' },
        { title: 'Commission and train', text: 'Test programs on your machine, operator training and the first production programs handed over.' },
      ]}
    />

    <PriceBlock
      service={SERVICE}
      tiers={[
        { label: 'Single-axis retrofit', price: 'From R15,000', text: 'One axis driven, for example a power feed or lead screw upgrade.' },
        { label: 'Full mill or lathe conversion', price: 'From R25,000', text: 'All axes, control panel, spindle control, commissioning and training.', featured: true },
        { label: 'Conversion with tool changer', price: 'From R45,000', text: 'Larger or more complex machines, automatic tool changer and custom programming.' },
      ]}
    />

    <FaqSection faqs={faqs} />

    <CtaSection
      title="Send us photos of the machine"
      text="A few photos of the machine and the part you want to make is enough for a first answer on whether it is worth converting."
      service={SERVICE}
      waMessage={WA}
    />
  </div>
);

export default CNCConversionsPage;
