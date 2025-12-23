import React, { useState, useEffect, useRef } from 'react';

const TimelineItem = ({ year, role, company, description, tech = [], isLeft }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
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
      className={`flex w-full items-center justify-between mb-12 transition-all duration-1000 ease-out
        ${isLeft ? 'flex-row-reverse' : ''}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'} 
      `}
    >
      
      {/* 1. CONTENT CARD */}
      <div className="w-5/12 relative group"> 
        
        {/* Connector Line */}
        <div className={`hidden md:block absolute top-6 h-[2px] bg-black transition-all duration-1000
          ${isLeft ? '-right-8 w-8' : '-left-8 w-8'}
          ${isVisible ? 'opacity-100' : 'opacity-0 width-0'}
        `}></div>

        <div className={`relative p-6 border border-black bg-white z-20 
          ${isLeft ? 'text-right' : 'text-left'} 
          hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300
        `}>
          
          {/* Schematic Corners */}
          <div className="absolute -top-1 -left-1 text-[10px] leading-none text-black bg-white">+</div>
          <div className="absolute -top-1 -right-1 text-[10px] leading-none text-black bg-white">+</div>
          <div className="absolute -bottom-1 -left-1 text-[10px] leading-none text-black bg-white">+</div>
          <div className="absolute -bottom-1 -right-1 text-[10px] leading-none text-black bg-white">+</div>

          {/* Year */}
          <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase border border-black bg-gray-50">
            {year}
          </span>

          <h3 className="text-xl font-bold uppercase tracking-tight mb-1">{role}</h3>
          <h4 className="text-sm font-serif italic mb-4 text-gray-600">{company}</h4>
          
          {/* --- UPDATED DESCRIPTION LOGIC --- */}
          {/* We check if description is an array to avoid breaking old data */}
          {/* --- UPDATED LIST LOGIC --- */}
        <ul className={`mb-4 text-xs leading-relaxed opacity-80 font-mono list-disc 
        ${isLeft ? 'mr-4 rtl' : 'ml-4'}
        [&_strong]:text-black [&_strong]:opacity-100 [&_strong]:font-black
        `}>
        {Array.isArray(description) ? (
            description.map((point, i) => (
            <li 
                key={i} 
                className="mb-1 marker:text-black pl-1"
                dangerouslySetInnerHTML={{ __html: point }}
            />
            ))
        ) : (
            <li>{description}</li>
        )}
        </ul>

          {/* Tech Stack */}
          <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            {tech.map((item, index) => (
              <span key={index} className="px-2 py-0.5 text-[10px] font-bold border border-gray-300 text-gray-600 uppercase">
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* 2. CENTER DOT */}
      <div className="w-2/12 flex justify-center relative">
        <div className={`h-3 w-3 bg-white rounded-full border-2 border-black z-10 transition-transform duration-500 delay-300 ${isVisible ? 'scale-100' : 'scale-0'}`}>
          <div className="w-full h-full rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>

      {/* 3. EMPTY SPACE */}
      <div className="w-5/12"></div>
      
    </div>
  );
};

export default TimelineItem;