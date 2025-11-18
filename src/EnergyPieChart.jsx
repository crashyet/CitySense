import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Solar", value: 35, color: "hsl(var(--secondary))" },
  { name: "Wind", value: 25, color: "hsl(var(--accent))" },
  { name: "Hydro", value: 20, color: "hsl(158 80% 60%)" },
  { name: "Natural Gas", value: 15, color: "hsl(189 80% 60%)" },
  { name: "Other", value: 5, color: "hsl(var(--muted))" },
];

export default function EnergyPieChart() {
  return (
    <div className="p-6 pt-0">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} stroke="#fff" />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
