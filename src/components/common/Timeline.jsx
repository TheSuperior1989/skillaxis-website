import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { stages } from '../../data/timeline';
import './Timeline.css';

const Stage = ({ stage, compact, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.li
      ref={ref}
      className={`tl-stage${compact ? ' tl-stage--compact' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
    >
      <div className="tl-marker" aria-hidden="true"><span>{String(stage.n).padStart(2, '0')}</span></div>
      <div className="tl-card">
        <span className="tl-when">{stage.when}</span>
        <h3>{stage.title}</h3>
        <p>{stage.text}</p>
        {!compact && (
          <div className="tl-expect">
            <div>
              <span className="tl-label tl-label--get">You get</span>
              <p>{stage.youGet}</p>
            </div>
            <div>
              <span className="tl-label">We need</span>
              <p>{stage.weNeed}</p>
            </div>
          </div>
        )}
      </div>
    </motion.li>
  );
};

// Vertical, scroll-revealed timeline of the client journey. `compact` hides the
// you-get / we-need detail for use on the home page.
const Timeline = ({ compact = false }) => (
  <ol className={`tl${compact ? ' tl--compact' : ''}`}>
    {stages.map((s, i) => <Stage key={s.n} stage={s} compact={compact} index={i} />)}
  </ol>
);

export default Timeline;
