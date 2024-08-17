import React from 'react';

const Header = () => {
  const images = [
    'url("/images/house1.png")',
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
      className="h-screen min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{ backgroundImage: images[currentImage] }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
      <h1 className="flex items-center">
  <span className="text-mavyellow font-montserrat text-5xl font-bold">Mav</span>
  <span className="text-mavwhite font-montserrat text-5xl font-bold ml-2">Builders LLC.</span>
</h1>
      </div>
    </header>
  );
};

export default Header;

