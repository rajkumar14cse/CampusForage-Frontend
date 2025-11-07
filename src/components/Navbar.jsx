import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FaBars, FaTimes, FaHome, FaProjectDiagram, FaUserShield, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const linkClass = (path) =>
    `flex items-center gap-2 px-3 py-2 rounded hover:text-indigo-500 ${
      location.pathname === path ? 'text-indigo-600 font-bold' : 'text-gray-700 dark:text-gray-200'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between h-20 px-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-indigo-800 dark:text-indigo-400">
          CampusForge
        </h1>

        {/* Toggle Button - Mobile Only */}
        <button
          className="text-2xl text-gray-700 dark:text-gray-300 md:hidden"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link to="/" className={linkClass('/')}>Home</Link></li>
          <li><Link to="/projects" className={linkClass('/projects')}>Projects</Link></li>
          <li><Link to="/login" className={linkClass('/login')}>Admin</Link></li>
          <li><Link to="/about" className={linkClass('/about')}>About</Link></li>
          <li><Link to="/contact" className={linkClass('/contact')}>Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-6 py-4 animate-fade-down">
          <ul className="flex flex-col space-y-4 font-medium">
            <li>
              <Link to="/" onClick={closeMenu} className={linkClass('/')}>
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMenu} className={linkClass('/projects')}>
                <FaProjectDiagram /> Projects
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={closeMenu} className={linkClass('/login')}>
                <FaUserShield /> Admin
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu} className={linkClass('/about')}>
                <FaInfoCircle /> About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu} className={linkClass('/contact')}>
                <FaEnvelope /> Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
