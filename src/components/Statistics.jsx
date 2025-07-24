// src/components/Statistics.jsx
import React from 'react';

const Statistics = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 bg-clip-text text-transparent mb-4">
            Proven Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that speak to our commitment and expertise in quality management
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="group" data-aos="fade-up">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/50">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">500+</div>
              <div className="text-gray-700 font-semibold text-lg">Projects Completed</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
          <div className="group" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/50">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-3">98%</div>
              <div className="text-gray-700 font-semibold text-lg">Client Satisfaction</div>
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
          <div className="group" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/50">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">50+</div>
              <div className="text-gray-700 font-semibold text-lg">Expert Consultants</div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
          <div className="group" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/50">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">15+</div>
              <div className="text-gray-700 font-semibold text-lg">Years Experience</div>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;