// components/FloatingDropdown.tsx
import React, { useState } from "react";
import { FaPalette, FaBuilding, FaFire, FaCalendarAlt, FaTrophy } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";

const FloatingDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Floating Circle Button */}
      <button
        onClick={toggleDropdown}
        className="fixed right-2 top-[90px] z-50 rounded-full bg-white  p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 30 30"
          fill="none"
          className="text-cBlue"
        >
          <path
            d="M8.75 26.25C7.42392 26.25 6.15215 25.7232 5.21447 24.7855C4.27678 23.8479 3.75 22.5761 3.75 21.25V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H11.25C11.913 3.75 12.5489 4.01339 13.0178 4.48223C13.4866 4.95107 13.75 5.58696 13.75 6.25V21.25C13.75 22.5761 13.2232 23.8479 12.2855 24.7855M8.75 26.25C10.0761 26.25 11.3479 25.7232 12.2855 24.7855M8.75 26.25H23.75C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75V18.75C26.25 18.087 25.9866 17.4511 25.5178 16.9822C25.0489 16.5134 24.413 16.25 23.75 16.25H20.8212M12.2855 24.7855L22.8925 14.1788C23.3612 13.7099 23.6245 13.0742 23.6245 12.4112C23.6245 11.7483 23.3612 11.1126 22.8925 10.6438L19.3562 7.1075C18.8874 6.63882 18.2517 6.37553 17.5888 6.37553C16.9258 6.37553 16.2901 6.63882 15.8212 7.1075L13.75 9.17875M8.75 21.25H8.7625"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed right-2 top-[114px] z-40 bg-white shadow-lg py-4 px-2 rounded-b-full flex flex-col items-center space-y-3">
          {/* Institution Link */}
          <a
            href="/dashboard/institution"
            className="flex flex-col items-center text-gray-300 hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 30 30"
              fill="none"
              className="text-cBlue"
            >
             <path
      d="M23.75 26.25V6.25C23.75 5.58696 23.4866 4.95107 23.0178 4.48223C22.5489 4.01339 21.913 3.75 21.25 3.75H8.75C8.08696 3.75 7.45107 4.01339 6.98223 4.48223C6.51339 4.95107 6.25 5.58696 6.25 6.25V26.25M23.75 26.25H26.25M23.75 26.25H17.5M6.25 26.25H3.75M6.25 26.25H12.5M17.5 26.25V20C17.5 19.6685 17.3683 19.3505 17.1339 19.1161C16.8995 18.8817 16.5815 18.75 16.25 18.75H13.75C13.4185 18.75 13.1005 18.8817 12.8661 19.1161C12.6317 19.3505 12.5 19.6685 12.5 20V26.25M17.5 26.25H12.5M11.25 8.75H12.5M11.25 13.75H12.5M17.5 8.75H18.75M17.5 13.75H18.75"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

            </svg>
            
          </a>
          <a
            href="dashboard/halloffame"
            className="flex flex-col items-center text-gray-300 hover:text-blue-500"
          >
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 30 30"
    fill="none"
    className="text-cBlue"
  >
    <path
      d="M22.0713 23.3212C20.1959 25.1967 17.6522 26.2503 15 26.2503C12.3478 26.2503 9.80418 25.1967 7.92876 23.3212C6.05335 21.4458 4.99976 18.9022 4.99976 16.25C4.99976 13.5978 6.05335 11.0542 7.92876 9.17875C7.92876 9.17875 8.75001 11.25 11.25 12.5C11.25 10 11.875 6.25 14.9825 3.75C17.5 6.25 20.1125 7.22125 22.07 9.17875C23.0002 10.1062 23.7379 11.2084 24.2407 12.422C24.7436 13.6355 25.0016 14.9364 25 16.25C25.0018 17.5635 24.7439 18.8644 24.2413 20.0779C23.7387 21.2914 23.0012 22.3937 22.0713 23.3212Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.3487 20.1513C12.7842 20.5869 13.3203 20.9085 13.9096 21.0877C14.4989 21.2669 15.1233 21.2982 15.7276 21.1789C16.3318 21.0595 16.8974 20.7931 17.3743 20.4032C17.8511 20.0134 18.2246 19.512 18.4618 18.9436C18.6989 18.3751 18.7923 17.7569 18.7338 17.1438C18.6753 16.5306 18.4667 15.9413 18.1263 15.4279C17.786 14.9145 17.3244 14.4929 16.7824 14.2002C16.2404 13.9076 15.6347 13.753 15.0188 13.75L13.75 17.5H11.25C11.25 18.46 11.6162 19.42 12.3487 20.1513Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
          </a>

          {/* Leaderboard Link */}
          <a
            href="/dashboard/leaderboard"
            className="flex flex-col items-center text-gray-300 hover:text-blue-500"
          >
            <GoTrophy className="text-cBlue text-xl" />
            
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingDropdown;