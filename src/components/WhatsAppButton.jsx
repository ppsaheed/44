import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Play notification sound
  const playNotificationSound = () => {
    const audio = new Audio('/sounds/notification.wav');
    audio.volume = 0.3;
    audio.play().catch(e => {
      console.log('Audio play failed:', e);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 300; // Trigger after scrolling 300px

      if (scrollY > scrollThreshold && !hasTriggered) {
        setShowMessage(true);
        setHasTriggered(true);
        playNotificationSound();

        // Auto-hide message after 5 seconds
        setTimeout(() => {
          setShowMessage(false);
        }, 5000);
      } else if (scrollY <= scrollThreshold) {
        setShowMessage(false);
        setHasTriggered(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Message Bubble */}
      {showMessage && (
        <div className="absolute bottom-16 right-0 mb-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg max-w-xs animate-bounce">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium">Hello, I'm Hamad. How may I help you?</p>
          </div>
          <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971561644144?text=Hello,%20I%27m%20interested%20in%20your%20services"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 block"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.95-.501-5.657-1.457l-6.201 1.625zm6.597-3.807c1.676.899 3.274 1.342 4.913 1.343 5.185 0 9.39-4.205 9.392-9.392 0-5.185-4.206-9.39-9.393-9.39-5.186 0-9.391 4.205-9.392 9.39 0 2.102.688 4.056 1.823 5.643l-.997 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-1.135-1.012-1.897-2.268-2.122-2.664-.224-.396-.024-.579.13-.732.16-.158.297-.347.446-.521.15-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.232 5.076 4.487 2.981 1.254 3.576.932 4.232.877.656-.054 2.031-.825 2.329-1.624.297-.799.297-1.47.202-1.624-.099-.149-.272-.224-.57-.373z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
