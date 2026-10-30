// Web-ready media under public/media. Every file here was cut from SkillAxis's own
// renders, films and photographs, checked frame by frame so no client name, logo,
// supplier or process detail is in shot. Captions describe work by industry only.
// Videos are muted H.264 loops; images ship at 1920 and 960 wide.

const v = (group, name, caption, extra = {}) => ({
  type: 'video',
  src: `/media/${group}/${name}.mp4`,
  poster: `/media/${group}/${name}-poster.jpg`,
  caption,
  ...extra,
});

const img = (group, name, caption, ext = 'jpg') => ({
  type: 'image',
  src: `/media/${group}/${name}.${ext}`,
  srcSmall: ext === 'jpg' ? `/media/${group}/${name}-960.${ext}` : undefined,
  caption,
});

export const plant = {
  heroLoop: v('plant', 'plant-hero-loop', 'Entering an 8,000 t/month steel lattice-fabrication plant through the receiving bay. Layout and film by SkillAxis.'),
  latticeLines: v('plant', 'plant-lattice-lines', 'Walking the CNC angle punching lines: feeder carriages, punch heads and hydraulic power packs.'),
  drillLine: v('plant', 'plant-drill-line', 'Heavy-section CNC drill line with infeed and outfeed roller conveyors.'),
  process: v('plant', 'plant-process', 'Angle bar fed into the punch head, then formed on the 60 t angle-flaring press we designed.'),
  flyover: v('plant', 'plant-flyover', 'Aerial orbit over the complete two-phase plant.'),
  overviewAerial: img('plant', 'plant-overview-aerial', 'Aerial overview of a 4,000 t/month steel lattice-fabrication plant: punch lines, drill line, material store and crane aisles.'),
  overviewLines: img('plant', 'plant-overview-lines', 'High overview of the CNC angle punch lines and roller conveyors inside the hall.'),
  punchLinesHigh: img('plant', 'plant-punch-lines-high', 'Looking down the row of CNC angle punching lines with their infeed conveyors.'),
  punchAndDrill: img('plant', 'plant-punch-line-drill-line', 'Punch line in the foreground with the heavy-section drill line and roller return beyond.'),
  feedTables: img('plant', 'plant-feed-tables', 'Raw angle bundles on the feed tables and lifts ahead of the punch lines.'),
  craneAisle: img('plant', 'plant-crane-aisle', 'Shared overhead-crane aisle and material store between the two halves of the plant.'),
  drillLineStill: img('plant', 'plant-drill-line-still', 'CNC drill line for heavy angle legs.'),
  punchLineEye: img('plant', 'plant-punch-line-eye-level', 'Eye-level view of a CNC angle punch line and its hydraulic power pack.'),
};

export const press = {
  cycle: v('press', 'press-cycle', 'Forming cycle of the 60 t angle-flaring press: index 500 mm, clamp, form the leg angle, retract.'),
  hotbend: v('press', 'press-hotbend', 'A 100 t four-column press with our adjustable V-tooling laying the heated legs of an angle onto the die flanks.'),
  tooling: v('press', 'press-tooling', 'Adjustable V-tooling: open mode (90 to 100 degrees) and close mode (90 to 80 degrees).'),
  overview: img('press', 'press-tour-overview', '60 t angle-flaring press in its heat-bend line: induction coil, roller supports and light-curtain guarding.'),
  slide: img('press', 'press-tour-slide-gib-rails', 'Slide weldment and gib rails with clamp cylinders and the main-cylinder clevis.'),
  toolingSet: img('press', 'press-tour-tooling-set', 'Tooling set: anvil plate, toe stop, hold-down insert and forming jaw, one set per section size.'),
  cylinder: img('press', 'press-tour-main-cylinder', 'Main hydraulic cylinder, 636 kN at 250 bar, on the bed end plate.'),
  pack: img('press', 'press-tour-hydraulic-pack', '15 kW hydraulic power pack with hi-lo tandem pump and 200 L tank.'),
  operator: img('press', 'press-tour-operator-station', 'Operator station: HMI, two-hand controls, E-stop and the index encoder wheel.'),
  hotbendHot: img('press', 'press-hotbend-press-hot', '100 t four-column hot-bend press fitted with our adjustable V-tooling.'),
  adjustableDie: img('press', 'press-hotbend-adjustable-die', 'Adjustable V-die with pivoting flanks and set blocks.'),
  closeMode: img('press', 'press-hotbend-close-mode', 'V-die set to close mode: the punch nose pushes the root down and the toes ride down the flanks.'),
  dieExploded: img('press', 'press-hotbend-die-exploded', 'Exploded view of the adjustable V-die.'),
  quickChange: img('press', 'press-hotbend-quick-change-die', 'Quick-change V-die set: only the V-insert and punch nose change.'),
  feaAsFound: img('press', 'press-fea-frame-as-found', 'FEA of a 60 t four-column press frame as found: von Mises stress, peak at the top plate under the cylinder.', 'png'),
  feaReinforced: img('press', 'press-fea-frame-reinforced', 'The same frame with our reinforcement: stress spread into the ribs.', 'png'),
  feaStraightening: img('press', 'press-fea-straightening-frame', 'FEA of a 100 t straightening-press frame variant.', 'png'),
};

export const packs = {
  ct12HowItWorks: v('packs', 'packs-ct12-how-it-works', 'Spring-loaded chain tensioner: nested springs, hard-chrome pins and a replaceable wear shoe.', { ratio: '1920 / 904' }),
  ct12ShoeChange: v('packs', 'packs-ct12-shoe-change', 'Wear-shoe change: two screws from below, the tensioner stays on the machine.', { ratio: '1920 / 904' }),
  ct12SprocketHead: v('packs', 'packs-ct12-sprocket-head', 'Bolt-on sprocket head option on the same carrier plate.', { ratio: '1920 / 904' }),
  trayTabLock: v('packs', 'packs-food-tray-tab-lock', 'Stainless food-processing tray: laser-cut fins locked by folded tabs, no welds inside the tray.', { ratio: '1280 / 570' }),
  ct12Ga: img('packs', 'packs-ct12-pose-ga', 'CT12-420 chain tensioner, general-arrangement pose.'),
  ct12Service: img('packs', 'packs-ct12-pose-service', 'CT12-420 in service against a roller chain.'),
  ct12Sprocket: img('packs', 'packs-ct12-pose-sprocket-head', 'CT12-420 with the optional idler-sprocket head.'),
  ct12Drawing: img('packs', 'packs-ct12-general-arrangement', 'General-arrangement drawing with a section through the spring bores.', 'png'),
  ct12Datasheet: { type: 'image', src: '/media/packs/packs-ct12-datasheet-960.png', caption: 'Two-page product datasheet, generated from the same model.' },
  foodTray: img('packs', 'packs-food-tray-iso', 'Stainless food-processing tray with tab-locked fins.'),
  trayRack: img('packs', 'packs-tray-rack-iso', 'Stainless tray rack for a food-processing line.'),
  trayTrolley: img('packs', 'packs-tray-trolley-iso', 'Stainless tray trolley on castors.'),
  motorFixture: img('packs', 'packs-motor-fixture-iso', 'Welded motor fixture, 25 x 25 SHS six-bay frame, modelled from a hand sketch.'),
  motorFixtureSheet1: { type: 'image', src: '/media/packs/packs-motor-fixture-sheet1.png', caption: 'Generated overview sheet with key data.' },
  motorFixtureSheet2: { type: 'image', src: '/media/packs/packs-motor-fixture-sheet2.png', caption: 'Generated fabrication drawing with weld locations.' },
  roofFrame: img('packs', 'packs-roof-frame-iso', '14 m roof structure on timber poles, 16-panel truss frames.'),
  roofFea: { type: 'image', src: '/media/packs/packs-roof-fea-full-tie-16panel.png', caption: 'Frame analysis of the recommended 16-panel arrangement.' },
  roofReport: { type: 'image', src: '/media/packs/packs-roof-report-cover-960.png', caption: 'Twelve-page comparison report, delivered the same afternoon.' },
};

export const software = {
  promo: { type: 'video', src: '/media/software/software-promo-audio.mp4', poster: '/media/software/software-promo-poster.jpg', caption: 'Turbo Management System in 31 seconds' },
  promoMuted: v('software', 'software-promo', 'Turbo Management System in 31 seconds'),
  jobCards: v('software', 'software-job-card-status-flow', 'Job card board: status changed from the card, quote created with automatic VAT, second-person sign-off.', { ratio: '2.5 / 1' }),
  dashboard: v('software', 'software-live-dashboard', 'Live dashboard: low-stock panel opens the reorder sheet, activity feed, status cards as shortcuts.', { ratio: '2.5 / 1' }),
  inventory: v('software', 'software-inventory-stock', 'Inventory: stock levels and shelf locations, dimension search, booking stock out against a job, stock ledger.', { ratio: '2.5 / 1' }),
  warranty: v('software', 'software-warranty-failure-report', 'Warranty claim and the five-step failure analysis with photos and review.', { ratio: '2.5 / 1' }),
  reports: v('software', 'software-reports-metrics', 'Reports: jobs booked, top customers by revenue, top assemblers and the exceptions checker.', { ratio: '2.5 / 1' }),
  shotDashboard: img('software', 'software-shot-dashboard', 'Live workshop dashboard with status overview and today\'s activity.'),
  shotJobsBoard: img('software', 'software-shot-jobs-board', 'Job board: every unit in the shop as a colour-coded status card.'),
  shotQuote: img('software', 'software-shot-create-quote', 'Create a quote on the job card with automatic VAT.'),
  shotJobCard: img('software', 'software-shot-job-card', 'Job card: customer, unit, parts availability, notes and timeline.'),
  shotInventory: img('software', 'software-shot-inventory', 'Inventory grid: part numbers, suppliers, shelf locations, prices and stock flags.'),
  shotInventoryItem: img('software', 'software-shot-inventory-item', 'Inventory item with image, family and dimensions.'),
  shotFailure: img('software', 'software-shot-failure-analysis', 'Warranty failure analysis, step 1 of 5.'),
  shotReports: img('software', 'software-shot-reports', 'Reports and metrics for a date range.'),
};

export const turbo = {
  cutaway: v('turbo', 'turbo-cutaway', 'VNT turbocharger explainer generated from CAD: housings ghost away, rotor spins up, actuator cutaway.'),
  vntAction: v('turbo', 'turbo-vnt-action', 'Nozzle vanes opening and closing with the exhaust flow following them.'),
  belowOpen: img('turbo', 'turbo-vnt-below-open', 'Turbine housing from below, vanes open around the wheel.'),
  nozzleRing: img('turbo', 'turbo-vnt-nozzle-ring', 'Ghosted turbine housing with the VNT nozzle ring and exhaust flow.'),
  oilFlow: img('turbo', 'turbo-oil-flow', 'Oil circuit through the bearing housing.'),
  compressor: img('turbo', 'turbo-compressor', 'Intake air over the compressor wheel.'),
  actuatorCutaway: img('turbo', 'turbo-actuator-cutaway', 'Vacuum actuator sectioned: rod, spring and rolling diaphragm.'),
  actuator: img('turbo', 'turbo-actuator', 'Vacuum actuator can and rod.'),
};

export const motorarmour = {
  stripped: img('motorarmour', 'motorarmour-stripped-motor', 'Motor stripped for inspection before treatment.'),
  rotor: img('motorarmour', 'motorarmour-rotor-and-end-shield', 'Rotor, bearings and drive-end shield removed for inspection.'),
  windings: img('motorarmour', 'motorarmour-stator-windings', 'Stator windings inspected before treatment.'),
  treated: img('motorarmour', 'motorarmour-treated-motor', 'Treated motor ready for dispatch.'),
  treatedFlange: img('motorarmour', 'motorarmour-treated-motor-flange', 'Treated face-mount motor, drive end sealed.'),
  dispatch: img('motorarmour', 'motorarmour-motors-ready-for-dispatch', 'Treated motors boxed and ready for dispatch.'),
  terminalBox: img('motorarmour', 'motorarmour-terminal-box-wired-on-site', 'Terminal box of a treated motor wired in on a food-processing plant.'),
  installed: img('motorarmour', 'motorarmour-installed-on-plant', 'Treated motor installed on a high-pressure wash-down line at a poultry plant.'),
  coupling: img('motorarmour', 'motorarmour-motor-with-coupling-on-site', 'Treated motor with drive coupling fitted on site.'),
  certificate: { type: 'image', src: '/media/motorarmour/motorarmour-certificate-sample.png', caption: 'Sample certificate: insulation resistance at 500 V DC, PASS above 2,000 MΩ. Serial and client redacted.' },
};

export const controls = {
  boxBuild: v('controls', 'controls-controller-box-build', 'Vehicle actuator controller: enclosure, drivers, terminals and harness generated from one data file.', { ratio: '1920 / 1444' }),
  boxLidOff: img('controls', 'controls-controller-box-lid-off', 'IP65 enclosure with drivers, DIN terminals and internal wiring.'),
  boxClosed: img('controls', 'controls-controller-box-closed', 'Closed enclosure with mounting straps.'),
  schematic: { type: 'image', src: '/media/controls/controls-power-schematic.png', caption: 'Power schematic: battery feed, motor-bus contactor, fuses, logic supply, star ground.' },
};
