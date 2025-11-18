import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Solar", value: 35, color: "#00f2fe", lightColor: "rgba(0, 242, 254, 0.1)" },
  { name: "Wind", value: 25, color: "#b29cff", lightColor: "rgba(178, 156, 255, 0.1)" },
  { name: "Hydro", value: 20, color: "#00e6d2", lightColor: "rgba(0, 230, 209, 0.1)" },
  { name: "Natural Gas", value: 15, color: "#ff6b6b", lightColor: "rgba(255, 107, 107, 0.1)" },
  { name: "Other", value: 5, color: "#6c757d", lightColor: "rgba(108, 117, 125, 0.1)" },
];

export default function EnergyPieChart() {
  return (
    <div className="w-full h-[300px] flex flex-col items-center justify-center">
      {/* Judul Grafik */}
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
              innerRadius={0}    // Mengubah menjadi pie chart biasa, bukan donut
              outerRadius="85%"
              paddingAngle={2}
              label={({ name, percent }) => {
                const formattedPercent = (percent * 100).toFixed(0);
                return formattedPercent > 8 ? `${name}\n${formattedPercent}%` : null; // Hanya tampilkan label jika cukup besar
              }}
              labelLine={true}
              labelStyle={{ fill: '#e2e8f0', fontSize: 12, fontWeight: 'bold', stroke: 'none' }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth={1}
                  style={{ outline: 'none' }}
                />
              ))}
            </Pie>

            {/* Tooltip Modern */}
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

            {/* Legenda Horizontal di Bawah */}
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