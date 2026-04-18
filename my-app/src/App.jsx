import Dashboard from './Dashboard';
import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  // เริ่มต้นให้เป็น false (ยังไม่ล็อกอิน)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('isLoggedIn');
    // เช็คว่าถ้าในเครื่องเป็น true แต่ใน State ยังเป็น false ถึงค่อยเปลี่ยน
    if (status === 'true' && isLoggedIn === false) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]); // ใส่ isLoggedIn เข้าไปใน dependency

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