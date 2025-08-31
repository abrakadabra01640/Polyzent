import React from 'react';
import { motion } from 'framer-motion';

const CompanyStory = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                Our Story
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Building Excellence{' '}
                <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Since 2010
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                Polyzent Trading Inc was founded with a revolutionary vision: to transform the packaging 
                industry through innovative, sustainable, and premium-quality solutions. What started as 
                a small venture has evolved into a leading manufacturer serving diverse industries across 
                the globe.
              </p>
              
              <p>
                Our journey began in a modest facility with a team of passionate professionals who 
                believed in the power of quality packaging to protect products and enhance brand value. 
                Through relentless dedication to excellence and continuous innovation, we've expanded 
                our operations, upgraded our technology, and built lasting partnerships with clients 
                worldwide.
              </p>
              
              <p>
                Today, we operate state-of-the-art manufacturing facilities equipped with cutting-edge 
                technology and staffed by industry experts. Our commitment to sustainability, quality 
                assurance, and customer satisfaction has made us a trusted name in the packaging industry.
              </p>
            </div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
                <div className="text-sm text-slate-600">Countries Served</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Polyzent Trading facility"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;