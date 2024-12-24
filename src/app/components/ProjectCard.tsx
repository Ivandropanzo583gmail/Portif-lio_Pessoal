import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  darkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, darkMode }) => {
  return (
    <div
      className={`flex-shrink-0 w-64 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;



















