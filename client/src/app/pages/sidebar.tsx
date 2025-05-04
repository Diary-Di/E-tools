'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Home, ArrowDown, ArrowUp, User } from 'lucide-react';
import '../css/sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Accueil', path: '/', icon: <Home size={20} /> },
    { name: 'Emprunter', path: '/emprunter', icon: <ArrowDown size={20} /> },
    { name: 'Rendre', path: '/rendre', icon: <ArrowUp size={20} /> },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle mobile sidebar
    if (window.innerWidth >= 768) {
      setIsCollapsed(!isCollapsed); // Toggle collapse on desktop
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <button className="toggle-button" onClick={toggleSidebar}>
            <Menu size={24} /> {/* Burger menu icon for E-tools */}
          </button>
          <h1 className={isCollapsed ? 'hidden' : 'block'}>E-tools</h1>
        </div>

        {/* Navigation Links */}
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`nav-link ${pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <div>
                {item.icon}
                <span className={isCollapsed ? 'hidden' : 'inline'}>{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="bottom-section">
          <User size={20} />
          <span className={isCollapsed ? 'hidden' : 'inline'}>Administrateur</span>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="overlay active"
          onClick={() => {
            setIsOpen(false);
            if (window.innerWidth >= 768) setIsCollapsed(true); // Collapse on overlay click on desktop
          }}
        ></div>
      )}
    </>
  );
};

export default Sidebar;