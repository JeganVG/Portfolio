import React from 'react';
// Adjust this path if your Assets folder is elsewhere
// If Header.jsx is in src/components, and Assets is in src/Assets, use '../Assets/...'
import logoPng from '../../../Assets/CursiveCenteredFirstNamePNG.png';

const Header = () => {

  // The scroll logic moves here
  const scrollToCareer = () => {
    const section = document.getElementById('career-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // 'fixed top-0 w-full z-50': Pins it to the top
    // 'bg-white/80 backdrop-blur-md': Adds the frosty glass effect
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-4 md:px-8 md:py-6 bg-white/80 backdrop-blur-md transition-all duration-300">

      {/* LEFT: Logo (Home Link) */}
      <a href="/" className="hover:opacity-60 transition-opacity">
        <img
          src={logoPng}
          alt="Logo"
          className="w-12 md:w-20 block" // Slightly smaller for the header
          draggable="false"
        />
      </a>

      {/* RIGHT: Navigation Button */}
      <div className="flex gap-2 md:gap-4">
        {/* Career Button */}
        <button
          onClick={scrollToCareer}
          className="px-3 py-1.5 md:px-6 md:py-2 border border-black bg-transparent text-black text-xs md:text-sm font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          Career
        </button>

        {/* Projects Button */}
        <button
          onClick={() => {
            const section = document.getElementById('projects-section');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-3 py-1.5 md:px-6 md:py-2 border border-black bg-transparent text-black text-xs md:text-sm font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          Projects
        </button>

        {/* Certifications Button - Hidden on phone */}
        <button
          onClick={() => {
            const section = document.getElementById('certifications-section');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-3 py-1.5 md:px-6 md:py-2 border border-black bg-transparent text-black text-xs md:text-sm font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 hidden md:block"
        >
          Certifications
        </button>
      </div>

    </header>
  );
};

export default Header;