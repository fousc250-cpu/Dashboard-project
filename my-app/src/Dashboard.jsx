import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard;