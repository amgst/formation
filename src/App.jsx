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
import Contact from './pages/Contact';
import About from './pages/About';
import BlogPage from './pages/Blog';
import ConsultingServices from './pages/ConsultingServices';
import ISO27001 from './pages/ISO27001';
import LeanSixSigma from './pages/LeanSixSigma';
import ISO9001 from './pages/ISO9001';
import IMS from './pages/IMS';
import AS9100 from './pages/AS9100';
import TrainingCMMI from './pages/TrainingCMMI';
import TrainingISO from './pages/TrainingISO';
import TrainingLeanSixSigma from './pages/TrainingLeanSixSigma';
import TrainingIMS from './pages/TrainingIMS';
import TrainingEVM from './pages/TrainingEVM';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const path = window.location.pathname;

  if (path.startsWith('/contact')) return <Contact />;
  if (path.startsWith('/about-us')) return <About />;
  if (path.startsWith('/blog')) return <BlogPage />;
  if (path.startsWith('/consulting-services')) return <ConsultingServices />;
  if (path.startsWith('/iso-27001')) return <ISO27001 />;
  if (path.startsWith('/lean-six-sigma')) return <LeanSixSigma />;
  if (path.startsWith('/iso-9001')) return <ISO9001 />;
  if (path.startsWith('/ims')) return <IMS />;
  if (path.startsWith('/as-9100')) return <AS9100 />;
  if (path.startsWith('/training/cmmi')) return <TrainingCMMI />;
  if (path.startsWith('/training/iso')) return <TrainingISO />;
  if (path.startsWith('/training/lean-six-sigma')) return <TrainingLeanSixSigma />;
  if (path.startsWith('/training/ims')) return <TrainingIMS />;
  if (path.startsWith('/training/evm')) return <TrainingEVM />;

  return (
    <div className="min-h-screen">
      {/* Notification Banner */}
      <div className="bg-blue-900 text-white px-4 py-3 text-center text-sm">
        🎉 New Training Programs Available -{' '}
        <a href="#training" className="underline hover:text-blue-200">
          Learn More
        </a>
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
