"use client";

import React, { useState, useEffect } from 'react';
import BSU from '/public/images/institution/bsulogo.png';
import ADMU from '/public/images/institution/admulogo.png';
import DLSU from '/public/images/institution/dlsulogo.png';
import SDGlink4 from '/public/images/SDG/SDGlink4.jpg';
import SDGlink5 from '/public/images/SDG/SDGlink5.jpg';
import SDGlink6 from '/public/images/SDG/SDGlink6.jpg';
import Logo from '../explore/sdglink/SDG/explorebg.png';
import TextBoxPanel from '../styles/textBox';
import FloatingDropdown from '../components/layouts/FloatingDropDown';
import { getTopLiked } from "../dashboard/actions";
import { FaExclamationTriangle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { SDG_TITLES } from '../data/sdgTitles';
import { addLike, removeLike, getLikedPostsSdgs, getNumberOfLikes, filterSdgs } from "../dashboard/actions";

// Institution data
const institutions = [
  { id: 1, title: 'Batangas State University', image: BSU },
  { id: 2, title: 'Ateneo De Manila University', image: ADMU },
  { id: 3, title: 'De La Salle University', image: DLSU },
  { id: 4, title: 'Quality Education', image: SDGlink4 },
  { id: 5, title: 'Gender Equality', image: SDGlink5 },
  { id: 6, title: 'Clean Water and Sanitation', image: SDGlink6 },
];

// Placeholder data for dynamic "Top 3 Liked Posts"
const top3Posts = {
  1: [SDGlink4, SDGlink5, SDGlink6],
  2: [SDGlink5, SDGlink6, SDGlink4],
  3: [SDGlink6, SDGlink4, SDGlink5],
};

interface Institution {
  institution_id: String,
  institution: String,
  campus: String,
  institution_logo: String
}

const Page: React.FC<Institution> = ({data}) => {
  const [selectedInstitution, setSelectedInstitution] = useState(data[0]);
  const [topPosts, setTopPosts] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null); // State for selected post
  const [modalOpen, setModalOpen] = useState(false); // Modal visibility state

  useEffect(() => {
    async function getTopPosts(institution_id) {
      const topLiked = await getTopLiked(institution_id);
      setTopPosts(topLiked);
    }

    getTopPosts(selectedInstitution.institution_id);
  }, [selectedInstitution]);

  const handleInstitutionClick = (institution: typeof institutions[number]) => {
    setSelectedInstitution(institution);
  };

  const openModal = (post: any) => {
    setSelectedPost(post);
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="bg-transparent flex flex-col lg:flex-row h-full w-full md:w-screen md:items-center lg:items-start lg:w-[80vw] lg:h-full lg:overflow-hidden lg:space-x-8  p-12 lg:ml-64 mt-4">
      <FloatingDropdown />
      <div className="flex flex-col justify-start lg:w-2/3 sm:w-full">

        <div className="lg:w-[500px] lg:h-[350px] flex items-center justify-center lg:ml-24 mt-8"> 
        <img
            src={selectedInstitution.institution_logo} 
            alt="Logo"
            className="object-contain md:w-4/5 md:h-4/5 lg:w-full lg:h-full" 
        />
        </div>
        <br/>

        <section className="mt-4 px-4">
  {/* Header with Button */}
  <div className="flex justify-between items-center mb-2">
    <h2 className="text-xl sm:text-2xl font-semibold">
      TOP 3 LIKED POSTS OF <br />
      {selectedInstitution.institution} - {selectedInstitution.campus}
    </h2>
    <Link href="/dashboard/gallery">
    <button
      className="text-dBlue py-1 text-lg font-bold w-36 sm:w-48 bg-white border border-gray-300 rounded-lg hover:shadow-md"
      style={{
        boxShadow:
          "0px 8px 16px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)",
      }}
      
    >
      Gallery
    </button>
    </Link>
  </div>
  <hr className="border-black mb-4 mx-auto sm:mx-0 w-3/4 sm:w-3/5" />

  {/* Posts Container */}
  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
  {topPosts?.slice(0, 3).map((post, index) => (
    <div
      key={index}
      className="bg-black bg-opacity-60 rounded-lg shadow-lg w-[150px] sm:w-[180px] h-auto relative p-3 flex flex-col items-center"
    >
      {/* Post Image */}
      <div className="flex justify-center mb-3">
  <div className="w-full max-w-2xl overflow-hidden "> {/* Added `relative` here */}
    <img
      src={post.url}
      alt={`Post ${index + 1}`}
      className="w-full h-auto object-cover"
    />
    {index === 0 && (
      <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 sm:top-[-25px] text-2xl sm:text-3xl">
        👑
      </span>
    )}
  </div>
</div>


      {/* Post Description */}
      <div className="flex justify-center items-center w-full px-3 py-2 bg-white rounded-full shadow-inner mb-2 overflow-hidden text-ellipsis">
              <p className="text-sm sm:text-lg text-black font-semibold text-center whitespace-nowrap">
                {post.caption}
              </p>
              </div>

      {/* Likes and Date */}
      <div className="flex justify-between items-center px-3 py-2 w-full">
        <div className="flex items-center space-x-2">
          {/* Heart Icon */}
          <svg
            
            className="w-5 h-5 text-white cursor-pointer"
            fill={post.isLiked ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <span className="font-bold text-sm sm:text-base">
            {post.likes}
          </span>
        </div>
        <span className="font-bold text-sm text-white sm:text-base">
          {post.created_date}
        </span>
      </div>
    </div>
  ))}
</div>

</section>

      </div>

      {/* Right Column */}
      <div className="flex flex-col pt-8 md:w-full lg:w-1/2 lg:h-[87vh] overflow-hidden">
        <section className="flex-none">
          <h1 className="text-3xl font-bold mb-2 lg:pl-4">Institutions</h1>
          <hr className="border-black mb-4 w-2/3 lg:ml-4" />
        </section>

        <div className="flex-grow overflow-y-auto space-y-4 px-4 scrollbar-hide pb-4">
          {data.map((institution, index) => (
            <div key={index} className="w-full">
              <TextBoxPanel>
                <button
                  onClick={() => handleInstitutionClick(institution)}
                  className="flex flex-row items-center gap-4 w-full text-left"
                >
                  <img
                    src={institution.institution_logo}
                    alt={`${institution.institution} logo`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-lg text-gray-800">{institution.institution}-{institution.campus}</p>
                    <p className="text-sm text-gray-600">
                      ??????
                      {/*This institution focuses on {institution.title.toLowerCase()}.*/}
                    </p>
                  </div>
                </button>
              </TextBoxPanel>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Page;
