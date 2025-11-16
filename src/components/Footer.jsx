import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2">
            <h4 className="text-xl font-semibold">CitySense</h4>
            <p className="mt-2 max-w-md text-sm text-emerald-100/80">
              A concept dashboard for smart and sustainable cities — blending
              technology and nature in perfect harmony.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium text-white/90">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-emerald-100/80">

              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-mail h-4 w-4 text-emerald-300">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06
                    0L2 7"></path>
                </svg>
                hello@citysense.io
              </li>

              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-phone h-4 w-4 text-emerald-300">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18
                    2 19.79 19.79 0 0 1-8.63-3.07 19.5
                    19.5 0 0 1-6-6 19.79 19.79 0 0
                    1-3.07-8.67A2 2 0 0 1 4.11 2h3a2
                    2 0 0 1 2 1.72 12.84 12.84 0 0
                    0 .7 2.81 2 2 0 0 1-.45
                    2.11L8.09 9.91a16 16 0 0 0 6
                    6l1.27-1.27a2 2 0 0 1 2.11-.45
                    12.84 12.84 0 0 0 2.81.7A2
                    2 0 0 1 22 16.92z"></path>
                </svg>
                +1 (555) 123-4567
              </li>

              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-map-pin h-4 w-4 text-emerald-300">
                  <path d="M20 10c0 6-8 12-8
                    12s-8-6-8-12a8 8 0 0 1
                    16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                101 Greenway, Future City
              </li>

            </ul>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-sm text-emerald-100/80">
              © 2025 CitySense — Smart City, Greener Future.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
