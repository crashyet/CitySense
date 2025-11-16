import { Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import Dashboard from "./pages/Dashboardpack";
import Simulator from "./pages/Simulator";
import Ideas from "./pages/Ideas";
import DataPage from "./pages/Data";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/simulator" element={<Simulator />} />
      <Route path="/ideas" element={<Ideas />} />
      <Route path="/data" element={<DataPage />} />
    </Routes>
  );
}
