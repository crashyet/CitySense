    import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

    const data = [
    { name: "Solar", value: 40 },
    { name: "Wind", value: 30 },
    { name: "Hydro", value: 20 },
    { name: "Other", value: 10 }
    ];

    const COLORS = ["#34d399", "#60a5fa", "#fcd34d", "#f472b6"];

    export default function EnergyPieChart() {
    return (
        <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius="80%"
                innerRadius="50%"
                paddingAngle={2}
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
            </Pie>
            <Tooltip />
            </PieChart>
        </ResponsiveContainer>
        </div>
    );
    }
