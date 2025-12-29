import React, { useState } from 'react';
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import ProjectModal from './ProjectModal';
import GANGuardArchitecture from '../../../Assets/Projects/GANGuardArchitecture.jpg';
import GANGuardSystemDesign from '../../../Assets/Projects/systemdesignGANGuard.jpg';
import ArchiveComplianceReportingSystem from '../../../Assets/Projects/File Archiving Stubbing Report.png';
import ArchiveComplianceReportingSystemArchitecture from '../../../Assets/Projects/ArchiveComplianceReportingSystemArchitecture.jpg';
import VSSErrorMonitoringSystem from '../../../Assets/Projects/Show Clients with VSS errors on the Needs Attention Tile.png';
import VSSErrorMonitoringSystemArchitecture from '../../../Assets/Projects/RealTimeVSSErrorMonitoringSystem.jpg';
import TPMMigrationArchitecture from '../../../Assets/Projects/TPMMigrationArchitecture.jpg';
import VeeamMigration from '../../../Assets/Projects/Veeam FS & VM Migration.png'
import TSMVMMigration from '../../../Assets/Projects/TSM VM Migration.png'
import TPMRetentionArchitecture from '../../../Assets/Projects/TPMRetentionArchitecture.jpg'
import TPMRetention from '../../../Assets/Projects/Support migration of data retention configuration as part of data migration.png'

// Placeholder for certificate images - replace with real imports or URLs
// import cert1 from '../../../Assets/cert1.png'; 

import commvaultLogo from '../../../Assets/Commvault.png';
import cloudRewindLogo from '../../../Assets/CloudRewind.png';

// ... existing imports ...

const ProjectCard = ({ project, index, onClick }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            onClick={() => onClick(project)}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`group relative p-6 border border-black bg-white hover:bg-black transition-all duration-700 ease-out flex flex-col justify-between h-[400px] cursor-pointer
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            `}
        >
            {/* Top Content */}
            <div>
                <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl font-bold text-gray-200 group-hover:text-gray-800 transition-colors duration-500">
                        0{index + 1}
                    </span>

                    {/* Company Logo Display */}
                    {project.logo && (
                        <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500 bg-white/10 p-1 rounded-sm backdrop-blur-sm">
                            <img
                                src={project.logo}
                                alt={project.company}
                                className="h-5 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    )}
                </div>

                <h3 className="text-xl font-bold mb-1 uppercase tracking-wide group-hover:text-white transition-colors duration-500 line-clamp-2 leading-tight">
                    {project.title}
                </h3>

                {/* Company Name Subtitle */}
                {project.company && (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-blue-400 transition-colors duration-500 mb-3">
                        {project.company}
                    </p>
                )}

                <p className="text-sm text-gray-600 mb-4 font-serif leading-relaxed group-hover:text-gray-300 transition-colors duration-500 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((tech, i) => ( // Show first 4 only
                        <span
                            key={i}
                            className="text-[10px] font-bold border border-gray-200 px-1.5 py-0.5 text-gray-500 group-hover:border-gray-700 group-hover:text-gray-400 transition-colors duration-500"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Content / Link */}
            <div>
                <div
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black group-hover:text-white transition-colors duration-500"
                >
                    <span>View Details</span>
                    <FiArrowUpRight className="text-lg" />
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            "title": "GAN-Guard",
            "company": "Personal Project",
            "companyUrl": "https://github.com/JeganVG", // Fallback to personal github
            "logo": null,
            "description": "A deepfake detection and segmentation system using Generative Adversarial Networks (GAN) and DeepLab V3.",
            "detailedDescription": "Designed a custom GAN to synthesize realistic deepfake images, creating a robust training dataset for detection models. Fine-tuned a DeepLab V3 segmentation model (Encoder-Decoder) to identify and localize manipulated facial regions like beards and skin tone with high precision using CUDA acceleration. Built a user-facing React.js and Node.js interface to visualize 'fakeness heatmaps,' making the model's inference explainable to end-users.",
            "tech": ["Python", "CUDA", "GAN", "DeepLab V3", "React.js", "Node.js"],
            "github": "https://github.com/JeganVG/GANGuard",
            "certificates": [
                GANGuardArchitecture,
                GANGuardSystemDesign
            ]
        },
        {
            "title": "Archive Compliance Reporting System",
            "company": "Commvault",
            "companyUrl": "https://www.commvault.com",
            "logo": commvaultLogo,
            "description": "A secure enterprise reporting framework for compliance audits, capable of handling large-scale report downloads (>2GB) with strict security protocols.",
            "detailedDescription": "Designed a secure reporting framework at Commvault to help customers meet strict compliance audits by tracking qualified archiving items. Developed a secure API using C++ and C# to fetch reports from local proxies to the web server, ensuring data integrity with RBAC and SQL-injection validations. Built a reactive frontend in React.js to manage massive (>2GB) report downloads, featuring automatic compression and real-time progress tracking components.",
            "tech": ["C++", "C#", "React.js", "SQL", "RBAC"],
            "link": "https://documentation.commvault.com/saas/stubbing_reports_on_jobs.html",
            "certificates": [
                ArchiveComplianceReportingSystem,
                ArchiveComplianceReportingSystemArchitecture]
        },
        {
            "title": "Real-Time VSS Error Monitoring",
            "company": "Commvault",
            "companyUrl": "https://www.commvault.com",
            "logo": commvaultLogo,
            "description": "A full-stack monitoring system to detect and alert on critical Volume Shadow Copy Service (VSS) failures during backup operations.",
            "detailedDescription": "Engineered a full-stack monitoring feature to surface critical VSS errors directly on the 'Needs Attention' dashboard. Extended SQL Stored Procedures and Common APIs to track failures during FileScan and Backup phases, effectively replacing manual log analysis with real-time UI alerts. Implemented automated logic to flag and reset client error states, significantly reducing troubleshooting time for Windows infrastructure.",
            "tech": ["React.js", "SQL Stored Procedures", "C#", "Windows VSS"],
            "link": "#",
            "certificates": [
                VSSErrorMonitoringSystem,
                VSSErrorMonitoringSystemArchitecture
            ]
        },
        {
            "title": "Third-Party Workload Migration (Veeam & IBM TSM)",
            "company": "Commvault",
            "companyUrl": "https://www.commvault.com",
            "logo": commvaultLogo,
            "description": "An automated framework to migrate legacy backups from Veeam and IBM Spectrum Protect (TSM) to Commvault, utilizing a unique staging and re-hydration architecture.",
            "detailedDescription": "Engineered an automated migration framework to transition legacy Veeam and IBM Spectrum Protect (TSM) backups into Commvault, effectively eliminating vendor lock-in for enterprise clients. Designed a 'Staging & Ingestion' architecture that utilizes intermediate staging clients to 're-hydrate' third-party data before ingesting it into Commvault storage. Developed comprehensive automation wrappers in Java, Python, and PowerShell to orchestrate `dsmc restore` and Veeam CLI operations, ensuring reliable data extraction without manual intervention.",
            "tech": ["Java", "Python", "Shell Scripting", "PowerShell", "Veeam", "IBM TSM"],
            "link": "https://documentation.commvault.com/v11/software/importing_veeam_data.html",
            "certificates": [
                VeeamMigration,
                TSMVMMigration,
                TPMMigrationArchitecture
            ]
        },
        {
            "title": "Third-Party Workload & Retention Migration",
            "company": "Commvault",
            "companyUrl": "https://www.commvault.com",
            "logo": commvaultLogo,
            "description": "A migration framework that transitions retention policies from Third-Party Backup systems to Commvault, featuring a smart batching algorithm for TSM file-level retention.",
            "detailedDescription": "Engineered an automated framework to migrate legacy backups from Veeam, Avamar, Networker and IBM Spectrum Protect (TSM) to Commvault. Solved the complex challenge of migrating TSM's unique file-level retention by developing a grouping algorithm that bundles files with identical retention periods. These bundles are processed via a synchronized 'Batch Restore (TSM) -> Batch Backup (Commvault)' pipeline, ensuring that every file retains its original compliance and retention tags in the new environment.",
            "tech": ["Java", "Python", "Shell Scripting", "IBM TSM", "Veeam", "Avamar", "Networker"],
            "link": "https://documentation.commvault.com/additionalsetting/tpmhonourthirdpartyretention.html",
            "certificates": [
                TPMRetention,
                TPMRetentionArchitecture
            ]
        }
    ];

    return (
        <section id="projects-section" className="min-h-screen py-20 px-4 bg-white flex flex-col items-center">

            {/* Section Title */}
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Selected Work</h2>
                <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                        onClick={setSelectedProject}
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

        </section>
    );
};

export default Projects;
