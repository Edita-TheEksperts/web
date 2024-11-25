import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '/images/Logo 1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  let menuTimeout;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    clearTimeout(menuTimeout); // Clear timeout to prevent menu from hiding
    setIsServicesMenuOpen(true);
  };

  const handleMouseLeave = () => {
    menuTimeout = setTimeout(() => {
      setIsServicesMenuOpen(false);
    }, 200); // Adjust the delay as needed
  };

  return (
    <header
      className="bg-white sticky top-0 z-[60] px-2 py-2 "
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src={logo}
              alt="The Eksperts Logo"
              width={126}
              height={17}
              priority
            />
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex space-x-6 bg-[#EEE] px-8 py-4 rounded-[10px] relative">
          <Link href="/" className="text-gray-700">Homepage</Link>
          <span className="text-gray-300">|</span>
          
          {/* Services Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-gray-700">Service</span>
            {isServicesMenuOpen && (
              <div className="absolute left-0 mt-2 bg-gray-100 p-4 rounded-lg  z-[50]">
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/salesforce" className="text-gray-700 hover:text-blue-600">
                      Salesforce
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/website-development" className="text-gray-700 hover:text-blue-600">
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/graphic-design" className="text-gray-700 hover:text-blue-600">
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/book-your-expert" className="text-gray-700 hover:text-blue-600">
                      Book Your Expert
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/custom-development" className="text-gray-700 hover:text-blue-600">
                      Custom Development
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <span className="text-gray-300">|</span>
          <Link href="/agency" className="text-gray-700">Agency</Link>
          <span className="text-gray-300">|</span>
          <Link href="/work" className="text-gray-700">Work</Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="text-gray-700">Contact Us</Link>
        </nav>

        {/* Call to Action */}
        <Link href="https://calendly.com/fisnik-salihu-the-eksperts/30min">
          <button className="hidden lg:block border-[3px] border-[#0009FF] text-[#0009FF] px-4 py-2 rounded-[20px] text-[18px] font-semibold hover:bg-[#0009FF] hover:text-white">
          Jetzt Gespräch buchen
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-100 p-4 mt-2 rounded-lg shadow-lg">
          <ul className="space-y-4 text-center">
            <li><Link href="/">Homepage</Link></li>
            <li>
              <details>
                <summary className="cursor-pointer text-gray-700">Service</summary>
                <ul className="mt-2 space-y-2 pl-4">
                  <li>
                    <Link href="/services/salesforce">Salesforce</Link>
                  </li>
                  <li>
                    <Link href="/services/website-development">Website Development</Link>
                  </li>
                  <li>
                    <Link href="/services/graphic-design">Graphic Design</Link>
                  </li>
                  <li>
                    <Link href="/services/book-your-expert">Book Your Expert</Link>
                  </li>
                  <li>
                    <Link href="/services/custom-development">Custom Development</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li><Link href="/agency">Agency</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
