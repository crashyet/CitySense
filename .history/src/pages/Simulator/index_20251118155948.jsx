import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Simulator() {
  // State untuk setiap slider
  const [electricVehicle, setElectricVehicle] = useState(20);
  const [greenSpaces, setGreenSpaces] = useState(5);
  const [wasteSystem, setWasteSystem] = useState(40);
  const [solarPanel, setSolarPanel] = useState(15);

  return (
    <>
      <Navbar />

      <div className="min-h-screen w-full bg-gradient-to-b from-[#0a0f0d] via-[#0c1416] to-[#0a0e13] text-white pt-28 pb-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= HEADER ================= */}
          <h1 className="text-3xl md:text-4xl font-semibold">Smart City Simulator</h1>
          <p className="text-emerald-200/70 mt-2 text-sm md:text-base">
            Sesuaikan parameter urban dan visualisasikan dampaknya terhadap masa depan kota.
          </p>

          {/* ================= PARAMETER WRAPPER ================= */}
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

            {/* ================= PARAMETER GROUP ================= */}
            <h2 className="text-xl font-semibold mb-4">Parameter Kota</h2>

            {/* === PARAMETER BLOCK === */}
            <div className="space-y-10">

              {/* ELECTRIC VEHICLE */}
              <div>
                <p className="font-medium flex items-center gap-2">
                  🚗 Adopsi Kendaraan Listrik
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={electricVehicle}
                  onChange={(e) => setElectricVehicle(e.target.value)}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">
                  {electricVehicle}%
                </span>
                <p className="text-xs text-emerald-200/60">
                  Persentase kendaraan listrik atau hybrid di kota
                </p>
              </div>

              {/* GREEN SPACES */}
              <div>
                <p className="font-medium flex items-center gap-2">
                  🌳 Taman Hijau Urban
                </p>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={greenSpaces}
                  onChange={(e) => setGreenSpaces(e.target.value)}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">
                  {greenSpaces}
                </span>
                <p className="text-xs text-emerald-200/60">
                  Jumlah taman dan ruang terbuka hijau
                </p>
              </div>

              {/* WASTE SYSTEM */}
              <div>
                <p className="font-medium flex items-center gap-2">
                  🗑️ Cakupan Pengelolaan Limbah Pintar
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={wasteSystem}
                  onChange={(e) => setWasteSystem(e.target.value)}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">
                  {wasteSystem}%
                </span>
                <p className="text-xs text-emerald-200/60">
                  Sistem tempat sampah pintar dengan sensor IoT
                </p>
              </div>

              {/* SOLAR PANEL */}
              <div>
                <p className="font-medium flex items-center gap-2">
                  ☀️ Adopsi Panel Surya
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={solarPanel}
                  onChange={(e) => setSolarPanel(e.target.value)}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">
                  {solarPanel}%
                </span>
                <p className="text-xs text-emerald-200/60">
                  Bangunan dengan instalasi panel surya
                </p>
              </div>

            </div>
          </div>

          {/* ================= RESULT CARDS ================= */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* RED CARBON */}
            <div className="flex items-center gap-4 mb-4"><div class="p-3 rounded-lg bg-secondary/20">
              <div>

              </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-sm text-emerald-200/70">Pengurangan Karbon</p>
              <h3 className="text-3xl font-semibold mt-2 text-emerald-300">129</h3>
              <p className="text-xs text-emerald-200/60">kg CO₂/tahun</p>
            </div>
</div>
            {/* ENERGY SAVINGS */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-sm text-emerald-200/70">Penghematan Energi</p>
              <h3 className="text-3xl font-semibold mt-2 text-emerald-300">539</h3>
              <p className="text-xs text-emerald-200/60">kWh/tahun</p>
            </div>

            {/* LIVABILITY SCORE */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-sm text-emerald-200/70">Skor Kelayakan Huni</p>
              <h3 className="text-3xl font-semibold mt-2 text-emerald-300">43</h3>
              <p className="text-xs text-emerald-200/60">/100</p>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}