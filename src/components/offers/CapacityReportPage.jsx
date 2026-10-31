import SEO from '../common/SEO';
import {
  PageHero, PainGrid, Deliverables, Steps, ProofBlock, PriceBlock, FaqSection, CtaSection, SectionHeader,
} from '../common/ServiceBlocks';
import { MediaGrid, VideoLoop } from '../common/Media';
import { press, packs } from '../../data/media';
import { faqSchemaFrom, serviceSchema } from '../../data/schema';
import '../cnc-conversions/CNCConversionsPage.css';
import './OfferPages.css';

const SERVICE = 'Machine Capacity Report';
const WA = 'Hi, I have a press, jig, stand or structure with no known rating and would like a capacity report.';

const faqs = [
  { q: 'What can you rate?', a: 'Presses and press frames, jigs and fixtures, stands, lifting beams, racks, roof and canopy frames, machine bases and brackets. If it carries a load and nobody knows the number, send photos.' },
  { q: 'How do you analyse it?', a: 'A 3D model is built from your photos, sketch and measurement sheet; hand calculations size the loads and the finite-element model checks stress and deflection against the material yield with a stated safety factor. Every input is labelled measured, estimated or assumed, and the report lists what to measure to firm it up.' },
  { q: 'Is the report a legal certificate?', a: 'No. SkillAxis Dynamics is not registered with the Engineering Council of South Africa. The report is the engineering assessment: model, loads, stresses, limits and recommendations. Where the law requires a registered professional to sign (lifting equipment, pressure systems, structures for occupancy), we work with one and quote the sign-off as its own line.' },
  { q: 'How fast?', a: 'A preliminary report within five working days of receiving photos and the measurement sheet, and a re-issue on measured values included. On a recent press the capacity moved from 28 t to 95 t between preliminary and measured, which is exactly why the measurement step is in the price.' },
  { q: 'What if the machine is not safe?', a: 'The report says so in plain language, gives the load at which it is safe, and shows what to change. On presses that usually means a relief-valve setting you can apply the same day.' },
];

const CapacityReportPage = () => (
  <div className="service-page">
    <SEO
      title="Machine Capacity Report: Is Your Press Really 100 t? | FEA Stress Report"
      description="A fixed-price engineering report that rates your press, jig, stand, lifting beam or frame from photos and a measurement sheet: 3D model, hand calculations, finite-element stress check, safe load, relief-valve setting and what to change. Preliminary in five working days. From R12,000. SkillAxis Dynamics."
      canonical="/machine-capacity-report"
      schema={[
        faqSchemaFrom(faqs),
        serviceSchema('Machine capacity and stress report', 'Capacity rating of presses, jigs, stands and frames by 3D modelling, hand calculation and finite-element analysis.', '12000'),
      ]}
    />

    <PageHero
      tag="Capacity reports · FEA · Fixed price"
      title="Is the press in the corner really 100 tonnes? Find out before it tells you."
      intro="Send photos and fill in a one-page measurement sheet. You get a 3D model of your machine, hand calculations, a finite-element stress check, the load it can safely carry, the relief-valve setting to apply and a list of what to change, in plain language with every assumption labelled."
      meta={['Preliminary report in 5 working days', 'Re-issue on measured values included', 'From R12,000, fixed', 'Presses, jigs, stands, beams, frames']}
      service={SERVICE}
      waMessage={WA}
      primaryLabel="Get a report quoted"
    />

    <section className="sp-section">
      <div className="container">
        <SectionHeader tag="What the report shows" title="Stress where it matters, in colour and in numbers" subtitle="Von Mises stress on a four-column press frame as found, then with the reinforcement we proposed. The peak moved from the top plate into the ribs." />
        <MediaGrid items={[press.feaAsFound, press.feaReinforced, press.feaStraightening]} columns={3} />
      </div>
    </section>

    <PainGrid
      title="Why unrated machines cost money"
      alt
      items={[
        { title: 'The number on Google is not your press', text: 'A salvaged frame, a replaced cylinder or a new die changes what the machine can do. One press rated "100 t" by its owner had a bed good for 28 t with the columns fixed one way and 95 t fixed the other.' },
        { title: 'Insurers and auditors ask for paper', text: 'A report with loads, stresses and limits is what a safety file, an insurer or a buyer wants to see next to the machine.' },
        { title: 'Guesswork breaks things slowly', text: 'Yielded T-slots, cracked welds and bent columns start as an unknown load. A rating and a relief-valve setting stop it.' },
      ]}
    />

    <Deliverables
      alt={false}
      title="What you receive"
      items={[
        '3D model of the machine or structure from your photos and measurements',
        'Hand calculations of the working loads for the jobs you run on it',
        'Finite-element stress and deflection check against material yield with a stated safety factor',
        'A rating: the safe load per hypothesis, with the one that applies once measured',
        'Relief-valve or load-limit setting you can apply immediately',
        'Recommended changes with sketches: ribs, bolts, spacing, tooling',
        'A measurement sheet, and a re-issue of the report on measured values',
        'Every input labelled measured, estimated or assumed',
      ]}
      sideTitle="Recent reports"
      sideItems={[
        '100 t straightening press on a salvaged four-column frame: pass at 981 kN with rib kit, spring 1.2 mm',
        'Hot-bend press tonnage and bed check: 54 t needed cold, bed rated after measurement, relief setting given',
        '60 t angle-flaring press frame: as found and reinforced, two load cases',
        '14 m pole-supported roof: four arrangements compared for stress and buckling, same afternoon',
      ]}
    />

    <section className="sp-section sp-alt">
      <div className="container offer-split offer-split--text">
        <div>
          <SectionHeader tag="From report to fix" title="The same model becomes the tooling" />
          <p className="sp-lead">Once the press is rated, the model carries on: adjustable V-tooling, a quick-change die set, a rib kit for the top plate. Drawings, bought-item register and a film of the tooling in action come from the same files.</p>
          <ul className="sp-list">
            <li>Report, then tooling drawings, then the build, each a fixed line</li>
            <li>Setting cards for the operator</li>
            <li>Spares list with suppliers</li>
          </ul>
        </div>
        <div>
          <VideoLoop src={press.hotbend.src} poster={press.hotbend.poster} label={press.hotbend.caption} />
        </div>
      </div>
    </section>

    <ProofBlock
      alt={false}
      title="A roof frame compared four ways in three hours"
      situation="A 14 m span pole-supported roof was about to be built from a sketch that looked right."
      work="Modelled four truss arrangements, ran frame analysis for stress, deflection and buckling under trial loads, and wrote a twelve-page comparison with a plain-language letter and a technical appendix."
      result="The sketch failed at the first trial load; a 16-panel full-tie arrangement was recommended with a buckling reserve four times higher than the next option, all before any steel was ordered."
      link={{ to: '/design-pack', label: 'See the Design Pack' }}
    />

    <section className="sp-section">
      <div className="container">
        <MediaGrid items={[packs.roofFea, packs.roofFrame, packs.roofReport]} columns={3} />
      </div>
    </section>

    <Steps
      title="How a report runs"
      alt
      steps={[
        { title: 'Photos and sheet', text: 'Ten photos and our one-page measurement sheet. We confirm the jobs the machine runs.' },
        { title: 'Preliminary report', text: 'Model, loads, stresses and a rating per hypothesis within five working days, with what to measure.' },
        { title: 'Measure', text: 'You measure the items on the sheet, or we visit.' },
        { title: 'Final report', text: 'Re-issued on measured values with the setting to apply and the changes to make.' },
      ]}
    />

    <PriceBlock
      service={SERVICE}
      tiers={[
        { label: 'Machine Check', price: 'From R12,000', text: 'Jigs, stands, lifting beams and brackets: one load case, hand checks and a one-page rating.' },
        { label: 'Press Capacity Report', price: 'From R24,000', text: 'Press frame, cylinder and bed: two or more load cases, FEA, relief setting, measurement sheet and re-issue.', featured: true },
        { label: 'Concept Comparison', price: 'From R18,000', text: 'Three or four arrangements of a frame or structure compared for stress, deflection and buckling, with a recommendation.' },
      ]}
    />

    <FaqSection faqs={faqs} alt={false} />

    <CtaSection
      title="Send ten photos of the machine"
      text="Nameplate, cylinder, frame, bed, and the tooling. We reply with the measurement sheet and a fixed price."
      service={SERVICE}
      waMessage={WA}
    />
  </div>
);

export default CapacityReportPage;
