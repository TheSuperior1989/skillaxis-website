import SEO from '../common/SEO';
import {
  PageHero, PainGrid, Deliverables, Steps, ProofBlock, PriceBlock, FaqSection, CtaSection, SectionHeader,
} from '../common/ServiceBlocks';
import { getPricing } from '../../data/pricing';
import { faqSchemaFrom, serviceSchema } from '../../data/schema';
import '../cnc-conversions/CNCConversionsPage.css';

const SERVICE = 'Google Ads';
const WA = 'Hi, I need help with Google Ads for my business.';
const tiers = getPricing('ads').tiers.map((t) => ({ label: t.label, price: t.price, text: t.desc, featured: t.featured }));

const faqs = [
  { q: 'How much does Google Ads cost in South Africa?', a: 'Two parts: ad spend, paid to Google (from R3,000 a month), and our management fee (from R1,400 a month). We do not mark up or take commission on ad spend, and a daily pacer keeps your spend under the agreed monthly ceiling.' },
  { q: 'How long before I see results?', a: 'Enquiries usually start in the first week. Month one is learning, month two is optimisation, and by month three the cost per lead settles. A parts distributor went from R103 per enquiry in its first month to R31.69 in its third.' },
  { q: 'Do I need a website?', a: 'You need landing pages that match the searches, and we build them: one page per keyword with click-to-call, WhatsApp and a quote form, all tracked. If you have a site we add the pages alongside it; if you do not, a single-page site is R1,500.' },
  { q: 'What if I already have a Google Ads account?', a: 'We start with a full audit: search terms, ad copy, targeting, spend and tracking. Then we rebuild or upgrade based on what the data shows. One workshop account had spent R29,000 on a Smart Campaign before the rebuild.' },
  { q: 'Can I see my campaign performance?', a: 'Yes. A dashboard on your site shows clicks, calls, WhatsApp clicks, form submissions and cost per lead, and you get a written monthly report with what changed and why.' },
  { q: 'What happens if I want to stop?', a: 'No lock-in. We recommend three months to judge it fairly, but you can pause or cancel at any time. The account and its data are yours.' },
];

const GoogleAdsPage = () => (
  <div className="service-page">
    <SEO
      title="Google Ads Management for Workshops and Industrial Businesses | From R4,400/month"
      description="Google Ads for trade, workshop and industrial businesses in South Africa: one keyword per ad group, a landing page per keyword, tracking on calls, WhatsApp and forms, a daily budget pacer and a monthly report. 82 leads at R31.69 each for a parts distributor. SkillAxis Dynamics."
      canonical="/google-ads"
      schema={[
        faqSchemaFrom(faqs),
        serviceSchema('Google Ads management', 'Search campaigns, landing pages, conversion tracking, budget pacing and monthly reporting for South African trade and industrial businesses.', '4400'),
      ]}
    />

    <PageHero
      tag="Google Ads · Trade and industrial businesses"
      title="Google Ads that make the phone ring, with the budget held to the rand."
      intro="We build and run search campaigns for workshops, parts suppliers and engineering businesses: one keyword per ad group, a landing page per keyword, tracking on calls, WhatsApp clicks and quote forms, and a daily pacer that keeps your month under the ceiling you set."
      meta={['From R4,400 a month including R3,000 of ad spend', 'Landing pages and tracking included', 'Monthly report in plain language', 'No lock-in']}
      service={SERVICE}
      waMessage={WA}
    />

    <PainGrid
      title="Why most Google Ads campaigns waste money"
      items={[
        { title: 'Ads send people to the home page', text: 'Someone searching for turbo repair lands on a general home page and leaves. A landing page that matches the search, with a call button at the top, converts.' },
        { title: 'Nobody knows which clicks became customers', text: 'Without tracking on calls, WhatsApp and forms you only see clicks, and Google cannot optimise for enquiries it cannot measure.' },
        { title: 'Google spends the budget on the wrong searches', text: 'Broad match and Smart Campaigns pay for job seekers, DIY searches and other countries. We block about 150 of them before the first click.' },
      ]}
    />

    <Deliverables
      title="What you get"
      lead="A method built for businesses where the phone is the sale."
      items={[
        'One keyword per ad group, phrase match, three ads per group',
        'A landing page per keyword with click-to-call, WhatsApp and a quote form',
        'Conversion tracking on calls from the ad, phone clicks, WhatsApp clicks and forms',
        'About 150 negative keywords on day one and monthly search-term clean-ups',
        'A daily budget pacer that keeps monthly spend under your ceiling',
        'A performance dashboard on your site',
        'A written monthly report: spend, leads, cost per lead, what changed',
      ]}
      sideTitle="The numbers from two live accounts"
      sideItems={[
        'Parts distributor, September 2026: 82 leads from R2,598.76 of spend, R31.69 per lead',
        'Same account: click-through rate up from 7.0% to 9.0% in a month',
        'Month finished R11.43 under a R3,000 ceiling thanks to the pacer',
        'Workshop, August 2026: 54 leads at R31.97 each, down from R61.37 in July',
      ]}
    />

    <ProofBlock
      alt={false}
      tag="Real results"
      title="Two accounts, monthly reports you can read"
      situation="A turbocharger repair workshop and a turbo parts distributor were paying for clicks with no control over search terms, no dedicated landing pages, and no way to tell a real enquiry from a junk conversion."
      work="Rebuilt both accounts with one keyword per ad group, three ads per group, landing pages per keyword, around 150 negative keywords, tracking on calls, phone clicks, WhatsApp and quote forms, and a daily pacer that keeps spend under each monthly ceiling. Search terms are cleaned up every month."
      result="Parts distributor, September 2026: 82 leads from R2,598.76 of spend, R31.69 per lead. Workshop, August 2026: 54 genuine leads at R31.97 each, down from R61.37 the month before, on 44% less spend."
      link={{ to: '/projects/ads', label: 'See the distributor project' }}
    />

    <Steps
      title="How we set up your campaign"
      alt
      steps={[
        { title: 'Audit and research', text: 'Your business, competitors and any existing account. The searches people use to find your service right now.' },
        { title: 'Build', text: 'Campaign, ad copy, landing pages, tracking, remarketing audience and the negative list. Everything reviewed with you before it goes live.' },
        { title: 'Launch and clean up', text: 'Live, with search terms checked closely in the first weeks and junk blocked.' },
        { title: 'Pace and report', text: 'The pacer holds the ceiling every day; you get a plain-language report every month.' },
      ]}
    />

    <PriceBlock service={SERVICE} tiers={tiers} />

    <section className="sp-section sp-alt">
      <div className="container">
        <SectionHeader tag="Bundle" title="Site, landing pages, ads and maintenance in one invoice" subtitle="Our ads clients also have us run their websites and software. The monthly retainer puts all of it on one invoice with one lead report. From R9,000 a month." />
      </div>
    </section>

    <FaqSection faqs={faqs} alt={false} />

    <CtaSection
      title="Ready for more enquiries?"
      text="Tell us about your business. Free audit on existing accounts."
      service={SERVICE}
      waMessage={WA}
    />
  </div>
);

export default GoogleAdsPage;
