import React from 'react';
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

// Placeholder for badge images - replace with real imports
// import badge1 from '../../../Assets/badge1.png';

const BadgeCard = ({ badge, index }) => {
    return (
        <a
            href={badge.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 border border-black bg-white hover:bg-black transition-all duration-500 flex flex-col items-center text-center h-[320px] justify-between cursor-pointer"
        >
            {/* Top: Image Placeholder */}
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-500 overflow-hidden relative">
                {/* Replace this div/span with actual <img src={badge.image} /> */}
                <span className="text-3xl font-bold text-gray-300 group-hover:text-gray-600 transition-colors select-none">
                    {badge.initials}
                </span>

                {/* Overlay Verify Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiCheckCircle className="text-white text-3xl" />
                </div>
            </div>

            {/* Middle: Content */}
            <div className="flex-grow flex flex-col items-center">
                <h3 className="text-sm md:text-base font-bold uppercase tracking-tight mb-2 group-hover:text-white transition-colors duration-500 line-clamp-3">
                    {badge.title}
                </h3>
                <p className="text-xs text-gray-500 font-serif mb-1 group-hover:text-gray-400 transition-colors duration-500">
                    {badge.issuer}
                </p>
                <p className="text-xs text-gray-400 font-mono group-hover:text-gray-500 transition-colors duration-500">
                    {badge.date}
                </p>
            </div>

            {/* Bottom: Link Hint */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1">
                    Verify <FiArrowUpRight />
                </span>
            </div>
        </a>
    );
};

const Badges = () => {
    // Data transcribed from user screenshot
    const badges = [
        {
            title: "1 Year Anniversary",
            issuer: "Commvault",
            date: "Issued Apr 15, 2025",
            initials: "1Y",
            link: "https://www.credly.com/" // Placeholder
        },
        {
            title: "Commvault Basecamp",
            issuer: "Commvault",
            date: "Issued Feb 7, 2025",
            initials: "CB",
            link: "https://www.credly.com/"
        },
        {
            title: "Commvault Cloud Sales Professional - CCSP25",
            issuer: "Commvault",
            date: "Issued Jul 8, 2024",
            initials: "CCSP",
            link: "https://www.credly.com/"
        },
        {
            title: "Commvault Cloud Technical Sales Professional - CCTSP25",
            issuer: "Commvault",
            date: "Issued Jul 11, 2024",
            initials: "CCTSP",
            link: "https://www.credly.com/"
        },
        {
            title: "Commvault Solution Architect - CVSA24",
            issuer: "Commvault",
            date: "Issued Jul 26, 2024",
            initials: "CVSA",
            link: "https://www.credly.com/"
        },
        {
            title: "Data Science Orientation",
            issuer: "Coursera (IBM)",
            date: "Issued Jan 2, 2022",
            initials: "DS",
            link: "https://www.credly.com/"
        },
        {
            title: "Google AI Essentials V1",
            issuer: "Coursera",
            date: "Issued Mar 19, 2025",
            initials: "AI",
            link: "https://www.credly.com/"
        },
        {
            title: "Metallic Solution Architect - MESA24",
            issuer: "Commvault",
            date: "Issued Aug 27, 2024",
            initials: "MESA",
            link: "https://www.credly.com/"
        }
    ];

    return (
        <section id="certifications-section" className="py-20 px-4 bg-white flex flex-col items-center">

            {/* Section Title */}
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Certifications</h2>
                <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-6xl">
                {badges.map((badge, index) => (
                    <BadgeCard key={index} badge={badge} index={index} />
                ))}
            </div>

        </section>
    );
};

export default Badges;
