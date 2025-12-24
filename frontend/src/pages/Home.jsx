import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from "react-icons/fi";
import fullNamePng from '../../../Assets/CursiveFullNamePNGCropped.png'
import resumePdf from '../../../Assets/JeganVG_Resume.pdf'
import commvaultLogo from '../../../Assets/Commvault.png'

// Import your new components
import Career from './Career';
import Projects from './Projects';
import Badges from './Badges';
import Header from './Header'; // Assuming you put it in components folder

const Home = () => {

  // Note: We deleted the scrollToCareer function here because 
  // the Header component handles it now.

  return (
    <div className="bg-white select-none cursor-default">

      {/* 1. THE PERMANENT HEADER */}
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex flex-col items-center relative pt-20 overflow-hidden">
        {/* Added 'pt-20' padding-top so the fixed header doesn't cover the content on small screens */}

        {/* Center Content - Flex Grow updates */}
        <div className="flex-grow flex flex-col items-center justify-center w-full px-4">
          <div className="pointer-events-none">
            <img src={fullNamePng} alt="Jegan VG" className="w-full max-w-md md:max-w-2xl block object-contain" draggable="false" />
          </div>
          <h2 className="mt-2 text-lg md:text-xl text-gray-800 tracking-wide text-center flex flex-col md:flex-row items-center justify-center gap-2">
            Software Development Engineer @
            <a
              href="https://www.commvault.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold hover:underline underline-offset-4 decoration-2"
            >
              <img src={commvaultLogo} alt="Commvault" className="w-5 h-5 object-contain" />
              Commvault
            </a>
          </h2>
          <a
            href={resumePdf}
            download="JeganVG_Resume.pdf"
            target="_blank"
            className="mt-6 pointer-events-auto inline-flex items-center gap-2 border border-black bg-transparent text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            <span>View CV</span>
            <FiArrowUpRight className="text-lg" />
          </a>

          {/* Social Media Icons with Absolute Line */}
          <div className="mt-8 flex gap-6 pointer-events-auto z-10 relative">
            <a
              href="https://www.linkedin.com/in/jegan-v-g/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#0077B5] hover:opacity-70 transition-opacity duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/morningstar_lufy?igsh=MTA1cGVvc2pmejN5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#E4405F] hover:opacity-70 transition-opacity duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/JeganVG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black hover:opacity-70 transition-opacity duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* The Line: Absolute, starts below icons, goes down forever, hidden on mobile */}
            <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-screen bg-black opacity-20 mt-8"></div>
          </div>
        </div>
      </section>

      {/* ================= CAREER SECTION ================= */}
      <Career />

      {/* ================= PROJECTS SECTION ================= */}
      <Projects />

      {/* ================= BADGES / CERTIFICATIONS SECTION ================= */}
      <Badges />

    </div>
  )
}


export default Home