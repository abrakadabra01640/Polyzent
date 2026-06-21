import React from 'react';
import { motion } from 'framer-motion';

const Sustainability = () => {
  const initiatives = [
    {
      title: 'Eco-Friendly Materials',
      description: 'Using biodegradable and recyclable materials in our packaging solutions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      stats: '85% Recyclable Materials',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Carbon Footprint Reduction',
      description: 'Implementing energy-efficient processes and renewable energy sources',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: '40% Carbon Reduction',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Waste Management',
      description: 'Zero-waste manufacturing processes and comprehensive recycling programs',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      stats: '95% Waste Recycled',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Green Innovation',
      description: 'Developing next-generation sustainable packaging technologies',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      stats: '20+ Green Patents',
      color: 'from-amber-500 to-orange-600',
    },
  ];

  const certifications = [
    { 
      name: 'FSC Certified', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      name: 'ISO 14001', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      name: 'Carbon Neutral', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      name: 'Green Seal', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-linen to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-medium text-sm tracking-wider uppercase">Environmental Commitment</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-slate mt-2 mb-6">
            Sustainability & Responsibility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the industry towards a greener future through innovative sustainable practices 
            and environmental stewardship
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-bold text-dark-slate mb-4">
                  Our Green Commitment
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At Polyzent Trading Inc, sustainability isn't just a buzzword – it's at the core 
                  of everything we do. We're committed to reducing our environmental impact while 
                  delivering exceptional packaging solutions that help our clients achieve their 
                  own sustainability goals.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={cert.name} className="flex items-center space-x-2 text-sm">
                      <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                        {cert.icon}
                      </div>
                      <span className="text-gray-600">{cert.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Sustainable packaging solutions"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                100% Sustainable
              </div>
            </div>
          </motion.div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center h-full border border-slate-100 group-hover:border-green-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${initiative.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {initiative.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {initiative.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {initiative.description}
                </p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  {initiative.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-heading font-bold mb-4">
            Join Us in Building a Sustainable Future
          </h3>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to create packaging solutions that protect your products 
            and our planet. Together, we can make a positive impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-200">2030</div>
              <div className="text-sm text-green-100">Carbon Neutral Goal</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-200">100%</div>
              <div className="text-sm text-green-100">Renewable Energy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-200">Zero</div>
              <div className="text-sm text-green-100">Waste to Landfill</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability;