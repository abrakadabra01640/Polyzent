import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  return (
    <section className="py-20 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-harvest-gold font-medium text-sm tracking-wider uppercase">Our Purpose</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-slate mt-2">
            Vision & Mission
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-harvest-gold to-yellow-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-dark-slate" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-dark-slate">Our Vision</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                To be the most trusted global packaging partner, setting industry standards for 
                innovation, sustainability, and quality while empowering businesses to achieve 
                their packaging goals and contribute to a better world.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-harvest-gold rounded-full mr-3"></div>
                  Global leadership in packaging solutions
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-harvest-gold rounded-full mr-3"></div>
                  Industry-leading innovation and sustainability
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-harvest-gold rounded-full mr-3"></div>
                  Trusted partnerships worldwide
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-dark-slate to-gray-700 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-dark-slate">Our Mission</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Delivering innovative, sustainable, and quality packaging solutions across industries 
                through continuous improvement, customer focus, and environmental stewardship, while 
                fostering long-term partnerships and driving positive impact.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-dark-slate rounded-full mr-3"></div>
                  Innovative and sustainable solutions
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-dark-slate rounded-full mr-3"></div>
                  Customer-focused approach
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-dark-slate rounded-full mr-3"></div>
                  Environmental responsibility
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;