import { Link, useLocation } from 'react-router-dom';
import { BrainCircuit, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Analysis Tool', path: '/analysis' },
    { name: 'Dark Psychology', path: '/dark-psychology' },
    { name: 'Behavior Library', path: '/behaviors' }
  ];

  return (
    <nav className="navbar glass-nav">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <BrainCircuit className="logo-icon" size={28} />
          <span className="logo-text text-gradient">Psyche<span style={{ color: 'var(--text-primary)' }}>Sight</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu desktop-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu animate-fade-in glass-panel">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
