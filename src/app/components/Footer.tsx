// src/app/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="md:flex block justify-between items-center px-8 py-4 bg-gray-900 text-gray-300 max-md:text-center">
      <p>© Ivandro Panzo 2024. IvandroPanzo583@gmail.com.</p>
      <div className="flex  space-x-4 max-md:mt-5 max-md:flex max-md:justify-center max-md:items-center">
        <a href="https://github.com/Ivandropanzo583gmail" className="hover:text-white">
          GitHub
        </a>
        <a href="https://ao.linkedin.com/in/ivandro-panzo-82947a319" className="hover:text-white">
          LinkedIn
        </a>
        <a href="https://wa.me/947838429" className="hover:text-white">
          Whatsapp
        </a>
      </div>
    </footer>
  );
};

export default Footer;
