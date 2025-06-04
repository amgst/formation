// src/Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Notification Banner */}
      <div className="bg-blue-900 text-white px-4 py-3 text-center text-sm">
        🎉 New Training Programs Available - <a href="#" className="underline hover:text-blue-200">Learn More</a>
      </div>

      {/* Header with Full Navigation and Dropdowns */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50" style={{ top: '44px' }}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-blue-900">7FORMATIONS</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="/" className="text-gray-600 hover:text-blue-900">Home</a>
              
              {/* Consulting Dropdown */}
              <div className="relative group">
                <button className="text-gray-600 hover:text-blue-900 focus:outline-none">Consulting</button>
                <div className="absolute left-0 mt-2 w-72 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                  <a href="/consulting-services/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Enterprise Content Management</a>
                  <a href="/iso-27001/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Information Security Management (ISO 27001)</a>
                  <a href="/lean-six-sigma/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Lean Six Sigma</a>
                  <a href="/iso-9001/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Quality Management System (ISO 9001)</a>
                  <a href="/ims/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Integrated Management System (ISO 27001, 9001, 20000)</a>
                  <a href="/as-9100/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Aerospace Quality Management Systems (AS 9100)</a>
                </div>
              </div>
              
              {/* Training Dropdown */}
              <div className="relative group">
                <button className="text-gray-600 hover:text-blue-900 focus:outline-none">Training</button>
                <div className="absolute left-0 mt-2 w-64 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                  <a href="/training/cmmi/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">CMMI Models</a>
                  <a href="/training/iso/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">ISO Standards</a>
                  <a href="/training/lean-six-sigma/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Lean Six Sigma</a>
                  <a href="/training/ims/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Integrated Management System</a>
                  <a href="/training/evm/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Earned Value Management (EVM)</a>
                </div>
              </div>
              
              <a href="/blog/" className="text-gray-600 hover:text-blue-900">Blog</a>
              <a href="/about-us/" className="text-gray-600 hover:text-blue-900">About</a>
              <a href="/contact/" className="text-gray-600 hover:text-blue-900">Contact</a>
              <a href="/contact" className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800">Get Started</a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden relative">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="focus:outline-none"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white border rounded shadow-lg z-50 p-4 space-y-2">
                  <a href="/" className="block text-gray-700 hover:bg-gray-100 px-2 py-1">Home</a>
                  
                  <p className="font-semibold text-gray-800 mt-2">Consulting</p>
                  <a href="/consulting-services/" className="block text-gray-600 hover:bg-gray-100 px-4 py-1">Enterprise Content Management</a>
                  <a href="/iso-27001/" className="block text-gray-600 hover:bg-gray-100 px-4 py-1">Information Security (ISO 27001)</a>
                  <a href="/lean-six-sigma/" className="block text-gray-600 hover:bg-gray-100 px-4 py-1">Lean Six Sigma</a>
                  <a href="/iso-9001/" className="block text-gray-600 hover:bg-gray-100 px-4 py-1">ISO 9001</a>
                  <a href="/ims/" className="block text-gray-600 hover:bg-gray-100 px-4 py-1">Integrated Mgmt System</a>
                  <a href="/as-9100/" className="block text-gray-600 hover:bg-gray-100 px-4 py-1">AS 9100</a>
                  
                  <p className="font-semibold text-gray-800 mt-2">Training</p>
                  <a href="/training/cmmi/" className="block text-gray-600 hover:bg-gray-100 px-4 py-1">CMMI Models</a>
                  <a href="/training/iso/" className="block text-gray-600 hover:bg-gray-100 px-4 py-1">ISO Standards</a>
                  <a href="/training/lean-six-sigma/" className="block text-gray-600 hover:bg-gray-100 px-4 py-1">Lean Six Sigma</a>
                  <a href="/training/ims/" className="block text-gray-600 hover:bg-gray-100 px-4 py-1">Integrated Mgmt System</a>
                  <a href="/training/evm/" className="block text-gray-600 hover:bg-gray-100 px-4 py-1">EVM</a>
                  
                  <a href="/blog/" className="block text-gray-700 hover:bg-gray-100 px-2 py-1">Blog</a>
                  <a href="/about-us/" className="block text-gray-700 hover:bg-gray-100 px-2 py-1">About</a>
                  <a href="/contact/" className="block text-gray-700 hover:bg-gray-100 px-2 py-1">Contact</a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;