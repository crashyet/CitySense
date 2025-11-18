import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function IdeasPage() {
  return (
    <>
      <Navbar />

      {/* WRAPPER WARNA CITYSENSE */}
      <div className="w-full min-h-screen bg-[#0B0F17] text-white">
        <div className="pt-24 px-6 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-4xl font-bold">Portal Warga</h1>
              <p className="text-emerald-200/70 mt-2">
                Bagikan ide dan berkolaborasi untuk membuat kota Anda lebih baik
              </p>
            </div>

            <button className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold shadow-[0_0_20px_#00ffcc99] hover:bg-emerald-400 transition flex items-center gap-2">
              <span className="text-lg">+</span> Kirim Ide Baru
            </button>
          </div>

          {/* Daftar Ide */}
          <div className="flex flex-col gap-6">
            {/* ITEM 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-400/20">
                    <i className="ri-thumb-up-line text-xl"></i>
                  </div>
                  <p className="mt-2 text-lg font-bold text-emerald-200">142</p>
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">
                    Tambah jalur sepeda di Jalan Merdeka
                  </h2>

                  <p className="mt-1 text-emerald-100/70">
                    Membuat jalur sepeda khusus dapat mengurangi kemacetan dan mendorong pilihan transportasi ramah lingkungan.
                  </p>

                  <div className="flex gap-2 mt-3">
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                      #MobilitasHijau
                    </span>
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                      #Infrastruktur
                    </span>
                  </div>

                  <div className="flex items-center gap-5 mt-4 text-emerald-100/50 text-sm">
                    <span>oleh Sarah Chen</span>
                    <span className="flex items-center gap-1">
                      <i className="ri-map-pin-line"></i> Jalan Merdeka
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-chat-3-line"></i> 23 komentar
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-400/20">
                    <i className="ri-thumb-up-line text-xl"></i>
                  </div>
                  <p className="mt-2 text-lg font-bold text-emerald-200">98</p>
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">
                    Pasang lebih banyak sensor kualitas udara di area industri
                  </h2>

                  <p className="mt-1 text-emerald-100/70">
                    Pemantauan kualitas udara secara real-time di zona industri dapat membantu mengidentifikasi sumber polusi dan melindungi kesehatan publik.
                  </p>

                  <div className="flex gap-2 mt-3">
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                      #UdaraBersih
                    </span>
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                      #Kesehatan
                    </span>
                  </div>

                  <div className="flex items-center gap-5 mt-4 text-emerald-100/50 text-sm">
                    <span>oleh Ahmed Rahman</span>
                    <span className="flex items-center gap-1">
                      <i className="ri-map-pin-line"></i> Kawasan Industri
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-chat-3-line"></i> 15 komentar
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-400/20">
                    <i className="ri-thumb-up-line text-xl"></i>
                  </div>
                  <p className="mt-2 text-lg font-bold text-emerald-200">215</p>
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">
                    Halte bus bertenaga surya dengan WiFi gratis
                  </h2>

                  <p className="mt-1 text-emerald-100/70">
                    Tingkatkan halte bus dengan panel surya untuk menyediakan pencahayaan dan akses internet gratis bagi penumpang.
                  </p>

                  <div className="flex gap-2 mt-3">
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                      #EnergiHijau
                    </span>
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                      #TransportasiUmum
                    </span>
                  </div>

                  <div className="flex items-center gap-5 mt-4 text-emerald-100/50 text-sm">
                    <span>oleh Maria Santos</span>
                    <span className="flex items-center gap-1">
                      <i className="ri-map-pin-line"></i> Seluruh Kota
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-chat-3-line"></i> 34 komentar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-20"></div>

          {/* CARA KERJA */}
          <section className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur mb-16">
            <h2 className="text-2xl font-semibold">Cara Kerjanya</h2>

            <div className="grid md:grid-cols-3 gap-10 mt-6">
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 text-2xl">
                  <i className="ri-add-line"></i>
                </div>
                <h3 className="mt-3 text-lg font-semibold">1. Kirim Ide</h3>
                <p className="mt-1 text-emerald-100/70">
                  Bagikan ide Anda untuk meningkatkan kota, lengkap dengan lokasi dan deskripsi.
                </p>
              </div>

              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 text-2xl">
                  <i className="ri-thumb-up-line"></i>
                </div>
                <h3 className="mt-3 text-lg font-semibold">2. Beri Suara & Diskusi</h3>
                <p className="mt-1 text-emerald-100/70">
                  Beri suara pada ide yang Anda dukung dan ikut berdiskusi.
                </p>
              </div>

              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 text-2xl">
                  <i className="ri-map-pin-line"></i>
                </div>
                <h3 className="mt-3 text-lg font-semibold">3. Lihat Implementasi</h3>
                <p className="mt-1 text-emerald-100/70">
                  Ide dengan suara terbanyak akan ditinjau oleh perencana kota untuk kemungkinan penerapan.
                </p>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
