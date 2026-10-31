// Regenerates public/sitemap.xml from the route list and the project ids.
// Run: node scripts/build-sitemap.mjs
import { writeFileSync, readFileSync } from 'node:fs';

const BASE = 'https://www.skillaxisdynamics.co.za';
const today = new Date().toISOString().slice(0, 10);

const pages = [
  ['/', 1.0, 'weekly'],
  ['/design-pack', 0.9, 'monthly'],
  ['/plant-visualisation', 0.9, 'monthly'],
  ['/machine-capacity-report', 0.9, 'monthly'],
  ['/workshop-software', 0.9, 'monthly'],
  ['/motorarmour', 0.9, 'monthly'],
  ['/cad-design-drafting', 0.8, 'monthly'],
  ['/cnc-conversions', 0.8, 'monthly'],
  ['/custom-machinery-design', 0.8, 'monthly'],
  ['/automation-retrofits', 0.7, 'monthly'],
  ['/web-software-engineering', 0.8, 'monthly'],
  ['/google-ads', 0.8, 'monthly'],
  ['/how-it-works', 0.8, 'monthly'],
  ['/services', 0.7, 'monthly'],
  ['/pricing', 0.8, 'monthly'],
  ['/case-studies', 0.8, 'weekly'],
  ['/about', 0.6, 'monthly'],
  ['/contact', 0.7, 'monthly'],
];

// Project ids from src/data/projects.js (id: '...').
const projectsSrc = readFileSync(new URL('../src/data/projects.js', import.meta.url), 'utf-8');
const ids = [...projectsSrc.matchAll(/^\s+id: '([a-z0-9-]+)',/gm)].map((m) => m[1]);
for (const id of ids) pages.push([`/projects/${id}`, 0.6, 'monthly']);

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
  .map(([p, pr, cf]) => `  <url>\n    <loc>${BASE}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${cf}</changefreq>\n    <priority>${pr.toFixed(1)}</priority>\n  </url>`)
  .join('\n')}\n</urlset>\n`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap: ${pages.length} urls`);
