"use client";

import React, { useState, useEffect } from "react";
import { FaExclamationTriangle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { SDG_TITLES } from '../data/sdgTitles';
import { addLike, removeLike, getLikedPostsSdgs, getNumberOfLikes } from "../dashboard/actions";



interface Photos {
  avatar_url: string;
  caption: string;
  created_date: string;
  likes: number;
  sdg_number: string;
  url: string;
  user_id: string;
  user_sdg_id: string;
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
    liked: Array<Liked> | undefined
  ];
}


const SdgContent: React.FC<DataProps> = ({data}) => {
  // console.log(data);
  const user_id = data[0];
  const sdg = data[1];
  const photos = data[2];
  const curLiked = data[3];

  // State to manage the clicked post
  const [selectedPost, setSelectedPost] = useState<Photos | null>(null);
  const [isLiked, setLiked] = useState<string | "none">("none");
  const [likedPosts, setLikedPosts] = useState<Array<Liked> | undefined>(curLiked);
  const [likes, setLikes] = useState<number | null>(0);

  const liked = async (user_sdg_id: string) => {
    const userSdgIdElem = document.getElementById(user_sdg_id) as HTMLInputElement | null;

    if (userSdgIdElem) {
      const fill = userSdgIdElem.getAttribute('fill');

      const numLikesElem = document.getElementById(user_sdg_id + "likes") as HTMLInputElement | null;

      if (numLikesElem) {
        if (fill == "red") {
          removeLike(user_sdg_id, user_id);
          userSdgIdElem.setAttribute("fill", "none");
          numLikesElem.textContent = String(Number(numLikesElem.textContent) - 1)
          // document.getElementById(user_sdg_id + "likes").TextContent = 
          
        } else {
          addLike(user_sdg_id, user_id);
          userSdgIdElem.setAttribute("fill", "red");
          numLikesElem.textContent = String(Number(numLikesElem.textContent) + 1)
        }

        const liked = await getLikedPostsSdgs(user_id, sdg);
        setLikedPosts(liked);
      } else {
        console.log("numLikesElem not fouund")
      }
    } else {
      console.log("userSdgIdElem not fouund")
    }
  }



  // Function to handle post click
  const handlePostClick = async(post: Photos, user_id: string) => {
    const likeNums = await getNumberOfLikes(post.user_sdg_id);

    if (likedPosts) {
      for(var i = 0; i < likedPosts.length; i++) {
        if (post.user_sdg_id == likedPosts[i].user_sdg_id) {
          setLiked("red");
          break;
        }
      }

      // console.log(likeNums);
      if (likeNums !== undefined) {
        setLikes(likeNums);
        setSelectedPost(post)
      } else {
        console.log("likeNums not found")
      }
    } else {
      console.log("likedPosts not found")
    }
  };


  const closeModal = () => {
    setSelectedPost(null);
    setLiked("none");
  };


  // Function to render posts
  const renderPosts = (postArray: Photos[], customClasses = '') => {
    return postArray.map((post, index) => (
      <div key={index} className={`relative flex flex-col items-center ${customClasses}`}>
        <button
          onClick={() => handlePostClick(post, user_id)}
          className="w-16 h-16 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center focus:outline-none"
        >
          <img src={post.url} alt={post.url} className="object-cover w-full h-full" />
        </button>
        <button
          // onClick={() => handlePostClick(post, user_id)}
          className="w-16 h-16 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center focus:outline-none"
        >
          <img src={post.avatar_url} alt={post.url} className="object-cover w-full h-full" />
        </button>
        <div className="absolute -top-2 -right-2 sm:h-6 sm:w-24 bg-bubbleGray text-black text-[9px] sm:text-xs md:text-sm rounded-full px-1 py-0.5 shadow-lg">


        {post.caption} {/* gawing caption hehe*/}

        </div>
        <div>{post.likes}</div>
      </div>
    ));
  }

  const sdgTitle = SDG_TITLES[Number(sdg) - 1];

  return (
    <div className="content-container p-6 flex flex-col items-center overflow-auto sm:-mt-12 ">

    {/* Center SDG Image */}
      <div className="relative mb-10 z-10">
        <div className="image-container mb-8">
          <img src={`/images/SDG/SDG${sdg}.jpg`} alt={`SDG ${sdg}`} className="sdg-image" />
        </div>
      </div>

      {photos ? 
        <div className="flex space-x-6 mb-8 sm:ml-36">{renderPosts(photos)}</div> 
      : 
        null
      }

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
                  <p className="text-base sm:text-lg font-bold text-dBlue">Photo Challenge</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <img src="/images/institution/bsu.png" alt="BSU Logo" className="w-8 h-8 rounded-full" />
                    <div className="flex flex-col text-left">
                      <p className="text-sm sm:text-xs text-dBlue">Batangas State University</p>
                      <p className="text-sm sm:text-xs text-dBlue">What Event</p>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      )}

      <div className="max-w-5xl w-full mx-auto sm:mt-10 mb-10 flex items-center bg-white rounded-full shadow-lg px-5 py-4">
        {/* Left Circular Button */}
        <Link href={`/dashboard/sdg/upload/${sdg}`}>
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
  )
}

export default SdgContent;