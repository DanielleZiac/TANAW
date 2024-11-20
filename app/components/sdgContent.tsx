import React, { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { SDG_TITLES } from '../data/sdgTitles';

interface Post {
  src: string;
  alt: string;
  message: string;
}

const SdgContent = ({ id }: { id: string }) => {
  // Using the SDG PNG images as placeholders for trial
  const posts: Post[] = Array.from({ length: 16 }, (_, index) => ({
    src: `/images/sdg${index + 1}.png`,
    alt: `Post ${index + 1} for SDG ${id}`,
    message: `Message ${index + 1}`,
  }));

  // State to manage the clicked post
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Function to handle post click
  const handlePostClick = (post: Post) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  // Function to render posts
  const renderPosts = (postArray: Post[], customClasses = '') =>
    postArray.map((post, index) => (
      <div key={index} className={`relative flex  flex-col px-1 items-center ${customClasses}`}>
        <button
          onClick={() => handlePostClick(post)}
          className="w-[70px] h-[70px] sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center focus:outline-none"
        >
          <img src={post.src} alt={post.alt} className="object-cover w-full h-full" />
        </button>
        <div className="absolute z-20 -top-2 -right-2 sm:h-6 sm:w-28 bg-bubbleGray text-black text-xs sm:text-sm rounded-full px-1 py-1 shadow-lg">
          {post.message}
        </div>
      </div>
    ));

    const sdgTitle = SDG_TITLES[parseInt(id) - 1];
  return (
    <div className="content-container p-2 -mt-8 flex flex-col items-center overflow-hidden sm:-mt-6">
      {/* Extra Top Row */}
      <div className="flex space-x-2 mb-4  mr-8 sm:ml-16">{renderPosts(posts.slice(0, 5))}</div>

      {/* Top Row */}
      <div className="flex space-x-2 mb-6 ml-12 sm:mr-16">{renderPosts(posts.slice(6, 11))}</div>

      
      <div className="absolute left-0 flex flex-col space-y-2 mt-5 mb-32 z-20 ">
          <div className="flex space-x-2 -ml-10">{renderPosts(posts.slice(0, 2))}</div>
          <div className="flex space-x-2 -ml-20">{renderPosts(posts.slice(2, 4))}</div>
          <div className="flex space-x-2 -ml-10">{renderPosts(posts.slice(2, 4))}</div>  
        </div>

      {/* Center SDG Image */}
      <div className="relative   z-10 flex justify-center items-center w-full">
  <div className="image-container  ml-20 flex justify-center">
    <img 
      src={`/images/sdg${id}.png`} 
      alt={`SDG ${id}`} 
      className="sdg-image w-48 h-48 sm:w-72 sm:h-72 mr-5" 
    />
  </div>
</div>
<div className="absolute right-0 flex flex-col space-y-2 mt-5 mb-32 overflow-hidden z-20">
  {/* First Circle - Keep it aligned normally */}
  <div className="flex space-x-2 ml-44">{renderPosts(posts.slice(0, 1))}</div>

  {/* Second Circle - Push it halfway off-screen */}
  <div className="flex space-x-2 transform ml-40 translate-x-1/2">
    {renderPosts(posts.slice(2, 3))}
  </div>

  {/* Third Circle - Aligned normally */}
  <div className="flex space-x-2 ml-44">{renderPosts(posts.slice(2, 3))}</div>
</div>

      {/* Bottom Rows */}
      <div className="flex space-x-2  mt-5 mb-4 ml-12 sm:ml-16 ">{renderPosts(posts.slice(7, 12))}</div>
      <div className="flex space-x-2 mb-4 mr-12 sm:mr-16">{renderPosts(posts.slice(10, 15))}</div>
      <div className="flex space-x-2 -mb-4 ml-12 sm:mr-16">{renderPosts(posts.slice(10, 15))}</div>

  
  
      {/* Modal for the clicked post */}
      {selectedPost && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
    <div className="bg-white bg-opacity-30 rounded-2xl shadow-2xl w-full max-w-[90%] sm:max-w-[80%] h-[85%] sm:h-[80%] relative overflow-y-auto">
      <div className="bg-black bg-opacity-60 rounded-2xl shadow-xl p-4 w-full h-full">
        
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white hover:text-red-500"
        >
          <AiOutlineClose className="w-10 h-10 sm:w-14 sm:h-14" />
        </button>

        {/* Warning Icon */}
        <FaExclamationTriangle className="absolute top-4 left-4 text-white w-8 h-8 sm:w-12 sm:h-12 drop-shadow-[0_0_3px_white]" />

        {/* Post Image */}
        <div className="flex justify-center mt-10 mb-4 sm:mt-12 sm:mb-8">
          <div className="w-full max-w-xs sm:max-w-sm overflow-hidden rounded-2xl">
            <img
              src={selectedPost.src}
              alt={selectedPost.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Post Description */}
        <div className="flex justify-center items-center px-4 py-3 bg-white rounded-full shadow-inner mb-4 mx-2">
          <p className="text-lg sm:text-2xl text-black font-semibold text-center">{selectedPost.message}</p>
        </div>

        {/* Likes and Date */}
        <div className="flex justify-between items-center px-3 py-3 bg-transparent mb-4 mx-2">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="font-bold text-lg sm:text-2xl">67</span>
          </div>
          <span className="font-bold text-lg sm:text-2xl">03/10/2024</span>
        </div>

        {/* SDG Tag and Event Info */}
        <div className="flex items-center justify-between bg-white p-2 rounded-2xl shadow-lg mx-2 mb-4">
          <img
            src={`/images/sdg${id}.png`}
            alt="SDG Icon"
            className=" w-[100px] max-w-[100px] sm:max-w-[100px] rounded-full"
          />
          <div className="flex flex-col items-start w-2/3 ml-2">
            <p className="text-base sm:text-lg font-extrabold text-dBlue">{sdgTitle}</p>
            <p className="text-base sm:text-lg font-bold text-dBlue">Photo Challenge</p>
            <div className="flex items-start  pt-4">
              <img src="/images/bsu.png" alt="BSU Logo" className="w-10 h-10 sm:w-14 sm:h-14 -ml-2 rounded-full" />
              <div className="flex flex-col text-left ml-2">
                <p className="text-xs sm:text-base text-dBlue">Batangas State University</p>
                <p className="text-xs sm:text-base text-dBlue">What Event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


<div className=" z-40 max-w-5xl w-full mx-auto sm:mt-10 flex items-center bg-white rounded-full shadow-lg px-5">
  {/* Left Circular Button */}
  <Link href={`/sdg/${id}/createpost`}>
      <button className="w-12 h-8 bg-white rounded-full flex items-center justify-center shadow-md mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-blue-500"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </Link>

  {/* Input Field */}
  <input
    type="text"
    placeholder="Choose a Photo Challenge"
    className="flex-grow bg-gray-100 rounded-full py-2  focus:outline-none text-lg"
  />

  {/* Right Circular Button */}
  <Link href="/photochallenges">
    <button className="w-12 h-8 bg-white rounded-full flex items-center justify-center shadow-md ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-blue-500"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
      </svg>
    </button>
  </Link>
</div>

    </div>

    
  );
};

export default SdgContent;
