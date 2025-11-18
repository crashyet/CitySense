import React from "react";

const stats = [
  {
    title: "KUALITAS UDARA",
    value: "AQI 38 • Baik",
    sub: "+3% hari ini",
  },
  {
    title: "ENERGI TERBARUKAN",
    value: "72% pasokan grid",
    sub: "+12% YoY",
  },
  {
    title: "PENGELOLAAN SAMPAH",
    value: "64% didaur ulang",
    sub: "-6% landfill",
  },
  {
    title: "TRANSPORTASI CERDAS",
    value: "41% EV share",
    sub: "-18% kemacetan",
  },
];


export default function DashboardPreview() {
  return (
    <section
      className="
        relative w-full 
        pt-24 pb-20
        bg-gradient-to-b 
        from-[#0A141C]
        via-[#08171F]
        to-[#050A0C]
        text-white
      "
    >

      {/* GRADIENT ATAS */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#114055]/30 via-transparent to-transparent pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 relative">

        {/* Judul & Subjudul */}
        <h2 className="text-3xl font-semibold">
          Dashboard Kota Cerdas
        </h2>

        <p className="text-[13px] text-[#A8F3E6]/70 mt-1">
          Indikator langsung untuk kualitas udara, energi terbarukan, sirkularitas sampah, dan mobilitas cerdas.
        </p>

        {/* Badge Waktu Update */}
        <span
          className="
            absolute right-6 top-24 
            text-[11px] text-[#B7FFF5] 
            bg-white/5 border border-white/10 
            px-3 py-1 rounded-full
          "
        >
          Diperbarui • 2 menit lalu
        </span>

        {/* GRID STATISTIK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {stats.map((item, idx) => (
            <div
              key={idx}
              className="
                rounded-xl p-6 
                bg-[rgba(16,32,42,0.55)]
                border border-white/5 
                backdrop-blur-md 
                shadow-[0_0_50px_rgba(0,0,0,0.4)]
                transition
              "
            >
              {/* TITLE */}
              <p className="text-[11px] tracking-wide text-[#A7F1EB]/80">
                {item.title}
              </p>

              {/* VALUE */}
              <h3 className="text-xl font-semibold mt-1">
                {item.value}
              </h3>

              {/* SUBTEXT */}
              <p className="text-[12px] text-[#A7F1EB]/60 mt-1">
                {item.sub}
              </p>

              {/* PROGRESS BAR */}
              <div className="mt-4 h-[6px] w-full rounded-full bg-white/10">
                <div className="h-full w-1/2 rounded-full bg-[#38D6C8]"></div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* GRADIENT BAWAH */}
      <div className="absolute bottom-0 left-0 w-full h-40
        bg-gradient-to-b from-transparent via-[#05212A]/40 to-[#02070A] pointer-events-none">
      </div>
    </section>
  );
}
