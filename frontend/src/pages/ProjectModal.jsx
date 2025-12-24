import React, { useEffect, useState } from 'react';
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectModal = ({ project, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
            setIsVisible(false);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for animation
    };

    if (!project) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-all duration-300
            ${isVisible ? 'bg-black/40 backdrop-blur-sm opacity-100' : 'bg-transparent backdrop-blur-none opacity-0 pointer-events-none'}`}
            onClick={handleClose}
        >
            <div
                className={`bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col shadow-2xl transition-all duration-500 ease-out
                ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full hover:bg-black hover:text-white transition-colors border border-black"
                >
                    <FiX size={24} />
                </button>

                {/* Banner / Header Image Area (Optional: could use a project image here) */}
                <div className="h-32 md:h-48 bg-gray-100 flex items-center justify-center border-b border-black">
                    {/* Placeholder Pattern */}
                    <div className="w-full h-full opacity-10"
                        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }}
                    ></div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">

                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">{project.title}</h2>

                        <div className="flex flex-wrap gap-3 mb-6">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase hover:underline">
                                    <FiGithub size={18} /> GitHub
                                </a>
                            )}
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase hover:underline">
                                    <FiExternalLink size={18} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                        <h3 className="text-lg font-bold uppercase mb-4 border-b border-gray-200 pb-2">Overview</h3>
                        <p className="text-gray-600 leading-relaxed font-serif text-lg">
                            {project.detailedDescription || project.description}
                        </p>
                    </div>

                    {/* Certificates / Gallery */}
                    {project.certificates && project.certificates.length > 0 && (
                        <div>
                            <h3 className="text-lg font-bold uppercase mb-6 border-b border-gray-200 pb-2">Certificates & Screenshots</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.certificates.map((cert, idx) => (
                                    <div key={idx} className="border border-gray-200 p-2 hover:border-black transition-colors">
                                        <img
                                            src={cert}
                                            alt={`Certificate ${idx + 1}`}
                                            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
