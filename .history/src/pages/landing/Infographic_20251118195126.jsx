import React from "react";

const Infographic = () => {
  return (
    <section className="relative w-full bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_300px_at_50%_-20%,rgba(16,185,129,0.25),transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-1 ring-white/10">
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
              className="lucide lucide-sun h-5 w-5 text-emerald-300"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">Infografik Keberlanjutan</h3>
            <p className="text-sm text-emerald-100/80">
 Perbandingan cepat antara kota tradisional dan kota berkelanjutan            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {/* Energy Section */}
            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:grid-cols-3">
              <div className="text-sm font-medium text-white/90">Energy</div>
              <div className="rounded-xl border border-white/10 bg-red-500/10 p-3 text-sm text-red-200/90">
                <span className="inline-flex items-center gap-2">
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
                    className="lucide lucide-factory h-4 w-4"
                  >
                    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                    <path d="M17 18h1"></path>
                    <path d="M12 18h1"></path>
                    <path d="M7 18h1"></path>
                  </svg>{" "}
                  Jaringan berbasis fosil
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-emerald-500/10 p-3 text-sm text-emerald-200/90">
                <span className="inline-flex items-center gap-2">
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
                    className="lucide lucide-sun h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>{" "}
                  Mikrogrid tenaga surya + angin
                </span>
              </div>
            </div>

            {/* Mobility Section */}
            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:grid-cols-3">
              <div className="text-sm font-medium text-white/90">Mobilitas</div>
              <div className="rounded-xl border border-white/10 bg-red-500/10 p-3 text-sm text-red-200/90">
                Berpusat pada mobil, macet
             </div>
              <div className="rounded-xl border border-white/10 bg-emerald-500/10 p-3 text-sm text-emerald-200/90">
                Kendaraan listrik, berbagi kendaraan, lalu lintas berbasis AI
              </div>
            </div>

            {/* Waste Section */}
            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:grid-cols-3">
              <div className="text-sm font-medium text-white/90">Waste</div>
              <div className="rounded-xl border border-white/10 bg-red-500/10 p-3 text-sm text-red-200/90">
                Linear — landfill heavy
              </div>
              <div className="rounded-xl border border-white/10 bg-emerald-500/10 p-3 text-sm text-emerald-200/90">
                Circular — recycle & compost
              </div>
            </div>

            {/* Urban Nature Section */}
            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:grid-cols-3">
              <div className="text-sm font-medium text-white/90">Urban Nature</div>
              <div className="rounded-xl border border-white/10 bg-red-500/10 p-3 text-sm text-red-200/90">
                <span className="inline-flex items-center gap-2">
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
                    className="lucide lucide-building2 h-4 w-4"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>{" "}
                  Grey streets
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-emerald-500/10 p-3 text-sm text-emerald-200/90">
                <span className="inline-flex items-center gap-2">
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
                    className="lucide lucide-trees h-4 w-4"
                  >
                    <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path>
                    <path d="M7 16v6"></path>
                    <path d="M13 19v3"></path>
                    <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path>
                  </svg>{" "}
                  Green corridors & parks
                </span>
              </div>
            </div>
          </div>

          {/* Impact Snapshot Section */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6 backdrop-blur">
            <p className="text-sm text-emerald-100/80">Impact Snapshot</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-emerald-100/70">CO₂ Reduction</p>
                <p className="mt-1 text-xl font-semibold text-white">−48%</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-emerald-100/70">Renewables Share</p>
                <p className="mt-1 text-xl font-semibold text-white">+72%</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-emerald-100/70">Public Transit Use</p>
                <p className="mt-1 text-xl font-semibold text-white">+35%</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-emerald-100/70">Recycling Rate</p>
                <p className="mt-1 text-xl font-semibold text-white">64%</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infographic;
