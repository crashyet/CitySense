import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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

            {/* Card */}
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

            {/* Card */}
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

            {/* Card */}
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

            {/* Card */}
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

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold mb-4">Energy Distribution</h3>
              







<div class="p-6 pt-0"><div class="recharts-responsive-container" style="width: 100%; height: 300px; min-width: 0px;"><div class="recharts-wrapper" style="position: relative; cursor: default; width: 100%; height: 100%; max-height: 300px; max-width: 837px;"><svg cx="50%" cy="50%" class="recharts-surface" width="837" height="300" viewBox="0 0 837 300" style="width: 100%; height: 100%;"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="5" y="5" height="290" width="827"></rect></clipPath></defs><g class="recharts-layer recharts-pie" tabindex="0"><g class="recharts-layer"><g class="recharts-layer recharts-pie-sector" tabindex="-1"><path cx="418.5" cy="150" name="Solar" stroke="#fff" fill="hsl(var(--secondary))" tabindex="-1" class="recharts-sector" d="M 518.5,150
    A 100,100,0,
    0,0,
    359.7214747707527,69.09830056250526
  L 418.5,150 Z" role="img"></path></g><g class="recharts-layer recharts-pie-sector" tabindex="-1"><path cx="418.5" cy="150" name="Wind" stroke="#fff" fill="hsl(var(--accent))" tabindex="-1" class="recharts-sector" d="M 359.7214747707527,69.09830056250526
    A 100,100,0,
    0,0,
    337.59830056250524,208.7785252292473
  L 418.5,150 Z" role="img"></path></g><g class="recharts-layer recharts-pie-sector" tabindex="-1"><path cx="418.5" cy="150" name="Hydro" stroke="#fff" fill="hsl(158 80% 60%)" tabindex="-1" class="recharts-sector" d="M 337.59830056250524,208.7785252292473
    A 100,100,0,
    0,0,
    449.4016994374947,245.10565162951536
  L 418.5,150 Z" role="img"></path></g><g class="recharts-layer recharts-pie-sector" tabindex="-1"><path cx="418.5" cy="150" name="Natural Gas" stroke="#fff" fill="hsl(189 80% 60%)" tabindex="-1" class="recharts-sector" d="M 449.4016994374947,245.10565162951536
    A 100,100,0,
    0,0,
    513.6056516295154,180.90169943749476
  L 418.5,150 Z" role="img"></path></g><g class="recharts-layer recharts-pie-sector" tabindex="-1"><path cx="418.5" cy="150" name="Other" stroke="#fff" fill="hsl(var(--muted))" tabindex="-1" class="recharts-sector" d="M 513.6056516295154,180.90169943749476
    A 100,100,0,
    0,0,
    518.5,150.00000000000003
  L 418.5,150 Z" role="img"></path></g></g><g class="recharts-layer recharts-pie-labels"><g class="recharts-layer"><text cx="418.5" cy="150" stroke="none" name="Solar" alignment-baseline="middle" x="472.9788599687456" y="43.07921709739587" class="recharts-text recharts-pie-label-text" text-anchor="start" fill="hsl(var(--secondary))"><tspan x="472.9788599687456" dy="0em">Solar 35%</tspan></text></g><g class="recharts-layer"><text cx="418.5" cy="150" stroke="none" name="Wind" alignment-baseline="middle" x="299.9773991285835" y="131.2278641951723" class="recharts-text recharts-pie-label-text" text-anchor="end" fill="hsl(var(--accent))"><tspan x="299.9773991285835" dy="0em">Wind 25%</tspan></text></g><g class="recharts-layer"><text cx="418.5" cy="150" stroke="none" name="Hydro" alignment-baseline="middle" x="381.41796067500627" y="264.12678195541844" class="recharts-text recharts-pie-label-text" text-anchor="end" fill="hsl(158 80% 60%)"><tspan x="381.41796067500627" dy="0em">Hydro 20%</tspan></text></g><g class="recharts-layer"><text cx="418.5" cy="150" stroke="none" name="Natural Gas" alignment-baseline="middle" x="503.3528137423857" y="234.8528137423857" class="recharts-text recharts-pie-label-text" text-anchor="start" fill="hsl(189 80% 60%)"><tspan x="503.3528137423857" dy="0em">Natural Gas 15%</tspan></text></g><g class="recharts-layer"><text cx="418.5" cy="150" stroke="none" name="Other" alignment-baseline="middle" x="537.0226008714166" y="168.77213580482774" class="recharts-text recharts-pie-label-text" text-anchor="start" fill="hsl(var(--muted))"><tspan x="537.0226008714166" dy="0em">Other 5%</tspan></text></g></g></g></svg><div tabindex="-1" class="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom" style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px; transform: translate(463.855px, 195.355px);"><div class="recharts-default-tooltip" style="margin: 0px; padding: 10px; background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); white-space: nowrap;"><p class="recharts-tooltip-label" style="margin: 0px;"></p></div></div></div></div></div>















              <div className="h-64 flex items-center justify-center text-emerald-200/60">
                Chart Placeholder
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold mb-4">Traffic Congestion</h3>
              <div className="h-64 flex items-center justify-center text-emerald-200/60">
                Chart Placeholder
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Weekly AQI Trend</h3>
              <div className="h-72 flex items-center justify-center text-emerald-200/60">
                AQI Line Chart
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
