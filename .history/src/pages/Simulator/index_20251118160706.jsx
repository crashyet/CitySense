import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Simulator() {
  const [electricVehicle, setElectricVehicle] = useState(20);
  const [greenSpaces, setGreenSpaces] = useState(5);
  const [wasteSystem, setWasteSystem] = useState(40);
  const [solarPanel, setSolarPanel] = useState(15);

  return (
    <>
      <Navbar />

      <div className="min-h-screen w-full bg-gradient-to-b from-[#0a0f0d] via-[#0c1416] to-[#0a0e13] text-white pt-28 pb-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <h1 className="text-3xl md:text-4xl font-semibold">Smart City Simulator</h1>
          <p className="text-emerald-200/70 mt-2 text-sm md:text-base">
            Sesuaikan parameter urban dan visualisasikan dampaknya terhadap masa depan kota.
          </p>

          {/* PARAMETER WRAPPER */}
          <div className="mt-10 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8">

            {/* TOP RIGHT BUTTONS */}
            <div className="flex justify-end gap-3 mb-6 flex-wrap">
              <button className="px-4 py-1 rounded-full text-xs bg-white/10 border border-white/10">
                Skenario (0)
              </button>
              <button className="px-4 py-1 rounded-full text-xs bg-white/10 border border-white/10">
                Simpan
              </button>
              <button className="px-4 py-1 rounded-full text-xs bg-white/10 border border-white/10">
                Reset
              </button>
            </div>

            <h2 className="text-xl font-semibold mb-4">Parameter Kota</h2>

            {/* PARAMETER GROUP */}
            <div className="space-y-10">

              {/* ELECTRIC VEHICLE */}
              <div>
                <p className="font-medium flex items-center gap-2">🚗 Adopsi Kendaraan Listrik</p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={electricVehicle}
                  onChange={(e) => setElectricVehicle(e.target.value)}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">{electricVehicle}%</span>
                <p className="text-xs text-emerald-200/60">
                  Persentase kendaraan listrik atau hybrid di kota
                </p>
              </div>

              {/* GREEN SPACES */}
              <div>
                <p className="font-medium flex items-center gap-2">🌳 Taman Hijau Urban</p>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={greenSpaces}
                  onChange={(e) => setGreenSpaces(e.target.value)}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">{greenSpaces}</span>
                <p className="text-xs text-emerald-200/60">
                  Jumlah taman dan ruang terbuka hijau
                </p>
              </div>

              {/* WASTE SYSTEM */}
              <div>
                <p className="font-medium flex items-center gap-2">🗑️ Cakupan Pengelolaan Limbah Pintar</p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={wasteSystem}
                  onChange={(e) => setWasteSystem(e.target.value)}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">{wasteSystem}%</span>
                <p className="text-xs text-emerald-200/60">
                  Sistem tempat sampah pintar dengan sensor IoT
                </p>
              </div>

              {/* SOLAR PANEL */}
              <div>
                <p className="font-medium flex items-center gap-2">☀️ Adopsi Panel Surya</p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={solarPanel}
                  onChange={(e) => setSolarPanel(e.target.value)}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">{solarPanel}%</span>
                <p className="text-xs text-emerald-200/60">
                  Bangunan dengan instalasi panel surya
                </p>
              </div>

            </div>
          </div>

          {/* RESULT CARDS */}
          {/* ================= RESULT CARDS ================= */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

  {/* PENGURANGAN KARBON */}
  <div className="rounded-lg border bg-white/5 text-card-foreground shadow-sm backdrop-blur-md hover-scale">
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-emerald-500/20">
          <svg
            className="h-6 w-6 text-emerald-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
          </svg>
        </div>
        <div>
          <p className="text-sm text-emerald-200/70">Pengurangan Karbon</p>
          <p className="text-3xl font-bold text-emerald-300">129</p>
          <p className="text-sm text-emerald-200/50">kg CO₂/tahun</p>
        </div>
      </div>
    </div>
  </div>

  {/* PENGHEMATAN ENERGI */}
  <div className="rounded-lg border bg-white/5 text-card-foreground shadow-sm backdrop-blur-md hover-scale">
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-blue-500/20">
          <svg
            className="h-6 w-6 text-blue-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
        </div>
        <div>
          <p className="text-sm text-emerald-200/70">Penghematan Energi</p>
          <p className="text-3xl font-bold text-emerald-300">539</p>
          <p className="text-sm text-blue-200/50">kWh/tahun</p>
        </div>
      </div>
    </div>
  </div>

  {/* SKOR KELAYAKAN HUNI */}
  <div className="rounded-lg border bg-white/5 text-card-foreground shadow-sm backdrop-blur-md hover-scale">
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-purple-500/20">
          <svg
            className="h-6 w-6 text-purple-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
        </div>

        <div>
          <p className="text-sm text-emerald-200/70">Skor Kelayakan Huni</p>
          <p className="text-3xl font-bold text-emerald-300">43</p>
          <p className="text-sm text-purple-200/50">/100</p>
        </div>
      </div>
    </div>
  </div>
</div>


          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
