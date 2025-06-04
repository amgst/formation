// src/components/Blog.jsx
import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Industry News",
      title: "The Future of Quality Management",
      description: "Exploring how AI and automation are transforming quality management systems and driving efficiency in modern organizations.",
      date: "June 2, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      category: "Certification Guide",
      title: "ISO 27001:2022 Updates Explained",
      description: "Understanding the key changes in the latest version of ISO 27001 and what they mean for your information security management.",
      date: "May 28, 2025",
      readTime: "7 min read"
    },
    {
      id: 3,
      category: "Best Practices",
      title: "Lean Six Sigma in Digital Transformation",
      description: "How to apply Lean Six Sigma principles to optimize digital transformation initiatives and reduce operational waste.",
      date: "May 25, 2025",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-gray-600">Stay updated with our latest articles and industry news</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:transform hover:-translate-y-1 transition-transform duration-300" 
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-900 text-sm font-semibold">{post.category}</span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mt-2 mb-4 hover:text-blue-900 cursor-pointer">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <a href="#" className="text-blue-900 font-semibold hover:text-blue-700">Read More →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <a href="/blog" className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors duration-200">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;