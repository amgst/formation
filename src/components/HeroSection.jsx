// src/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://www.7formations.com/wp-content/uploads/2019/09/Militry-Plan.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://www.7formations.com/wp-content/uploads/2019/09/miltary.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-purple-900/80 z-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-5"></div>

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 text-white">
          <div className="max-w-4xl" data-aos="fade-right">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6" data-aos="fade-up" data-aos-delay="100">
              <span className="text-sm font-medium text-blue-100">🚀 Industry Leading Solutions</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Quality Management
              </span>
              <br />
              <span className="text-white">Systems</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed max-w-3xl">
              We assist organizations in establishing and maintaining a corporate Quality Management
              Office (QMO) that is integrated with multiple ISO standards — including AS9100, ISO 9001,
              ISO 27001, ISO 20000, and ISO 14000 — as well as process improvement models such as CMMI.
            </p>
            <div className="mb-8">
              <p className="text-lg text-blue-100 font-medium">
                ✓ Enhanced project management effectiveness
              </p>
              <p className="text-lg text-blue-100 font-medium">
                ✓ Sustained compliance assurance
              </p>
              <p className="text-lg text-blue-100 font-medium">
                ✓ Strengthened information security practices
              </p>
            </div>
            <p className="text-sm text-blue-200 italic mb-8">Video courtesy of Ultimate Military Channel.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Get Started Today</span>
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-white/30 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <span>Explore Services</span>
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" data-aos="fade-up" data-aos-delay="800">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;