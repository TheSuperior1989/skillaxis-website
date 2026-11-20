import { Head } from 'vite-react-ssg';

const BASE_URL = 'https://www.skillaxisdynamics.co.za';
// JPG, not SVG: WhatsApp, Facebook and LinkedIn do not render SVG link previews.
const DEFAULT_IMAGE = `${BASE_URL}/og/skillaxis-og.jpg`;

const SEO = ({ title, description, canonical, ogImage, schema }) => {
  const fullTitle = title
    ? `${title} | SkillAxis Dynamics`
    : 'SkillAxis Dynamics | Engineering, CNC, Drawings and Workshop Software, Pretoria';

  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const image = ogImage || DEFAULT_IMAGE;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Head>
  );
};

export default SEO;
