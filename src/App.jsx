// src/App.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Statistics from './components/Statistics';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Training from './components/Training';
import Industries from './components/Industries';
import Blog from './components/Blog';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Notification Banner */}
      <div className="bg-blue-900 text-white px-4 py-3 text-center text-sm">
        🎉 New Training Programs Available - <a href="#training" className="underline hover:text-blue-200">Learn More</a>
      </div>

      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <Statistics />
        <Services />
        <Certifications />
        <Training />
        <Industries />
        <Blog />
        <Team />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;