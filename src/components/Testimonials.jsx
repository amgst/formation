// src/components/Testimonials.jsx
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Dr. Michael Schmidt",
      position: "Quality Director, BMW Group",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "7formations has transformed our quality management processes. Their expertise in IATF 16949 implementation has led to a 30% reduction in non-conformities and significant improvement in our supplier quality metrics.",
      date: "January 2025"
    },
    {
      id: 2,
      name: "Sarah Anderson",
      position: "Operations Manager, Airbus",
      image: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      text: "The AS9100 certification support from 7formations was exceptional. Their thorough approach and industry expertise made the complex certification process manageable and successful.",
      date: "March 2025"
    },
    {
      id: 3,
      name: "Robert Chen",
      position: "CEO, Global Manufacturing Solutions",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      text: "Working with 7formations on our ISO 9001:2015 implementation was a game-changer. Their consultants provided practical solutions that improved our efficiency by 40%.",
      date: "February 2025"
    },
    {
      id: 4,
      name: "Lisa Mueller",
      position: "CTO, Tech Innovations GmbH",
      image: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      text: "The TISAX assessment preparation with 7formations was outstanding. Their expertise in information security helped us achieve the highest assessment level on our first attempt.",
      date: "April 2025"
    },
    {
      id: 5,
      name: "Dr. Emma Thompson",
      position: "Quality Manager, MedTech Solutions",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "7formations' guidance through our ISO 13485 certification was invaluable. Their deep understanding of medical device regulations ensured a smooth certification process.",
      date: "May 2025"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const StarRating = ({ rating }) => (
    <div className="flex text-yellow-400 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'fill-current' : 'fill-gray-300'}`} 
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Trusted by industry leaders worldwide</p>
        </div>

        {/* Testimonials Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Testimonials Wrapper */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h4 className="font-bold text-xl">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <StarRating rating={testimonial.rating} />
                      <p className="text-gray-700 italic">"{testimonial.text}"</p>
                    </div>
                    <div className="text-sm text-gray-500">Verified Client • {testimonial.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-200 ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;