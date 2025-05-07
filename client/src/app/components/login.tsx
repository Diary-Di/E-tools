'use client';

import React, { useState } from 'react';
import '../css/login.css';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void; // Callback for successful login
}

const Login: React.FC<LoginProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication (replace with real API call in production)
    if (username === 'admin' && password === 'password') {
      onLoginSuccess(); // Trigger successful login
    } else {
      setError('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <>
      <div className="login-modal-overlay" onClick={onClose}></div>
      <div className="login-modal">
        <div className="login-modal-content">
          <button className="close-button" onClick={onClose}>
            ×
          </button>
          <h2>Connexion Administrateur</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                id="username"
                placeholder="Entrez votre nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="password-toggle">
                <input
                  type="checkbox"
                  id="show-password"
                  checked={showPassword}
                  onChange={handleTogglePassword}
                />
                <label htmlFor="show-password">Afficher le mot de passe</label>
              </div>
            </div>

            {username && password && (
              <div className="form-actions">
                <button type="submit">Se connecter</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;