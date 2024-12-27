import React from "react";

const LocationMap: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-4xl h-96 border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15767.244857887197!2d13.339320239299889!3d-8.897136708542742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f779875ddd15%3A0x26c0d944781d7c82!2sViana!5e0!3m2!1sen!2sao!4v1735312850564!5m2!1sen!2sao"
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
