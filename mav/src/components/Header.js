import React from 'react';

const Header = () => {
  const images = [
    'url("/images/kitchen2.jpg")',
    'url("/images/house2.jpg")',
    'url("/images/house3.jpg")',
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header
      className="h-[50vh] bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{ backgroundImage: images[currentImage] }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50 px-4">
        <h1 className="flex flex-col md:flex-row items-center text-center">
          <span className="text-mavyellow font-montserrat text-3xl md:text-5xl font-bold">Mav</span>
          <span className="text-mavwhite font-montserrat text-3xl md:text-5xl font-bold mt-2 md:mt-0 md:ml-2">Builders LLC.</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;


