import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const clientLogos = [
    {
      name: 'Nestlé',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Nestle_textlogo_blue.svg'
    },
    {
      name: 'Unilever',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Unilever.svg'
    },
    {
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
    {
      name: 'Coca-Cola',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg'
    },
    {
      name: 'DHL',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/DHL_Logo.svg'
    },
    {
      name: 'Pfizer',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Pfizer_logo.svg'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark-slate mb-4">
            Trusted by Leading Brands Across
            <span className="text-harvest-gold block">FMCG, Retail, Pharma & Logistics</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over 1000+ companies worldwide trust us for their packaging needs
          </p>
        </motion.div>

        {/* Logos Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="flex animate-scroll space-x-12 items-center justify-center">
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}

            {/* Duplicate set for seamless scroll */}
            {clientLogos.map((client, index) => (
              <motion.div
                key={`second-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 6) * 0.1 }}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-harvest-gold mb-1">1000+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-harvest-gold mb-1">50M+</div>
            <div className="text-sm text-gray-600">Products Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-harvest-gold mb-1">99.8%</div>
            <div className="text-sm text-gray-600">Quality Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-harvest-gold mb-1">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
