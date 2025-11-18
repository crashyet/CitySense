import React from "react";

import Logo from "../assets/logo.png";

const stats = [
  {
    title: "AIR QUALITY",
    value: "AQI 38 • Good",
    sub: "+3% today",
  },
  {
    title: "RENEWABLE ENERGY",
    value: "72% grid supply",
    sub: "+12% YoY",
  },
  {
    title: "WASTE MANAGEMENT",
    value: "64% recycled",
    sub: "-6% landfill",
  },
  {
    title: "SMART TRANSPORT",
    value: "EV share 41%",
    sub: "-18% congestion",
  },
];

export default function DashboardPreview() {
  return (
    <section
      className="
        relative w-full 
        pt-24 pb-20
        bg-gradient-to-b 
        from-[#0A141C]   /* Biru gelap bagian atas */
        via-[#08171F]   /* Navy lembut */
        to-[#050A0C]    /* Hitam kebiruan bagian bawah */
        text-white
      "
    >

      {/* GRADIENT ATAS — halus */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#114055]/30 via-transparent to-transparent pointer-events-none">
        <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <img src="{Logo}" alt="" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">

        {/* Title & Subtitle */}
        <h2 className="text-3xl font-semibold">Smart City Dashboard lorem
        </h2>
        <p className="text-[13px] text-[#A8F3E6]/70 mt-1">
          Live indicators for air quality, renewable energy, waste circularity, and smart mobility.
        </p>

        {/* Badge */}
        <span
          className="
            absolute right-6 top-24 
            text-[11px] text-[#B7FFF5] 
            bg-white/5 border border-white/10 
            px-3 py-1 rounded-full
          "
        >
          Updated • 2 mins ago
        </span>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {stats.map((item, idx) => (
            <div
              key={idx}
              className="
                rounded-xl p-6 
                bg-[rgba(16,32,42,0.55)]     /* 🔵 NAVY TRANSLUCENT — mirip screenshot */
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

      {/* GRADIENT BAWAH — BIRU KE HITAM */}
      <div className="absolute bottom-0 left-0 w-full h-40
        bg-gradient-to-b from-transparent via-[#05212A]/40 to-[#02070A] pointer-events-none">
      </div>
    </section>
  );
}
