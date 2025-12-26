import React, { useState } from 'react';
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import ProjectModal from './ProjectModal';

// Placeholder for certificate images - replace with real imports or URLs
// import cert1 from '../../../Assets/cert1.png'; 

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
            className={`group relative p-8 border border-black bg-white hover:bg-black transition-all duration-700 ease-out flex flex-col justify-between h-[400px] cursor-pointer
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            `}
        >
            {/* Top Content */}
            <div>
                <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl font-bold text-gray-200 group-hover:text-gray-800 transition-colors duration-500">
                        0{index + 1}
                    </span>
                    <div className="flex gap-4">
                        <div className="text-2xl text-black group-hover:text-white transition-colors duration-500 hover:opacity-70">
                            <FiGithub />
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide group-hover:text-white transition-colors duration-500">
                    {project.title}
                </h3>

                <p className="text-gray-600 mb-6 font-serif leading-relaxed group-hover:text-gray-300 transition-colors duration-500 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="text-xs font-bold border border-gray-200 px-2 py-1 text-gray-500 group-hover:border-gray-700 group-hover:text-gray-400 transition-colors duration-500"
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
            title: "GAN-Guard",
            description: "A full-featured online store with cart functionality, payment gateway integration, and admin dashboard.",
            detailedDescription: "Designed and built a scalable e-commerce platform from scratch. Key features include a real-time shopping cart managed by Redux, secure payment processing via Stripe, and a comprehensive admin panel for inventory and order management. Optimized for performance with lazy loading and code splitting.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "#",
            github: "#",
            certificates: [
                "https://placehold.co/600x400/EEE/31343C?text=Certificate+1",
                "https://placehold.co/600x400/EEE/31343C?text=Screenshot+1"
            ]
        },
        {
            title: "HostedLLM",
            description: "Collaborative project management tool with real-time updates, drag-and-drop boards, and team chat.",
            detailedDescription: "A Trello-like application enabling teams to organize tasks efficiently. Implemented drag-and-drop using dnd-kit, real-time updates with Firebase Firestore to keep all users in sync, and integrated a live chat feature for seamless communication within project boards.",
            tech: ["Next.js", "Firebase", "Tailwind"],
            link: "#",
            github: "#",
            certificates: []
        },
        {
            title: "AI Image Generator",
            description: "Web application using OpenAI's DALL-E API to generate and share custom images based on text prompts.",
            detailedDescription: "Leveraged OpenAI's DALL-E API to create an interactive tool where users can generate unique artwork from text descriptions. Features include a community gallery, image downloading, and 'surprise me' prompts. Built with a focus on clean UI/UX.",
            tech: ["React", "Express", "OpenAI API"],
            link: "#",
            github: "#",
            certificates: []
        },
        {
            title: "Financial Dashboard",
            description: "Data visualization dashboard for tracking expenses, income, and investment portfolios with interactive charts.",
            detailedDescription: "A comprehensive dashboard for personal finance tracking. Utilizes D3.js for complex, interactive data visualizations including line charts for trend analysis and pie charts for expense categorization. specific focus on responsive design for mobile access.",
            tech: ["Vue.js", "D3.js", "AWS"],
            link: "#",
            github: "#",
            certificates: []
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
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
