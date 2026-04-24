import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './Dashboard.css';
import { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';



const Dashboard = ({ onLogout }) => { // นำค่าที่ไม่ได้ใช้ (onProfile, onHomeClick) ออกได้
  const [profile, setProfile] = useState('main');


  const toggleProfile = () => {
    setProfile(profile === 'main' ? 'profile' : 'main');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-main">
        {/* ส่งฟังก์ชันไปให้ Header เพื่อเปลี่ยน State */}
        <h1 className='f1'>
          {profile === 'main' ? 'Dashboard' : 'Profile'}
        </h1>
        <Header
          onLogout={onLogout}
          onProfile={() => setProfile(prev => prev === 'main' ? 'profile' : 'main')}
        // sideber={() => setSidebar(!Sidebar)}
        // profile={profile ==="profile"}
        // onHomeClick={() => setProfile('main')}
        />
        <main className='kl'>
          {/* เปลี่ยนจาก <Dashboard /> เป็น <MainContent /> */}
          {profile === "main" ? <MainContent /> : <Profile />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 