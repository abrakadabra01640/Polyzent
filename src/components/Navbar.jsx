import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import Logo from '../Assets/image.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const handleNavClick = (href) => {
    setCurrentPath(href);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* Logo */}
            <a
              href="/"
              className="flex items-center"
              onClick={() => handleNavClick('/')}
            >
              <img
                src={Logo}
                alt="Polyzent Trading Inc Logo"
                className="h-32 w-auto lg:h-36"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.4,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`relative px-3 py-2 font-medium text-sm lg:text-base transition-all duration-300 group ${currentPath === link.href
                        ? 'text-amber-400'
                        : 'text-gray-300 hover:text-white'
                        }`}
                    >
                      <span className="relative z-10">{link.name}</span>

                      {/* Hover background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-lg opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.2 }}
                      />

                      {/* Active/Hover underline */}
                      <motion.div
                        className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transform -translate-x-1/2 rounded-full ${currentPath === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <a href="/contact">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-6 py-2.5 lg:px-8 lg:py-3 rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 group"
                  >
                    <span className="relative z-10">Get Quote</span>

                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 3
                      }}
                    />
                  </motion.button>
                </a>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg p-2 transition-colors duration-200"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                <motion.div
                  className="w-6 h-6"
                  animate={isOpen ? "open" : "closed"}
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0, opacity: 1 },
                      open: { rotate: 45, y: 8, opacity: 1 }
                    }}
                    className="absolute block h-0.5 w-6 bg-current transform origin-center"
                    style={{ top: '8px' }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1, x: 0 },
                      open: { opacity: 0, x: -10 }
                    }}
                    className="absolute block h-0.5 w-6 bg-current transform origin-center"
                    style={{ top: '12px' }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0, opacity: 1 },
                      open: { rotate: -45, y: -8, opacity: 1 }
                    }}
                    className="absolute block h-0.5 w-6 bg-current transform origin-center"
                    style={{ top: '16px' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
                mass: 0.8
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl shadow-2xl lg:hidden z-50 border-l border-slate-700/50"
            >
              <div className="flex flex-col h-full">

                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
                  <div className="flex items-center">
                    <img
                      src={Logo}
                      alt="Polyzent Trading Inc Logo"
                      className="h-26 w-auto"
                    />
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white p-2 rounded-lg transition-colors duration-200 hover:bg-slate-800"
                  >
                    <RiCloseLine className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 px-6 py-8 overflow-y-auto">
                  <motion.nav className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.1 + 0.2,
                          duration: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        <a
                          href={link.href}
                          onClick={() => handleNavClick(link.href)}
                          className={`group flex items-center px-4 py-4 text-base font-medium rounded-xl transition-all duration-300 ${currentPath === link.href
                            ? 'text-amber-400 bg-gradient-to-r from-amber-400/20 to-orange-400/10 border-l-4 border-amber-400'
                            : 'text-gray-300 hover:text-white hover:bg-slate-800/80 hover:translate-x-2'
                            }`}
                        >
                          <span className="relative">
                            {link.name}
                            <motion.div
                              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100"
                              initial={{ width: 0 }}
                              whileHover={{ width: '100%' }}
                              transition={{ duration: 0.3 }}
                            />
                          </span>
                        </a>
                      </motion.div>
                    ))}
                  </motion.nav>
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-slate-700/50">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <a href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 relative overflow-hidden group"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="relative z-10">Get Quote</span>

                        {/* Animated background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 3
                          }}
                        />
                      </motion.button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;