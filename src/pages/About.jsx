import React from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyStory from '../components/about/CompanyStory';
import VisionMission from '../components/about/VisionMission';
import Values from '../components/about/Values';
import Sustainability from '../components/about/Sustainability';
import AboutCTA from '../components/about/AboutCTA';
import IndustriesWeServe from '../components/IndustriesWeServe';

const About = () => {
  return (
    <div className="pt-16">
      <AboutHero />
      <CompanyStory />
      <VisionMission />
      <Values />
      {/* <Sustainability /> */}
      <IndustriesWeServe />
      <AboutCTA />
    </div>
  );
};

export default About;