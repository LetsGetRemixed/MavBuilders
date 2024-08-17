import React, { useEffect, useRef, useState } from 'react';

const ServiceItem = ({ title, images }) => {
  const sectionRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.add('fade-in');
        } else {
          section.classList.remove('fade-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      ref={sectionRef}
      className="opacity-0 transition-opacity duration-1000 ease-in-out flex items-center py-16"
    >
      <div className="w-1/2 text-right pr-8">
        <h3 className="text-3xl md:text-4xl font-bold text-mavyellow mb-4 font-montserrat">
          {title}
        </h3>
      </div>
      <div className="w-1/2">
        <div className="w-full h-64 bg-gray-300 bg-cover bg-center transition-all duration-1000"
             style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-mavblack text-mavwhite">
      <ServiceItem
        title="Custom Homes"
        images={['/images/house2.jpg', '/images/house2.jpg', '/images/house2.jpg']}
      />
      <ServiceItem
        title="Any Projects"
        images={['/images/house2.jpg', '/images/house2.jpg', '/images/house2.jpg']}
      />
      <ServiceItem
        title="We Do It All"
        images={['/images/house2.jpg', '/images/house2.jpg', '/images/house2.jpg']}
      />
    </section>
  );
};

export default ServicesSection;
