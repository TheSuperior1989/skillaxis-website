// Single source of published prices. Every page that shows a price imports from here.
// All prices exclude VAT; SkillAxis Dynamics is not VAT registered and adds none.
// Anchors come from real sales or from the quotes on record, not from aspiration:
// lathe conversion R132,500 (Nov 2024), design packs quoted at R45,000, workshop
// software licence R2,000 to R2,500 a month, Google Ads management R1,400 a month.

export const pricing = [
  {
    id: 'design-pack',
    service: 'Design Pack',
    link: '/design-pack',
    from: 'From R18,000',
    tiers: [
      { label: 'Sketch-to-Pack', price: 'From R18,000', desc: 'One part, fixture, stand or bracket: model, drawings, flat patterns, BOM, costing, datasheet and film. 2 to 3 working days.' },
      { label: 'Equipment Pack', price: 'From R45,000', desc: 'A machine or equipment set: everything above plus motion and strength checks and a bought-item register. 3 to 5 working days.', featured: true },
      { label: 'Line or Plant Pack', price: 'Fixed quote', desc: 'A production line or plant with layout, every machine, flows, films and boards.' },
    ],
    factors: ['Number of made parts and bought items', 'Moving parts and load cases to check', 'Revisions beyond the included round', 'Export clients quoted in USD (from USD 1,100)'],
  },
  {
    id: 'capacity-report',
    service: 'Machine Capacity and Stress Reports',
    link: '/machine-capacity-report',
    from: 'From R12,000',
    tiers: [
      { label: 'Machine Check', price: 'From R12,000', desc: 'Jigs, stands, lifting beams and brackets: one load case, hand checks and a one-page rating.' },
      { label: 'Press Capacity Report', price: 'From R24,000', desc: 'Press frame, cylinder and bed: two or more load cases, FEA, relief setting, measurement sheet and re-issue.', featured: true },
      { label: 'Concept Comparison', price: 'From R18,000', desc: 'Three or four arrangements compared for stress, deflection and buckling, with a recommendation.' },
    ],
    factors: ['Number of load cases', 'Whether a site visit is needed to measure', 'Registered-professional sign-off quoted as its own line where the law requires it'],
  },
  {
    id: 'plant',
    service: 'Plant Layouts and Walkthrough Films',
    link: '/plant-visualisation',
    from: 'From R45,000',
    tiers: [
      { label: 'Layout and stills', price: 'From R45,000', desc: 'Building and machines modelled, clearance and flow checks, layout drawing, machine schedule, 4K stills.' },
      { label: 'Layout, boards and film', price: 'From R85,000', desc: 'Everything above plus A1 boards and a two-to-five-minute walkthrough film.', featured: true },
      { label: 'Two-phase plant', price: 'Fixed quote', desc: 'Phase variants, process film and machine design for the lines.' },
    ],
    factors: ['Size of the building and number of machines', 'Whether drawings exist or a survey is needed', 'Film length and number of viewpoints', 'Updates as the plan changes'],
  },
  {
    id: 'workshop-software',
    service: 'Workshop Management System',
    link: '/workshop-software',
    from: 'R15,000 + R2,500/month',
    tiers: [
      { label: 'Once-off setup', price: 'R15,000', desc: 'Configuration, branding, customer and parts import, device setup on site and training' },
      { label: 'Monthly, up to 5 users', price: 'R2,500/month', desc: 'Hosting, backups, updates and support. Extra users R350 each per month.', featured: true },
      { label: 'Extra modules', price: 'Fixed quote', desc: 'Quotes, test reports, certificates or workshop-specific features' },
    ],
    factors: ['Number of users', 'Size of customer and parts lists to import', 'Extra modules requested', 'Number of devices to set up on site'],
  },
  {
    id: 'motorarmour',
    service: 'MotorArmour™ Motor Protection',
    link: '/motorarmour',
    from: 'From R8,500 per motor',
    tiers: [
      { label: 'Pilot batch', price: 'Quoted per motor', desc: 'A small first batch to prove it on your own line, with a certificate per motor' },
      { label: 'Ongoing, frame 112 and smaller', price: 'From R8,500 per motor', desc: 'Prepaid per batch, treated, tested at 500 V DC and certified', featured: true },
      { label: 'Larger frames', price: 'Quoted by frame size', desc: 'The treatment scales; price by frame size and condition' },
    ],
    factors: ['Motor frame size and type', 'Condition of the motor when it comes in', 'Batch size', 'Collection and delivery'],
  },
  {
    id: 'ct12',
    service: 'CT12-420 Chain Tensioner',
    link: '/products/ct12-420',
    from: 'R1,650',
    tiers: [
      { label: 'Tensioner with one shoe', price: 'R1,650', desc: '08B, 10B or 12B shoe fitted before dispatch', featured: true },
      { label: 'Spare shoe kit', price: 'R295', desc: 'Two screws from below, with the tensioner on the machine' },
      { label: 'Sprocket head kit', price: 'R1,195', desc: 'Idler sprocket on a sealed bearing, bolts to the same carrier' },
    ],
    factors: ['Volume pricing from 50 units', 'Lead time confirmed on order'],
  },
  {
    id: 'cad',
    service: 'CAD Drawings and Reverse Engineering',
    link: '/cad-design-drafting',
    from: 'From R3,500',
    tiers: [
      { label: 'Single detail drawing', price: 'From R3,500', desc: 'One part or assembly drawing, dimensioned and toleranced, PDF plus 3D or DXF files' },
      { label: 'Drawing package (5 to 10 drawings)', price: 'From R8,000', desc: 'General assembly, parts list and detail drawings for a full assembly' },
      { label: 'Patent-ready drawing set', price: 'From R7,500', desc: 'Formal figures with reference numerals for your attorney, from your prototype or sketch, in 48 hours' },
    ],
    factors: ['Number of drawings', 'Machined parts vs fabrications', 'Whether redesign is needed', 'Reverse engineering from physical parts'],
  },
  {
    id: 'cnc',
    service: 'CNC Conversions and Programming',
    link: '/cnc-conversions',
    from: 'From R25,000',
    tiers: [
      { label: 'Single-axis retrofit', price: 'From R25,000', desc: 'One axis driven, for example a power feed or lead screw upgrade' },
      { label: 'Full lathe or mill conversion', price: 'From R95,000', desc: 'All axes, control panel, spindle control, commissioning, training and warranty under a written agreement. The last lathe conversion was R132,500.', featured: true },
      { label: 'Production programs, remote', price: 'R550 per program', desc: 'G-code written and proven for your parts, from your drawing or sample, delivered by email' },
    ],
    factors: ['Number of axes converted', 'Servo or stepper drives', 'Machine size and mechanical condition', 'Tool changer or control panel', 'Travel for on-site work'],
  },
  {
    id: 'machinery',
    service: 'Custom Machinery',
    link: '/custom-machinery-design',
    from: 'Design from R45,000',
    tiers: [
      { label: 'Design and engineering', price: 'From R45,000', desc: 'The Equipment Pack: 3D design, drawings, BOM, checks and film. Paid as the deposit and the design is yours' },
      { label: 'Manufacturing', price: 'Fixed per unit', desc: 'Priced per item so you can change quantities' },
      { label: 'Delivery and installation', price: 'Fixed line', desc: 'Transport, installation and commissioning nationwide' },
    ],
    factors: ['Complexity of the mechanism', 'Materials and loads', 'Quantities', 'Drives, controls and bought-out parts', 'Site distance'],
  },
  {
    id: 'retainer',
    service: 'Monthly Engineering and Software Retainer',
    link: '/contact?service=Monthly%20retainer',
    from: 'From R15,000/month',
    tiers: [
      { label: 'Engineering department', price: 'From R15,000/month', desc: 'A fixed block of design, drawing, CAM and analysis hours every month, with design-pack credits and priority turnaround', featured: true },
      { label: 'Software and marketing department', price: 'From R9,000/month', desc: 'Website, business software, hosting and Google Ads management in one invoice, with a monthly lead report' },
      { label: 'Both', price: 'From R22,000/month', desc: 'One engineer running your drawings, machines, software and ads' },
    ],
    factors: ['Hours per month', 'Response time required', 'Number of systems and sites maintained'],
  },
  {
    id: 'web',
    service: 'Websites and Business Software',
    link: '/web-software-engineering',
    from: 'From R1,500',
    tiers: [
      { label: 'Single-page website', price: 'From R1,500', desc: 'Services, about, contact form and WhatsApp button. Mobile-first' },
      { label: 'Multi-page website', price: 'From R6,000', desc: 'Five to eight pages, contact forms and search setup' },
      { label: 'Business system', price: 'From R25,000', desc: 'Inventory, bookings, quotes, invoices or portals, quoted per scope' },
    ],
    factors: ['Number of pages or features', 'Online payments', 'Custom database or integrations', 'Hosting and maintenance from R450/month'],
  },
  {
    id: 'ads',
    service: 'Google Ads Management',
    link: '/google-ads',
    from: 'R4,400/month',
    tiers: [
      { label: 'Small', price: 'R4,400/month', desc: 'R3,000 ad spend + R1,400 management. R1,500 once-off setup' },
      { label: 'Medium', price: 'R7,000/month', desc: 'R5,000 ad spend + R2,000 management. R1,500 once-off setup', featured: true },
      { label: 'Large', price: 'R13,000/month', desc: 'R10,000 ad spend + R3,000 management. R1,500 once-off setup' },
    ],
    factors: ['Ad spend goes straight to Google with no mark-up', 'Number of services and areas targeted', 'Landing pages needed', 'A daily budget pacer keeps spend under your ceiling'],
  },
  {
    id: 'brand',
    service: 'Graphic Design and Branding',
    link: '/contact?service=Graphic%20Design',
    from: 'From R2,500',
    tiers: [
      { label: 'Logo design', price: 'From R2,500', desc: 'Logo concepts, revisions and files for print and web' },
      { label: 'Brand identity package', price: 'From R8,500', desc: 'Logo, colours, typography and brand guide' },
      { label: 'Brand + website', price: 'From R15,000', desc: 'Identity, stationery and a business website' },
    ],
    factors: ['Number of concepts', 'Stationery and print items', 'Whether a website is included'],
  },
];

export const getPricing = (id) => pricing.find((p) => p.id === id);
