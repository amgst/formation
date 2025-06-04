// src/components/Training.jsx
import React from 'react';

const Training = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Training</h2>
          <p className="text-gray-600">Register for our upcoming training sessions</p>
        </div>
        <div className="grid gap-6">
          {/* Training Event */}
          <div className="bg-white rounded-xl p-6 shadow-lg flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
              <span className="block text-blue-900 font-bold">JUN 15</span>
              <span className="text-gray-500">2025</span>
            </div>
            <div className="flex-grow md:ml-6">
              <h3 className="font-bold text-xl mb-2">Quality Management Fundamentals</h3>
              <p className="text-gray-600">A comprehensive introduction to quality management systems...</p>
            </div>
            <div className="w-full md:w-auto text-center mt-4 md:mt-0">
              <span className="block text-gray-500 mb-2">12 Spots Left</span>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800">
                Register Now
              </button>
            </div>
          </div>

          {/* Additional Training Events */}
          <div className="bg-white rounded-xl p-6 shadow-lg flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
              <span className="block text-blue-900 font-bold">JUL 20</span>
              <span className="text-gray-500">2025</span>
            </div>
            <div className="flex-grow md:ml-6">
              <h3 className="font-bold text-xl mb-2">ISO 27001 Lead Auditor</h3>
              <p className="text-gray-600">Advanced training for information security management systems...</p>
            </div>
            <div className="w-full md:w-auto text-center mt-4 md:mt-0">
              <span className="block text-gray-500 mb-2">8 Spots Left</span>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800">
                Register Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
              <span className="block text-blue-900 font-bold">AUG 10</span>
              <span className="text-gray-500">2025</span>
            </div>
            <div className="flex-grow md:ml-6">
              <h3 className="font-bold text-xl mb-2">Lean Six Sigma Green Belt</h3>
              <p className="text-gray-600">Process improvement methodology and tools training...</p>
            </div>
            <div className="w-full md:w-auto text-center mt-4 md:mt-0">
              <span className="block text-gray-500 mb-2">15 Spots Left</span>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;