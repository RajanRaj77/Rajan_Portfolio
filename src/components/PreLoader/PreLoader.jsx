import { useState, useEffect } from 'react';
import Aurora from '../Aurora/Aurora';
import CountUp from '../CountUp/CountUp';
import './PreLoader.css';

export default function PreLoader({ onDone }) {
  const [countDone, setCountDone] = useState(false);
  const [fadeText, setFadeText] = useState(false);
  const [fadeScreen, setFadeScreen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (countDone) {
      const t1 = setTimeout(() => setFadeText(true), 400);
      const t2 = setTimeout(() => setFadeScreen(true), 800);
      const t3 = setTimeout(() => { setVisible(false); onDone?.(); }, 1600);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, [countDone, onDone]);

  if (!visible) return null;

  return (
    <div className={`preloader ${fadeScreen ? 'fade-out' : ''}`}>
      <div className="preloader-aurora">
        <Aurora colorStops={['#00ffc8', '#6c63ff', '#ff6b8a']} blend={0.5} amplitude={1.2} speed={0.8} />
      </div>
      <div className={`preloader-count ${fadeText ? 'fade-text' : ''}`}>
        <CountUp from={0} to={100} direction="up" duration={1.5} className="count-num" onEnd={() => setCountDone(true)} />
        <span className="count-symbol">%</span>
      </div>
      <div className={`preloader-label ${fadeText ? 'fade-text' : ''}`}>Loading Portfolio</div>
    </div>
  );
}
