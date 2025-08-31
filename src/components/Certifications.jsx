import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management Systems',
      badge: 'https://via.placeholder.com/100x100/1E4D4F/FFFFFF?text=ISO+9001'
    },
    {
      name: 'ISO 14001:2015',
      description: 'Environmental Management',
      badge: 'https://via.placeholder.com/100x100/1E4D4F/FFFFFF?text=ISO+14001'
    },
    {
      name: 'HACCP',
      description: 'Food Safety Standards',
      badge: 'https://via.placeholder.com/100x100/1E4D4F/FFFFFF?text=HACCP'
    },
    {
      name: 'BRC Packaging',
      description: 'Global Standard for Packaging',
      badge: 'https://via.placeholder.com/100x100/1E4D4F/FFFFFF?text=BRC'
    },
    {
      name: 'FDA Approved',
      description: 'Food Contact Materials',
      badge: 'https://via.placeholder.com/100x100/1E4D4F/FFFFFF?text=FDA'
    },
    {
      name: 'CE Marking',
      description: 'European Conformity',
      badge: 'https://via.placeholder.com/100x100/1E4D4F/FFFFFF?text=CE'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-slate mb-4">
            Certified Excellence in <span className="text-harvest-gold">Packaging</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality is validated by international certifications and industry standards
          </p>
          <div className="w-24 h-1 bg-harvest-gold mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="bg-gradient-to-br from-linen to-white rounded-2xl p-6 shadow-lg hover-lift group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Badge */}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={cert.badge}
                    alt={cert.name}
                    className="w-16 h-16 mx-auto rounded-lg shadow-md"
                  />
                </div>

                {/* Content */}
                <h3 className="text-sm font-heading font-semibold text-dark-slate mb-2 group-hover:text-harvest-gold transition-colors duration-300">
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-harvest-gold/10 to-harvest-gold/5 rounded-2xl p-8 border-2 border-harvest-gold/20">
            <h3 className="text-2xl font-heading font-bold text-dark-slate mb-4">
              Our Quality Promise
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every product undergoes rigorous testing and quality control processes. 
              We maintain the highest standards in manufacturing, ensuring consistent 
              quality and reliability in every package we deliver.
            </p>
            
            {/* Quality Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-harvest-gold mb-2">99.8%</div>
                <div className="text-sm text-gray-600">Quality Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-harvest-gold mb-2">100%</div>
                <div className="text-sm text-gray-600">Tested Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-harvest-gold mb-2">0%</div>
                <div className="text-sm text-gray-600">Defect Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;