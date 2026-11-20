// The client journey from first message to finished job, and what to expect at each stage.
// No durations or turnaround times here (Tiaan, 20 Nov 2026): the written quote carries the dates.

export const stages = [
  {
    n: 1,
    title: 'Send what you have',
    text: 'A photo, a sketch, a part number, an old drawing or a voice note on WhatsApp. You do not need a specification to start.',
    youGet: 'A reply with the engineering questions, or a ballpark if the job is clear.',
    weNeed: 'Pictures with something for scale, the quantity, the deadline, and where the thing has to go or what it must survive.',
  },
  {
    n: 2,
    title: 'Scoping call and fixed price',
    text: 'A short call, or a site visit if something must be measured. We agree the governing dimensions, the loads, the finish and what done looks like.',
    youGet: 'A written fixed-price quote with design, manufacturing and installation as separate lines, each with low, likely and high figures where the scope is still open.',
    weNeed: 'Your go-ahead and the deposit on the design line. The deposit starts the clock.',
  },
  {
    n: 3,
    title: 'Design, modelled and checked',
    text: 'We model from the agreed dimensions, and the drawings, lists and costing follow the model, so a change flows through the whole package. Every part is checked for clashes, fit, mass and envelope before you see it.',
    youGet: 'Renders and a short explainer film to review, then the drawing set, bill of materials, flat patterns and costing. One revision round is included.',
    weNeed: 'Your mark-ups on the first issue. A photo of a sketch is enough.',
  },
  {
    n: 4,
    title: 'Release: the design is yours',
    text: 'Drawings and files are released in PDF, STEP and DXF. You can take them to any fabricator, or let us run the build.',
    youGet: 'The complete package with revision history, and a bought-item register with catalogue part numbers.',
    weNeed: 'A decision on who builds it.',
  },
  {
    n: 5,
    title: 'Build, treat or install',
    text: 'Fabrication, machining, software setup or motor treatment runs against the quoted schedule. For larger builds we manage trusted fabricators and electricians for you.',
    youGet: 'Progress photos as work happens, and a factory acceptance check before anything leaves.',
    weNeed: 'Site access, power and a contact on the floor for installation days.',
  },
  {
    n: 6,
    title: 'Hand over and support',
    text: 'Commissioning, training and documentation: drawings, programs, manuals and certificates. If something is not right, we fix it.',
    youGet: 'Everything handed over and explained, plus support by WhatsApp and phone afterwards.',
    weNeed: 'Final payment on handover, and your feedback.',
  },
];

export const payment = [
  { point: 'Quote accepted', what: 'Deposit on the design line (typically 50% of design, or the full design line on small jobs).' },
  { point: 'Design released', what: 'Balance of the design line. The files are yours from here.' },
  { point: 'Build started', what: '50% of the manufacturing line for materials and bought-in items.' },
  { point: 'Handover', what: 'Balance of manufacturing and installation. Software and MotorArmour are prepaid per batch or per month.' },
];
