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
      <Sidebar />

      <div className="dashboard-main">
        {/* ส่งฟังก์ชันไปให้ Header เพื่อเปลี่ยน State */}
        <Header 
          onLogout={onLogout}
          onProfile={toggleProfile} 
          // onHomeClick={() => setProfile('main')}
        />
        <main className='kl'>
          {/* เปลี่ยนจาก <Dashboard /> เป็น <MainContent /> */}
          {profile === "main" ? (
            <MainContent /> 
          ) : (
            <Profile />
          )}
        </main>
        {/* สำคัญ: เอา <MainContent /> ตรงนี้ออกด้วย เพราะเราใส่ไว้ในเงื่อนไขข้างบนแล้ว */}
      </div>
    </div>
  );
};

export default Dashboard; 