import { useEffect, useRef, useState } from 'react';
import './Media.css';

// Muted, looping, lazily-started video. Starts when it scrolls into view and
// pauses when it leaves, so a page with several loops stays light. Respects
// prefers-reduced-motion by showing the poster only.
export const VideoLoop = ({ src, poster, label, className = '', ratio = '16 / 9', cover = true }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(([entry]) => {
      setActive(entry.isIntersecting);
      if (entry.isIntersecting) el.play().catch(() => {});
      else el.pause();
    }, { rootMargin: '200px 0px', threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <figure className={`media-frame ${className}`} style={{ aspectRatio: ratio }}>
      {reduced ? (
        <img src={poster} alt={label || ''} loading="lazy" className={cover ? 'media-cover' : 'media-contain'} />
      ) : (
        <video
          ref={ref}
          src={active ? src : undefined}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
          className={cover ? 'media-cover' : 'media-contain'}
        />
      )}
      {label && <figcaption className="media-caption">{label}</figcaption>}
    </figure>
  );
};

// A still image in the same frame, with optional caption.
export const MediaFigure = ({ src, srcSmall, alt, caption, className = '', ratio = '16 / 9', cover = true }) => (
  <figure className={`media-frame ${className}`} style={{ aspectRatio: ratio }}>
    <img
      src={src}
      srcSet={srcSmall ? `${srcSmall} 960w, ${src} 1920w` : undefined}
      sizes={srcSmall ? '(max-width: 960px) 100vw, 960px' : undefined}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cover ? 'media-cover' : 'media-contain'}
    />
    {caption && <figcaption className="media-caption">{caption}</figcaption>}
  </figure>
);

// Grid of media items: each item is { type: 'video' | 'image', src, poster, srcSmall, caption }.
export const MediaGrid = ({ items, columns = 3 }) => (
  <div className={`media-grid media-grid--${columns}`}>
    {items.map((m) => (m.type === 'video'
      ? <VideoLoop key={m.src} src={m.src} poster={m.poster} label={m.caption} />
      : <MediaFigure key={m.src} src={m.src} srcSmall={m.srcSmall} alt={m.caption} caption={m.caption} />
    ))}
  </div>
);

// Full-width video that plays once with sound available: for the product
// promo. Shows a poster with a play button until the visitor clicks.
export const PlayVideo = ({ src, poster, label, ratio = '16 / 9' }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="media-frame media-frame--play" style={{ aspectRatio: ratio }}>
      {playing ? (
        <video src={src} poster={poster} controls autoPlay playsInline className="media-cover" aria-label={label} />
      ) : (
        <button type="button" className="media-play" onClick={() => setPlaying(true)} aria-label={`Play: ${label}`}>
          <img src={poster} alt="" className="media-cover" loading="lazy" />
          <span className="media-play-btn" aria-hidden="true">▶</span>
          {label && <span className="media-play-label">{label}</span>}
        </button>
      )}
    </figure>
  );
};
