import React, { useEffect, useState } from 'react';

const ServiceItem = ({ title, images, reverse, details }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleButtonClick = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  return (
    <div className="relative flex items-center justify-center py-16">
      {/* Image Container */}
      <div
        className={`relative h-96 bg-cover bg-center transition-transform duration-1000 ease-in-out z-20 ${isDetailVisible ? (reverse ? 'translate-x-[40%]' : '-translate-x-[40%]') : ''}`}
        style={{
          width: '80%',
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-mavyellow font-montserrat text-center shadow-lg">
              {title}
            </h3>
          </div>
        </div>

        {/* Button */}
        <button
          className={`absolute top-0 h-full w-12 bg-mavyellow text-mavblack hover:bg-mavwhite hover:text-mavblack transition-colors duration-300 z-30 flex items-center justify-center`}
          style={{ 
            transform: isDetailVisible ? (reverse ? 'translateX(-40%)' : 'translateX(40%)') : 'translateX(0)',
            [reverse ? 'left' : 'right']: '0'
          }}
          onClick={handleButtonClick}
          aria-label="More Details"
        >
          {isDetailVisible ? (reverse ? '→' : '←') : (reverse ? '←' : '→')}
        </button>
      </div>

      {/* Detail Text (Revealed behind the image) */}
      <div
        className={`absolute top-0 h-full p-8 flex items-center justify-center z-10 bg-black bg-opacity-75 text-mavwhite ${reverse ? 'left-0' : 'right-0'}`}
        style={{ 
          width: '40%', // Fixed width to match where the image slides
          transform: isDetailVisible ? 'translateX(0)' : (reverse ? 'translateX(-100%)' : 'translateX(100%)'),
          transition: 'transform 1s ease-in-out',
          [reverse ? 'right' : 'left']: 'auto', // Align the text opposite to the button
        }}
      >
        <p className="text-lg font-sans break-words">{details}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-mavwhite text-mavblack">
      <ServiceItem
        title="Custom Homes"
        images={['/images/house2.jpg']}
        reverse={false}
        details="Our custom homes are built with attention to detail, reflecting your personal style and ensuring comfort and luxury in every corner. From the foundation to the finishing touches, we work with you to create the home of your dreams."
      />
      <ServiceItem
        title="Any Projects"
        images={['/images/house2.jpg']}
        reverse={true}
        details="Whether it’s a small renovation or a large-scale construction project, we have the expertise to bring your vision to life. Our team is dedicated to delivering high-quality results on time and within budget."
      />
      <ServiceItem
        title="We Do It All"
        images={['/images/house2.jpg']}
        reverse={false}
        details="From residential to commercial projects, we handle it all with professionalism and precision. Our comprehensive services include design, construction, and project management to ensure a seamless experience from start to finish."
      />
    </section>
  );
};

export default ServicesSection;






