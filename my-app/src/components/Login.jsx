import React, { useState } from "react";
import "./Login.css";
import toast from "react-hot-toast";

const Login = ({ onLogin }) => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "1234") {
      onLogin();
    } else {
      alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    }

  }

  return ( 
    
      <div className="Login1">
        <h2 className="Login2">DashBoard</h2>
        <form onSubmit={handleSubmit} className="Login3">
          <div>
            <label htmlFor="email" className="Login4">Email</label>
            <input
              // placeholder="กรุณากรอกอีเมลของคุณ"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="Login5"
              required
            />
          </div>
          <div>
            <label className="Login6">Password</label>
            <input
              // placeholder="กรุณากรอกรหัสของคุณ"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="Login7"
              required
            />
          </div>
          <button
            type="submit"
            className="Login8"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    
  );

};

export default Login;