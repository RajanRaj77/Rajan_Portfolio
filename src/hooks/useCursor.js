import { useEffect, useRef } from 'react';

export default function useCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; };
    window.addEventListener('mousemove', onMove, { passive: true });

    let raf;
    const lerp = () => {
      rx += (mx - rx) * 0.30;
      ry += (my - ry) * 0.30;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);

    const onDown = () => { dot.style.transform = 'translate(-50%,-50%) scale(1.8)'; ring.style.transform = 'translate(-50%,-50%) scale(0.6)'; };
    const onUp = () => { dot.style.transform = 'translate(-50%,-50%) scale(1)'; ring.style.transform = 'translate(-50%,-50%) scale(1)'; };
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { dotRef, ringRef };
}
