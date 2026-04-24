import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#analytics">Analytics</a></li>
          <li><a href="#reports">Reports</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;