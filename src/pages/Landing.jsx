import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import ProductsHighlight from '../components/ProductsHighlight';
import WhyChooseUs from '../components/WhyChooseUs';
import IndustriesWeServe from '../components/IndustriesWeServe';
import Certifications from '../components/Certifications';
import AboutPreview from '../components/AboutPreview';
import Testimonials from '../components/Testimonials';
import QuickStats from '../components/QuickStats';
import ContactCTA from '../components/ContactCTA';
import FinalCTA from '../components/FinalCTA';

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ProductsHighlight />
      <AboutPreview />
      <WhyChooseUs />
      <IndustriesWeServe />
      {/* <Testimonials /> */}
      {/* <QuickStats /> */}
      <ContactCTA />
      {/* <FinalCTA /> */}
    </div>
  );
};

export default Landing;