import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-mavblack text-mavwhite py-12 md:py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-mavyellow mb-4 font-montserrat">
          A Local Austin Company Since 1976
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto font-sans">
          We specialize in providing top-quality construction services to build your dreams into reality. With years of experience and a commitment to excellence, we are your trusted partner in every project.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
