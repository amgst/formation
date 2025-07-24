// src/components/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-blue-100/50 to-purple-100/50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            🎯 What We Offer
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your organizational needs, backed by decades of expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="group" data-aos="fade-up">
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/50 relative overflow-hidden">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Consulting Services</h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Our expert team identifies your organization's objectives, baselines current state, and designs future state requirements. We develop Process Improvement Road Maps and engagement models tailored to your needs, leveraging accumulated knowledge to streamline processes and implement integrated management systems efficiently.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>ISO Standards Integration</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>CMMI Model Implementation</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Change Management Strategy</span>
                </div>
              </div>
              
              <a href="#" className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Learn More 
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="group" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/50 relative overflow-hidden">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
              
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Training Programs</h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Comprehensive training solutions that integrate multiple management system standards. Our programs cover quality, health, safety, and environmental areas, helping organizations build unified integrated systems that eliminate duplication and maximize efficiency.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Multi-Standard Integration</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Expert-Led Workshops</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Practical Implementation</span>
                </div>
              </div>
              
              <a href="#" className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Learn More 
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;