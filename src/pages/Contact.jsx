import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactCTA from '../components/contact/ContactCTA';

const Contact = () => {
  return (
    <div className="pt-16">
      <ContactHero />
      <ContactForm />
      <ContactCTA />
    </div>
  );
};

export default Contact;