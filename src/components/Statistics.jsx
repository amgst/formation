// src/components/Statistics.jsx
import React from 'react';

const Statistics = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div data-aos="fade-up">
            <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
            <div className="text-gray-600">Expert Consultants</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;