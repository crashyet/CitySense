import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Solar", value: 35, color: "#00f2fe" },
  { name: "Wind", value: 25, color: "#b29cff" },
  { name: "Hydro", value: 20, color: "#00e6d2" },
  { name: "Natural Gas", value: 15, color: "#ff6b6b" },
  { name: "Other", value: 5, color: "#6c757d" },
];

export default function EnergyPieChart() {
  return (
    <div className="w-full h-[300px] flex flex-col items-center justify-center">
      <h3 className="text-lg font-semibold text-cyan-300 mb-4">
        Distribusi Energi Terbarukan
      </h3>

      <div className="w-full h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius="85%"
              paddingAngle={3} // Jarak antar sektor sedikit lebih besar untuk pemisahan visual
              // Garis batas antar sektor
              stroke="#0d1a24" // Warna gelap untuk garis batas, sesuai tema modern
              strokeWidth={2}   // Ketebalan garis untuk pemisahan yang jelas
              label={({ name, percent }) => {
                const formattedPercent = (percent * 100).toFixed(0);
                return formattedPercent > 8 ? `${name}\n${formattedPercent}%` : null;
              }}
              labelLine={true}
              labelStyle={{ fill: '#e2e8f0', fontSize: 12, fontWeight: 'bold' }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  // Stroke di sini akan menimpa stroke global di Pie jika didefinisikan
                  // Kita biarkan kosong agar mengikuti stroke global di Pie untuk konsistensi
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                backdropFilter: "blur(8px)",
                color: "#e2e8f0",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "13px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
              itemStyle={{ color: "#00f2fe" }}
              formatter={(value) => [`${value}%`, 'Energi']}
              labelStyle={{ color: "#b29cff", fontWeight: 'bold' }}
            />

            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              content={(props) => {
                const { payload } = props;
                return (
                  <ul className="flex flex-wrap justify-center gap-4 mt-2">
                    {payload.map((entry, index) => (
                      <li key={`item-${index}`} className="flex items-center">
                        <span
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: entry.color }}
                        ></span>
                        <span className="text-gray-300 text-sm">{entry.value}</span>
                      </li>
                    ))}
                  </ul>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}