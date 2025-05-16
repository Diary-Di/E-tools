'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  Home,
  ArrowDown,
  ArrowUp,
  User,
  Plus,
  List,
  Edit,
  BarChart,
} from 'lucide-react';
import Login from './components/login';
import './css/sidebar.css';

const navConfig = {
  public: [
    { name: 'Accueil', path: '/', icon: <Home size={20} /> },
    { name: 'Emprunter', path: '/emprunter', icon: <ArrowDown size={20} /> },
    { name: 'Rendre', path: '/rendre', icon: <ArrowUp size={20} /> },
  ],
  admin: [
    { name: 'Réception', path: '/ajouter', icon: <Edit size={20} /> },
    { name: 'Ajout matériel', path: '/inventorier', icon: <Plus size={20} /> },
    { name: 'Vue', path: '/lister_mat', icon: <List size={20} /> },
    { name: 'Emprunts', path: '/stats_mat', icon: <BarChart size={20} /> },
  ],
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

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
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsOpen(false);
  };

  const navItems = isAuthenticated ? navConfig.admin : navConfig.public;

  return (
    <>
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <button className="toggle-button" onClick={toggleSidebar}>
            <div className="icon-wrapper">
              <Menu size={24} />
            </div>
          </button>
          <h1 className={isCollapsed ? 'hidden' : 'block'}>E-tools</h1>
        </div>

        {/* Navigation */}
        <nav>
          {navItems.map((item) => {
            const isActive = pathname === item.path || pathname.startsWith(item.path + '/');
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <div>
                  <div className="icon-wrapper">{item.icon}</div>
                  <span className={isCollapsed ? 'hidden' : 'inline'}>
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Footer Section */}
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

      {/* Overlay */}
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
      <Login
        isOpen={isLoginOpen}
        onClose={toggleLoginModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Sidebar;
