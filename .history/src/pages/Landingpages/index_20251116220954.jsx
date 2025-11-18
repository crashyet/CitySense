import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Hero from "../landing/Hero";
import DashboardPreview from "../landing/DashboardPreview";
import Infographic from "../landing/Infographic";
import Community from "../landing/Community";

export default function Landingpages() {
  return (
    <>
      <Navbar />
      <DashboardPreview />  
      <Hero />
      <Infographic />
      <Community />
      <Footer />
      
    </>
  );
}
