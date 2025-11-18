import React from "react";

const DashboardSection = () => {
  return (
    <section
      id="dashboard"
      className="relative w-full bg-gradient-to-b from-black to-slate-900 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Smart City Dashboard jkasndk
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-emerald-100/80">
              Live indicators for air quality, renewable energy, waste
              circularity, and smart mobility.  
            </p>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-100/80 backdrop-blur md:block">
            Updated • 2 mins ago
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Air Quality */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-emerald-300/40">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 opacity-40 blur-2xl"></div>

            <div className="relative flex items-start gap-4">
              <div className="rounded-xl bg-gradient-to-br from-white/10 to-white/0 p-3 text-emerald-300 ring-1 ring-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-wind h-5 w-5"
                >
                  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
                  <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
                  <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
                </svg>
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-emerald-200/80">
                  Air Quality
                </p>
                <p className="mt-1 text-xl font-semibold text-white">AQI 38 • Good</p>
                <p className="mt-1 text-xs text-emerald-200/70">+3% today</p>
              </div>
            </div>

            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
            </div>
          </div>

          {/* Renewable Energy */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-emerald-300/40">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-500/30 to-lime-400/30 opacity-40 blur-2xl"></div>

            <div className="relative flex items-start gap-4">
              <div className="rounded-xl bg-gradient-to-br from-white/10 to-white/0 p-3 text-emerald-300 ring-1 ring-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-leaf h-5 w-5"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-emerald-200/80">
                  Renewable Energy
                </p>
                <p className="mt-1 text-xl font-semibold text-white">72% grid supply</p>
                <p className="mt-1 text-xs text-emerald-200/70">+12% YoY</p>
              </div>
            </div>

            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
            </div>
          </div>

          {/* Waste Management */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-emerald-300/40">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-lime-400/30 to-teal-400/30 opacity-40 blur-2xl"></div>

            <div className="relative flex items-start gap-4">
              <div className="rounded-xl bg-gradient-to-br from-white/10 to-white/0 p-3 text-emerald-300 ring-1 ring-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-recycle h-5 w-5"
                >
                  <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path>
                  <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path>
                  <path d="m14 16-3 3 3 3"></path>
                  <path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path>
                  <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path>
                  <path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path>
                </svg>
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-emerald-200/80">
                  Waste Management
                </p>
                <p className="mt-1 text-xl font-semibold text-white">64% recycled</p>
                <p className="mt-1 text-xs text-emerald-200/70">-6% landfill</p>
              </div>
            </div>

            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
            </div>
          </div>

          {/* Smart Transport */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-emerald-300/40">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 opacity-40 blur-2xl"></div>

            <div className="relative flex items-start gap-4">
              <div className="rounded-xl bg-gradient-to-br from-white/10 to-white/0 p-3 text-emerald-300 ring-1 ring-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bus h-5 w-5"
                >
                  <path d="M8 6v6"></path>
                  <path d="M15 6v6"></path>
                  <path d="M2 12h19.6"></path>
                  <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path>
                  <circle cx="7" cy="18" r="2"></circle>
                  <path d="M9 18h5"></path>
                  <circle cx="16" cy="18" r="2"></circle>
                </svg>
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-emerald-200/80">
                  Smart Transport
                </p>
                <p className="mt-1 text-xl font-semibold text-white">EV share 41%</p>
                <p className="mt-1 text-xs text-emerald-200/70">-18% congestion</p>
              </div>
            </div>

            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
