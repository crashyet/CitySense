"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { X, Upload } from "lucide-react";


export default function Simulator() {
  // Default values
  const defaultValues = {
    electricVehicle: 20,
    greenSpaces: 5,
    wasteSystem: 40,
    solarPanel: 15,
  };

  // Sliders
  const [electricVehicle, setElectricVehicle] = useState(defaultValues.electricVehicle);
  const [greenSpaces, setGreenSpaces] = useState(defaultValues.greenSpaces);
  const [wasteSystem, setWasteSystem] = useState(defaultValues.wasteSystem);
  const [solarPanel, setSolarPanel] = useState(defaultValues.solarPanel);

  // Scenario Count
  const [scenarioCount, setScenarioCount] = useState(0);

  // Popup States
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [showScenarioPopup, setShowScenarioPopup] = useState(false);

  // Save Name
  const [scenarioName, setScenarioName] = useState("");

  // Load at mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("city_scenarios") || "[]");
  }, []);

  // SAVE SCENARIO
  const handleSaveScenario = () => {
    const saved = JSON.parse(localStorage.getItem("city_scenarios") || "[]");

    const newScenario = {
      id: Date.now(),
      name: scenarioName || "Skenario Baru",
      date: new Date().toLocaleString("id-ID"),
      values: {
        electricVehicle: Number(electricVehicle),
        greenSpaces: Number(greenSpaces),
        wasteSystem: Number(wasteSystem),
        solarPanel: Number(solarPanel),
      }
    };

    const updated = [...saved, newScenario];

    localStorage.setItem("city_scenarios", JSON.stringify(updated));

    // penting!
    setSavedScenarios(updated);

    setScenarioCount(updated.length);
    setScenarioName("");
    setShowSavePopup(false);
  };



  // LOAD SCENARIO
  // const loadScenario = (s) => {
  //   setElectricVehicle(s.values.electricVehicle);
  //   setGreenSpaces(s.values.greenSpaces);
  //   setWasteSystem(s.values.wasteSystem);
  //   setSolarPanel(s.values.solarPanel);
  //   setShowScenarioPopup(false);
  // };
  const loadScenario = (s) => {
    setElectricVehicle(Number(s.values.electricVehicle));
    setGreenSpaces(Number(s.values.greenSpaces));
    setWasteSystem(Number(s.values.wasteSystem));
    setSolarPanel(Number(s.values.solarPanel));
    setShowScenarioPopup(false);
  };

  // DELETE SCENARIO
  const deleteScenario = (id) => {
    const saved = JSON.parse(localStorage.getItem("city_scenarios") || "[]");
    const updated = saved.filter((x) => x.id !== id);

    localStorage.setItem("city_scenarios", JSON.stringify(updated));

    // penting!
    setSavedScenarios(updated);

    setScenarioCount(updated.length);
  };

  // RESET
  const handleReset = () => {
    setElectricVehicle(defaultValues.electricVehicle);
    setGreenSpaces(defaultValues.greenSpaces);
    setWasteSystem(defaultValues.wasteSystem);
    setSolarPanel(defaultValues.solarPanel);
  };

  // Load scenario data
  // const savedScenarios = JSON.parse(localStorage.getItem("city_scenarios") || "[]");
  const [savedScenarios, setSavedScenarios] = useState([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("city_scenarios") || "[]");
    setSavedScenarios(saved);
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen w-full bg-gradient-to-b from-[#0a0f0d] via-[#0c1416] to-[#0a0e13] text-white pt-28 pb-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-semibold">Smart City Simulator</h1>
          <p className="text-emerald-200/70 mt-2 text-sm md:text-base">
            Sesuaikan parameter urban dan visualisasikan dampaknya terhadap masa depan kota.
          </p>

          {/* CONTENT WRAPPER */}
          <div className="mt-10 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8">

            {/* BUTTON ACTIONS */}
            <div className="flex justify-end gap-3 mb-6 flex-wrap">

              {/* OPEN SCENARIO LIST */}
              <button
                onClick={() => setShowScenarioPopup(true)}
                className="px-4 py-1 rounded-full text-xs bg-emerald-500/20 border border-emerald-300/30 text-emerald-300"
              >
                Skenario ({savedScenarios?.length ?? 0})
              </button>

              {/* SAVE */}
              <button
                onClick={() => setShowSavePopup(true)}
                className="px-4 py-1 rounded-full text-xs bg-blue-500/20 border border-blue-300/30 text-blue-300"
              >
                Simpan
              </button>

              {/* RESET */}
              <button
                onClick={handleReset}
                className="px-4 py-1 rounded-full text-xs bg-red-500/20 border border-red-300/30 text-red-300"
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
                <input
                  type="range" min="0" max="100" value={electricVehicle}
                  onChange={(e) => setElectricVehicle(Number(e.target.value))}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">
                  {electricVehicle}%
                </span>
              </div>

              {/* GREEN SPACES */}
              <div>
                <p className="font-medium flex items-center gap-2">🌳 Taman Hijau Urban</p>
                <input
                  type="range" min="0" max="20" value={greenSpaces}
                  onChange={(e) => setGreenSpaces(Number(e.target.value))}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">
                  {greenSpaces}
                </span>
              </div>

              {/* WASTE */}
              <div>
                <p className="font-medium flex items-center gap-2">🗑️ Pengelolaan Limbah Pintar</p>
                <input
                  type="range" min="0" max="100" value={wasteSystem}
                  onChange={(e) => setWasteSystem(Number(e.target.value))}
                  className="w-full accent-emerald-400 mt-3"
                />
                <span className="text-emerald-300 font-semibold text-sm mt-1 block">
                  {wasteSystem}%
                </span>
              </div>

              {/* SOLAR */}
              <div>
                <p className="font-medium flex items-center gap-2">☀️ Panel Surya</p>
                <input
                  type="range" min="0" max="100" value={solarPanel}
                  onChange={(e) => setSolarPanel(Number(e.target.value))}
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

      {/* POPUP — SAVE */}
      {showSavePopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-[#111827] rounded-xl p-6 w-96 border border-white/10">
            
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Simpan Skenario</h2>
              <button onClick={() => setShowSavePopup(false)}>
                <X size={20} />
              </button>
            </div>

            <p className="text-white text-sm">Nama skenario</p>

            <input
              type="text"
              value={scenarioName}
              onChange={(e) => setScenarioName(e.target.value)}
              placeholder="Contoh: Kota Hijau 2030"
              className="w-full mt-2 p-2 bg-white/5 border border-white/10 rounded-md text-white"
            />

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setShowSavePopup(false)}
                className="px-4 py-2 rounded-md bg-white/10"
              >
                Batal
              </button>
              <button
                onClick={handleSaveScenario}
                className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700"
              >
                Simpan
              </button>
            </div>

          </div>
        </div>
      )}

      {/* POPUP — SCENARIO LIST */}
      {showScenarioPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-[#0D1117] rounded-xl p-6 w-[650px] border border-white/10 max-h-[80vh] overflow-y-auto">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">
                Skenario Tersimpan ({savedScenarios?.length ?? 0})
              </h2>
              <button 
                onClick={() => setShowScenarioPopup(false)}
                className="text-gray-300 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <div className="space-y-4">
              {savedScenarios.map((s) => (
                <div
                  key={s.id}
                  className="p-5 bg-white/5 border border-white/10 rounded-xl relative"
                >
                  {/* Nama + tanggal */}
                  <div>
                    <p className="font-semibold text-white text-lg">{s.name}</p>
                    <p className="text-sm text-gray-400">{s.date}</p>
                  </div>

                  {/* Grid seperti screenshot */}
                  <div className="grid grid-cols-2 mt-3 text-sm text-gray-300 gap-y-1">
                    <p>EV: <span className="font-semibold text-white">{s.values.electricVehicle}%</span></p>
                    <p>Taman Hijau: <span className="font-semibold text-white">{s.values.greenSpaces}</span></p>

                    <p>Pengelolaan Limbah: <span className="font-semibold text-white">{s.values.wasteSystem}%</span></p>
                    <p>Panel Surya: <span className="font-semibold text-white">{s.values.solarPanel}%</span></p>
                  </div>

                  {/* Tombol kanan (Load + Delete) */}
                  <div className="absolute right-5 top-5 flex items-center gap-2">

                    {/* Tombol Upload/Load (Icon di kiri, teks di kanan) */}
                    <button
                      onClick={() => loadScenario(s)}
                      className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-sm text-white transition"
                    >
                      <Upload size={16} />
                      Muat
                    </button>

                    {/* Tombol Delete (bulat) */}
                    <button
                      onClick={() => deleteScenario(s.id)}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-red-500/40 text-white transition"
                    >
                      <X size={16} />
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      )}


    </>
  );
}
