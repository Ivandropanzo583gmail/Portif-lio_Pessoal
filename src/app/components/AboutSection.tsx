import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  // Variantes de animação para as seções
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="About"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`mt-20 py-16 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Lado Esquerdo */}
        <motion.div
          className="flex flex-col justify-center"
          variants={variants}
        >
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-purple-500">Ivandro</span>
          </h1>
          <p className="text-lg mb-6">
            Desenvolvedor front-end e entusiasta da inovação
          </p>
          <p
            className={`mb-6 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Mais de 2 anos de experiência na indústria de tecnologia. Sou
            especialista na construção de aplicativos web e móveis inovadores
            usando tecnologias como React, React Native e Next.
          </p>
          <div className="flex space-x-4">
            <button
              className={`px-6 py-2 rounded ${
                darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              Meu currículo
            </button>
            <Link href="#Contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-2 rounded bg-purple-500 text-white hover:bg-purple-600"
              >
                Entre em contacto →
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Lado Direito */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/About/bro.png"
            alt="Coding illustration"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="./About/SobreMe.png"
            alt="Developer lifestyle"
            className="h-auto w-96"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center"
          variants={variants}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Sobre mim</h2>
          <p className="text-lg mb-6">
            Sou um desenvolvedor de software apaixonado em busca de
            oportunidades.
          </p>
          <p
            className={`mb-6 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Sou estudante de TI do curso de informática, um curioso que procura
            aprender sempre, e reservo sempre algum tempo do dia para pesquisar
            mais e buscar por mais cinhecimento.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`px-6 py-2 rounded ${
              darkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            Meu currículo
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
