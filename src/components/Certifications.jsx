// src/components/Certifications.jsx
import React from 'react';

const Certifications = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards of quality and expertise through internationally recognized accreditations and partnerships
          </p>
        </div>

        {/* Main Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Cyber Security Management */}
          <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-900">CYBER</span>
            </div>
            <h3 className="font-semibold mb-2">Cyber Security Management Systems</h3>
            <p className="text-sm text-gray-600">CMMC, NIST 800-171, 800-53, ISO 27000/20000 series</p>
          </div>

          {/* Risk Management */}
          <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-900">RISK</span>
            </div>
            <h3 className="font-semibold mb-2">Risk, Change & Release Management</h3>
            <p className="text-sm text-gray-600">PCI DSS, SANS CIS Critical Security Controls</p>
          </div>

          {/* Compliance Management */}
          <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-900">COMPLIANCE</span>
            </div>
            <h3 className="font-semibold mb-2">Regulatory/Statutory Compliance</h3>
            <p className="text-sm text-gray-600">ISO 27001, HIPAA, SOC, SOX</p>
          </div>

          {/* Supplier Audits */}
          <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-900">AUDIT</span>
            </div>
            <h3 className="font-semibold mb-2">Supplier Qualification Audits</h3>
            <p className="text-sm text-gray-600">2nd Party Assessments & Compliance Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;