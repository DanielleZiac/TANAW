"use client";

import React from "react";
import TextBoxPanel from "../styles/textBox";
import SDGlink1 from "/public/images/SDG/SDGlink1.jpg";
import SDGlink2 from "/public/images/SDG/SDGlink2.jpg";
import SDGlink3 from "/public/images/SDG/SDGlink3.jpg";
import SDGlink4 from "/public/images/SDG/SDGlink4.jpg";
import SDGlink5 from "/public/images/SDG/SDGlink5.jpg";
import SDGlink11 from "/public/images/SDG/SDGlink11.jpg";
import SDGlink12 from "/public/images/SDG/SDGlink12.jpg";
import SDGlink13 from "/public/images/SDG/SDGlink13.jpg";
import SDGlink14 from "/public/images/SDG/SDGlink14.jpg";
import SDGlink15 from "/public/images/SDG/SDGlink15.jpg";

const Events: React.FC = () => {
  // Array of event data
  const eventData = [
    {
      image: SDGlink2.src,
      month: "Sep",
      day: 18,
      title: "Indonesia-Korea Conference",
      description: "Lorem ipsum",
    },
    {
      image: SDGlink3.src,
      month: "Oct",
      day: 5,
      title: "Global Sustainability Summit",
      description: "Exploring future solutions.",
    },
    {
      image: SDGlink4.src,
      month: "Nov",
      day: 12,
      title: "Climate Action Meetup",
      description: "Act today for tomorrow.",
    },
    {
      image: SDGlink5.src,
      month: "Dec",
      day: 1,
      title: "Renewable Energy Fair",
      description: "Green energy for all.",
    },
    {
      image: SDGlink1.src,
      month: "Sep",
      day: 18,
      title: "Indonesia-Korea Conference",
      description: "Lorem ipsum",
    },
    {
      image: SDGlink11.src,
      month: "Oct",
      day: 5,
      title: "Global Sustainability Summit",
      description: "Exploring future solutions.",
    },
    {
      image: SDGlink12.src,
      month: "Nov",
      day: 12,
      title: "Climate Action Meetup",
      description: "Act today for tomorrow.",
    },
    {
      image: SDGlink13.src,
      month: "Dec",
      day: 1,
      title: "Renewable Energy Fair",
      description: "Green energy for all.",
    },
    {
      image: SDGlink14.src,
      month: "Sep",
      day: 18,
      title: "Indonesia-Korea Conference",
      description: "Lorem ipsum",
    },
    {
      image: SDGlink15.src,
      month: "Oct",
      day: 5,
      title: "Global Sustainability Summit",
      description: "Exploring future solutions.",
    },
    {
      image: SDGlink1.src,
      month: "Nov",
      day: 12,
      title: "Climate Action Meetup",
      description: "Act today for tomorrow.",
    },
    {
      image: SDGlink11.src,
      month: "Dec",
      day: 1,
      title: "Renewable Energy Fair",
      description: "Green energy for all.",
    },
  ];

  // Function to group events into rows of 3
  const createRows = (items: typeof eventData, itemsPerRow: number) => {
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
      rows.push(items.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  const rows = createRows(eventData, 3);

  return (
    <div className="flex flex-col justify-center items-center lg:ml-96 mt-32 lg:mr-16">
      <img className="w-11/12 h- lg:p-0 lg:w-[1200px] lg:h-[500px] rounded-t-lg lg:rounded-lg" src={SDGlink11.src}></img>

      <div className="bg-gray-900 w-11/12 h-auto lg:w-[800px] lg:h-[120px] p-8 lg:pl-12  lg:-mt-16 rounded-b-lg  lg:rounded-full flex items-center">
        <div className="flex flex-col w-full lg:flex-row justify-between">
          {/* Left Section */}
          <div className="flex flex-col w-full lg:w-3/5 lg:pr-4 gap-2 lg:gap-0">
            <p className="font-bold text-base lg:text-lg text-gray-200 text-center lg:text-start lg:truncate">Global Sustainability Summit</p>
            <p className="text-sm lg:text-base text-gray-200 line-clamp-2 text-justify lg:text-left">Description lorem ipsum, this text can be longer and will still stay aligned properly.</p>
          </div>

          {/* Right Section with Border */}
          <div className="flex flex-col justify-center items-center w-full lg:w-2/5 pl-2 border-t pt-4 mt-4 lg:pt-0 lg:mt-0 lg:border-t-0 lg:border-l border-gray-600">
            <p className="font-bold text-base text-gray-200">December 9, 2024</p>
            <p className="text-base text-gray-200">2:00pm - 4:00pm</p>
          </div>
        </div>
      </div>



      <div className="flex flex-col lg:mr-0 mt-10 lg:mt-32 mb-32 w-full">
        <p className="text-3xl font-semibold mb-8 text-center">Upcoming Events</p>

        {/* Dynamically generate rows */}
        <div className="flex scrollbar-hide w-screen lg:w-[75vw] lg:-ml-32 px-8 lg:pl-32 overflow-x-auto gap-8">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row gap-8 justify-center">
              {row.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className="relative w-[300px] h-[400px] overflow-hidden rounded shadow-lg"
                >
                  {/* TextBoxPanel */}
                  <TextBoxPanel>
                    {/* Image as background */}
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src={event.image}
                      alt={event.title}
                    />

                   {/* Content overlay with fixed height */}
                  <div className="absolute bottom-0 left-0 w-full bg-[#e4e9ef] bg-opacity-100 p-4 h-[100px] flex flex-col justify-center">
                    <div className="flex flex-row gap-4">
                      <div className="flex flex-col items-center justify-center px-2">
                        <p className="text-lg">{event.month}</p>
                        <p className="font-bold text-xl">{event.day}</p>
                      </div>
                      <div>
                        <p className="font-bold text-lg">{event.title}</p>
                        <p className="text-sm">{event.description}</p>
                      </div>
                    </div>
                  </div>
                  </TextBoxPanel>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Events;