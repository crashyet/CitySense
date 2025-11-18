import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EnergyPieChart from "../../components/EnergyPieChart";
import TrafficCongestionChart from "../../components/TrafficCongestionChart";

export default function Dashboardpack() {
  return (
    <>
      <Navbar />

      <div className="relative w-full bg-gradient-to-b from-black via-[#071014] to-[#0d1a24] text-white pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6">

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold">Smart City Dashboard</h1>
            <p className="text-emerald-100/80 mt-2">
              Real-time insights for mobility, energy, waste, and environment.
            </p>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            {/* CARD 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-emerald-300/40">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br 
              from-cyan-500/30 to-emerald-500/30 opacity-40 blur-2xl" />

              <div className="relative">
                <p className="text-xs uppercase tracking-widest text-emerald-200/80">Air Quality</p>
                <p className="mt-1 text-xl font-semibold">AQI 45 • Good</p>
                <p className="text-xs text-emerald-200/70 mt-1">+3% today</p>
                <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-emerald-300/40">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br 
              from-emerald-500/30 to-lime-400/30 opacity-40 blur-2xl" />

              <div className="relative">
                <p className="text-xs uppercase tracking-widest text-emerald-200/80">Renewable Energy</p>
                <p className="mt-1 text-xl font-semibold">80% grid supply</p>
                <p className="text-xs text-emerald-200/70 mt-1">+12% YoY</p>
                <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-emerald-300/40">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br 
              from-teal-400/30 to-lime-400/30 opacity-40 blur-2xl" />

              <div className="relative">
                <p className="text-xs uppercase tracking-widest text-emerald-200/80">Waste Management</p>
                <p className="mt-1 text-xl font-semibold">68% recycled</p>
                <p className="text-xs text-emerald-200/70 mt-1">-6% landfill</p>
                <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-emerald-300/40">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br 
              from-cyan-500/30 to-blue-500/30 opacity-40 blur-2xl" />

              <div className="relative">
                <p className="text-xs uppercase tracking-widest text-emerald-200/80">Smart Transport</p>
                <p className="mt-1 text-xl font-semibold">EV Share 41%</p>
                <p className="text-xs text-emerald-200/70 mt-1">-18% congestion</p>
                <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 Column Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ENERGY DISTRIBUTION */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Energy Mix Distribution</h3>

              <div className="h-64">
                <EnergyPieChart />
              </div>
            </div>

            {/* TRAFFIC */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold mb-4">Traffic Congestion</h3>
              <div className="h-64 flex items-center justify-center text-emerald-200/60">
                <TrafficCongestionChart />
              </div>
            </div>

            {/* WEEKLY AQI */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Weekly AQI Trend</h3>
              <div className="h-72 flex items-center justify-center text-emerald-200/60">
                <WeeklyAQIChart />
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
