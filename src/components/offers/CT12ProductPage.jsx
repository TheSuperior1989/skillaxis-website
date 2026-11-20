import SEO from '../common/SEO';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { PainGrid, FaqSection, CtaSection, SectionHeader } from '../common/ServiceBlocks';
import { VideoLoop, MediaGrid, MediaFigure } from '../common/Media';
import { packs } from '../../data/media';
import { waLink, trackLead } from '../../data/contact';
import { faqSchemaFrom } from '../../data/schema';
import '../cnc-conversions/CNCConversionsPage.css';
import './OfferPages.css';

const WA = 'Hi, I am interested in the CT12-420 chain tensioner. Chain size and quantity:';

const faqs = [
  { q: 'Which chains does it fit?', a: 'Shoes are available for 08B, 10B and 12B single-strand roller chain on the same body and carrier plate. Tell us the chain and we fit the right shoe before dispatch.' },
  { q: 'Is it a drop-in for my current tensioner?', a: 'The body is 67 x 87 x 28 mm with a single M12 mounting slot and a working range of 133 to 170 mm, matching the common 420 N linear tensioner footprint, so it mounts in the same holes. Dimensions are on the datasheet.' },
  { q: 'How do I change the shoe?', a: 'Two screws from below, with the tensioner still on the machine. The shoe has a built-in wear gauge so you can see when it is due.' },
  { q: 'What about a sprocket instead of a shoe?', a: 'The sprocket head kit bolts to the same carrier plate: a 12B idler sprocket on a sealed bearing for higher speeds.' },
  { q: 'When can I have one?', a: 'The design is complete and costed; first-article units are being made. Register your interest and we will confirm the lead time and a firm price for your quantity.' },
];

const specs = [
  ['Chain', '08B-1, 10B-1 or 12B-1 (shoe per chain size)'],
  ['Force', '420 N at 133 mm, falling to about 40 N at 170 mm'],
  ['Working range', '133 to 170 mm from base to shoe crown'],
  ['Body', '6082-T6 aluminium, 67 x 87 x 28 mm, anodised'],
  ['Pins and bushes', 'Hard-chrome 12 mm pins in PTFE-lined bushes'],
  ['Springs', 'Nested opposite-hand compression springs, one pair per bore'],
  ['Shoe', 'UHMW-PE with wear gauge, fixed by two screws from below'],
  ['Mounting', 'Single M12 slot, pin lock for compressed installation'],
  ['Mass', 'About 0.5 kg'],
];

const CT12ProductPage = () => (
  <div className="service-page">
    <SEO
      title="CT12-420 Chain Tensioner with Replaceable Shoe | SkillAxis Products"
      description="A spring-loaded roller-chain tensioner for 08B, 10B and 12B chain with a wear shoe you change in two screws, so you stop replacing the whole tensioner. 420 N, standard 67 x 87 mm footprint, designed and made in South Africa by SkillAxis Dynamics."
      canonical="/products/ct12-420"
      schema={[
        faqSchemaFrom(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'CT12-420 chain tensioner',
          description: 'Spring-loaded roller-chain tensioner with a replaceable UHMW-PE wear shoe, 420 N, for 08B, 10B and 12B chain.',
          brand: { '@type': 'Brand', name: 'SkillAxis Dynamics' },
          image: 'https://www.skillaxisdynamics.co.za/media/packs/packs-ct12-pose-service.jpg',
          offers: { '@type': 'Offer', price: '1650', priceCurrency: 'ZAR', availability: 'https://schema.org/PreOrder', url: 'https://www.skillaxisdynamics.co.za/products/ct12-420' },
        },
      ]}
    />

    <section className="sp-hero sb-hero">
      <div className="sb-hero-glow" aria-hidden="true" />
      <div className="container sb-hero-inner">
        <span className="page-hero-tag">Products · CT12-420 chain tensioner</span>
        <h1>Stop replacing the whole tensioner when the shoe wears out.</h1>
        <p>The CT12-420 is a spring-loaded roller-chain tensioner with a wear shoe you change in two screws, on the machine. Same footprint and force as the common 420 N linear tensioner, so it mounts in the same holes. Designed, costed and made in South Africa.</p>
        <div className="sp-hero-actions">
          <Link to="/contact?service=CT12-420%20chain%20tensioner" className="btn btn-primary" onClick={() => trackLead('ct12_form')}>Register interest or order</Link>
          <a href={waLink(WA)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" onClick={() => trackLead('ct12_whatsapp')}>
            <FontAwesomeIcon icon={faWhatsapp} /> Ask on WhatsApp
          </a>
        </div>
        <ul className="sb-meta">
          <li>R1,650 per tensioner</li>
          <li>R295 spare shoe kit</li>
          <li>R1,195 sprocket head kit</li>
          <li>Prices exclude VAT (not VAT registered)</li>
        </ul>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="offer-split">
          <VideoLoop src={packs.ct12HowItWorks.src} poster={packs.ct12HowItWorks.poster} label="How it works: nested springs, hard-chrome pins and the replaceable shoe" ratio="1920 / 904" />
          <VideoLoop src={packs.ct12ShoeChange.src} poster={packs.ct12ShoeChange.poster} label="Shoe change: two screws from below, tensioner stays on the machine" ratio="1920 / 904" />
        </div>
      </div>
    </section>

    <PainGrid
      title="Why we designed it"
      alt
      items={[
        { title: 'The shoe wears, the body does not', text: 'On the common tensioner the plastic head is pressed onto the pins, so a worn head means a new unit at around R2,400. The CT12 shoe is a R295 kit.' },
        { title: 'Nobody tells you when it is due', text: 'A wear gauge is moulded into the shoe. When the line is gone, swap it.' },
        { title: 'One body, three chains', text: 'Shoes for 08B, 10B and 12B chain fit the same carrier plate, so one spare body covers the plant.' },
      ]}
    />

    <section className="sp-section">
      <div className="container offer-split offer-split--text">
        <div>
          <SectionHeader tag="Specification" title="CT12-420 at a glance" />
          <table className="offer-spec">
            <tbody>
              {specs.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}
            </tbody>
          </table>
          <p className="sb-price-note" style={{ textAlign: 'left', margin: '20px 0 0' }}>Preliminary specification, to be confirmed on first-article testing. The datasheet and general-arrangement drawing are available on request.</p>
        </div>
        <div className="offer-price-card">
          <span className="section-tag">Price list</span>
          <div className="offer-price">R1,650 <small>per tensioner with one shoe</small></div>
          <ul className="sp-list">
            <li>Spare shoe kit (08B, 10B or 12B): R295</li>
            <li>Sprocket head kit CT12-110: R1,195</li>
            <li>Volume pricing from 50 units</li>
            <li>Prices exclude VAT; no VAT is charged</li>
          </ul>
          <Link to="/contact?service=CT12-420%20chain%20tensioner" className="btn btn-primary" onClick={() => trackLead('ct12_price_card')}>Order or register interest</Link>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <SectionHeader tag="Options" title="Sprocket head and drawings" />
        <div className="offer-split">
          <VideoLoop src={packs.ct12SprocketHead.src} poster={packs.ct12SprocketHead.poster} label={packs.ct12SprocketHead.caption} ratio="1920 / 904" />
          <MediaFigure src={packs.ct12Drawing.src} alt={packs.ct12Drawing.caption} caption={packs.ct12Drawing.caption} cover={false} />
        </div>
        <MediaGrid items={[packs.ct12Ga, packs.ct12Service, packs.ct12Sprocket]} columns={3} />
      </div>
    </section>

    <FaqSection faqs={faqs} alt={false} />

    <CtaSection
      title="Tell us your chain size and quantity"
      text="We confirm the shoe, the lead time and a firm price for your quantity."
      service="CT12-420 chain tensioner"
      waMessage={WA}
    />
  </div>
);

export default CT12ProductPage;
