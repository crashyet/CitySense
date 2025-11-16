import React from "react";

const ideas = [
  {
    tag: "ENERGY",
    title: "Neighborhood Microgrids",
    desc: "Peer-to-peer energy sharing using rooftop solar and home batteries.",
  },
  {
    tag: "WASTE",
    title: "Smart Waste Rewards",
    desc: "Token incentives for sorting recyclables and compost at source.",
  },
  {
    tag: "MOBILITY",
    title: "EV Carpool Hub",
    desc: "AI-matched commute pools powered by fast-charging hubs.",
  },
  {
    tag: "NATURE",
    title: "Rain Garden Streets",
    desc: "Permeable pavements with native plants to reduce runoff.",
  },
];

const Community = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-900 to-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-300"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 3.87 4 6 7 13 3-7 7-9.13 7-13a7 7 0 0 0-7-7z"></path>
              <circle cx="12" cy="9" r="1"></circle>
            </svg>
          </div>

          <div>
            <h3 className="text-3xl font-semibold">Community Innovations</h3>
            <p className="text-emerald-100/80 text-sm">
              Citizen ideas shaping the next-gen sustainable city
            </p>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {ideas.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-emerald-300/40 transition overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 opacity-40 blur-2xl"></div>

              <div className="relative">
                <span className="inline-flex items-center rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[10px] tracking-wider text-emerald-200 uppercase">
                  {item.tag}
                </span>

                <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>

                <p className="mt-2 text-sm text-emerald-100/80">
                  {item.desc}
                </p>

                <button className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 transition">
                  Support idea{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* Footer CTA */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
          <div className="flex items-center gap-3 text-emerald-100/90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-300 h-5 w-5"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>

            <p className="text-sm">Join 12,532 citizens contributing ideas</p>
          </div>

          <a
            href="#"
            className="mt-4 md:mt-0 text-sm text-emerald-300 hover:text-emerald-200 transition"
          >
            Share your idea →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
