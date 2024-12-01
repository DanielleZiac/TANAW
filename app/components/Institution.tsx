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
  <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center sm:text-left">
    TOP 3 LIKED POSTS OF <br />
    {selectedInstitution.institution} - {selectedInstitution.campus}
  </h2>
  <hr className="border-black mb-4 mx-auto sm:mx-0 w-3/4 sm:w-3/5" />

  {/* Posts Container */}
  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
    {topPosts.slice(0, 3).map((post, index) => (
      <div
        key={index}
        className="bg-black bg-opacity-60 rounded-lg shadow-lg w-[150px] sm:w-[180px] h-[180px] relative p-3 flex flex-col items-center"
      >
        {/* Post Image */}
        <div className="w-full h-[65%] mb-2 overflow-hidden rounded-md">
          <img
            src={post.url}
            alt="Post"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post Description */}
        <p className="text-center text-xs sm:text-sm text-white font-semibold mb-1">
          {post.caption}
        </p>

        {/* Likes and Date */}
        <div className="text-center text-xs text-gray-300">
          <p>{post.total_count} Likes</p>
          <p>{post.created_date}</p>
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
