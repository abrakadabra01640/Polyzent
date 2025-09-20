import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import PolyzenIndustrialLogo from './PolyzenIndustrialLogo';
import heroimg from '../Assets/hero.jpg'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src= {heroimg}
          alt="Modern packaging warehouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        {/* Animated Logo */}
        <motion.div
          className="mb-6 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <PolyzenIndustrialLogo
            width={300}   // smaller for mobile
            height={80}
            autoPlay={true}
            loop={false}
            theme="dark"
            className="mx-auto sm:w-[400px] sm:h-[100px] md:w-[500px] md:h-[140px] lg:w-[600px] lg:h-[160px]"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Innovative Packaging{' '}
          <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            for Every Industry
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Specializing in Stretch Wrap Films, Bubble Wrap, and Custom Packaging Products. 
          Trusted by companies worldwide for quality and reliability. Made in USA.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
        >
          <CTAButton
            size="lg"
            href="/products"
            className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 shadow-2xl hover:shadow-amber-500/25"
          >
            Explore Products
            <svg className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </CTAButton>

          <a
            href="/contact"
            className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-base sm:text-lg backdrop-blur-sm"
          >
            Get Quote
            <svg className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto"
        >
          {/* <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1 sm:mb-2">15+</div>
            <div className="text-slate-300 text-sm sm:text-base">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1 sm:mb-2">500+</div>
            <div className="text-slate-300 text-sm sm:text-base">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1 sm:mb-2">50+</div>
            <div className="text-slate-300 text-sm sm:text-base">Countries Served</div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
