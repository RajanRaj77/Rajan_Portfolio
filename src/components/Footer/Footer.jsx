import { useMotionValue, useSpring, useTransform, motion, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import './Footer.css';

function DockItem({ label, icon, onClick, mouseX, baseSize = 48, magnification = 72, distance = 160 }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseSize };
    return val - rect.x - baseSize / 2;
  });
  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseSize, magnification, baseSize]);
  const size = useSpring(targetSize, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.button
      ref={ref}
      style={{ width: size, height: size }}
      className="dock-btn"
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <span className="dock-icon">{icon}</span>
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="dock-label"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.15 }}
          >{label}</motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function Footer() {
  const mouseX = useMotionValue(Infinity);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const dockItems = [
    { label: 'Home', icon: '⌂', id: 'hero' },
    { label: 'About', icon: '◉', id: 'about' },
    { label: 'Skills', icon: '◈', id: 'skills' },
    { label: 'Projects', icon: '◆', id: 'projects' },
    { label: 'Contact', icon: '✉', id: 'contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="logo-bracket">&lt;</span>rajan<span className="logo-acc">.</span>dev<span className="logo-bracket">/&gt;</span>
        </div>
        <div className="footer-socials">
          <a href="mailto:rajan.e3481@gmail.com" className="social-link">Email</a>
          <a href="https://www.linkedin.com/in/rajan-e-00b10b24a/" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
          <a href="https://github.com/RajanRaj77" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
        </div>
      </div>
      <motion.div
        className="dock-wrap"
        onMouseMove={({ pageX }) => mouseX.set(pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {dockItems.map(item => (
          <DockItem key={item.id} label={item.label} icon={item.icon} onClick={() => scrollTo(item.id)} mouseX={mouseX} />
        ))}
      </motion.div>
      <p className="footer-copy">Built with React · Rajan E © 2003 · Chennai, India</p>
    </footer>
  );
}
