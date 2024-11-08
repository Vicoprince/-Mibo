import React, { useEffect } from 'react';
import Header from './Components/Header';
import Features from './Components/Features';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import AboutSection from './AboutSection';
import JupiterTerminal from './Components/JupiterTerminal';
import HowToBuy from './Components/HowToBuy';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,  // Set animation duration (in milliseconds)
      easing: 'ease-in-out', // Type of easing for animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <AboutSection />
      <JupiterTerminal />
      <HowToBuy />
      <Footer />
    </>
  );  
}

export default App;
