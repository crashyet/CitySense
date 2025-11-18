"use client";

import { useState } from "react";
import {
  Leaf,
  Zap,
  Gauge,
  Save,
  FolderOpen,
  RotateCcw,
  X
} from "lucide-react";

export default function Simulator() {
  // SLIDER VALUE
  const [electricVehicle, setElectricVehicle] = useState(0);
  const [greenSpaces, setGreenSpaces] = useState(0);
  const [wasteSystem, setWasteSystem] = useState(0);
  const [solarPanel, setSolarPanel] = useState(0);

  // POPUP STATES
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [showScenarioPopup, setShowScenarioPopup] = useState(false);

  // SCENARIOS
  const [scenarioName, setScenarioName] = useState("");
  const [scenarios, setScenarios] = useState([]);

  // SAVE SCENARIO
  const saveScenario = () => {
    const newScenario = {
      id: Date.now(),
      name: scenarioName || "Skenario Baru",
      date: new Date().toLocaleString("id-ID"),
      values: {
        electricVehicle,
        greenSpaces,
        wasteSystem,
        solarPanel
      }
    };
    setScenarios([...scenarios, newScenario]);
    setShowSavePopup(false);
    setScenarioName("");
  };

  // LOAD SCENARIO
  const loadScenario = (values) => {
    setElectricVehicle(values.electricVehicle);
    setGreenSpaces(values.greenSpaces);
    setWasteSystem(values.wasteSystem);
    setSolarPanel(values.solarPanel);
    setShowScenarioPopup(false);
  };

  // DELETE SCENARIO
  const deleteScenario = (id) => {
    setScenarios(scenarios.filter((s) => s.id !== id));
  };

  // RESET ALL
  const resetAll = () => {
    setElectricVehicle(0);
    setGreenSpaces(0);
    setWasteSystem(0);
    setSolarPanel(0);
  };

  return (
    <div className="p-6 text-white">

      {/* ACTION BUTTONS */}
      <div className="flex justify-end gap-3 flex-wrap mb-6">
        <button
          className="px-4 py-1 rounded-full text-xs bg-white/10 border border-white/10 flex items-center gap-2"
          onClick={() => setShowScenarioPopup(true)}
        >
          <FolderOpen size={14} /> Skenario ({scenarios.length})
        </button>

        <button
          className="px-4 py-1 rounded-full text-xs bg-white/10 border border-white/10 flex items-center gap-2"
          onClick={() => setShowSavePopup(true)}
        >
          <Save size={14} /> Simpan
        </button>

        <button
          onClick={resetAll}
          className="px-4 py-1 rounded-full text-xs bg-white/10 border border-white/10 flex items-center gap-2"
        >
          <RotateCcw size={14} /> Reset
        </button>
      </div>

      {/* SLIDERS PREVIEW */}
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-10">
        <h2 className="text-lg font-semibold mb-4">Parameter Kota</h2>

        <div className="space-y-6">
          {/* EV */}
          <div>
            <label className="text-sm text-gray-300">Kendaraan Listrik</label>
            <input
              type="range"
              min="0"
              max="100"
              value={electricVehicle}
              onChange={(e) => setElectricVehicle(e.target.value)}
              className="w-full"
            />
          </div>

          {/* GREEN SPACE */}
          <div>
            <label className="text-sm text-gray-300">Ruang Hijau</label>
            <input
              type="range"
              min="0"
              max="100"
              value={greenSpaces}
              onChange={(e) => setGreenSpaces(e.target.value)}
              className="w-full"
            />
          </div>

          {/* WASTE */}
          <div>
            <label className="text-sm text-gray-300">Pengelolaan Limbah</label>
            <input
              type="range"
              min="0"
              max="100"
              value={wasteSystem}
              onChange={(e) => setWasteSystem(e.target.value)}
              className="w-full"
            />
          </div>

          {/* SOLAR */}
          <div>
            <label className="text-sm text-gray-300">Panel Surya</label>
            <input
              type="range"
              min="0"
              max="100"
              value={solarPanel}
              onChange={(e) => setSolarPanel(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* KPI GRID (WITH ICONS) */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* CARBON */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="flex items-center gap-3">
            <Leaf size={20} className="text-emerald-300" />
            <p className="text-sm text-emerald-200/70">Pengurangan Karbon</p>
          </div>
          <h3 className="text-3xl font-semibold mt-2 text-emerald-300">129</h3>
          <p className="text-xs text-emerald-200/60">kg CO₂/tahun</p>
        </div>

        {/* ENERGY */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="flex items-center gap-3">
            <Zap size={20} className="text-emerald-300" />
            <p className="text-sm text-emerald-200/70">Penghematan Energi</p>
          </div>
          <h3 className="text-3xl font-semibold mt-2 text-emerald-300">539</h3>
          <p className="text-xs text-emerald-200/60">kWh/tahun</p>
        </div>

        {/* LIVABILITY */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="flex items-center gap-3">
            <Gauge size={20} className="text-emerald-300" />
            <p className="text-sm text-emerald-200/70">Skor Kelayakan Huni</p>
          </div>
          <h3 className="text-3xl font-semibold mt-2 text-emerald-300">43</h3>
          <p className="text-xs text-emerald-200/60">/100</p>
        </div>
      </div>

      {/* POPUP - SAVE SCENARIO */}
      {showSavePopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#111827] p-6 rounded-xl w-96 border border-white/10 shadow-xl">
            
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Simpan Skenario</h2>
              <button onClick={() => setShowSavePopup(false)}><X /></button>
            </div>

            <p className="text-sm mt-2 text-gray-400">Nama Skenario</p>

            <input
              type="text"
              placeholder="Misal: Kota Hijau 2030"
              value={scenarioName}
              onChange={(e) => setScenarioName(e.target.value)}
              className="w-full p-2 mt-2 rounded-md bg-white/5 border border-white/10"
            />

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setShowSavePopup(false)}
                className="px-4 py-2 rounded-md bg-white/10"
              >
                Batal
              </button>

              <button
                onClick={saveScenario}
                className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* POPUP - SCENARIO LIST */}
      {showScenarioPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#111827] w-[600px] p-6 rounded-xl border border-white/10 shadow-xl">
            
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                Skenario Tersimpan ({scenarios.length})
              </h2>
              <button onClick={() => setShowScenarioPopup(false)}><X /></button>
            </div>

            <div className="mt-4 space-y-4 max-h-[400px] overflow-y-auto pr-2">

              {scenarios.map((s) => (
                <div key={s.id} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-xs text-gray-400">{s.date}</p>

                  <div className="grid grid-cols-2 mt-2 text-sm text-gray-300">
                    <p>EV: <span className="text-emerald-400">{s.values.electricVehicle}%</span></p>
                    <p>Ruang Hijau: <span className="text-emerald-400">{s.values.greenSpaces}%</span></p>
                    <p>Limbah: <span className="text-emerald-400">{s.values.wasteSystem}%</span></p>
                    <p>Panel Surya: <span className="text-emerald-400">{s.values.solarPanel}%</span></p>
                  </div>

                  <div className="flex justify-end gap-3 mt-3">
                    <button
                      onClick={() => loadScenario(s.values)}
                      className="px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-xs"
                    >
                      Muat
                    </button>
                    
                    <button
                      onClick={() => deleteScenario(s.id)}
                      className="px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-xs"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
