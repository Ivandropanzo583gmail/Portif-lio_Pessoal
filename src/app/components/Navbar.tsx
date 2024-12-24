import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSun } from "react-icons/fi"; // Ícone para o tema

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } shadow-md`}
    >
      {/* Logo */}
      <div className="text-xl font-bold">
        <span className="text-purple-500">Ivandro</span>Panzo
      </div>

      {/* Botões (tema e menu) */}
      <div className="flex items-center space-x-4">
        {/* Alternar Tema */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full focus:outline-none transition-all duration-300"
        >
          <FiSun
            size={24}
            className={`${darkMode ? "text-yellow-400" : "text-gray-800"}`}
          />
        </button>

        {/* Ícone de Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md md:hidden focus:outline-none"
        >
          {menuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`absolute top-0 right-0 w-64 h-screen transform ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        } shadow-lg transition-all duration-500 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          {/* Botão de Fechar */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-2xl"
          >
            <AiOutlineClose size={24} />
          </button>

          {/* Links do Menu */}
          <a href="/" className="text-lg hover:text-purple-400">
            Casa
          </a>
          <a href="#About" className="text-lg hover:text-purple-400">
            Sobre
          </a>
          <a href="#Project" className="text-lg hover:text-purple-400">
            Projeto
          </a>
          <a href="#Contact" className="text-lg hover:text-purple-400">
            Contato
          </a>
        </div>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex space-x-6">
        <a
          href="/"
          className={`text-lg ${
            darkMode ? "hover:text-gray-400" : "hover:text-purple-600"
          }`}
        >
          Casa
        </a>
        <a
          href="#About"
          className={`text-lg ${
            darkMode ? "hover:text-gray-400" : "hover:text-purple-600"
          }`}
        >
          Sobre
        </a>
        <a
          href="#Project"
          className={`text-lg ${
            darkMode ? "hover:text-gray-400" : "hover:text-purple-600"
          }`}
        >
          Projeto
        </a>
        <a
          href="#Contact"
          className={`text-lg ${
            darkMode ? "hover:text-gray-400" : "hover:text-purple-600"
          }`}
        >
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
