import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Solar", value: 35, color: "hsl(45 90% 60%)" },
  { name: "Wind", value: 25, color: "hsl(189 90% 60%)" },
  { name: "Hydro", value: 20, color: "hsl(158 80% 60%)" },
  { name: "Natural Gas", value: 15, color: "hsl(189 80% 60%)" },
  { name: "Other", value: 5, color: "hsl(210 10% 60%)" },
];

export default function EnergyPieChart() {
  return (
    <div className="w-full h-[260px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="90%"
            stroke="#0d1a24"     // darker outline → modern look
            strokeWidth={3}
            paddingAngle={0}     // spacing antar sektor (lebih elegan)
            label={({ name, value }) => `${name} ${value}%`}
            labelLine={#}    // tanpa garis — lebih bersih
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>

          {/* Tooltip modern dengan glassmorphism */}
          <Tooltip
            contentStyle={{
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(6px)",
              color: "#fff",
              borderRadius: "10px",
              padding: "8px 12px",
              fontSize: "14px",
            }}
            itemStyle={{ color: "#fff" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
