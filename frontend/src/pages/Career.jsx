import React from 'react';
// Adjust path if needed
import TimelineItem from './TimelineItem';
import commvaultLogo from '../../../Assets/Commvault.png';
import cloudRewindLogo from '../../../Assets/CloudRewind.png';

const Career = () => {
  // DATA LIVES HERE
  const careerData = [
    {
      year: "Nov 2024 - Present",
      role: "Software Dev Engineer",
      company: "Commvault",
      website: "https://www.commvault.com",
      logo: commvaultLogo,
      description: [
        "<strong>Full-stack developer</strong> for the Files and Objects team, delivering core features for Third-party Migration, File Archiving, and Windows File Systems.",
        "Feature owner for multiple core components, driving end-to-end development, enhancements, and Level-3 production support.",
        "Resolved 50+ critical customer escalation tickets and led 30+ live customer sessions, directly contributing to improved system stability and customer retention.",
        "Delivered 12+ major feature initiatives and 150+ updates, ensuring high availability and zero-regression quality across releases."
      ],
      tech: ["CPP", "React", "SQL", "Java", "Python", "Windows File System"]
    },
    {
      year: "Apr 2024 - Oct 2024",
      role: "Software Dev Intern",
      company: "Commvault",
      website: "https://www.commvault.com",
      logo: commvaultLogo,
      description: [
        "Developed automated migration engines for Veeam and TSM workloads, enabling the seamless transition of legacy third-party data to Commvault.",
        "Engineered system-level utilities (CVFSUtil, DirChange Populator) to optimize Windows incremental backup scans and content distribution."
      ],
      tech: ["CPP", "SQL", "Java", "Python", "Windows File System"]
    },
    {
      year: "Dec 2023 - Apr 2024",
      role: "Programmer Analyst Trainee",
      company: "Cloud Rewind (Formerly Appranix)",
      website: "https://www.appranix.com",
      logo: cloudRewindLogo,
      description: [
        "Developed scalable Web Adapters for Azure using Java Spring Boot, enabling the automated discovery and protection of enterprise cloud assets.",
        "Contributed core logic to AnomStack, designing algorithms to detect and flag irregular resource usage patterns, improving cloud cost efficiency and security.",
        "Built and optimized RESTful Web Services using Spring MVC, gaining hands-on expertise in managing distributed cloud environments (AWS/Azure)."
      ],
      tech: ["Java", "Spring Boot", "Azure", "AWS", "REST APIs"]
    }
  ];

  return (
    <section id="career-section" className="min-h-screen py-20 px-4 flex flex-col items-center bg-white relative">

      {/* Section Title */}
      <div className="mb-16 text-center z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Career Timeline</h2>
        <div className="w-24 h-1 bg-black mx-auto"></div>
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Continuous Center Line (Starts after title now) */}
        {/* Position: left-6 (1.5rem) aligns with w-12 centered dot (1.5rem) inside this wrapper */}
        <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-black opacity-20 top-0"></div>

        {/* Render Items */}
        {careerData.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isLeft={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Career;