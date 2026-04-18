import Dashboard from './Dashboard';
import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  // เริ่มต้นให้เป็น false (ยังไม่ล็อกอิน)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // เช็คจาก LocalStorage เมื่อเปิดเว็บขึ้นมา (ถ้าเคย Login ไว้แล้วไม่ต้อง Login ซ้ำ)
  useEffect(() => {
    const status = localStorage.getItem('isLoggedIn');
    if (status === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // บันทึกสถานะไว้ในเครื่อง
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // ลบสถานะออก
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        // ถ้า Login แล้ว ส่งฟังก์ชัน logout ไปให้หน้า Dashboard ใช้ด้วย
        <>
        <Dashboard onLogout={handleLogout} />
        </>
      ) : (
        // ถ้ายังไม่ Login ให้แสดงหน้า Login
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;






// function App() {
//   return (
//     <Dashboard/>
//   );a
// }

// export default App;