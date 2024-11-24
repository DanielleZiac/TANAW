import React from 'react';
import SDG1 from './icons/SDG1.jpg';
import SDG2 from './icons/SDG2.jpg';
import SDG3 from './icons/SDG3.jpg';
import SDG4 from './icons/SDG4.jpg';
import SDG5 from './icons/SDG5.jpg';
import SDG6 from './icons/SDG6.jpg';
import SDG7 from './icons/SDG7.jpg';
import SDG8 from './icons/SDG8.jpg';
import SDG9 from './icons/SDG9.jpg';
import SDG10 from './icons/SDG10.jpg';
import SDG11 from './icons/SDG11.jpg';
import SDG12 from './icons/SDG12.jpg';
import SDG13 from './icons/SDG13.jpg';
import SDG14 from './icons/SDG14.jpg';
import SDG15 from './icons/SDG15.jpg';
import SDG16 from './icons/SDG16.jpg';
import SDG17 from './icons/SDG17.jpg';
import SunBackground from './SunBackground';

const icons = [
  SDG1,
  SDG2,
  SDG3,
  SDG4,
  SDG5,
  SDG6,
  SDG7,
  SDG8,
  SDG9,
  SDG10,
  SDG11,
  SDG12,
  SDG13,
  SDG14,
  SDG15,
  SDG16,
  SDG17,
];

const IconsComponent: React.FC = () => {
  return (
    <SunBackground>
      {/* Outer container with fixed width on the left side */}
      <div className="w-full pt-48 pb-16 ml-auto flex justify-end"> {/* Use justify-start to align left */}
        {/* Grid container with no max-width to make it wider */}
        <div className="w-auto max-w-full h-auto grid grid-cols-3 gap-10 p-6">
          {icons.map((icon, index) => {
            // Define custom positioning based on your pattern
            let gridColumnStart = 1; // Default start
            let gridRowStart = 1;    // Default start

            // Custom pattern for staggered layout
            switch (index) {
              case 0:
                gridColumnStart = 1;
                gridRowStart = 1;
                break;
              case 1:
                gridColumnStart = 2;
                gridRowStart = 2;
                break;
              case 2:
                gridColumnStart = 3;
                gridRowStart = 3;
                break;
              case 3:
                gridColumnStart = 3;
                gridRowStart = 7;
                break;
              case 4:
                gridColumnStart = 2;
                gridRowStart = 8;
                break;
              case 5:
                gridColumnStart = 1;
                gridRowStart = 9;
                break;
              case 6:
                gridColumnStart = 1;
                gridRowStart = 13;
                break;
              case 7:
                gridColumnStart = 2;
                gridRowStart = 14;
                break;
              case 8:
                gridColumnStart = 3;
                gridRowStart = 15;
                break;
              case 9:
                gridColumnStart = 3;
                gridRowStart = 19;
                break;
              case 10:
                gridColumnStart = 2;
                gridRowStart = 20;
                break;
              case 11:
                gridColumnStart = 1;
                gridRowStart = 21;
                break;
              case 12:
                gridColumnStart = 1;
                gridRowStart = 25;
                break;
              case 13:
                gridColumnStart = 2;
                gridRowStart = 26;
                break;
              case 14:
                gridColumnStart = 3;
                gridRowStart = 27;
                break;
              case 15:
                gridColumnStart = 3;
                gridRowStart = 31;
                break;
              case 16:
                gridColumnStart = 2;
                gridRowStart = 32;
                break;
              case 17:
                gridColumnStart = 1;
                gridRowStart = 33;
                break;
              default:
                break;
            }

            return (
              <div
                key={index}
                className="flex justify-center items-center"
                style={{
                  gridColumnStart: gridColumnStart,
                  gridRowStart: gridRowStart,
                  aspectRatio: '1', // Force square aspect ratio
                  marginTop: '-80%',
                }}
              >
                <button
                  onClick={() => {}}
                  className="w-40 h-40 max-w-full max-h-full object-cover rounded-full shadow-md focus:outline-none"
                >
                  <img
                    src={icon.src} // Use .src to get the correct image path
                    alt={`icon-${index}`}
                    className="w-full h-full object-cover rounded-full" // Ensures the image stays circular
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </SunBackground>
  );
};

export default IconsComponent;