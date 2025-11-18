import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Simulator() {
  // Default values
  const defaultValues = {
    electricVehicle: 20,
    greenSpaces: 5,
    wasteSystem: 40,
    solarPanel: 15,
  };

  // State sliders
  const [electricVehicle, setElectricVehicle] = useState(defaultValues.electricVehicle);
  const [greenSpaces, setGreenSpaces] = useState(defaultValues.greenSpaces);
  const [wasteSystem, setWasteSystem] = useState(defaultValues.wasteSystem);
  const [solarPanel, setSolarPanel] = useState(defaultValues.solarPanel);

  // State jumlah skenario
  const [scenarioCount, setScenarioCount] = useState(0);

  // Load jumlah skenario saat halaman dibuka
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("city_scenarios") || "[]");
    setScenarioCount(saved.length);
  }, []);

  // SIMPAN
  const handleSave = () => {
    const saved = JSON.parse(localStorage.getItem("city_scenarios") || "[]");

    const newScenario = {
      electricVehicle,
      greenSpaces,
      wasteSystem,
      solarPanel,
      date: new Date().toLocaleString(),
    };

    const updated = [...saved, newScenario];
    localStorage.setItem("city_scenarios", JSON.stringify(updated));
    setScenarioCount(updated.length);

    alert("Skenario berhasil disimpan!");
  };

  // RESET
  const handleReset = () => {
    setElectricVehicle(defaultValues.electricVehicle);
    setGreenSpaces(defaultValues.greenSpaces);
    setWasteSystem(defaultValues.wasteSystem);
    setSolarPanel(defaultValues.solarPanel);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen w-full bg-gradient-to-b from-[#0a0f0d] via-[#0c1416] to-[#0a0e13] text-white pt-28 pb-32">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-3xl md:text-4xl font-semibold">Smart City Simulator</h1>
          <p className="text-emerald-200/70 mt-2 text-sm md:text-base">
            Sesuaikan parameter urban dan visualisasikan dampaknya terhadap masa depan kota.
          </p>

          {/* PARAMETER WRAPPER */}
          <div className="mt-10 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8">

            {/* BUTTON ACTIONS */}
            <div className="flex justify-end gap-3 mb-6 flex-wrap">
              
              {/* SKENARIO BUTTON */}
              <button
                className="px-4 py-1 rounded-full text-xs bg-emerald-500/20 border border-emerald-300/30 text-emerald-300"
                onClick={() => alert("Fitur daftar skenario akan ditambahkan 🙂")}
              >
                Skenario ({scenarioCount})
              </button>

              {/* SAVE */}
              <button
                className="px-4 py-1 rounded-full text-xs bg-blue-500/20 border border-blue-300/30 text-blue-300"
                onClick={handleSave}
              >
                Simpan
              </button>

              {/* RESET */}
              <button
                className="px-4 py-1 rounded-full text-xs bg-red-500/20 border border-red-300/30 text-red-300"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>

            <h2 className="text-xl font-semibold mb-4">Parameter Kota</h2>

            {/* SLIDERS */}
            <div className="space-y-10">

              {/* ELECTRIC VEHICLE */}
              <div>
                <p className="font-medium flex items-center gap-2">🚗 Adopsi Kendaraan Listrik</p>
                <input type="range" min="0" max="100" value={electricVehicle}
                  onChange={(e) => setElectricVehicle(e.target.value)}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">
                  {electricVehicle}%
                </span>
              </div>

              {/* GREEN SPACES */}
              <div>
                <p className="font-medium flex items-center gap-2">🌳 Taman Hijau Urban</p>
                <input type="range" min="0" max="20" value={greenSpaces}
                  onChange={(e) => setGreenSpaces(e.target.value)}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">
                  {greenSpaces}
                </span>
              </div>

              {/* WASTE SYSTEM */}
              <div>
                <p className="font-medium flex items-center gap-2">🗑️ Cakupan Pengelolaan Limbah Pintar</p>
                <input type="range" min="0" max="100" value={wasteSystem}
                  onChange={(e) => setWasteSystem(e.target.value)}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">
                  {wasteSystem}%
                </span>
              </div>

              {/* SOLAR PANEL */}
              <div>
                <p className="font-medium flex items-center gap-2">☀️ Adopsi Panel Surya</p>
                <input type="range" min="0" max="100" value={solarPanel}
                  onChange={(e) => setSolarPanel(e.target.value)}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">
                  {solarPanel}%
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
