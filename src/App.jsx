import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import ServiceSection from './components/ServiceSection';
import ClientTestimonial from './components/ClientTestimonial';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TrustedClients from './components/TrustedClients'


function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
     <Navigation/>

      {/* Hero Section */}
     <HeroSection/>

      <ServiceSection />

      {/* About Us Section */}
      <AboutUs/>

      {/* Client Testimonial */}
      <ClientTestimonial />

      {/* Trusted Clients */}
      <TrustedClients />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
