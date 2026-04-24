import React from 'react';
import './Header.css';

function Header( {onLogout, onProfile, sideber} ) {
  return (
    <header className="header">
      <div className="header-right">
        <button className="bt1" onClick={onProfile}>
          <div className="Text1">Profile</div>
        </button>
        <button className="bt2" onClick={onLogout}>
        <div className= "Text2">Login</div>
        </button>
      </div>
    </header>
  );
}

export default Header;