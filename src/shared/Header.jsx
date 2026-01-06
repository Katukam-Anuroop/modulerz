import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 w-full h-[100px] z-50 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" 
      style={{ 
        backgroundImage: "linear-gradient(90deg, rgb(20, 48, 96) 34.96%, rgb(221, 161, 82) 100%)" 
      }}
    >
      <div className="w-full h-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[309px] flex items-center justify-between relative">
        {/* Logo - Left Side */}
        <Link to="/" className="flex items-center flex-shrink-0 z-50" onClick={closeMenu}>
          <img 
            src="/logo.png" 
            alt="Modulerz Logo" 
            className="h-[50px] sm:h-[60px] w-auto object-contain" 
          />
        </Link>
        
        {/* Desktop Navigation - Positioned according to design (left-[767px] from Figma) */}
        <nav className="hidden lg:flex items-center gap-[40px] absolute left-[50%] lg:left-[767px] top-1/2 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2">
          <Link to="/" className="text-white text-[18px] font-inter font-normal whitespace-nowrap hover:opacity-80 transition-opacity">
            Home
          </Link>
          <a href="#about" className="text-white text-[18px] font-inter font-normal whitespace-nowrap hover:opacity-80 transition-opacity">
            About Us
          </a>
          <Link to="/solutions" className="text-white text-[18px] font-inter font-normal whitespace-nowrap hover:opacity-80 transition-opacity">
            Solutions
          </Link>
          <Link to="/projects" className="text-white text-[18px] font-inter font-normal whitespace-nowrap hover:opacity-80 transition-opacity">
            Projects
          </Link>
          <Link to="/blog" className="text-white text-[18px] font-inter font-normal whitespace-nowrap hover:opacity-80 transition-opacity">
            Blog
          </Link>
          <Link to="/careers" className="text-white text-[18px] font-inter font-normal whitespace-nowrap hover:opacity-80 transition-opacity">
            Careers
          </Link>
          <Link to="/contact" className="text-white text-[18px] font-inter font-normal whitespace-nowrap hover:opacity-80 transition-opacity">
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Menu Button - Mobile/Tablet */}
        <button
          className="lg:hidden z-50 flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        />

        {/* Mobile Navigation Menu */}
        <nav
          className={`fixed top-[100px] left-0 w-full bg-gradient-to-b from-[#143060] to-[#dda152] z-40 lg:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col py-6 px-4 space-y-4">
            <Link
              to="/"
              className="text-white text-[18px] font-inter font-normal py-3 px-4 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-white text-[18px] font-inter font-normal py-3 px-4 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              About Us
            </a>
            <Link
              to="/solutions"
              className="text-white text-[18px] font-inter font-normal py-3 px-4 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Solutions
            </Link>
            <Link
              to="/projects"
              className="text-white text-[18px] font-inter font-normal py-3 px-4 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="text-white text-[18px] font-inter font-normal py-3 px-4 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className="text-white text-[18px] font-inter font-normal py-3 px-4 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="text-white text-[18px] font-inter font-normal py-3 px-4 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
