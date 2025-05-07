'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Home, ArrowDown, ArrowUp, User, Plus, Edit, BarChart } from 'lucide-react';
import Login from './components/login';
import './css/sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state
  const pathname = usePathname();

  // Navigation items for non-authenticated users
  const publicNavItems = [
    { name: 'Accueil', path: '/', icon: <Home size={20} /> },
    { name: 'Emprunter', path: '/emprunter', icon: <ArrowDown size={20} /> },
    { name: 'Rendre', path: '/rendre', icon: <ArrowUp size={20} /> },
  ];

  // Navigation items for authenticated users
  const adminNavItems = [
    { name: 'Nouveau', path: '/nouveau', icon: <Plus size={20} /> },
    { name: 'Editer', path: '/editer', icon: <Edit size={20} /> },
    { name: 'Statistique', path: '/statistique', icon: <BarChart size={20} /> },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (window.innerWidth >= 768) {
      setIsCollapsed(!isCollapsed);
    }
  };

  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setIsLoginOpen(false); // Close the login modal
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsOpen(false); // Optionally close the sidebar
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <button className="toggle-button" onClick={toggleSidebar}>
            <div className="icon-wrapper">
              <Menu size={24} />
            </div>
          </button>
          <h1 className={isCollapsed ? 'hidden' : 'block'}>E-tools</h1>
        </div>

        {/* Navigation Links */}
        <nav>
          {(isAuthenticated ? adminNavItems : publicNavItems).map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`nav-link ${pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <div>
                <div className="icon-wrapper">{item.icon}</div>
                <span className={isCollapsed ? 'hidden' : 'inline'}>
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Bottom Section */}
        <div
          className="bottom-section"
          onClick={isAuthenticated ? handleLogout : toggleLoginModal}
        >
          <div className="icon-wrapper">
            <User size={20} />
          </div>
          <span className={isCollapsed ? 'hidden' : 'inline'}>
            {isAuthenticated ? 'Déconnexion' : 'Administrateur'}
          </span>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="overlay active"
          onClick={() => {
            setIsOpen(false);
            if (window.innerWidth >= 768) setIsCollapsed(true);
          }}
        ></div>
      )}

      {/* Login Modal */}
      <Login isOpen={isLoginOpen} onClose={toggleLoginModal} onLoginSuccess={handleLoginSuccess} />
    </>
  );
};

export default Sidebar;