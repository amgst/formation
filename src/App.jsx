// src/App.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Footer from './components/Footer';
import Statistics from './components/Statistics';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Training from './components/Training';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <main style={{ paddingTop: '104px' }}> {/* Account for notification banner + header */}
        <HeroSection />
        <Statistics />
        <Services />
        <Certifications />
        <Training />
      </main>
      <Footer />
    </div>
  );
};

export default App;