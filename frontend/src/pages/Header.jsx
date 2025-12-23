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
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur-md transition-all duration-300">
      
      {/* LEFT: Logo (Home Link) */}
      <a href="/" className="hover:opacity-60 transition-opacity">
        <img 
          src={logoPng} 
          alt="Logo" 
          className="w-16 md:w-20 block" // Slightly smaller for the header
          draggable="false" 
        />
      </a>

      {/* RIGHT: Navigation Button */}
      <button 
        onClick={scrollToCareer}
        className="text-xs md:text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
      >
        Career Path
      </button>

    </header>
  );
};

export default Header;