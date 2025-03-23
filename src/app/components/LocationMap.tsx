import React from "react";

const LocationMap: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-4xl h-96 border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63063.95279541819!2d13.375134317777261!3d-8.926260079412357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1a51f85656f8de85%3A0x56d2db07c0880ca7!2s39VX%2BFX6%20Jean%20Piaget%20University%20-%20Angola%2C%20Apartado%2081%2C%20R.%20direita%20do%20Piaget%2C%20Luanda!3m2!1d-8.907359099999999!2d13.400911299999999!5e0!3m2!1sen!2sao!4v1742758526448!5m2!1sen!2sao"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
      </div>
    </div>
  );
};

export default LocationMap;
