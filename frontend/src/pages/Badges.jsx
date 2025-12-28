import React from 'react';
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

import OneYearBadge from '../../../Assets/Badges/1YearAnniversary.png';
import BasecampBadge from '../../../Assets/Badges/CVBaseCamp.png';
import CCSPBadge from '../../../Assets/Badges/CCSP25.png';
import CCTSPBadge from '../../../Assets/Badges/CCTSP25.png';
import MetallicBadge from '../../../Assets/Badges/MESA24.png';
import DataScienceBadge from '../../../Assets/Badges/DataScienceOrientation.png';
import AIBadge from '../../../Assets/Badges/GoogleAIEssentials.png';
import CVSBadge from '../../../Assets/Badges/CVSA24.png';

const BadgeCard = ({ badge, index }) => {
    return (
        <a
            href={badge.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 border border-black bg-white hover:bg-black transition-all duration-500 flex flex-col items-center text-center h-[320px] justify-between cursor-pointer"
        >
            {/* Top: Image Placeholder */}
            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-4 relative transition-colors duration-500">
                {badge.image ? (
                    <img src={badge.image} alt={badge.title} className="w-full h-full object-contain drop-shadow-sm" />
                ) : (
                    <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-500">
                        <span className="text-3xl font-bold text-gray-300 group-hover:text-gray-600 transition-colors select-none">
                            {badge.initials}
                        </span>
                    </div>
                )}

                {/* Overlay Verify Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {/* Icon removed to keep it clean or just keep it minimal? User said 'png alone'. Keeping it might be interfering? Let's keep it but ensure it doesn't look weird. 
                        Actually, 'png alone' might mean NO overlay. But the overlay is for functionality (verify icon). 
                        Let's keep the verify functionality but maybe remove the bg-black/60 if it's annoying? 
                        The previous code had bg-black/60. User said 'png alone'. 
                        I will keep the icon but remove the full dark overlay to show the detailed png? 
                        The overlay provides contrast for the checkmark. 
                        Let's just fix the container first. 
                     */}
                    <div className="bg-black/20 rounded-lg p-2 backdrop-blur-sm">
                        <FiCheckCircle className="text-white text-2xl" />
                    </div>
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
            link: "https://www.credly.com/badges/43f45a7d-dbba-432f-aef8-ba2ba65cebfe/public_url",
            image: OneYearBadge
        },
        {
            title: "Commvault Basecamp",
            issuer: "Commvault",
            date: "Issued Feb 7, 2025",
            initials: "CB",
            link: "https://www.credly.com/badges/4151fd4b-e82b-4bab-984b-6f0a04c958e6/public_url",
            image: BasecampBadge
        },
        {
            title: "Commvault Cloud Sales Professional - CCSP25",
            issuer: "Commvault",
            date: "Issued Jul 8, 2024",
            initials: "CCSP",
            link: "https://www.credly.com/badges/eef88110-ee36-4180-afbd-4cd92a92d72b/public_url",
            image: CCSPBadge
        },
        {
            title: "Commvault Cloud Technical Sales Professional - CCTSP25",
            issuer: "Commvault",
            date: "Issued Jul 11, 2024",
            initials: "CCTSP",
            link: "https://www.credly.com/badges/82aab41b-f1e9-478a-9be1-24778efb05c3/public_url",
            image: CCTSPBadge
        },
        {
            title: "Commvault Solution Architect - CVSA24",
            issuer: "Commvault",
            date: "Issued Jul 26, 2024",
            initials: "CVSA",
            link: "https://www.credly.com/badges/aa735189-e865-498b-85b0-e8bd4f92909f/public_url",
            image: CVSBadge
        },
        {
            title: "Data Science Orientation",
            issuer: "Coursera (IBM)",
            date: "Issued Jan 2, 2022",
            initials: "DS",
            link: "https://www.credly.com/badges/876bdd04-4678-4b61-a096-dfdc17ac6a57/public_url",
            image: DataScienceBadge
        },
        {
            title: "Google AI Essentials V1",
            issuer: "Coursera",
            date: "Issued Mar 19, 2025",
            initials: "AI",
            link: "https://www.credly.com/badges/620dd7d6-8067-4cdc-a53f-4ccf79244851/public_url",
            image: AIBadge
        },
        {
            title: "Metallic Solution Architect - MESA24",
            issuer: "Commvault",
            date: "Issued Aug 27, 2024",
            initials: "MESA",
            link: "https://www.credly.com/badges/1c0d4d9a-f07d-4a92-b542-921c87591be9/public_url",
            image: MetallicBadge
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
