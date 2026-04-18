import React from 'react';
import './Profile.css'; // นำเข้าไฟล์ CSS สำหรับสไตล์ของโปรไฟล์







const Profile = ({ onHomeClick }) => {
  // สมมติข้อมูลผู้ใช้งาน (ในอนาคตดึงมาจาก API หรือ State)
  const user = {
    name: "Anuwat Dashboard",
    email: "admin@gmail.com",
    role: "Administrator",
    avatar: "https://via.placeholder.com/150", // รูปโปรไฟล์จำลอง
    joinDate: "January 2024"
  };

  return (
    <div className="k1">
      {/* <button onClick={onHomeClick}>Home</button> */}
      <div className="k2">
        {/* Header ส่วนบน (Cover Photo สีพื้น) */}
        <div className="2"></div>
        
        <div className="k3">
          {/* รูปโปรไฟล์ */}
          <div className="k4">
            <img 
              src={user.avatar} 
              alt="Profile" 
              className="K5"
            />
          </div>

          <div className="k6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-blue-600 font-medium">{user.role}</p>
              <p className="text-gray-500 mt-1">{user.email}</p>
            </div>
            
            <button className="k7">
              Edit Profile
            </button>
          </div>

          <hr className="K8"/>

          {/* ส่วนข้อมูลรายละเอียด */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-xl">
              <span className="text-gray-500 text-sm block">Account Status</span>
              <span className="text-green-600 font-bold">● Active</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <span className="text-gray-500 text-sm block">Member Since</span>
              <span className="font-bold text-gray-800">{user.joinDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;