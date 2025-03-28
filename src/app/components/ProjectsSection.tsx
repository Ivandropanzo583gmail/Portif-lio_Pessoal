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
    if (container) {
      container.scrollTo({ left: 0, behavior: "smooth" });
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
      title: "Streeming",
      description: "O melhor app de entretenimento",
      image: "/Project/icon.gif",
      link: "https://pn-streeming.vercel.app/",
    },
    {
      title: "Pesquisa por repositório",
      description: "Faça já a sua pesquisa.",
      image: "/project/ft-tec.png",
      link: "https://pesquisa-por-repos.vercel.app/",
    },
    {
      title: "Site de filmes",
      description: "O melhor site de filmes",
      image: "/Project/transferir.jfif", 
      link: "https://site-de-filmes-one.vercel.app/", 
    },
  ];

  return (
    <section
      id="Project"
      className={`py-10 ${darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}`}
    >
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div
        ref={scrollRef}
        className="flex justify-center items-center space-x-4 overflow-x-auto scrollbar-hide p-4"
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth", // Garantir o scroll suave
        }}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform scroll-snap-start"
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
