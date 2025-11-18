// src/components/WeeklyAQIChart.jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Data contoh untuk tren AQI mingguan
const aqiData = [
  { day: "Mon", aqi: 45 },
  { day: "Tue", aqi: 52 },
  { day: "Wed", aqi: 38 },
  { day: "Thu", aqi: 48 },
  { day: "Fri", aqi: 55 },
  { day: "Sat", aqi: 42 },
  { day: "Sun", aqi: 35 },
];


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/90 border border-cyan-500/30 backdrop-blur-sm p-3 rounded-md text-white shadow-lg">
        <p className="text-sm font-semibold">{`Hari: ${label}`}</p>
        <p className="text-sm" style={{ color: payload[0].color }}>{`AQI: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function WeeklyAQIChart() {
  return (
    <>
      {/* <h3 className="text-lg font-semibold mb-4 text-cyan-300">Weekly Air Quality Index (AQI)</h3> */}

      {/* Wadah fleksibel untuk grafik */}
      <div className="w-full h-full relative">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
          <LineChart
            data={aqiData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis
              dataKey="day"
              stroke="#94a3b8" // Warna teks dan garis sumbu
              tick={{ fill: '#cbd5e1', fontSize: 12 }} // Warna teks hari
            />
            <YAxis
              stroke="#94a3b8" // Warna teks dan garis sumbu
              tick={{ fill: '#cbd5e1', fontSize: 12 }} // Warna teks nilai AQI
              domain={[0, 100]} // Rentang AQI dari 0 hingga 100
            />
            <Tooltip content={<CustomTooltip />} /> {/* Gunakan tooltip kustom */}
            <Line
              type="monotone" // Tipe garis yang halus
              dataKey="aqi"
              name="AQI"
              stroke="#00f2fe" // Warna garis utama, biru neon
              strokeWidth={3}
              dot={{ fill: '#00f2fe', r: 5 }} // Titik data
              activeDot={{ r: 8, fill: '#b29cff' }} // Titik aktif saat hover
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}