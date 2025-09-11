import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroimg from '../Assets/hero.jpg'
const AboutPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
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
                About Our Company
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Polyzent{' '}
                <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Trading Inc
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                <strong className="text-slate-900">Our Vision:</strong> To be the global leader in 
                sustainable packaging solutions, setting industry standards for quality, innovation, 
                and environmental responsibility.
              </p>
              
              <p className="text-lg">
                <strong className="text-slate-900">Our Mission:</strong> We deliver innovative, 
                high-quality packaging solutions that protect products, enhance brand value, and 
                contribute to a sustainable future through continuous improvement and customer focus.
              </p>
              
              <p className="text-lg">
                <strong className="text-slate-900">Company Profile:</strong> Founded in 2010, 
                Polyzent Trading Inc has grown from a small startup to a leading manufacturer 
                serving diverse industries worldwide. Our state-of-the-art facilities and 
                experienced team ensure consistent quality and reliable service.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6"
            >
              {/* <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100 text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">500+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100 text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">50M+</div>
                <div className="text-sm text-slate-600">Products Made</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100 text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">15+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div> */}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src= {heroimg}
                alt="Polyzent Trading Inc manufacturing facility"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-slate/30 to-transparent"></div>
            </div>

            {/* Floating certification badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
            >
              <div className="text-center">
                <div className="text-amber-600 font-bold text-sm mb-1">ISO</div>
                <div className="text-xs text-slate-600">9001:2015</div>
              </div>
            </motion.div>

            {/* Floating quality badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-4 shadow-xl"
            >
              <div className="text-center">
                <div className="font-bold text-lg mb-1">99.8%</div>
                <div className="text-xs">Quality Rating</div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;