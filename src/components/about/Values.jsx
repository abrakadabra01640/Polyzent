import React from 'react';
import { motion } from 'framer-motion';

const Values = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description: 'We continuously invest in research and development to create cutting-edge packaging solutions.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
    {
      title: 'Sustainability',
      description: 'Environmental responsibility guides our operations through eco-friendly materials and processes.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      title: 'Customer Focus',
      description: 'Our customers success is our priority, driving us to exceed expectations in every interaction.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
            Our Foundation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Core{' '}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The principles that guide our operations and define our company culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center h-full border border-slate-100 group-hover:border-amber-300/20">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm">
                  {value.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Experience Our Values in Action
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              These values aren't just words on a page – they're the foundation of every 
              interaction, every product, and every solution we deliver.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <div className="flex items-center text-amber-400">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                <span className="text-sm">Trusted by 500+ companies</span>
              </div>
              <div className="flex items-center text-amber-400">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                <span className="text-sm">13+ years of excellence</span>
              </div>
              <div className="flex items-center text-amber-400">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                <span className="text-sm">Global reach, local service</span>
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;