import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

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
        <motion.div className="flex flex-col justify-center" variants={variants}>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-purple-500">Ivandro</span>
          </h1>
          <p className="text-lg mb-6">Desenvolvedor front-end e entusiasta da inovação</p>
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
              onClick={toggleModal}
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
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg p-6 max-w-3xl w-full relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black dark:hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Currículo Vitae</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Informações Pessoais</h3>
                <p>Nome: Ivandro Panzo</p>
                <p>Telefone: 947838429</p>
                <p>E-mail: ivandropanzo583@gmail.com</p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://ao.linkedin.com/in/ivandro-panzo-82947a319"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500"
                  >
                    Perfil do LinkedIn
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    href="https://github.com/Ivandropanzo583gmail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500"
                  >
                    Repositório no GitHub
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Resumo Profissional</h3>
                <p>
                  Comecei a estudar programação aos 14 anos, atualmente com 17
                  anos, procuro minha primeira vaga formal no mercado de
                  trabalho. Sou motivado por desafios e pela oportunidade de
                  aprender.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Experiência Profissional</h3>
                <p>
                  <strong>Start-Up: ADJ-PRO</strong> <br />
                  Programador Freelancer
                </p>
                <ul className="list-disc ml-6">
                  <li>
                    Desenvolvimento de soluções em React.js e React Native.
                  </li>
                  <li>
                    Colaboração com equipes para implementar funcionalidades.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Certificações</h3>
                <p>
                  React.js:{" "}
                  <a
                    href="https://app.rocketseat.com.br/certificates/bd47d144-c9f7-459c-9cbb-b582b3df40ed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500"
                  >
                    Certificado
                  </a>
                </p>
                <p>
                  React Native:{" "}
                  <a
                    href="https://app.rocketseat.com.br/certificates/ff5986cd-2dbe-4594-a857-bcedd51cce96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500"
                  >
                    Certificado
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default AboutSection;
