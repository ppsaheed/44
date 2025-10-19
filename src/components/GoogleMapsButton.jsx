import React from 'react';

const GoogleMapsButton = () => {
  return (
    <a
      href="https://maps.app.goo.gl/obEUfvAzit63tmsS7"
      className="fixed bottom-16 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300 z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View on Google Maps"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </a>
  );
};

export default GoogleMapsButton;
