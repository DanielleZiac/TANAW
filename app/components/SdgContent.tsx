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
    src: `/images/SDG/sdg${index + 1}.png`,
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
      <div key={index} className={`relative flex flex-col items-center ${customClasses}`}>
        <button
          onClick={() => handlePostClick(post)}
          className="w-24 h-24 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center focus:outline-none"
        >
          <img src={post.src} alt={post.alt} className="object-cover w-full h-full" />
        </button>
        <div className="absolute -top-2 -right-2 sm:h-10 sm:w-40 bg-bubbleGray text-black text-lg rounded-full px-2 py-1 shadow-lg">
          {post.message}
        </div>
      </div>
    ));

  const sdgTitle = SDG_TITLES[parseInt(id) - 1];

  return (
    <div className="content-container p-6 flex flex-col items-center overflow-hidden sm:-mt-12 ">
      {/* Extra Top Row */}
      <div className="flex space-x-6 mb-8 sm:ml-36">{renderPosts(posts.slice(0, 5))}</div>

      {/* Top Row */}
      <div className="flex space-x-6 mb-8 sm:mr-36">{renderPosts(posts.slice(6, 11))}</div>

      {/* Overlapping Rows */}
      <div className="flex space-x-6 mb-8 sm:mr-[800px]">{renderPosts(posts.slice(11, 13), 'sm:-mb-96')}</div>
      <div className="flex space-x-6 sm:ml-[1150px] sm:-mt-8">{renderPosts(posts.slice(12, 13), 'sm:-mb-96')}</div>
      <div className="flex space-x-6 sm:mr-[950px]">{renderPosts(posts.slice(14, 16), 'sm:-mb-[500px] sm:mt-64')}</div>
      <div className="flex space-x-6 sm:ml-[1300px]">{renderPosts(posts.slice(0, 1), 'sm:-mb-[500px] sm:mt-64')}</div>
      <div className="flex space-x-6 sm:mr-[800px]">{renderPosts(posts.slice(1, 3), 'sm:-mb-[700px] sm:mt-[500px]')}</div>
      <div className="flex space-x-6 sm:ml-[1150px]">{renderPosts(posts.slice(1, 2), 'sm:-mb-[700px] sm:mt-[475px]')}</div>

      {/* Center SDG Image */}
      <div className="relative mb-10 z-10">
        <div className="image-container mb-8">
          <img src={`/images/sdg${id}.png`} alt={`SDG ${id}`} className="sdg-image" />
        </div>
      </div>

      {/* Bottom Rows */}
      <div className="flex space-x-6 mb-8 sm:ml-36">{renderPosts(posts.slice(7, 12))}</div>
      <div className="flex space-x-6 mb-8 sm:mr-36">{renderPosts(posts.slice(10, 15))}</div>
      <div className="flex space-x-6 sm:ml-36">{renderPosts(posts.slice(11, 17))}</div>


      
      {/* Modal for the clicked post */}
      {selectedPost && (
        <div className="fixed inset-0 bg-none bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white bg-opacity-20 sm:rounded-[2.5rem] shadow-2xl sm:w-[80%] sm:h-[70%] relative p-6 overflow-y-auto">
            <div className="bg-black bg-opacity-60 sm:rounded-[2.5rem] shadow-2xl sm:w-full sm:h-full relative p-6 overflow-y-auto">
              {/* Close Button */}
              <button onClick={closeModal} className="absolute top-10 right-10 text-white hover:text-red-500">
                <AiOutlineClose size={96} />
              </button>

              {/* Warning Icon */}
              <FaExclamationTriangle className="absolute top-10 left-10 text-white w-24 h-24 drop-shadow-[0_0_4px_white]" />

              {/* Post Image */}
              <div className="flex justify-center mt-36 mb-6">
                <div className="w-full max-w-3xl overflow-hidden rounded-[9rem]">
                  <img src={selectedPost.src} alt={selectedPost.alt} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Post Description */}
              <div className="flex justify-center items-center px-6 py-8 bg-white rounded-full shadow-inner mb-6 mx-4">
                <p className="text-4xl text-black font-semibold text-center">{selectedPost.message}</p>
              </div>

              {/* Likes and Date */}
              <div className="flex justify-between items-center px-6 py-10 bg-none mb-6 mx-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="font-bold text-[50px]">67</span>
                </div>
                <span className="font-bold text-[50px]">03/10/2024</span>
              </div>

              {/* SDG Tag and Event Info */}
              <div className="flex items-center justify-between bg-white p-3 rounded-[4rem] shadow-lg mx-4">
                <img src={`/images/sdg${id}.png`} alt="SDG Icon" className="p-4 w-1/2 rounded-full" />
                <div className="flex flex-col items-start w-2/3 ml-1">
                  <p className="text-[2rem] font-extrabold text-dBlue">{sdgTitle}</p>
                  <p className="text-[2rem] font-bold text-dBlue">Photo Challenge</p>
                  <div className="flex items-center space-x-3 pt-16">
                    <img src="/images/bsu.png" alt="BSU Logo" className="w-24 h-24 rounded-full -ml-20" />
                    <div className="flex flex-col text-left">
                      <p className="text-[28px] text-dBlue">Batangas State University</p>
                      <p className="text-[28px] text-dBlue">What Event</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          
        </div>
      )}
      
  <div className="max-w-5xl w-full mx-auto sm:mt-10 mb-10 flex items-center bg-white rounded-full shadow-lg px-5 py-4">
    {/* Left Circular Button */}
    <Link href={`/sdg/${id}/createpost`}>
      <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mr-4">
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
      className="flex-grow bg-gray-100 rounded-full py-2 px-4 focus:outline-none text-lg"
    />

    {/* Right Circular Button */}
    <Link href="/photochallenges">
      <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md ml-4">
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