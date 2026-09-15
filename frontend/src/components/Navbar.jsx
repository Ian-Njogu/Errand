import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const Navbar = ({ onLoginClick }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="logo" style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>
        Errand
      </div>
      <div className="nav-links" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <a className="nav-link">Services</a>
        <a className="nav-link">How it works</a>
        <a className="nav-link">Become a Runner</a>
        {user ? (
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span className="body-strong">Hi, {user.username}</span>
            <button className="nav-link" style={{ background: 'none', border: 'none' }} onClick={logout}>Logout</button>
          </div>
        ) : (
          <a className="nav-link" onClick={onLoginClick}>Log in / Sign up</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
