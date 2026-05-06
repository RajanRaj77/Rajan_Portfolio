import { useState, useEffect } from 'react';
import './ProjectModal.css';

export default function ProjectModal({ isOpen, onClose, project }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => { onClose(); setIsClosing(false); }, 280);
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') handleClose(); };
    if (isOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div className={`modal-box ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="modal-header-strip" style={{ background: project.gradient }} />
        <div className="modal-body">
          <button className="modal-close" onClick={handleClose}>✕</button>
          <div className="modal-icon">{project.icon || '⚡'}</div>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-desc">{project.fullDescription}</p>
          <div className="modal-tags">
            {project.tags?.map((tag, i) => <span key={i} className="modal-tag">{tag}</span>)}
          </div>
          {project.url && (
            <a className="modal-btn" href={project.url} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
