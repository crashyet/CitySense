// src/components/TrafficCongestionChart.jsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Data contoh untuk kemacetan lalu lintas per jam (format AM/PM)
const trafficData = [
  { hour: "6AM", congestion: 30 },
  { hour: "9AM", congestion: 85 },
  { hour: "12PM", congestion: 60 },
  { hour: "3PM", congestion: 70 },
  { hour: "6PM", congestion: 95 },
  { hour: "9PM", congestion: 40 },
];

export default function TrafficCongestionChart() {
  return (
    <>
      {/* Judul Grafik */}
      <h3 className="text-lg font-semibold mb-4 text-cyan-300">Traffic Congestion by Hour</h3>

      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical" // Bar chart vertikal
            data={trafficData}
            margin={{
              top: 20,
              right: 30,
              left: 100, // Memberi ruang untuk label jam di kiri
              bottom: 20,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255, 255, 255, 0.1)"
            />
            <XAxis
              type="number"
              domain={[0, 100]} // Skala 0-100%
              tick={{ fill: '#cbd5e1', fontSize: 12 }}
              label={{ value: 'Congestion Level (%)', position: 'bottom', offset: 0, fill: "#94a3b8" }}
              stroke="#94a3b8"
            />
            <YAxis
              type="category"
              dataKey="hour"
              tick={{ fill: '#cbd5e1', fontSize: 12 }}
              stroke="#94a3b8"
              width={80} // Lebar untuk menampung label jam
            />
            <Tooltip
              contentStyle={{
                background: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                backdropFilter: "blur(8px)",
                color: "#e2e8f0",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "13px",
              }}
              labelStyle={{ color: "#b29cff", fontWeight: 'bold' }}
              formatter={(value) => [`${value}%`, 'Congestion']}
            />
            {/* Hanya satu bar, jadi legend bisa dihilangkan atau disesuaikan */}
            <Bar
              dataKey="congestion"
              name="Congestion Level"
              fill="#00f2fe" // Warna biru neon
              radius={[4, 4, 0, 0]} // Membuat ujung atas batang melengkung
              barSize={30} // Lebar batang
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}