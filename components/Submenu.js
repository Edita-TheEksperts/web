import { useEffect, useState } from 'react';

const Submenu = ({ isHeroVisible }) => {
  const [activeSection, setActiveSection] = useState('what');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['what', 'how', 'why']; // Ensure these match your section IDs in HTML
      const offsets = sections.map((id) => {
        const section = document.getElementById(id);
        return section ? section.offsetTop - 100 : 0; // Adjust for header height
      });

      const scrollPosition = window.scrollY + 120; // Include header offset
      const current = sections.reduce((acc, id, i) => {
        return scrollPosition >= offsets[i] ? id : acc;
      }, 'what');

      setActiveSection(current);

      // Check if the user has scrolled past the last section
      const lastSection = document.getElementById(sections[sections.length - 1]);
      if (lastSection) {
        const lastSectionBottom = lastSection.offsetTop + lastSection.offsetHeight;
        setIsVisible(scrollPosition < lastSectionBottom - 100); // Adjust for offset
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide the submenu if the hero is visible or the last section is reached
  if (isHeroVisible || !isVisible) return null;

  return (
    <nav className="fixed top-[70px] left-0 w-full z-50">
      <div className="max-w-[1280px] mx-auto flex justify-center items-center">
        <div className="w-full lg:w-[400px] bg-[#DBDBDB] rounded-[10px] px-2 py-2 flex justify-center items-center space-x-6 font-normal">
          {['what', 'how', 'why'].map((section, index, arr) => (
            <div key={section} className="flex items-center">
              <a
                href={`#${section}`}
                className={`font-normal transition-colors duration-200 px-4 py-1 ${
                  activeSection === section
                    ? 'text-[#0009FF] font-bold' // Active styles
                    : 'text-gray-700'
                } hover:text-[#0009FF]`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              {index < arr.length - 1 && (
                <span className="text-gray-400 mx-2">|</span> // Separator
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Submenu;
