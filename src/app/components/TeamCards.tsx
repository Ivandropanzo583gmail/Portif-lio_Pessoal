"use client";

import { useEffect, useRef } from "react";

const members = [
  {
    name: "Sandino Intelg",
    role: "CEO",
    function:"Backend",
    image: "/member1.png",
  },
  {
    name: "Ivandro Panzo",
    role: "Sub-CEO",
    function:"Front-end",
    image: "/member2.png",
  },
  {
    name: "Yuren",
    role: "Co-fundador",
    function:"UI/UX-Designer",
    image: "/member3.png",
  },
];

export default function TeamCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let currentIndex = 0;

    const autoScroll = () => {
      if (!scrollContainer) return;

      const children = scrollContainer.children;
      if (children.length === 0) return;

      currentIndex = (currentIndex + 1) % children.length;
      const nextElement = children[currentIndex] as HTMLElement;

      scrollContainer.scrollTo({
        left: nextElement.offsetLeft,
        behavior: "smooth",
      });
    };

    const interval = setInterval(autoScroll, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto snap-x snap-mandatory md:justify-center gap-4 md:gap-8 scrollbar-hide bg-gray-900 mb-44"
    >
      {members.map((member, index) => (
        <div
          key={index}
          className="snap-center bg-white rounded-lg shadow-md overflow-hidden w-64 sm:w-72 flex-shrink-0 transform hover:scale-105 transition-transform"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-gray-600">{member.function}</p>
          </div>
        

        </div>
      ))}
    </div>
  );
}
