// src/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
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

      {/* Overlay Content */}
      <div className="relative z-10 bg-black/10 h-full flex items-center">
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="text-5xl font-bold mb-6">Quality Management Systems</h1>
            <p className="text-xl mb-8">
              We assist organizations in establishing and maintaining a corporate Quality Management
              Office (QMO) that is integrated with multiple ISO standards — including AS9100, ISO 9001,
              ISO 27001, ISO 20000, and ISO 14000 — as well as process improvement models such as CMMI.
              Our approach enhances project management effectiveness, ensures sustained compliance, and
              strengthens information security practices.
            </p>
            <p className="mt-4 text-sm italic mb-6">Video courtesy of Ultimate Military Channel.</p>
            <div className="flex space-x-4 mb-10">
              <a href="#contact" className="bg-white text-blue-900 px-8 py-3 rounded-full hover:bg-gray-100">
                Get Started
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;