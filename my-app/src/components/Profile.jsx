import React, { useState } from 'react'; // 1. นำเข้า useState
import './Profile.css';
import toast from 'react-hot-toast';

const Profile = () => {
  // 2. สร้าง State สำหรับคุมข้อมูลผู้ใช้ (แทนค่าตัวแปร user เดิม)
  const [user, setUser] = useState({
    name: "Anuwat",
    email: "admin@gmail.com",
    role: "Administrator",
    avatar: "https://i.pinimg.com/236x/d9/95/6d/d9956d51a48fcbac98b3280356e0245f.jpg",
    joinDate: "January 2024"
  });

  // 3. สร้าง State สำหรับคุมสถานะการแก้ไข
  const [isEditing, setIsEditing] = useState(false);

  // 4. ฟังก์ชันสำหรับบันทึกข้อมูล
  const handleSave = () => {
    setIsEditing(false); // ปิดฟอร์ม
    toast.success('บันทึกข้อมูลเรียบร้อยแล้ว!', {
      icon: '💾',
    });
  };

  return (
    <div className="k1">
      <div className="k2">
        <img
          src={user.avatar}
          alt="Profile"
          className="Profile-img"
        />
      </div>

      <div className="k3">
        <div>
          {/* 5. ทำฟอร์มแก้ไข (Conditional Rendering) */}
          {isEditing ? (
            <div className="form-edit">
              <input
                type="text"
                className="input"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })} // 6. จัดการ Object ใน State
                placeholder="ใส่ชื่อใหม่..."
              />
              <input
                type="text"
                className="input"
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
                placeholder="ใส่บทบาทใหม่..."
              />
              <input
                type="email"
                className="input"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="ใส่อีเมลใหม่..."
              />
            </div>
          ) : (
            <div className="profile-info">
              <h1>{user.name}</h1>
              <p>{user.role}</p>
              <p>{user.email}</p>
            </div>
          )}
        </div>

        {/* 7. เปลี่ยนปุ่ม Edit เป็น Save Changes */}
        {isEditing ? (
          <button
            onClick={handleSave} // 8. เรียกฟังก์ชัน Save
            className="Save"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)} // 9. กดแล้วเปิดฟอร์ม
            className="Edit"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* <hr className="K8D " /> */}

      {/* ส่วนข้อมูลรายละเอียด - เพิ่มข้อมูลเข้าไปได้อีก
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-xl">
          <span className="text-gray-500 text-sm block">Account Status</span>
          <span className="text-green-600 font-bold">● Active</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <span className="text-gray-500 text-sm block">Member Since</span>
          <span className="font-bold text-gray-800">{user.joinDate}</span>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;