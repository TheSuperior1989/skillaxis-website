import SEO from '../common/SEO';
import ProjectVisual from '../common/ProjectVisual';
import {
  PageHero, PainGrid, Steps, ProofBlock, FaqSection, CtaSection, SectionHeader,
} from '../common/ServiceBlocks';
import { faqSchemaFrom, serviceSchema } from '../../data/schema';
import './MotorArmourPage.css';

const SERVICE = 'MotorArmour Motor Protection';
const WA = 'Hi, we have electric motors failing in a wet or wash-down area. Can you tell me more about MotorArmour?';

const outcomes = [
  { value: '>2,000 MΩ', label: 'insulation resistance measured on our pilot motors at 500 V DC' },
  { value: 'Drop-in', label: 'same motor, same dimensions and mounting, no changes to your machine' },
  { value: '1 certificate', label: 'per motor, numbered, locked once issued and linked to the serial number' },
  { value: '3 to 5 days', label: 'typical turnaround per batch once motors are with us' },
];

const faqs = [
  {
    q: 'What kind of motors and plants is MotorArmour for?',
    a: 'Standard industrial electric motors working in wet, wash-down or humid areas: food and poultry processing, beverage and dairy plants, pumps, conveyors and anything that gets hosed down daily.',
  },
  {
    q: 'What does the treatment involve?',
    a: 'MotorArmour is a multi-stage protection treatment developed by SkillAxis Dynamics. The process itself is proprietary. What you get is open: every motor is tested, certified and documented, and you see the results.',
  },
  {
    q: 'Do we have to change anything on the machine?',
    a: 'No. A treated motor keeps its original dimensions and mounting, so it goes straight back in as a drop-in replacement.',
  },
  {
    q: 'Can you treat new motors or only failed ones?',
    a: 'Both. New motors can be treated before they go into service, and existing motors can be treated when they come out for repair.',
  },
  {
    q: 'How do you prove it worked?',
    a: 'Every treated motor is insulation-resistance tested and issued a numbered certificate tied to its serial number. We keep the record for each motor, so performance on your line can be tracked over time.',
  },
  {
    q: 'How is it priced?',
    a: 'Per motor, with a fixed price in writing. Pilot pricing applies to a first small batch so you can prove it on your own line, and volume pricing after that.',
  },
];

const MotorArmourPage = () => (
  <div className="service-page">
    <SEO
      title="MotorArmour™ Motor Protection for Wash-Down and Wet Environments"
      description="Electric motors failing in wet or wash-down areas? MotorArmour is a motor protection treatment by SkillAxis Dynamics. Every motor tested, certified and tracked by serial number. From pilot to repeat orders with a national industrial distributor."
      canonical="/motorarmour"
      schema={[
        faqSchemaFrom(faqs),
        serviceSchema(SERVICE, 'Protection treatment for electric motors in wash-down and wet environments, with testing and a certificate per motor.'),
      ]}
    />

    <PageHero
      tag="MotorArmour™ · Motor protection"
      title="Stop losing electric motors to water and wash-down."
      intro="MotorArmour is our protection treatment for electric motors that work wet. Every motor is tested, certified and tracked by serial number, so you can see exactly what you are getting and how it performs on your line."
      meta={['Paid pilot → repeat orders', 'Certificate per motor', 'Tracked by serial number', 'Pilot batch pricing']}
      service={SERVICE}
      waMessage={WA}
      primaryLabel="Ask about a pilot batch"
    />

    <PainGrid
      title="The cost of a motor that keeps failing"
      items={[
        { title: 'Failures every week or two', text: 'Water and cleaning chemicals get into motors on wash-down lines. They trip, burn out and go off for rewinding again and again.' },
        { title: 'Downtime costs more than the motor', text: 'A stopped line, idle staff and product at risk. The rewind invoice is the smallest part of the bill.' },
        { title: 'No record of what was done', text: 'Motors go out for repair and come back with no proof of what was done, so nobody knows whether the fix will last.' },
      ]}
    />

    <section className="sp-section sp-alt">
      <div className="container">
        <SectionHeader
          tag="Outcomes are open"
          title="You see the results on every motor"
          subtitle="The treatment process is proprietary. The proof is not: every motor leaves us tested, certified and on record."
        />
        <div className="ma-layout">
          <div className="ma-visual"><ProjectVisual variant="motor" /></div>
          <div className="ma-outcomes">
            {outcomes.map((o) => (
              <div key={o.value} className="ma-outcome">
                <strong>{o.value}</strong>
                <span>{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <ProofBlock
      tag="Real client"
      title="From a 2-motor pilot to repeat orders"
      alt={false}
      situation="A national bearings and power transmission distributor had a customer whose food processing line was replacing motors every one to two weeks because of daily high-pressure wash-down."
      work="We treated two motors as a paid pilot. Both tested at more than 2,000 MΩ at 500 V DC and were certified and documented before going back onto the line."
      result="The client came back with repeat orders: 14 motors received so far, 8 already certified and 6 in treatment, each with its own numbered certificate and treatment record."
    />

    <Steps
      title="How a MotorArmour batch works"
      alt
      steps={[
        { title: 'Tell us about the motors', text: 'Nameplate photos, where they run and how often they fail. We confirm they are suitable.' },
        { title: 'Fixed price per motor', text: 'A written quote per motor, with pilot pricing for a first small batch.' },
        { title: 'Treat, test, certify', text: 'Each motor is treated, insulation-resistance tested and issued a numbered certificate.' },
        { title: 'Install and track', text: 'Motors go back into service and each one stays on record, so you can measure the result.' },
      ]}
    />

    <FaqSection faqs={faqs} alt={false} />

    <CtaSection
      title="Prove it on your own line first"
      text="Start with a small pilot batch. If the motors do not outlast what you have now, you have lost very little and learned a lot."
      service={SERVICE}
      waMessage={WA}
    />
  </div>
);

export default MotorArmourPage;
