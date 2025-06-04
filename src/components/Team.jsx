// src/components/Team.jsx
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Masroor A. Sajid",
      position: "Founder & Managing Partner",
      location: "Cybersecurity Consulting - NYC Metro",
      image: "/img/masroor.jpg",
      delay: 200
    },
    {
      id: 2,
      name: "Syed Danyal Ahmad",
      position: "Trainee - Process Auditing",
      location: "Centreville, VA",
      image: "/img/danyal.jpg",
      delay: 0
    },
    {
      id: 3,
      name: "Pascale PIAZZA",
      position: "Administrative Assistant",
      location: "Colomiers, France",
      image: "/img/pascale.jpg",
      delay: 100
    }
  ];

  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-600">Meet our expert consultants and trainers</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300" 
              data-aos="fade-up" 
              data-aos-delay={member.delay}
            >
              <div className="mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=96&background=1e40af&color=ffffff`;
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-900 font-medium mb-1">{member.position}</p>
              <p className="text-sm text-gray-600">{member.location}</p>
              
              {/* Social Links (optional) */}
              <div className="mt-4 flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-blue-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;