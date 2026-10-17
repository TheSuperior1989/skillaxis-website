import './ProjectVisual.css';

// Drawn illustrations of the kind of work in each project. Replaces stock photography,
// so nothing on the site implies a person or place that is not ours.

const Window = ({ title, children }) => (
  <div className="pv-window">
    <div className="pv-window-bar">
      <span /><span /><span />
      <em>{title}</em>
    </div>
    <div className="pv-window-body">{children}</div>
  </div>
);

const JOBS = [
  ['Turbo rebuild', 'In progress', 'warn'],
  ['Balancing', 'Testing', 'info'],
  ['Wash bay', 'Queued', 'muted'],
  ['Turbo rebuild', 'Ready for collection', 'ok'],
  ['Inspection', 'Quoted', 'info'],
];

const AppVisual = () => (
  <Window title="Workshop - Job cards">
    <div className="pv-kpis">
      <div><strong>3,300+</strong><span>job cards</span></div>
      <div><strong>Live</strong><span>status board</span></div>
      <div><strong>Offline</strong><span>keeps working</span></div>
    </div>
    {JOBS.map(([job, status, tone], i) => (
      <div key={i} className="pv-row">
        <span className="pv-id">JC-{2781 + i}</span>
        <span className="pv-job">{job}</span>
        <span className={`pv-pill pv-${tone}`}>{status}</span>
      </div>
    ))}
  </Window>
);

const PARTS = [
  ['Compressor wheel', '14'],
  ['Bearing kit', '32'],
  ['Actuator', '6'],
  ['Turbine shaft', '9'],
];

const InventoryVisual = () => (
  <Window title="Parts inventory">
    <div className="pv-search">Search by part, family type or dimension</div>
    {PARTS.map(([part, qty]) => (
      <div key={part} className="pv-row">
        <span className="pv-job">{part}</span>
        <span className="pv-qty">{qty} in stock</span>
      </div>
    ))}
    <div className="pv-foot">2,000+ SKUs · quotes, invoices, credit notes</div>
  </Window>
);

const ADS_BARS = [38, 46, 52, 61, 70, 78, 92];

const AdsVisual = () => (
  <Window title="Google Ads - Lead report">
    <div className="pv-kpis">
      <div><strong>82</strong><span>leads / month</span></div>
      <div><strong>9.0%</strong><span>click-through</span></div>
      <div><strong>R31.69</strong><span>per lead</span></div>
    </div>
    <div className="pv-bars">
      {ADS_BARS.map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
    </div>
  </Window>
);

const BookingVisual = () => (
  <Window title="Bookings - Two houses">
    <div className="pv-cal">
      {Array.from({ length: 28 }, (_, i) => (
        <span key={i} className={[3, 4, 5, 6, 12, 13, 19, 20, 21].includes(i) ? 'on' : [9, 10, 24, 25, 26].includes(i) ? 'alt' : ''} />
      ))}
    </div>
    <div className="pv-foot">Quote → invoice in one click · availability checks</div>
  </Window>
);

const DrawingVisual = () => (
  <svg className="pv-svg" viewBox="0 0 400 300" role="img" aria-label="Technical drawing of a machined bracket">
    <defs>
      <pattern id="pv-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M20 0H0V20" fill="none" stroke="currentColor" strokeOpacity="0.08" />
      </pattern>
    </defs>
    <rect width="400" height="300" fill="url(#pv-grid)" />
    <rect x="16" y="16" width="368" height="268" fill="none" stroke="currentColor" strokeOpacity="0.35" />
    <path d="M80 200 H240 V160 H200 V90 H80 Z" fill="none" stroke="var(--accent)" strokeWidth="2" />
    <circle cx="140" cy="145" r="18" fill="none" stroke="var(--accent)" strokeWidth="2" />
    <path d="M140 118 V172 M113 145 H167" stroke="var(--accent)" strokeOpacity="0.5" strokeDasharray="6 4" />
    <path d="M80 222 H240 M80 216 V228 M240 216 V228" stroke="currentColor" strokeOpacity="0.6" />
    <text x="160" y="240" textAnchor="middle" fontSize="11" fill="currentColor" fillOpacity="0.7">160</text>
    <path d="M58 90 V200 M52 90 H64 M52 200 H64" stroke="currentColor" strokeOpacity="0.6" />
    <text x="44" y="149" textAnchor="middle" fontSize="11" fill="currentColor" fillOpacity="0.7" transform="rotate(-90 44 149)">110</text>
    <text x="172" y="128" fontSize="10" fill="currentColor" fillOpacity="0.7">Ø36 H7</text>
    <rect x="262" y="226" width="114" height="50" fill="none" stroke="currentColor" strokeOpacity="0.35" />
    <path d="M262 243 H376 M262 259 H376" stroke="currentColor" strokeOpacity="0.2" />
    <text x="270" y="238" fontSize="9" fill="currentColor" fillOpacity="0.7">SKILLAXIS DYNAMICS</text>
    <text x="270" y="254" fontSize="9" fill="currentColor" fillOpacity="0.5">DRG 001 · REV A</text>
    <text x="270" y="270" fontSize="9" fill="currentColor" fillOpacity="0.5">SCALE 1:2 · A3</text>
    <path d="M280 90 h60 v50 h-60 z M280 115 h60" fill="none" stroke="var(--accent)" strokeOpacity="0.6" />
  </svg>
);

const CncVisual = () => (
  <svg className="pv-svg" viewBox="0 0 400 300" role="img" aria-label="CNC toolpath and G-code">
    <rect width="400" height="300" fill="var(--bg-card)" />
    <g transform="translate(30 40)">
      <rect width="200" height="200" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.3" />
      {[20, 40, 60, 80].map((o) => (
        <rect key={o} x={o} y={o} width={200 - 2 * o} height={200 - 2 * o} rx="4" fill="none" stroke="var(--accent)" strokeOpacity={0.3 + o / 160} strokeWidth="1.5" />
      ))}
      <circle cx="100" cy="100" r="8" fill="var(--accent)" />
    </g>
    <g fontFamily="monospace" fontSize="11" fill="currentColor">
      {['G21 G90 G54', 'T1 M6 (10MM END MILL)', 'S2700 M3 M8', 'G0 X20. Y20.', 'G1 Z-2. F120', 'G1 X180. F600', 'G1 Y180.', 'G1 X20.', 'G1 Y20.', 'M30'].map((line, i) => (
        <text key={line} x="255" y={58 + i * 20} fillOpacity={i === 5 ? 1 : 0.6} fill={i === 5 ? 'var(--accent)' : 'currentColor'}>{line}</text>
      ))}
    </g>
  </svg>
);

const LayoutVisual = () => (
  <svg className="pv-svg" viewBox="0 0 400 300" role="img" aria-label="Factory floor layout plan">
    <rect width="400" height="300" fill="var(--bg-card)" />
    <rect x="24" y="24" width="352" height="252" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="3" />
    <path d="M24 150 H120" stroke="var(--accent)" strokeOpacity="0.4" strokeDasharray="8 6" />
    {[
      [40, 40, 120, 60, 'PUNCH LINE'],
      [180, 40, 80, 60, 'PRESS'],
      [280, 40, 80, 90, 'LASER'],
      [40, 180, 90, 80, 'STRAIGHTEN'],
      [150, 180, 110, 80, 'WELD BAYS'],
      [280, 160, 80, 100, 'STORES'],
    ].map(([x, y, w, h, label]) => (
      <g key={label}>
        <rect x={x} y={y} width={w} height={h} rx="3" fill="var(--accent-dim)" stroke="var(--accent)" strokeOpacity="0.7" />
        <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.8">{label}</text>
      </g>
    ))}
    <path d="M30 130 H370" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="2 6" />
    <text x="200" y="125" textAnchor="middle" fontSize="9" fill="currentColor" fillOpacity="0.5">OVERHEAD CRANE RUNWAY</text>
  </svg>
);

const MotorVisual = () => (
  <svg className="pv-svg" viewBox="0 0 400 300" role="img" aria-label="Electric motor protected for wet environments">
    <rect width="400" height="300" fill="var(--bg-card)" />
    {[60, 100, 140, 180].map((x, i) => (
      <path key={x} d={`M${x} 30 q 6 14 0 24`} stroke="var(--accent)" strokeOpacity="0.45" fill="none" strokeWidth="2" transform={`translate(${i * 40} 0)`} />
    ))}
    <rect x="90" y="110" width="190" height="110" rx="14" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <path key={i} d={`M${110 + i * 25} 110 V220`} stroke="currentColor" strokeOpacity="0.2" />
    ))}
    <rect x="280" y="150" width="60" height="30" rx="4" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    <rect x="150" y="84" width="60" height="26" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    <path d="M70 240 H310" stroke="currentColor" strokeOpacity="0.4" strokeWidth="3" />
    <path d="M185 120 l40 14 v28 c0 22 -18 36 -40 44 c-22 -8 -40 -22 -40 -44 v-28 z" fill="rgba(16,185,129,0.12)" stroke="var(--success)" strokeWidth="2" />
    <path d="M168 160 l12 12 l24 -26" fill="none" stroke="var(--success)" strokeWidth="3" />
    <text x="200" y="272" textAnchor="middle" fontSize="11" fill="currentColor" fillOpacity="0.7">TESTED · CERTIFIED · TRACKED</text>
  </svg>
);

const PROGRAMME = [
  ['Crane rails', 4, 30, 'ok'],
  ['Floor zone A', 18, 34, 'ok'],
  ['Services', 30, 40, 'info'],
  ['Line install', 50, 34, 'warn'],
  ['Commissioning', 78, 18, 'muted'],
];

const ProgrammeVisual = () => (
  <Window title="Programme - Factory readiness">
    <div className="pv-kpis">
      <div><strong>On time</strong><span>by floor zone</span></div>
      <div><strong>Signed</strong><span>drawings</span></div>
      <div><strong>Daily</strong><span>morning briefing</span></div>
    </div>
    {PROGRAMME.map(([task, start, width, tone]) => (
      <div key={task} className="pv-gantt-row">
        <span className="pv-gantt-label">{task}</span>
        <span className="pv-gantt-track">
          <span className={`pv-gantt-bar pv-${tone}`} style={{ left: `${start}%`, width: `${width}%` }} />
        </span>
      </div>
    ))}
  </Window>
);

const BRAND_TILES = [
  ['A', 'var(--accent)'],
  ['G', '#10b981'],
  ['E', '#f59e0b'],
  ['P', '#60a5fa'],
  ['T', '#f472b6'],
  ['C', '#a78bfa'],
];

const BrandVisual = () => (
  <div className="pv-brand">
    <div className="pv-brand-grid">
      {BRAND_TILES.map(([letter, color]) => (
        <span key={letter} className="pv-brand-tile" style={{ borderColor: color, color }}>{letter}</span>
      ))}
    </div>
    <div className="pv-brand-card">
      <span className="pv-brand-mark" />
      <div>
        <strong>Logo · cards · profile</strong>
        <span>Print, web and social files</span>
      </div>
    </div>
  </div>
);

const WebsiteVisual = () => (
  <Window title="Company website">
    <div className="pv-site-hero">
      <strong>Rates across Southern Africa</strong>
      <span>Refrigerated · Tautliner · Tipper</span>
      <em>Request a rate</em>
    </div>
    <div className="pv-site-cols">
      <span>Fleet</span><span>Cargo</span><span>Documents</span>
    </div>
  </Window>
);

const VISUALS = {
  programme: ProgrammeVisual,
  brand: BrandVisual,
  website: WebsiteVisual,
  app: AppVisual,
  inventory: InventoryVisual,
  ads: AdsVisual,
  booking: BookingVisual,
  drawing: DrawingVisual,
  cnc: CncVisual,
  layout: LayoutVisual,
  motor: MotorVisual,
};

const ProjectVisual = ({ variant, className = '' }) => {
  const Visual = VISUALS[variant] || DrawingVisual;
  return (
    <div className={`pv ${className}`}>
      <Visual />
    </div>
  );
};

export default ProjectVisual;
