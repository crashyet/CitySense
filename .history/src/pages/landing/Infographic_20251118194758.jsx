import React from "react";

const Infographic = () => {
  return (
    <section className="relative w-full bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_300px_at_50%_-20%,rgba(16,185,129,0.25),transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-1 ring-white/10">
            <svg ...>...</svg>
          </div>
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">Infografik Keberlanjutan</h3>
            <p className="text-sm text-emerald-100/80">
              Perbandingan cepat antara kota tradisional dan kota berkelanjutan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">

            {/* Energy Section */}
            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:grid-cols-3">
              <div className="text-sm font-medium text-white/90">Energi</div>

              <div className="rounded-xl border border-white/10 bg-red-500/10 p-3 text-sm text-red-200/90">
                <span className="inline-flex items-center gap-2">
                  <svg ...>...</svg>
                  Jaringan berbasis fosil
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-emerald-500/10 p-3 text-sm text-emerald-200/90">
                <span className="inline-flex items-center gap-2">
                  <svg ...>...</svg>
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
              <div className="text-sm font-medium text-white/90">Sampah</div>
              <div className="rounded-xl border border-white/10 bg-red-500/10 p-3 text-sm text-red-200/90">
                Linear — dominan ke landfill
              </div>
              <div className="rounded-xl border border-white/10 bg-emerald-500/10 p-3 text-sm text-emerald-200/90">
                Sirkular — daur ulang & kompos
              </div>
            </div>

            {/* Urban Nature Section */}
            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:grid-cols-3">
              <div className="text-sm font-medium text-white/90">Alam Perkotaan</div>

              <div className="rounded-xl border border-white/10 bg-red-500/10 p-3 text-sm text-red-200/90">
                <span className="inline-flex items-center gap-2">
                  <svg ...>...</svg>
                  Jalan berbasis beton
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-emerald-500/10 p-3 text-sm text-emerald-200/90">
                <span className="inline-flex items-center gap-2">
                  <svg ...>...</svg>
                  Koridor hijau & taman
                </span>
              </div>
            </div>
          </div>

          {/* Impact Snapshot Section */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6 backdrop-blur">
            <p className="text-sm text-emerald-100/80">Dampak Singkat</p>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-emerald-100/70">Pengurangan CO₂</p>
                <p className="mt-1 text-xl font-semibold text-white">−48%</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-emerald-100/70">Porsi Energi Terbarukan</p>
                <p className="mt-1 text-xl font-semibold text-white">+72%</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-emerald-100/70">Penggunaan Transportasi Publik</p>
                <p className="mt-1 text-xl font-semibold text-white">+35%</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-emerald-100/70">Tingkat Daur Ulang</p>
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
