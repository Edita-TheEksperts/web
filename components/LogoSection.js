import { useState } from 'react';

const LogoSection = () => {
  // State to track which card is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const logos = [
    "/images/Partners.png",  
    "/images/Partners.png",
    "/images/Partners.png",
    "/images/Partners.png",
    "/images/Partners.png",
    "/images/Partners.png",
    "/images/Partners.png",
    "/images/Partners.png",
  ];

  return (
    <div className="container mx-auto p-8 max-w-[1280px] mb-6">
      {/* Heading and Description */}
      <div className="text-left mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Sie haben uns dazu gezwungen.</h2>
        <p className="text-gray-500 text-lg">Sie haben the eksperts gefunden.</p>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center p-4"
            onMouseEnter={() => setHoveredIndex(index)} 
            onMouseLeave={() => setHoveredIndex(null)}  
          >
            {/* Default Logo */}
            <img
              src={logo}
              alt={`Logo ${index}`}
              className={`w-full h-full object-contain transition-all duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}
            />
            {/* Hovered Logo */}
            <img
              src="/images/PartnersHover.png"  
              alt={`Hovered Logo ${index}`}
              className={`w-full h-full rounded-[20px] object-contain absolute top-0 left-0 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
            />           
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
