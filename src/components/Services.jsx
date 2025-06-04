// src/components/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600">Comprehensive solutions tailored to your needs</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Consulting Services Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up">
            <div className="mb-6">
              <svg className="w-12 h-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Consulting Services</h3>
            <p className="text-gray-600 mb-6">
              7Formations' team help identifying your organization's objectives, baseline current state and desired future state requirements to list down possible Process Improvement Road Map and an engagement model tailored to meet your needs. Our workshops and consulting sessions leverage our accumulated knowledge and skills, applying them to streamline your organization's processes, advise tools, develop implementation strategy, change management and infrastructure with real-time agility. We map ISO standards & CMMI model's requirements to your processes and pave the way for Integrated Management System to sustain efficiently.
            </p>
            <a href="#" className="text-blue-900 font-semibold hover:text-blue-700 transition-colors">Learn More →</a>
          </div>

          {/* Training Programs Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-6">
              <svg className="w-12 h-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Training Programs</h3>
            <p className="text-gray-600 mb-6">
              There is often a high degree of compatibility between the management system standards, although they cover different areas. Many organizations choose to build their management system into one integrated system, covering areas such as quality, health and safety, and the environment. By integrating several standards into one management system, you can eliminate duplication of work.
            </p>
            <a href="#" className="text-blue-900 font-semibold hover:text-blue-700 transition-colors">Learn More →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;