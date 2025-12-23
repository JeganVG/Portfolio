import React from 'react';
import fullNamePng from '../../../Assets/CursiveFullNamePNGCropped.png'
import resumePdf from '../../../Assets/JeganVG_Resume.pdf'

// Import your new components
import Career from './Career';
import Header from './Header'; // Assuming you put it in components folder

const Home = () => {

  // Note: We deleted the scrollToCareer function here because 
  // the Header component handles it now.

  return (
    <div className="bg-white select-none cursor-default">
      
      {/* 1. THE PERMANENT HEADER */}
      <Header />
      
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center relative pt-20">
        {/* Added 'pt-20' padding-top so the fixed header doesn't cover the content on small screens */}

        {/* Center Content */}
        <div className="flex flex-col items-center w-full px-4">
          <div className="pointer-events-none">
            <img src={fullNamePng} alt="Jegan VG" className="w-full max-w-md md:max-w-2xl block object-contain" draggable="false" />
          </div>
          <h2 className="mt-2 text-lg md:text-xl text-gray-800 font-serif tracking-wide text-center">
            Software Development Engineer @ Commvault
          </h2>
          <a 
            href={resumePdf} 
            download="JeganVG_Resume.pdf"
            target="_blank"
            className="mt-6 pointer-events-auto inline-block border border-black px-8 py-2 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
          >
            View CV
          </a>
        </div>
      </section>

      {/* ================= CAREER SECTION ================= */}
      <Career />

    </div>
  )
}

export default Home