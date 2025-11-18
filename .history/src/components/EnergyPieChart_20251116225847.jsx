import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { color } from "three/tsl";

const data = [
  { name: "Solar", value: 35, colo: "yellow" },
  { name: "Wind", value: 25, color: "hsl(189 90% 60%)" },
  { name: "Hydro", value: 20, color: "hsl(158 80% 60%)" },
  { name: "Natural Gas", value: 15, color: "hsl(189 80% 60%)" },
  { name: "Other", value: 5, color: "hsl(var(--muted))" },
];

export default function EnergyPieChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="90%"
            stroke="#fff"
            strokeWidth={2}
            label={({ name, value }) => `${name} ${value}%`}
            labelLine={true}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              color: "#fff",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
