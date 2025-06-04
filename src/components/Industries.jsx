// src/components/Industries.jsx
import React from 'react';

const Industries = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries</h2>
          <p className="text-gray-600">Specialized expertise across multiple sectors</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Aerospace Industry */}
          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Aerospace</h3>
            <p className="text-gray-600">Specialized solutions for aerospace manufacturing and maintenance including AS9100 certification, risk management, and quality assurance systems.</p>
          </div>

          {/* Automotive Industry */}
          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-1v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-1c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-1"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Automotive</h3>
            <p className="text-gray-600">IATF 16949 implementation, core tools training, and automotive quality management systems for suppliers and manufacturers.</p>
          </div>

          {/* Healthcare Industry */}
          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Healthcare</h3>
            <p className="text-gray-600">ISO 13485 medical device quality management, regulatory compliance, and risk management for healthcare organizations.</p>
          </div>

          {/* Manufacturing Industry */}
          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
            <p className="text-gray-600">ISO 9001 quality management systems, lean manufacturing, and process improvement for industrial manufacturers.</p>
          </div>

          {/* Technology Industry */}
          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Technology</h3>
            <p className="text-gray-600">ISO 27001 information security, CMMI development, and cybersecurity management for technology companies.</p>
          </div>

          {/* Energy Industry */}
          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Energy</h3>
            <p className="text-gray-600">Environmental management systems, ISO 14001 certification, and sustainability frameworks for energy sector organizations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;