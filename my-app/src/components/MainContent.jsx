import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import './MainContent.css';

// 1. เตรียมชุดข้อมูลแยกตามช่วงเวลา
const allData = {
  monthly: [
    { name: 'Jan', value: 400 }, { name: 'Feb', value: 300 }, { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 }, { name: 'May', value: 500 }, { name: 'Jun', value: 700 },
  ],
  weekly: [
    { name: 'Mon', value: 100 }, { name: 'Tue', value: 250 }, { name: 'Wed', value: 150 },
    { name: 'Thu', value: 300 }, { name: 'Fri', value: 450 }, { name: 'Sat', value: 200 },
    { name: 'Sun', value: 120 },
  ]
};

const cardStats = {
  monthly: { users: "1,234", revenue: "$12,345", orders: "567", growth: "+15%" },
  weekly: { users: "320", revenue: "$2,800", orders: "120", growth: "+5%" }
};

const pieData = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
];

const COLORS = ['#125997', '#00C49F', '#FFBB28'];

function MainContent() {
  // 2. สร้าง State สำหรับ Filter
  const [filter, setFilter] = useState('monthly');

  // 3. ดึงข้อมูลมาใช้ตาม Filter ปัจจุบัน
  const currentChartData = allData[filter];
  const currentStats = cardStats[filter];

  return (
    <main className="main-content">
      {/* --- ส่วนปุ่ม Filter --- */}
      <div className="filter-container" style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => setFilter('monthly')}
          style={{ padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', border: 'none', background: filter === 'monthly' ? '#125997' : '#e0e0e0', color: filter === 'monthly' ? 'white' : 'black' }}
        >
          Monthly View
        </button>
        <button 
          onClick={() => setFilter('weekly')}
          style={{ padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', border: 'none', background: filter === 'weekly' ? '#125997' : '#e0e0e0', color: filter === 'weekly' ? 'white' : 'black' }}
        >
          Weekly View
        </button>
      </div>

      {/* --- ส่วน Cards (ข้อมูลจะเปลี่ยนตาม State) --- */}
      <div className="cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>{currentStats.users}</p>
        </div>
        <div className="card">
          <h3>Revenue</h3>
          <p>{currentStats.revenue}</p>
        </div>
        <div className="card">
          <h3>Orders</h3>
          <p>{currentStats.orders}</p>
        </div>
        <div className="card">
          <h3>Growth</h3>
          <p style={{ color: '#00C49F' }}>{currentStats.growth}</p>
        </div>
      </div>

      <div className="charts">
        {/* Line Chart - Monthly/Weekly Revenue */}
        <div className="chart-container">
          <h3>{filter === 'monthly' ? 'Monthly' : 'Weekly'} Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={currentChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#125997" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - ยังเหมือนเดิมหรือจะแยกข้อมูลก็ได้ */}
        <div className="chart-container">
          <h3>Device Usage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - แสดงตามข้อมูลที่เลือก */}
        <div className="chart-container">
          <h3>Sales Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={currentChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#00C49F" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default MainContent;