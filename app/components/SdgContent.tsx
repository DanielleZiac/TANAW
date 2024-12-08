"use client";

import React, { useState, useEffect } from "react";
import { FaExclamationTriangle, FaFilter } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { redirect } from "next/navigation";
import { SDG_TITLES } from '../data/sdgTitles';
import { PHOTO_CHALLENGES } from '../data/photoChallenges';
import { addLike, removeLike, getLikedPostsSdgs, getNumberOfLikes, filterSdgs } from "../dashboard/actions";



interface Photos {
  avatar_url: string;
  caption: string;
  created_date: string;
  sdg_number: string;
  url: string;
  user_id: string;
  user_sdg_id: string;
  institution_id: string;
  photo_challenge?: string;
  institution: string;
  campus: string;
  institution_logo: string;
}

interface Liked {
  user_sdg_id: string;
  user_sdgs: { sdg_number: string }[];
}

interface DataProps {
  data: [
    user_id: string,
    sdg: number, 
    photos: Array<Photos> | undefined,
    liked: Array<Liked> | undefined,
    institution_id: string | undefined
  ];
}

const SdgContent: React.FC<DataProps> = ({ data }) => {
  const user_id = data[0];
  const sdg = data[1];
  const photos = data[2];
  const curLiked = data[3];
  const institution_id = data[4]

  console.log(data)

  // console.log(photos[0].institution_id)
  // console.log(photos)

  const [selectedPost, setSelectedPost] = useState<Photos | null>(null);
  const [isLiked, setLiked] = useState<string | "none">("none");
  const [likedPosts, setLikedPosts] = useState<Array<Liked> | undefined>(curLiked);
  const [likes, setLikes] = useState<number | null>(0);
  const [displayPhoto, setDisplayPhoto] = useState<Array<Photos> | undefined>(photos);

  

  // Dropdown state
  const [filterDropdownVisible, setFilterDropdownVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["Today", "Yesterday", "Last Week", "Last Month", "All"];

  useEffect(() => {
    async function changeDisplayPhoto(selectedFilter: string) {
      let newPhotos;

      console.log(displayPhoto)

      if (institution_id && photos) {
        console.log("here", institution_id)
        newPhotos = await filterSdgs(Number(sdg), selectedFilter.toLowerCase(), institution_id)
      } else {
        newPhotos = await filterSdgs(Number(sdg), selectedFilter.toLowerCase(), undefined);
      }

      // console.log(photos?.length)
      setDisplayPhoto(newPhotos)
    }
    changeDisplayPhoto(selectedFilter)
    console.log(selectedFilter.toLowerCase())
  }, [selectedFilter])

  const handleFilterSelect = async (filter: string) => {
    setSelectedFilter(filter);
    setFilterDropdownVisible(false);
  };

  // console.log("Filter Selected: ", selectedFilter)

  const liked = async (user_sdg_id: string) => {
    const userSdgIdElem = document.getElementById(user_sdg_id) as HTMLInputElement | null;

    if (userSdgIdElem) {
      const fill = userSdgIdElem.getAttribute("fill");
      const numLikesElem = document.getElementById(user_sdg_id + "likes") as HTMLInputElement | null;

      if (numLikesElem) {
        if (fill === "red") {
          removeLike(user_sdg_id, user_id);
          userSdgIdElem.setAttribute("fill", "none");
          numLikesElem.textContent = String(Number(numLikesElem.textContent) - 1);
        } else {
          addLike(user_sdg_id, user_id);
          userSdgIdElem.setAttribute("fill", "red");
          numLikesElem.textContent = String(Number(numLikesElem.textContent) + 1);
        }

        const liked = await getLikedPostsSdgs(user_id, sdg);
        setLikedPosts(liked);
      } else {
        console.log("numLikesElem not found");
      }
    } else {
      console.log("userSdgIdElem not found");
    }
  };

  const handlePostClick = async (post: Photos) => {
    const likeNums = await getNumberOfLikes(post.user_sdg_id);

    if (likedPosts) {
      for (let i = 0; i < likedPosts.length; i++) {
        if (post.user_sdg_id === likedPosts[i].user_sdg_id) {
          setLiked("red");
          break;
        }
      }

      if (likeNums !== undefined) {
        setLikes(likeNums);
        setSelectedPost(post);
      } else {
        console.log("likeNums not found");
      }
    } else {
      console.log("likedPosts not found");
    }
  };

  const closeModal = () => {
    setSelectedPost(null);
    setLiked("none");
  };

  const renderPosts = (postArray: Photos[], customClasses = "") => {
    return postArray.map((post, index) => (
      <div key={index} className={`relative flex flex-col items-center ${customClasses}`}>
        <div className="group flip-card w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] rounded-full overflow-hidden relative">
        
          {/* Flip Card */}
          <button
            onClick={() => handlePostClick(post)}
            className="flip-card-inner w-full h-full rounded-full overflow-hidden bg-gray-200 flex items-center justify-center focus:outline-none"
          >
          
            {/* Front of the circle - Post */}
            <img src={post.url} alt={post.url} className=" flip-card-front object-cover w-full h-full" />
            
            {/* Back of the circle - Avatar */}
            <div className="flip-card-back w-full h-full bg-gray-200 flex items-center justify-center">
              <img
                src={post.avatar_url}
                alt={post.url}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </button>
        </div>

        <div className="absolute -top-2 -right-2 sm:h-6 sm:w-24 bg-bubbleGray text-black text-[9px] sm:text-xs md:text-sm rounded-full px-1 py-0.5 shadow-lg">
          {post.caption}
        </div>
      </div>
    ));
  };

  const sdgTitle = SDG_TITLES[sdg - 1];
  const photoChallenges = PHOTO_CHALLENGES[sdg as keyof typeof PHOTO_CHALLENGES] || [];
  
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);

  const handleNextChallenge = () => {
    setCurrentChallengeIndex((prevIndex) => (prevIndex + 1) % photoChallenges.length);
  };


  function upload() {
    console.log("heree")
    console.log(photoChallenges[currentChallengeIndex])
    sessionStorage.setItem('photoChallenge', photoChallenges[currentChallengeIndex])
    redirect(`/dashboard/sdg/upload/${sdg}/`)
    // `/dashboard/sdg/upload/${sdg}/`
  }

  return (
    <div className="p-4 pt-6 flex flex-col items-center text-center overflow-auto max-w-full max-h-full lg:ml-[260px]">
      {/* Floating dropdown in the top-left corner */}
      <div className="fixed top-20 right-5 z-50">
        <button
          onClick={() => setFilterDropdownVisible(!filterDropdownVisible)}
          className="bg-gray-900 fixed top-20 right-5  text-white px-4 py-2 rounded-full hover:bg-gray-900 focus:outline-none"
        >
          {/* Show FaIcon on mobile and text on desktop */}
        <span className="block lg:hidden">
          <FaFilter size={18} />
        </span>
        <span className="hidden lg:block">{selectedFilter} ▼</span>
        </button>
        {filterDropdownVisible && (
          <div className="relative  mt-10 bg-gray-900 shadow-lg rounded-2xl w-36">
            <ul className="py-2">
              {filters.map((filter, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFilterSelect(filter)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-white text-sm"
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Center SDG Image and Title */}
    <div className="flex items-center justify-center p-1 pr-5 mt-10 mb-10 z-10 space-x-3 bg-white rounded-full shadow-lg">
      {/* SDG Image */}
      <div>
        <img 
          src={`/images/SDG/SDG${sdg}.jpg`} 
          alt={`SDG ${sdg}`} 
          className=" object-cover rounded-full w-[70px] sm:w-[105px] lg:w-[130px]" 
        />
      </div>

      {/* SDG Title */}
      <div className="text-container ml-0 mr-5">
        <h2 className="text-xl sm:text-3xl font-extrabold text-left text-teal-700">{`SDG ${sdg}:`}</h2>
        <h2 className="text-md sm:text-xl font-semibold text-left ">{sdgTitle}</h2>
      </div>
    </div>

    {/* Photos Section */}
    <div className="flex flex-col items-center justify-center w-full">
      {displayPhoto && displayPhoto.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {renderPosts(displayPhoto)}
        </div>
      ) : (
        <div className="text-center mt-6 text-gray-500">
          <p className="text-lg font-semibold">No photos available yet.</p>
          <p className="text-sm">Be the first to contribute to this SDG!</p>
        </div>
      )}
    </div>

      {/* Modal for the clicked post */}
      {selectedPost && (
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
                  <svg id={selectedPost.user_sdg_id} onClick={() => liked(selectedPost.user_sdg_id)} className="w-8 h-8 text-white" fill={isLiked} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span id={selectedPost.user_sdg_id + "likes"} className="font-bold text-lg sm:text-2xl">{likes}</span>
                </div>
                <span className="font-bold text-lg sm:text-2xl">{selectedPost.created_date}</span>
              </div>

              {/* SDG Tag and Event Info */}
              <div className="flex items-center justify-between w-full bg-white p-2 rounded-3xl shadow-lg">
                <img src={`/images/SDG/SDG${sdg}.jpg`} alt="SDG Icon" className="p-2 w-1/3 rounded-full" />
                <div className="flex flex-col items-start w-2/3 ml-4">
                  <p className="text-base sm:text-lg font-extrabold text-dBlue">{sdgTitle}</p>
                  <p className="text-base sm:text-lg font-bold text-dBlue">{selectedPost.photo_challenge}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <img src={selectedPost.institution_logo ? selectedPost.institution_logo : ""} alt="Institution Logo" className="w-8 h-8 rounded-full" />
                    <div className="flex flex-col text-left">
                      <p className="text-sm sm:text-xs text-dBlue">{selectedPost.institution}</p>
                      <p className="text-sm sm:text-xs text-dBlue">{selectedPost.campus}</p>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      )}


      {/* Photo Challenge Display */}
      <div 
        className="fixed bottom-12 sm:bottom-17 md:bottom-20 lg:bottom-0 max-w-3xl mx-auto mb-8 sm:mb-10 flex items-center justify-center bg-white rounded-full shadow-lg px-5 py-3 z-50"
        style={{ maxWidth: "90%" }}
      >
        
        {/* Left Circular Button */}
        {/*<Link href={`/dashboard/sdg/upload/${sdg}/`}>*/}
          <button onClick={upload} className="w-9 h-9 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        {/*</Link>*/}

        {/* Text Display */}
        <div className="flex-grow bg-gray-100 rounded-full py-2 px-4 text-xs sm:text-base text-left ml-4 mr-4">
          {photoChallenges[currentChallengeIndex]}
        </div>

        {/* Right Circular Button */}
        <button onClick={handleNextChallenge}
          className="w-9 h-9 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7"/>
          </svg>
        </button>
          
      </div>
    </div>
  );
};

export default SdgContent;