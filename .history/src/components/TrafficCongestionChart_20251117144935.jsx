// src/components/TrafficCongestionChart.jsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const trafficData = [
  { hour: "00:00", cong/
];

export default function TrafficCongestionChart() {
  // Harus mengembalikan JSX
  return ( // Pastikan ada return
    <>
      {/* Judul ini HARUS ADA di sini */}
      {/* <h3 className="text-lg font-semibold mb-4 text-cyan-300">Traffic Congestion by Hour</h3> */}

      {/* Dan div ini juga HARUS ADA */}
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="horizontal"
            data={trafficData}
            margin={{
              top: 20,
              right: 30,
              left: 100,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis
              type="number"
              domain={[0, 100]}
              tick={{ fill: '#cbd5e1', fontSize: 12 }}
              label={{ value: 'Congestion Level (%)', position: 'insideBottomRight', offset: -5, fill: "#94a3b8" }}
              stroke="#94a3b8"
            />
            <YAxis
              type="category"
              dataKey="hour"
              tick={{ fill: '#cbd5e1', fontSize: 12 }}
              stroke="#94a3b8"
              width={60}
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
              fill="#00f2fe"
              radius={[0, 4, 4, 0]}
              barSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  ); // Penutup return
}