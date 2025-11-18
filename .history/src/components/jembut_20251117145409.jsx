import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data dummy untuk simulasi Weekly AQI (7 hari terakhir)
const dummyAqiData = [
  { day: 'Mon', aqi: 2, pm25: 15 }, // AQI: 1-5 (1=Baik, 5=Buruk)
  { day: 'Tue', aqi: 3, pm25: 25 },
  { day: 'Wed', aqi: 1, pm25: 10 },
  { day: 'Thu', aqi: 4, pm25: 35 },
  { day: 'Fri', aqi: 2, pm25: 18 },
  { day: 'Sat', aqi: 3, pm25: 28 },
  { day: 'Sun', aqi: 1, pm25: 12 },
];

const WeeklyAQI = () => {
  return (
    <div style={{ width: '100%', height: 400, padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Weekly Air Quality Index (AQI)</h2>
      <ResponsiveContainer>
        <LineChart data={dummyAqiData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="aqi" stroke="#8884d8" name="AQI Index" />
          <Line type="monotone" dataKey="pm25" stroke="#82ca9d" name="PM2.5 (µg/m³)" />
        </LineChart>
      </ResponsiveContainer>
      <p style={{ fontSize: '14px', color: '#666' }}>
        Keterangan: AQI 1-2 (Baik), 3-4 (Sedang), 5 (Buruk). Data dummy untuk demo.
      </p>
    </div>
  );
};

export default WeeklyAQI;