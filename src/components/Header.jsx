import { useEffect, useState } from 'react';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Header({ isDark, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setIsOpen(false)}>MHA<span>.</span></a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setIsOpen(false)}>{item}</a>)}
          <button className="theme-button" onClick={onThemeChange} aria-label="Toggle colour theme">{isDark ? '☀' : '◐'}</button>
        </div>
      </nav>
    </header>
  );
}
