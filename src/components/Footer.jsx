import React from 'react';
import { motion } from 'framer-motion';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiLinkedinBoxLine, RiFacebookBoxLine, RiTwitterLine } from 'react-icons/ri';
import Logo from '../Assets/image.png';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const products = [
        'Premium Packaging',
        'Industrial Solutions',
        'Eco-Friendly Options',
        'Custom Designs',
        'Bulk Orders',
        'Quality Assurance',
    ];

    const contactInfo = [
        {
            icon: RiMailLine,
            text: 'info@company.com',
            href: 'mailto:info@company.com'
        },
        {
            icon: RiPhoneLine,
            text: '+1 (555) 123-4567',
            href: 'tel:+15551234567'
        },
        {
            icon: RiMapPinLine,
            text: '123 Business St, City, State 12345',
            href: 'https://maps.google.com'
        }
    ];

    const socialLinks = [
        { icon: RiLinkedinBoxLine, href: '#', label: 'LinkedIn' },
        { icon: RiFacebookBoxLine, href: '#', label: 'Facebook' },
        { icon: RiTwitterLine, href: '#', label: 'Twitter' },
    ];

    return (
        <footer className="bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.1),transparent_50%)]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-6">
                            <img
                                src={Logo}
                                alt="Polyzent Trading Inc Logo"
                                className="h-40 w-auto"
                            />
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg max-w-md">
                            Delivering excellence through innovation. We create premium solutions that drive success for businesses worldwide.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            {contactInfo.map((contact, index) => (
                                <motion.a
                                    key={index}
                                    href={contact.href}
                                    className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <contact.icon className="w-5 h-5 mr-3 text-amber-400 group-hover:text-amber-300" />
                                    <span className="text-sm">{contact.text}</span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-3 bg-slate-800/50 rounded-lg text-gray-400 hover:text-amber-400 hover:bg-slate-700/70 transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-300 mr-0 group-hover:mr-3 rounded-full"></span>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services/Products */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {products.map((product, index) => (
                                <motion.li
                                    key={product}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="text-gray-400 text-sm flex items-center hover:text-gray-300 transition-colors duration-300"
                                >
                                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3 opacity-70"></div>
                                    {product}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-slate-700/50 mt-12 pt-8"
                >
                    <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
                        <h4 className="text-lg font-bold mb-3 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                            Stay Updated
                        </h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Get the latest news and updates delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all duration-300"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                >
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors duration-300">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors duration-300">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors duration-300">
                            Cookies
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;