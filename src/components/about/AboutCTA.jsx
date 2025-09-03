import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';

const AboutCTA = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      description: 'Speak with our experts',
      action: '+91 98765 43210',
      link: 'tel:+919876543210',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      description: 'Get detailed information',
      action: 'info@polyzentrading.com',
      link: 'mailto:info@polyzentrading.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l2 2 4-4m0-6v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2z" />
        </svg>
      ),
      title: 'Schedule Meeting',
      description: 'Book a consultation',
      action: 'Book Now',
      link: '#',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
              Ready to Get Started?
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Partner with{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Polyzent
              </span>{' '}
              for Your Packaging Needs
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who trust us with their packaging requirements. 
              Let's discuss how we can help protect and enhance your products.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {contactMethods.map((method, index) => (
              <div key={method.title} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10 group-hover:border-amber-500/50">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{method.description}</p>
                  <a
                    href={method.link}
                    className="text-amber-400 hover:text-amber-300 font-medium transition-colors duration-300"
                  >
                    {method.action}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <CTAButton 
              variant="primary" 
              size="lg"
              className="min-w-[220px] shadow-harvest-gold"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </CTAButton>
            
            <CTAButton 
              variant="outline" 
              size="lg"
              className="min-w-[220px]"
            >
              Request Quote
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </CTAButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-white/20 pt-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-amber-400 mb-1">24/7</div>
                <div className="text-sm text-slate-400">Customer Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400 mb-1">48h</div>
                <div className="text-sm text-slate-400">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400 mb-1">99.8%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400 mb-1">15+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm">Available Now</span>
                </div>
                <div className="w-1 h-4 bg-gray-600"></div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-harvest-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Trusted by 500+ Companies</span>
                </div>
                <div className="w-1 h-4 bg-gray-600"></div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-harvest-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-sm">Free Consultation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;