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
    

      <div className="w-full h-[300px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="60%"    // Efek donat yang lebih lebar
              outerRadius="90%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth={2}
              paddingAngle={2}
              label={({ name, percent }) => {
                const formattedPercent = (percent * 100).toFixed(0);
                return formattedPercent > 5 ? `${name}\n${formattedPercent}%` : null; // Hanya tampilkan label jika cukup besar
              }}
              labelLine={true}    // Garis label tetap aktif untuk keterbacaan
              labelStyle={{ fill: '#e2e8f0', fontSize: 12, fontWeight: 'bold', stroke: 'none' }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="none"
                  style={{ outline: 'none' }}
                />
              ))}
            </Pie>

            {/* Tooltip Modern */}
            <Tooltip
              contentStyle={{
                background: "rgba(15, 23, 42, 0.9)", // Biru gelap transparan
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

            {/* Legenda di samping grafik (opsional, bisa dipindahkan ke bawah) */}
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              content={(props) => {
                const { payload } = props;
                return (
                  <ul className="flex flex-wrap justify-center gap-4 mt-4">
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
    
}