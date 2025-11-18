import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Car,
  Zap,
  Trash2,
  Wind,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Mock data for charts
  const energyData = [
    { name: "Solar", value: 35 },
    { name: "Wind", value: 25 },
    { name: "Hydro", value: 20 },
    { name: "Natural Gas", value: 15 },
    { name: "Other", value: 5 },
  ];

  const trafficData = [
    { hour: "6AM", congestion: 30 },
    { hour: "9AM", congestion: 85 },
    { hour: "12PM", congestion: 60 },
    { hour: "3PM", congestion: 70 },
    { hour: "6PM", congestion: 90 },
    { hour: "9PM", congestion: 40 },
  ];

  const airQualityData = [
    { day: "Mon", aqi: 45 },
    { day: "Tue", aqi: 52 },
    { day: "Wed", aqi: 38 },
    { day: "Thu", aqi: 48 },
    { day: "Fri", aqi: 55 },
    { day: "Sat", aqi: 42 },
    { day: "Sun", aqi: 35 },
  ];

  const COLORS = [
    "hsl(var(--secondary))",
    "hsl(var(--accent))",
    "hsl(158 80% 60%)",
    "hsl(189 80% 60%)",
    "hsl(var(--muted))",
  ];

  const metrics = [
    {
      icon: Car,
      title: "EV Adoption",
      value: "42%",
      change: "+5%",
      trend: "up",
      color: "text-secondary",
    },
    {
      icon: Zap,
      title: "Renewable Energy",
      value: "80%",
      change: "+12%",
      trend: "up",
      color: "text-accent",
    },
    {
      icon: Trash2,
      title: "Recycling Rate",
      value: "68%",
      change: "+3%",
      trend: "up",
      color: "text-secondary",
    },
    {
      icon: Wind,
      title: "Air Quality (AQI)",
      value: "45",
      change: "-8",
      trend: "down",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">City Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time insights and analytics for urban sustainability
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <Card key={metric.title} className="glass hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-5 w-5 text-secondary" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-secondary" />
                  )}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {metric.title}
                  </p>
                  <p className="text-3xl font-bold">{metric.value}</p>
                  <p className="text-sm text-secondary mt-1">{metric.change}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Energy Mix */}
          <Card className="glass">
            <CardHeader>
              <CardTitle>Energy Mix Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={energyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {energyData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Traffic Congestion */}
          <Card className="glass">
            <CardHeader>
              <CardTitle>Traffic Congestion by Hour</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                    }}
                  />
                  <Bar dataKey="congestion" fill="hsl(var(--accent))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Air Quality Trend */}
          <Card className="glass lg:col-span-2">
            <CardHeader>
              <CardTitle>Weekly Air Quality Index (AQI)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={airQualityData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="aqi"
                    stroke="hsl(var(--secondary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--secondary))", r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Data Layers Info */}
        <Card className="glass mt-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Available Data Layers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-secondary mt-1"></div>
                <div>
                  <p className="font-medium">Transport & Mobility</p>
                  <p className="text-sm text-muted-foreground">
                    EV usage, traffic patterns, public transit occupancy
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-accent mt-1"></div>
                <div>
                  <p className="font-medium">Energy & Grid</p>
                  <p className="text-sm text-muted-foreground">
                    Renewable mix, smart grid load, building efficiency
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-secondary mt-1"></div>
                <div>
                  <p className="font-medium">Waste Management</p>
                  <p className="text-sm text-muted-foreground">
                    Smart bin levels, recycling rates, collection routes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-accent mt-1"></div>
                <div>
                  <p className="font-medium">Environmental Quality</p>
                  <p className="text-sm text-muted-foreground">
                    PM2.5, CO₂ levels, AQI index, noise pollution
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
