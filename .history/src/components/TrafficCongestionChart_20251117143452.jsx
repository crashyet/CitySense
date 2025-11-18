// src/components/TrafficCongestionChart.jsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Data contoh untuk kemacetan lalu lintas per jam
// Nilai congestion bisa dalam persen atau indeks tertentu
const trafficData = [
  { hour: "00:00", congestion: 15 },
  { hour: "02:00", congestion: 10 },
  { hour: "04:00", congestion: 8 },
  { hour: "06:00", congestion: 45 },
  { hour: "08:00", congestion: 80 },
  { hour: "10:00", congestion: 65 },
  { hour: "12:00", congestion: 70 },
  { hour: "14:00", congestion: 75 },
  { hour: "16:00", congestion: 85 },
  { hour: "18:00", congestion: 82 },
  { hour: "20:00", congestion: 60 },
  { hour: "22:00", congestion: 35 },
];

export default function TrafficCongestionChart() {
  return (
    <>
      {/* Judul Grafik */}
      <h3 className="text-lg font-semibold mb-4 text-">Traffic Congestion by Hour</h3>

      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="horizontal" // Bar chart horizontal
            data={trafficData}
            margin={{
              top: 20,
              right: 30,
              left: 100, // Memberi ruang untuk label jam di kiri
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3" // Garis grid bergaris putus
              stroke="rgba(255, 255, 255, 0.1)" // Warna grid sesuai tema
            />
            <XAxis
              type="number"
              domain={[0, 100]} // Misalnya skala kemacetan 0-100%
              tick={{ fill: '#cbd5e1', fontSize: 12 }} // Warna teks sumbu X
              label={{ value: 'Congestion Level (%)', position: 'insideBottomRight', offset: -5, fill: "#94a3b8" }} // Label sumbu X
              stroke="#94a3b8" // Warna garis sumbu X
            />
            <YAxis
              type="category"
              dataKey="hour"
              tick={{ fill: '#cbd5e1', fontSize: 12 }} // Warna teks jam
              stroke="#94a3b8" // Warna garis sumbu Y
              width={60} // Lebar untuk menampung label jam
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
            <Legend
              content={(props) => {
                const { payload } = props;
                return (
                  <div className="flex justify-center mt-2">
                    {payload.map((entry, index) => (
                      <span key={`legend-item-${index}`} className="flex items-center mr-4">
                        <span
                          className="w-3 h-3 rounded-full mr-1"
                          style={{ backgroundColor: entry.color }}
                        ></span>
                        <span className="text-gray-300 text-sm">{entry.value}</span>
                      </span>
                    ))}
                  </div>
                );
              }}
            />
            <Bar
              dataKey="congestion"
              name="Congestion Level"
              fill="#00f2fe" // Gunakan warna utama Anda
              radius={[0, 4, 4, 0]} // Membuat ujung batang sedikit melengkung
              barSize={16} // Atur lebar batang
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}