import React from 'react';
import './Header.css';

function Header( {onLogout, onProfile} ) {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Welcome to Dashboard</h1>
      </div>
      <div className="header-right">
        <button className="btn" onClick={onProfile}>
          Profile
        </button>
        <button className="btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;