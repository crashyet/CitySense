import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Simulator() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0f1a] via-[#0c1120] to-[#0a0e13] text-white overflow-hidden pt-28 pb-32">
        {/* Decorative Abstract Digital Grid (Futuristic Background Element) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-emerald-400/30 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4">
              Smart City Simulator
            </h1>
            <p className="text-emerald-200/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Simulasikan dampak kebijakan urban masa depan — dari mobilitas listrik hingga energi terbarukan — dan lihat bagaimana kota Anda berubah menjadi lebih cerdas, bersih, dan berkelanjutan.
            </p>
          </div>

          {/* ================= PARAMETER WRAPPER ================= */}
          <div className="mt-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl shadow-emerald-900/5">
            
            {/* TOP RIGHT BUTTONS — Enhanced with hover effects and subtle glow */}
            <div className="flex justify-end gap-3 mb-8">
              <button className="px-5 py-2 rounded-full text-xs font-medium bg-white/8 hover:bg-white/15 border border-white/20 transition-all duration-300 text-emerald-300 hover:text-emerald-200 hover:shadow-lg hover:shadow-emerald-500/20">
                Skenario (0)
              </button>
              <button className="px-5 py-2 rounded-full text-xs font-medium bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 transition-all duration-300 text-emerald-300 hover:text-emerald-100 hover:shadow-lg hover:shadow-emerald-500/30">
                Simpan
              </button>
              <button className="px-5 py-2 rounded-full text-xs font-medium bg-white/8 hover:bg-white/15 border border-white/20 transition-all duration-300 text-emerald-300 hover:text-emerald-200 hover:shadow-lg hover:shadow-emerald-500/20">
                Reset
              </button>
            </div>

            {/* ================= PARAMETER GROUP ================= */}
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Parameter Kota
            </h2>

            {/* === PARAMETER BLOCK === */}
            <div className="space-y-8">

              {/* ELECTRIC VEHICLE */}
              <div className="group">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold flex items-center gap-3 text-emerald-200">
                    <span className="text-lg">🚗</span>
                    Adopsi Kendaraan Listrik
                  </p>
                  <span className="text-emerald-300 font-bold text-sm bg-black/20 px-3 py-1 rounded-full">
                    20%
                  </span>
                </div>
                <input
                  type="range"
                  defaultValue={20}
                  min="0"
                  max="100"
                  className="w-full h-2 bg-white/10 rounded-full accent-emerald-400 cursor-pointer transition-all duration-200 group-hover:scale-105"
                />
                <p className="text-xs text-emerald-200/70 mt-2 leading-relaxed">
                  Persentase kendaraan listrik atau hybrid di kota. Meningkatkan kualitas udara dan mengurangi jejak karbon.
                </p>
              </div>

              {/* GREEN SPACES */}
              <div className="group">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold flex items-center gap-3 text-emerald-200">
                    <span className="text-lg">🌳</span>
                    Taman Hijau Urban
                  </p>
                  <span className="text-emerald-300 font-bold text-sm bg-black/20 px-3 py-1 rounded-full">
                    5
                  </span>
                </div>
                <input
                  type="range"
                  defaultValue={5}
                  min="0"
                  max="20"
                  className="w-full h-2 bg-white/10 rounded-full accent-emerald-400 cursor-pointer transition-all duration-200 group-hover:scale-105"
                />
                <p className="text-xs text-emerald-200/70 mt-2 leading-relaxed">
                  Jumlah taman, ruang terbuka hijau, dan atap hijau. Meningkatkan biodiversitas dan kenyamanan urban.
                </p>
              </div>

              {/* WASTE SYSTEM */}
              <div className="group">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold flex items-center gap-3 text-emerald-200">
                    <span className="text-lg">🗑️</span>
                    Cakupan Pengelolaan Limbah Pintar
                  </p>
                  <span className="text-emerald-300 font-bold text-sm bg-black/20 px-3 py-1 rounded-full">
                    40%
                  </span>
                </div>
                <input
                  type="range"
                  defaultValue={40}
                  min="0"
                  max="100"
                  className="w-full h-2 bg-white/10 rounded-full accent-emerald-400 cursor-pointer transition-all duration-200 group-hover:scale-105"
                />
                <p className="text-xs text-emerald-200/70 mt-2 leading-relaxed">
                  Sistem tempat sampah berbasis IoT dengan sensor pengisian dan rute optimal. Kurangi limbah dan biaya operasional.
                </p>
              </div>

              {/* SOLAR PANEL */}
              <div className="group">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold flex items-center gap-3 text-emerald-200">
                    <span className="text-lg">☀️</span>
                    Adopsi Panel Surya
                  </p>
                  <span className="text-emerald-300 font-bold text-sm bg-black/20 px-3 py-1 rounded-full">
                    15%
                  </span>
                </div>
                <input
                  type="range"
                  defaultValue={15}
                  min="0"
                  max="100"
                  className="w-full h-2 bg-white/10 rounded-full accent-emerald-400 cursor-pointer transition-all duration-200 group-hover:scale-105"
                />
                <p className="text-xs text-emerald-200/70 mt-2 leading-relaxed">
                  Persentase bangunan publik dan perumahan yang menggunakan panel surya. Kurangi ketergantungan pada energi fosil.
                </p>
              </div>

            </div>
          </div>

          {/* ================= RESULT CARDS — Enhanced with glow, subtle animation, and visual hierarchy */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* RED CARBON */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl shadow-lg shadow-emerald-900/10 hover:shadow-emerald-500/15 transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <p className="text-emerald-200/80 text-sm font-medium">Pengurangan Karbon</p>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-2">129</h3>
              <p className="text-emerald-200/60 text-sm">kg CO₂/tahun</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-emerald-400/30 to-transparent rounded-full"></div>
            </div>

            {/* ENERGY SAVINGS */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl shadow-lg shadow-emerald-900/10 hover:shadow-emerald-500/15 transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h10V7l9 11h-11z"></path>
                  </svg>
                </div>
                <p className="text-emerald-200/80 text-sm font-medium">Penghematan Energi</p>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-2">539</h3>
              <p className="text-emerald-200/60 text-sm">kWh/tahun</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-emerald-400/30 to-transparent rounded-full"></div>
            </div>

            {/* LIVABILITY SCORE */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl shadow-lg shadow-emerald-900/10 hover:shadow-emerald-500/15 transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.993l-.707.707M15.657 21H10m5.657-5.657l-.707-.707M12 17v-1m0 0V9m0 8h-1"></path>
                  </svg>
                </div>
                <p className="text-emerald-200/80 text-sm font-medium">Skor Kelayakan Huni</p>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-2">43</h3>
              <p className="text-emerald-200/60 text-sm">/100</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-emerald-400/30 to-transparent rounded-full"></div>
            </div>

          </div>

          {/* Optional: Subtle floating digital particles (for extra futurism) */}
          <div className="mt-16 flex justify-center">
            <div className="flex gap-2 text-xs text-emerald-400/40 animate-pulse">
              <span>📡 IoT</span>
              <span>📊 Data-Driven</span>
              <span>🌱 Sustainable</span>
              <span>🤖 AI Optimized</span>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}