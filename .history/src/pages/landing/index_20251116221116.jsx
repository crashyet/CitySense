import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Hero from "./Hero";
import DashboardPreview from "./DashboardPreview";
import Infographic from "./Infographic";
import Community from "./Community";

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* Section dari halaman Landing */}
      <DashboardPreview />
      <Infographic />
      <Hero />
      <Community />

      <Footer />
    </>
  );
}
