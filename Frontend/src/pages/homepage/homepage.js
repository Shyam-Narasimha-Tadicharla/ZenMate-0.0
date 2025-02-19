import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import AffiliationsSection from './AffiliationsSection';


import 'tailwindcss/tailwind.css';

const Homepage = () => {
  const navigate = useNavigate();
 
  return (
    <Layout>
      <HeroSection navigate={navigate} />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <AffiliationsSection />
    </Layout>
  );
};

export default Homepage;