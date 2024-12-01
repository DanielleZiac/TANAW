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

        <section className="mt-4">
          <h2 className="text-2xl font-semibold mb-2">
            TOP 3 LIKED POSTS OF <br/>{selectedInstitution.institution}-{selectedInstitution.campus}
          </h2>
          <hr className="border-black mb-4 w-3/5" />

          <div
            className="flex flex-col lg:flex-row gap-4 px-4 md:px-4 lg:-ml-8"
          >
            {topPosts ? topPosts.slice(0,3).map((post, index) => (
              <div
                key={index}
                className="relative bg-gray-300 h-32 w-full rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${post.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onClick={() => openModal(post)} // Open modal when post is clicked
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-gray-200 font-semibold text-xl">Post {index + 1}</p>
                </div>
              </div>
            )) : null}
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

      {/* Modal for displaying post details */}
      {modalOpen && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-60 sm:rounded-[2.5rem] shadow-2xl w-[350px] sm:w-[400px] lg:w-[420px] h-[600px] sm:h-[700px] lg:h-[750px] relative p-6">
            {/* Close Button */}
            <button onClick={closeModal} className="absolute top-5 right-5 text-white hover:text-red-500">
              <AiOutlineClose size={36} />
            </button>

            {/* Warning Icon */}
            <FaExclamationTriangle className="absolute top-5 left-5 text-white w-8 h-8" />

            {/* Post Image */}
            <div className="flex justify-center mb-6 mt-12">
              <div className="w-full max-w-2xl overflow-hidden rounded-3xl">
                <img src={selectedPost.url} alt={selectedPost.url} className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Post Description */}
            <div className="flex justify-center items-center px-3 py-3 bg-white rounded-full shadow-inner mb-0">
              <p className="text-lg sm:text-2xl text-black font-semibold text-center">{selectedPost.caption}</p>
            </div>

            {/* Likes and Date */}
            <div className="flex justify-between items-center px-6 py-4 bg-none mb-0 mx-0">
              <div className="flex items-center space-x-3">
                
                <p className="text-gray-300 text-sm">{selectedPost.total_count} Likes</p>
              </div>

              <p className="text-gray-300 text-sm">{selectedPost.created_date}</p>
            </div>

            {/* SDG Tag */}
            <div className="flex justify-between items-center px-6 py-4 bg-none mb-0 mx-0">
              <p className="text-gray-300 text-xl">{selectedPost.sdg_number}</p>
            </div>

            {/* Event Info */}
            <div className="px-8 py-4 w-full flex justify-between items-center bg-none mt-4">
              <p className="text-gray-400 text-lg">{selectedPost.event}</p>

              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
