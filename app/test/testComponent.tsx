import React from 'react';

const LongStripPage = () => {
  const smoothScrollDown = () => {
    // Smoothly scrolls down to the bottom of the strip
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const smoothScrollUp = () => {
    // Smoothly scrolls up to the top of the strip
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col w-full h-[200vh] relative overflow-hidden">
      {/* Top Section with Button */}
        <div className="flex items-center justify-center h-screen text-center">
            <button
            onClick={smoothScrollDown}
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition-colors"
            >
            Scroll Down
            </button>
        </div>

      
        <div className="h-[200px] bg-gray-300 p-64 m-20">hi
        </div>
      

        {/* Bottom Section with Scroll Up Button */}
        <div className="absolute bottom-0 w-full h-screen flex items-center justify-center bg-gray-100">
            <button
            onClick={smoothScrollUp}
            className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-700 transition-colors"
            >
            Scroll Up
            </button>
        </div>
    </div>
  );
};

export default LongStripPage;
