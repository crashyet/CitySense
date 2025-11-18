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
              <h1 className="text-4xl font-bold">Citizen Portal</h1>
              <p className="text-emerald-200/70 mt-2">
                Share ideas and collaborate on making your city better
              </p>
            </div>

            <button className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold shadow-[0_0_20px_#00ffcc99] hover:bg-emerald-400 transition flex items-center gap-2">
              <span className="text-lg">+</span> Submit New Idea
            </button>
          </div>

          {/* Idea List */}
          <div className="flex flex-col gap-6">
            {/* ITEM 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-400/20">
                    <i className="ri-thumb-up-line text-xl"></i>
                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 rounded-md px-3 border-secondary text-secondary hover:bg-secondary/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-thumbs-up h-4 w-4"
                      >
                        <path d="M7 10v12"></path>
                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                      </svg>
                    </button>
                  </div>
                  <p className="mt-2 text-lg font-bold text-emerald-200">142</p>
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">
                    Add bike lanes on Jalan Merdeka
                  </h2>

                  <p className="mt-1 text-emerald-100/70">
                    Creating dedicated bike lanes would reduce traffic
                    congestion and promote eco-friendly transportation options.
                  </p>

                  <div className="flex gap-2 mt-3">
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                      #GreenMobility
                    </span>
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                      #Infrastructure
                    </span>
                  </div>

                  <div className="flex items-center gap-5 mt-4 text-emerald-100/50 text-sm">
                    <span>by Sarah Chen</span>
                    <span className="flex items-center gap-1">
                      <i className="ri-map-pin-line"></i> Jalan Merdeka
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-chat-3-line"></i> 23 comments
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
                    Install more air quality sensors in industrial areas
                  </h2>

                  <p className="mt-1 text-emerald-100/70">
                    Real-time monitoring of air quality in industrial zones
                    would help identify pollution sources and protect public
                    health.
                  </p>

                  <div className="flex gap-2 mt-3">
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                      #CleanAir
                    </span>
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                      #Health
                    </span>
                  </div>

                  <div className="flex items-center gap-5 mt-4 text-emerald-100/50 text-sm">
                    <span>by Ahmed Rahman</span>
                    <span className="flex items-center gap-1">
                      <i className="ri-map-pin-line"></i> Industrial District
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-chat-3-line"></i> 15 comments
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
                    Solar-powered bus stops with free WiFi
                  </h2>

                  <p className="mt-1 text-emerald-100/70">
                    Upgrade bus stops with solar panels to provide lighting and
                    free internet access for commuters.
                  </p>

                  <div className="flex gap-2 mt-3">
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                      #GreenEnergy
                    </span>
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                      #PublicTransit
                    </span>
                  </div>

                  <div className="flex items-center gap-5 mt-4 text-emerald-100/50 text-sm">
                    <span>by Maria Santos</span>
                    <span className="flex items-center gap-1">
                      <i className="ri-map-pin-line"></i> Citywide
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-chat-3-line"></i> 34 comments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-20"></div>

          {/* HOW IT WORKS */}
          <section className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur mb-16">
            <h2 className="text-2xl font-semibold">How It Works</h2>

            <div className="grid md:grid-cols-3 gap-10 mt-6">
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 text-2xl">
                  <i className="ri-add-line"></i>
                </div>
                <h3 className="mt-3 text-lg font-semibold">1. Submit Ideas</h3>
                <p className="mt-1 text-emerald-100/70">
                  Share your vision for improving the city with location details
                  and descriptions.
                </p>
              </div>

              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 text-2xl">
                  <i className="ri-thumb-up-line"></i>
                </div>
                <h3 className="mt-3 text-lg font-semibold">
                  2. Vote & Discuss
                </h3>
                <p className="mt-1 text-emerald-100/70">
                  Upvote ideas you support and join the conversation.
                </p>
              </div>

              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 text-2xl">
                  <i className="ri-map-pin-line"></i>
                </div>
                <h3 className="mt-3 text-lg font-semibold">
                  3. See Implementation
                </h3>
                <p className="mt-1 text-emerald-100/70">
                  Top-voted ideas are reviewed by planners for potential
                  implementation.
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
