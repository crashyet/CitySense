import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png"; // sesuaikan path logo

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-emerald-400 font-semibold"
      : "text-emerald-200/80 hover:text-white";

  return (
    <header className="fixed w-full z-50 bg-black/40 backdrop-blur-xl border-b border-emerald-400/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={Logo} className="w-10 h-10" />
          <span className="text-xl text-white font-semibold">CitySense</span>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
          <NavLink to="/simulator" className={linkClass}>Simulator</NavLink>
          <NavLink to="/ideas" className={linkClass}>Ideas</NavLink>
          <NavLink to="/data" className={linkClass}>Data</NavLink>
        </nav>

        {/* MOBILE BUTTON */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-lg px-6 pb-4 flex flex-col gap-3">
          <NavLink onClick={() => setOpen(false)} to="/" className="text-white">Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/dashboard" className="text-white">Dashboard</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/simulator" className="text-white">Simulator</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/ideas" className="text-white">Ideas</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/data" className="text-white">Data</NavLink>
        </div>
      )}
    </header>
  );
}
