import { useRef } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

export default function ChromaGrid({ items = [], onItemClick, radius = 350 }) {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const setX = useRef(null);
  const setY = useRef(null);

  const initGsap = (el) => {
    if (!el || rootRef.current) return;
    rootRef.current = el;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    posRef.current = { x: width / 2, y: height / 2 };
    setX.current(posRef.current.x);
    setY.current(posRef.current.y);
  };

  const moveTo = (x, y) => {
    gsap.to(posRef.current, {
      x, y, duration: 0.45, ease: 'power3.out',
      onUpdate: () => { setX.current?.(posRef.current.x); setY.current?.(posRef.current.y); },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, { opacity: 1, duration: 0.6, overwrite: true });
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={initGsap}
      className="chroma-grid"
      style={{ '--r': `${radius}px` }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {items.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => onItemClick?.(c)}
          style={{ '--card-border': c.borderColor || 'transparent', '--card-gradient': c.gradient, cursor: 'pointer' }}
        >
          <div className="chroma-img-wrapper">
            {c.image ? (
              <img src={c.image} alt={c.title} loading="lazy" />
            ) : (
              <div className="chroma-placeholder">{c.icon || '⚡'}</div>
            )}
          </div>
          <footer className="chroma-info">
            <h3 className="chroma-title">{c.title}</h3>
            <p className="chroma-subtitle">{c.subtitle}</p>
            <div className="chroma-tags">
              {c.tags?.map((tag, ti) => <span key={ti} className="chroma-tag">{tag}</span>)}
            </div>
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
}
