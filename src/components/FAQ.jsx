// src/components/FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (questionId) => {
    setSelectedQuestion(selectedQuestion === questionId ? null : questionId);
  };

  const faqData = [
    {
      id: 1,
      category: "Certification Process",
      question: "How long does the certification process typically take?",
      answer: "The certification process typically takes 3-6 months, depending on your organization's size and readiness. This includes initial assessment (2-3 weeks), documentation review (4-6 weeks), implementation and training (6-8 weeks), and pre-audit and final certification audit (2-3 weeks)."
    },
    {
      id: 2,
      category: "Certification Process",
      question: "What preparation is needed before starting certification?",
      answer: "Before starting the certification process, we recommend: review of current quality management system, gap analysis against desired certification standard, management commitment and resource allocation, initial staff training and awareness, and documentation of key processes."
    },
    {
      id: 3,
      category: "Certification Process",
      question: "How much does certification cost?",
      answer: "Certification costs vary based on several factors: organization size and complexity, type of certification required, current system maturity, and geographic location. Contact us for a detailed quote based on your specific needs."
    },
    {
      id: 4,
      category: "Training & Implementation",
      question: "What training programs do you offer?",
      answer: "Our comprehensive training portfolio includes: ISO 9001:2015 Lead Auditor Course, IATF 16949:2016 Implementation Training, AS9100 Internal Auditor Training, VDA 6.3 Process Auditor Qualification, Risk Management Workshops, and Quality Tools and Techniques."
    },
    {
      id: 5,
      category: "Training & Implementation",
      question: "Do you offer online training options?",
      answer: "Yes, we offer various online training formats: live virtual classroom sessions, self-paced e-learning modules, hybrid training programs, virtual coaching and mentoring, and online assessment tools."
    },
    {
      id: 6,
      category: "Industry-Specific",
      question: "What are the specific requirements for automotive industry certification?",
      answer: "Automotive industry certification requirements include: IATF 16949:2016 specific requirements, core tools knowledge (APQP, PPAP, FMEA, etc.), customer-specific requirements, risk-based thinking approach, and product safety requirements."
    },
    {
      id: 7,
      category: "Industry-Specific",
      question: "How do you handle multi-site certifications?",
      answer: "Our multi-site certification approach includes: corporate-level system integration, site-specific implementation plans, coordinated audit schedules, standardized documentation system, and cross-site best practice sharing."
    },
    {
      id: 8,
      category: "Industry-Specific",
      question: "What are the latest updates in quality management standards?",
      answer: "Recent updates and trends include: enhanced focus on risk management, digital transformation requirements, sustainability considerations, remote auditing capabilities, integration with other management systems, and Industry 4.0 adaptations."
    }
  ];

  const categories = [...new Set(faqData.map(item => item.category))];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our certification and training services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">{category}</h3>
              
              {faqData
                .filter(item => item.category === category)
                .map((item) => (
                  <div key={item.id} className="mb-4">
                    <div className="bg-white rounded-lg shadow-md">
                      <button
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center hover:bg-gray-50"
                      >
                        <span className="font-semibold text-gray-800">{item.question}</span>
                        <svg
                          className={`w-6 h-6 text-gray-600 transform transition-transform duration-200 ${
                            selectedQuestion === item.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                      </button>
                      
                      {selectedQuestion === item.id && (
                        <div className="px-6 py-4 border-t border-gray-100 animate-fadeIn">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              }
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Didn't find what you're looking for?</p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Our Experts
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FAQ;