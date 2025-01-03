"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    if (container) {
      const scrollInterval = setInterval(() => {
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        } else {
          scrollAmount += 2;
        }
        container.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }, 80);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  const projects = [
    {
      title: "FreelanceHours",
      description: "Landing Page para pet shop.",
      image: "/Project/Logo.png",
      link: "https://php-feelance.vercel.app/",
    },
    {
      title: "Agricultura",
      description: "Construindo o futuro através da tecnologia.",
      image: "/project/image.png",
      link: "https://agricultura-y.vercel.app/",
    },
    {
      title: "Pesquisa por repositório",
      description: "Faça já a sua pesquisa.",
      image: "/project/ft-tec.png",
      link: "https://pesquisa-por-repos.vercel.app/",
    },
  ];

  return (
    <section
      id="Project"
      className={`py-10 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div
        ref={scrollRef}
        className="flex justify-center items-center space-x-4 overflow-x-auto scrollbar-hide p-4"
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              darkMode={darkMode}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
