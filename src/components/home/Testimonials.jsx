import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import testimonial1 from '../../assets/images/team/testimonial1.jpg';
import testimonial2 from '../../assets/images/team/testimonial2.jpg';
import testimonial3 from '../../assets/images/team/testimonial3.jpg';
import './Testimonials.css';

const trustSignals = [
  { label: 'Location', value: 'Pretoria, Gauteng, South Africa' },
  { label: 'Disciplines', value: 'CNC · CAD · Automation · Web · Design' },
  { label: 'Response time', value: 'Within 4 business hours' },
  { label: 'Client focus', value: 'Serious projects only' },
];

const testimonials = [
  {
    id: 1,
    image: testimonial1,
    name: 'Pieter van der Merwe',
    position: 'CEO, TechInnovate Manufacturing',
    content: 'SkillAxis converted our Harrison lathe to full CNC. The precision gains were immediate — we went from 0.05mm variance down to 0.01mm. Their team understood the machine and the engineering constraints. Highly recommended.',
  },
  {
    id: 2,
    image: testimonial2,
    name: 'Nomsa Mthembu',
    position: 'Director, BrandForward SA',
    content: 'We needed a website that actually converts. SkillAxis delivered a fast, professional site in 3 weeks. Our inquiry rate doubled in the first month. They understood what we needed, not just what we asked for.',
  },
  {
    id: 3,
    image: testimonial3,
    name: 'Johan Botha',
    position: 'Founder, InnovateMech Engineering',
    content: 'The automation retrofit they designed for our conveyor system saved us 12 hours of manual labour per week. The system has been running for 8 months without a single failure. Excellent technical work.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="testimonials-section" id="testimonials">
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
          <span className="section-tag">Client Feedback</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <motion.div
          ref={ref}
          className="testimonials-slider"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="testimonial-card">
            <div className="quote-icon">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <p className="testimonial-content">"{testimonials[currentIndex].content}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
              </div>
              <div className="author-info">
                <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                <p className="author-position">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="control-btn" onClick={handlePrev} aria-label="Previous">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="control-btn" onClick={handleNext} aria-label="Next">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
