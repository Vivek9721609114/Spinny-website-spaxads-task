import React from "react";
import Selldesktop from "../../components/Selldesktop";
import Desktoprate from "../../components/desktoprate";
import Desktopcontent from "../../components/Desktopcontent";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Selldesktop />
      <Desktoprate />
      <Desktopcontent />
      <Footer />
    </>
  );
};

export default Home;
