"use client";
import LocationMap from "./LocationMap";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaWhatsapp } from "react-icons/fa";

interface ContactSectionProps {
  darkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Limpa o erro ao alterar os valores
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validação básica
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Enviar o e-mail via API
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Limpa o formulário
      } else {
        const data = await response.json();
        setError(data.error || "Failed to send the message. Please try again later.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      id="Contact"
      className={`flex flex-col lg:flex-row justify-between items-center gap-8 p-8 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="flex flex-col items-center lg:items-start gap-4">
        {/* Imagem no lugar do avatar */}
        <div className="rounded-full overflow-hidden w-20 h-20 flex items-center justify-center bg-gray-300">
          <img
            src="./About/me.png"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">
          Gostou do meu trabalho? Vamos trabalhar juntos
          </h2>
          <p className="mt-2">
          Estou sempre pronto para um bate-papo. Envie-me um e-mail para {" "}
            <a
              href="mailto:ivandropanzo583@gmail.com"
              className="text-blue-500 underline"
            >
              este link
            </a>{" "}
            ou me dê um grito nas redes sociais...
          </p>
        </div>
        <div className="flex space-x-4 mt-4">
          {/* Ícones sociais */}
          <a
            href="https://www.facebook.com/reidas.mboa.3"
            className={`p-2 rounded-full ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label="Facebook"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="https://wa.me/947838429"
            className={`p-2 rounded-full ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label="Whatsapp"
          >
            <FaWhatsapp className="text-xl" />
          </a>
          <a
            href="https://ao.linkedin.com/in/ivandro-panzo-82947a319"
            className={`p-2 rounded-full ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>
      </div>
      <LocationMap />
    </div>
  );
};

export default ContactSection;
