import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DataPage() {
  return (
    <>
      <Navbar />

      {/* FULL PAGE BACKGROUND */}
      <div className="min-h-screen w-full bg-[#0b0f19] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-white">
          {/* TITLE */}
          <h1 className="text-4xl font-bold">Open Data Hub</h1>
          <p className="text-emerald-200/70 mt-2">
            Access public datasets and APIs to build innovative urban solutions
          </p>

          {/* SEARCH BAR */}
          <div className="mt-10 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur">
            <div className="flex items-center gap-3 text-emerald-300">
              <i className="ri-search-line text-xl"></i>
              <input
                type="text"
                className="bg-transparent w-full text-white placeholder-emerald-200/50 focus:outline-none"
                placeholder="Search datasets by name, category, or keywords..."
              />
            </div>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur rounded-2xl text-center">
              <i className="ri-database-2-line text-4xl text-emerald-400">
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
                class="lucide lucide-database h-8 w-8 text-secondary mx-auto mb-2"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                <path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg></i>
              <h3 className="mt-3 text-3xl font-bold">8</h3>
              <p className="text-emerald-200/60 mt-1">Total Datasets</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur rounded-2xl text-center">
              <i className="ri-calendar-check-line text-4xl text-[#00d9ff]">
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
                class="lucide lucide-calendar h-8 w-8 text-accent mx-auto mb-2"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg></i>
              <h3 className="mt-3 text-3xl font-bold">Daily</h3>
              <p className="text-emerald-200/60 mt-1">Update Frequency</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur rounded-2xl text-center">
              <i className="ri-download-cloud-line text-4xl text-emerald-400">
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
                  class="lucide lucide-download h-8 w-8 text-secondary mx-auto mb-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
              </i>
              <h3 className="mt-3 text-3xl font-bold">2.5k+</h3>
              <p className="text-emerald-200/60 mt-1">Total Downloads</p>
            </div>
          </div>

          {/* DATASET LIST */}
          <div className="flex flex-col gap-6 mt-12">
            {[
              {
                title: "Real-Time Traffic Flow Data",
                desc: "Hourly traffic density and speed measurements from IoT sensors across major roads and intersections.",
                tag: "Transport",
                size: "45 MB",
                date: "2025-01-15",
              },
              {
                title: "Air Quality Index (AQI) Historical Data",
                desc: "Daily AQI measurements including PM2.5, PM10, CO₂, and pollutants from monitoring stations.",
                tag: "Environment",
                size: "12 MB",
                date: "2025-01-14",
              },
              {
                title: "Energy Consumption by Sector",
                desc: "Monthly breakdown of electricity consumption across residential, commercial, and industrial sectors.",
                tag: "Energy",
                size: "8 MB",
                date: "2025-01-10",
              },
              {
                title: "Smart Bin Fill Levels",
                desc: "Fill levels, collection schedules, and recycling data for smart waste bins across the city.",
                tag: "Waste",
                size: "3 MB",
                date: "2025-01-15",
              },
              {
                title: "Public Transit Ridership Statistics",
                desc: "Daily ridership, routes, and performance metrics for buses and trains.",
                tag: "Transport",
                size: "22 MB",
                date: "2025-01-13",
              },
              {
                title: "Renewable Energy Generation",
                desc: "Hourly solar and wind generation data from distributed energy resources citywide.",
                tag: "Energy",
                size: "18 MB",
                date: "2025-01-15",
              },
              {
                title: "Urban Land Use Classification",
                desc: "GIS land use categories including industrial, residential, commercial, and green spaces.",
                tag: "Planning",
                size: "65 MB",
                date: "2025-01-05",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  {/* LEFT */}
                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-emerald-100/70 mt-1">{item.desc}</p>

                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <span className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs">
                        {item.tag}
                      </span>
                      <span className="text-emerald-300/60 text-sm">
                        Format: JSON
                      </span>
                      <span className="text-emerald-300/60 text-sm">
                        Size: {item.size}
                      </span>
                      <span className="text-emerald-300/60 text-sm">
                        Updated: {item.date}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT BUTTONS */}
                  <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-xl border border-emerald-400 text-emerald-300 hover:bg-emerald-400/10 transition flex items-center gap-2">
                      <i className="ri-download-line"></i>
                      Download
                    </button>

                    <button className="px-4 py-2 rounded-xl border border-[#00d9ff] text-[#00d9ff] hover:bg-emerald-400/10 transition">
                      API Docs
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* API ACCESS */}
          <div className="p-8 mt-12 bg-white/5 border border-white/10 backdrop-blur rounded-2xl">
            <h2 className="text-2xl font-semibold">API Access</h2>
            <p className="text-emerald-200/70 mt-2">
              Access real-time data programmatically for your applications.
            </p>

            <div className="mt-6 p-4 bg-black/20 border border-white/10 rounded-xl text-emerald-200/60 font-mono">
              GET https://api.citysense.city/v1/datasets/:id
            </div>

            <div className="flex gap-4 mt-6">
              <button className="px-5 py-2 rounded-xl border border-emerald-400 text-emerald-300 hover:bg-emerald-400/10 transition">
                View Documentation
              </button>

              <button className="px-5 py-2 rounded-xl border border- text-emerald-300 hover:bg-emerald-400/10 transition">
                Get API Key
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
