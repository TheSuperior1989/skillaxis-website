import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';

const trustSignals = [
  { label: 'Location', value: 'Pretoria, Gauteng, South Africa' },
  { label: 'Disciplines', value: 'CNC · CAD · Automation · Web · Ads' },
  { label: 'Response time', value: 'Within 4 business hours' },
  { label: 'Client focus', value: 'Workshops, engineering firms & industry' },
];

const proofStats = [
  { value: '9,400+', label: 'CAD files designed and drawn in Autodesk Inventor' },
  { value: '1 workshop', label: 'runs its daily job cards, inventory and wash bay on our software' },
  { value: '~R28', label: 'per lead on a live Google Ads campaign we manage' },
  { value: '1 CNC', label: 'built from scratch — we machine on what we engineer' },
];

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="testimonials-section" id="proof">
      <div className="container">
        <div className="trust-signals-bar">
          {trustSignals.map((t) => (
            <div key={t.label} className="trust-signal">
              <span className="trust-signal-label">{t.label}</span>
              <span className="trust-signal-value">{t.value}</span>
            </div>
          ))}
        </div>

        <div className="section-header" style={{ marginTop: '64px' }}>
          <span className="section-tag">No stock photos, no invented quotes</span>
          <h2 className="section-title">Numbers From Real Work</h2>
        </div>

        <motion.div
          ref={ref}
          className="trust-signals-bar"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '32px' }}
        >
          {proofStats.map((s) => (
            <div key={s.label} className="trust-signal">
              <span className="trust-signal-value" style={{ fontSize: '1.6rem' }}>{s.value}</span>
              <span className="trust-signal-label" style={{ textTransform: 'none', letterSpacing: 0 }}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
