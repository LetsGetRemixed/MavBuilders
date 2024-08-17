import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/ServicesSection'

const Home = () => {
  return (
    <div>
      <Header />
        <HeroSection />
            <ServiceSection />
    </div>
  );
};

export default Home;
