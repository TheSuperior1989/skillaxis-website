import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SEO from '../common/SEO';
import '../cnc-conversions/CNCConversionsPage.css';

const WA_URL = 'https://wa.me/27782964786?text=' + encodeURIComponent('Hi, I need help with Google Ads for my business.');

const faqData = [
  { q: 'How much does Google Ads cost in South Africa?', a: 'Your monthly investment has two parts: ad spend (paid directly to Google, minimum R3,000/month) and our management fee (from R1,400/month). The ad spend is what Google charges per click. We do not mark up or take commission on your ad spend.' },
  { q: 'How long before I see results?', a: 'Most clients see their first leads within the first week. However, Google Ads improves over time as the algorithm collects data on who converts. Month 1 is the learning phase, month 2 is optimisation, and by month 3 you have a mature campaign with predictable cost-per-lead numbers.' },
  { q: 'Do I need a website?', a: 'Yes, but we handle that. We build dedicated landing pages for every ad campaign as part of the setup. These pages are conversion-optimised with forms, click-to-call, and tracking. If you already have a website, we build the landing pages alongside it.' },
  { q: 'What if I already have a Google Ads account?', a: 'We start with a full audit of your existing account. We analyse your search terms, ad copy, targeting, and spend to identify what is working and what is wasting money. Then we rebuild or upgrade your campaigns based on real data.' },
  { q: 'Can I see my campaign performance?', a: 'Yes. We build a live performance dashboard on your website showing clicks, conversions, cost per lead, and return on ad spend in real time. You also receive monthly reports with insights and recommendations.' },
  { q: 'What happens if I want to stop?', a: 'There is no lock-in contract. We recommend a minimum of 3 months to give the campaign a fair evaluation, but you can pause or cancel at any time. Your Google Ads account and all campaign data remain yours.' },
];

const GoogleAdsPage = () => (
  <div className="service-page">
    <SEO
      title="Google Ads Management South Africa | From R4,400/month | SkillAxis Dynamics"
      description="Google Ads management for South African businesses. Dedicated landing pages, conversion tracking, and live dashboards included. No lock-in contracts. SkillAxis Dynamics, Pretoria."
      canonical="/google-ads"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Google Ads Management',
        provider: { '@type': 'LocalBusiness', name: 'SkillAxis Dynamics' },
        areaServed: 'South Africa',
        description: 'Google Ads campaign management including SKAG campaigns, landing pages, conversion tracking, and performance dashboards.',
      }}
    />

    <section className="sp-hero">
      <div className="container">
        <span className="page-hero-tag">Google Ads Management - South Africa</span>
        <h1>Google Ads That Actually Generate Leads</h1>
        <p>We build, manage, and optimise Google Ads campaigns for service businesses in South Africa. Dedicated landing pages, conversion tracking, and a live dashboard included in every package. You get leads. We handle the rest.</p>
        <div className="sp-hero-actions">
          <Link to="/quote" className="btn btn-cta">Get Started</Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
          </a>
        </div>
        <div className="sp-hero-meta">
          <span>From R4,400/month</span><span className="sp-meta-div">-</span>
          <span>No lock-in contracts</span><span className="sp-meta-div">-</span>
          <span>Landing pages included</span>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">The Problem</span>
          <h2 className="section-title">Why Most Google Ads Campaigns Fail</h2>
        </div>
        <div className="sp-pain-grid">
          <div className="sp-pain-card"><span className="sp-pain-num">01</span><h3>Your ads send people to your homepage</h3><p>Homepages are designed for browsing, not converting. When someone searches "turbo repair pretoria" and lands on a generic homepage, they bounce. You need a landing page that matches the exact search term with a clear call to action.</p></div>
          <div className="sp-pain-card"><span className="sp-pain-num">02</span><h3>You have no idea which clicks become customers</h3><p>Without conversion tracking, you know how many people clicked but not how many actually called or filled out a form. You are flying blind, and Google cannot optimise for what it cannot measure.</p></div>
          <div className="sp-pain-card"><span className="sp-pain-num">03</span><h3>Google is spending your budget on the wrong searches</h3><p>Broad match keywords, no negative keyword lists, and Smart Campaigns give Google full control. Your budget gets spent on job seekers, competitors, DIY searches, and people in other countries.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Approach</span>
          <h2 className="section-title">What We Do Differently</h2>
        </div>
        <div className="sp-two-col">
          <div>
            <p className="sp-lead">We use a method called SKAG (Single Keyword Ad Groups) that matches the search term to the ad to the landing page. This keeps your quality score high and your cost per click low.</p>
            <ul className="sp-list">
              <li>One keyword per ad group - exact relevance, no wasted budget</li>
              <li>Dedicated landing pages built for every keyword</li>
              <li>3 ad variations per keyword, tested automatically by Google</li>
              <li>Phrase match only - no broad match bleeding money</li>
              <li>150+ negative keywords to block junk searches from day one</li>
              <li>Competitor name blocking so you don't pay for their traffic</li>
              <li>Presence targeting only - no Interest (Google's default wastes budget)</li>
              <li>All other countries excluded to kill VPN and bot clicks</li>
              <li>Remarketing audiences that boost bids for returning visitors</li>
            </ul>
          </div>
          <div className="sp-highlight-box">
            <h3>What You Get</h3>
            <div className="sp-tech-list">
              <span>SKAG Campaigns</span><span>Landing Pages</span><span>Conversion Tracking</span>
              <span>Live Dashboard</span><span>Call Extensions</span><span>Negative Keywords</span>
              <span>Remarketing</span><span>Monthly Reports</span><span>Weekly Optimisation</span>
              <span>Ad Copy Testing</span><span>Competitor Blocking</span><span>WhatsApp Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Process</span>
          <h2 className="section-title">How We Set Up Your Campaign</h2>
        </div>
        <div className="process-grid">
          <div className="process-step"><div className="process-number">01</div><h3>Audit &amp; Research</h3><p>We analyse your business, competitors, and existing ad account (if you have one). We identify the highest-intent keywords people are using to find your services right now.</p></div>
          <div className="process-step"><div className="process-number">02</div><h3>Build &amp; Configure</h3><p>We create your campaigns, write ad copy, build dedicated landing pages, install conversion tracking, set up remarketing audiences, and add 150+ negative keywords. Everything is reviewed before going live.</p></div>
          <div className="process-step"><div className="process-number">03</div><h3>Launch &amp; Optimise</h3><p>Campaigns go live. We monitor search terms daily in the first two weeks, blocking irrelevant queries and refining targeting. Google's algorithm starts learning who converts.</p></div>
          <div className="process-step"><div className="process-number">04</div><h3>Scale &amp; Report</h3><p>After 30 conversions, we switch to Target CPA bidding so Google actively seeks out your most likely customers. Monthly reports show exactly what you are getting for your money.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container sp-case-container">
        <div className="section-header">
          <span className="section-tag">Real Results</span>
          <h2 className="section-title">Turbocharger Specialist - Pretoria</h2>
        </div>
        <div className="sp-case-grid">
          <div className="sp-case-block"><span className="sp-case-label">The Situation</span><p>A Pretoria-based turbocharger specialist had been running a Google Smart Campaign for several months. The campaign was generating leads, but with no control over search terms, no negative keywords, and no dedicated landing pages, a significant portion of the budget was being wasted on irrelevant clicks and brand searches.</p></div>
          <div className="sp-case-block"><span className="sp-case-label">What We Did</span><p>We audited the Smart Campaign data, identified the top-performing search terms, and built a full SKAG campaign with 5 keyword groups, 15 ad variations, 3 dedicated landing pages, conversion tracking, remarketing audiences, and 181 negative keywords. We blocked 27 competitor names and eliminated paid brand clicks entirely.</p></div>
          <div className="sp-case-block sp-result"><span className="sp-case-label">The Result</span><p>102 conversions per month at R28 per lead on the Smart Campaign. Projected 120-150 conversions at R20-25 per lead on the new SKAG campaign - more leads at a lower cost, with zero budget wasted on junk traffic.</p></div>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">Google Ads Pricing</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <thead>
              <tr style={{ background: 'var(--bg-dark-alt, #1a1a2e)' }}>
                <th style={{ border: '1px solid var(--border, #333)', padding: '14px', color: 'var(--accent, #f5b800)' }}>Tier</th>
                <th style={{ border: '1px solid var(--border, #333)', padding: '14px', color: 'var(--accent, #f5b800)' }}>Ad Spend</th>
                <th style={{ border: '1px solid var(--border, #333)', padding: '14px', color: 'var(--accent, #f5b800)' }}>Management</th>
                <th style={{ border: '1px solid var(--border, #333)', padding: '14px', color: 'var(--accent, #f5b800)' }}>Setup</th>
                <th style={{ border: '1px solid var(--border, #333)', padding: '14px', color: 'var(--accent, #f5b800)' }}>Total/month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px', fontWeight: 'bold' }}>Small</td>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px' }}>R3,000</td>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px' }}>R1,400</td>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px' }}>R1,500</td>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px', fontWeight: 'bold' }}>R4,400</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px', fontWeight: 'bold' }}>Medium</td>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px' }}>R5,000</td>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px' }}>R2,000</td>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px' }}>R1,500</td>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px', fontWeight: 'bold' }}>R7,000</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px', fontWeight: 'bold' }}>Large</td>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px' }}>R10,000</td>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px' }}>R3,000</td>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px' }}>R1,500</td>
                <td style={{ border: '1px solid var(--border, #333)', padding: '12px', fontWeight: 'bold' }}>R13,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pricing-highlight" style={{ marginTop: '40px' }}>
          <p className="price-from">All tiers include</p>
          <p>Campaign setup, keyword research, ad copywriting, dedicated landing pages, conversion tracking, remarketing audiences, live dashboard, weekly optimisation, and monthly reporting. Setup fee is a once-off charge.</p>
          <Link to="/quote" className="btn btn-cta">Get Started</Link>
        </div>
        <div className="sp-pricing-factors" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Ad spend goes directly to Google. We do not mark up or take commission on your ad spend. Minimum 3-month commitment recommended for meaningful results.
          </p>
        </div>
      </div>
    </section>

    <section className="sp-section sp-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
        </div>
        <div className="faq-list">
          {faqData.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="container">
        <h2>Ready to Get More Leads?</h2>
        <p>Tell us about your business and we will show you exactly how Google Ads can work for you. Free audit on existing accounts.</p>
        <div className="cta-buttons">
          <Link to="/quote" className="btn btn-cta">Get Started</Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default GoogleAdsPage;
