// components/FourPillars.js
import { useRef, useEffect } from 'react';

export default function FourPillars() {
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  const scrollToSection = (sectionIndex) => {
    const container = containerRef.current;
    const section = container.querySelectorAll('.pillar')[sectionIndex];
    if (section) {
      isScrolling.current = true; 
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        isScrolling.current = false;
      }, 800); 
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrolling.current) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const sectionHeight = window.innerHeight;

      if (scrollTop < sectionHeight / 2) {
        scrollToSection(0);
      } else if (scrollTop < sectionHeight * 1.5) {
        scrollToSection(1);
      } else if (scrollTop < sectionHeight * 2.5) {
        scrollToSection(2);
      } else {
        scrollToSection(3);
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-w-[1280px] min-h-screen flex flex-col items-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Four-Pillar Component</h1>

      <div className="w-full h-screen bg-gray-200 flex items-center justify-center mb-4 rounded-md shadow-md">
        <h2 className="text-4xl font-semibold">Pillar 1</h2>
      </div>

      <div
        ref={containerRef}
        className="w-full h-screen overflow-y-auto bg-white rounded-md shadow-lg no-scrollbar"
      >
          <div className="h-screen bg-red-200 flex items-center justify-center border-b border-gray-300 snap-start pillar">
            <h2 className="text-4xl font-semibold">Pillar 2</h2>
          </div>

          <div className="h-screen bg-blue-200 flex items-center justify-center border-b border-gray-300 snap-start pillar">
            <h2 className="text-4xl font-semibold">Pillar 3</h2>
          </div>

          <div className="h-screen bg-green-200 flex items-center justify-center snap-start pillar">
            <h2 className="text-4xl font-semibold">Pillar 4</h2>
          </div>
      </div>
    </div>
  );
}
