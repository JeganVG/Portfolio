import React from 'react';
// Adjust path if needed
import TimelineItem from './TimelineItem'; 

const Career = () => {
  // DATA LIVES HERE
  const careerData = [
    {
      year: "Nov 2024 - Present",
      role: "Software Dev Engineer",
      company: "Commvault",
      description: [
        "<strong>Full-stack developer</strong> for the Files and Objects team, delivering core features for Third-party Migration, File Archiving, and Windows File Systems.",
        "Feature owner for multiple core components, driving end-to-end development, enhancements, and Level-3 production support.",
        "Resolved 50+ critical customer escalation tickets and led 30+ live customer sessions, directly contributing to improved system stability and customer retention.",
        "Delivered 12+ major feature initiatives and 150+ updates, ensuring high availability and zero-regression quality across releases."
      ],
      tech: ["CPP","React","SQL","Java","Python"]
    },
    {
      year: "Apr 2024 - Oct 2024",
      role: "Software Dev Intern",
      company: "Commvault",
      description: "Assisted in backend API development and automated testing workflows for legacy systems.",
      tech: ["Node.js", "SQL", "Testing"]
    },
    {
      year: "Dec 2023 - Apr 2024",
      role: "Programmer Analyst Trainee",
      company: "Cloud Rewind (Formerly Appranix)",
      description: "Built varied web projects and learned the fundamentals of Computer Science and System Design.",
      tech: ["JavaScript", "HTML/CSS", "System Design"]
    }
  ];

  return (
    <section id="career-section" className="min-h-screen py-20 px-4 flex flex-col items-center bg-white">
      <div className="relative w-full max-w-4xl">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-black opacity-20"></div>

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