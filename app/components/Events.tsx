"use client";

import React from "react";
import TextBoxPanel from "../styles/textBox";
import SDGlink1 from "/public/images/SDG/SDGlink1.jpg";

const Events: React.FC = () => {
  // Array of event data
  const eventData = [
    {
      image: SDGlink1.src,
      month: "Sep",
      day: 18,
      title: "Indonesia-Korea Conference",
      description: "Lorem ipsum",
    },
    {
      image: SDGlink1.src,
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
      image: SDGlink1.src,
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
    <div className="flex flex-col justify-center items-center ml-64 mt-32 mr-16">
      <img className="w-[1200px] h-[500px] rounded-lg" src={SDGlink1.src}></img>

      <div className="bg-gray-900 w-[800px] h-[120px] p-8 pl-12 -mt-16 rounded-full flex items-center">
        <div className="flex flex-row justify-between w-full">
          {/* Left Section */}
          <div className="flex flex-col w-3/5 pr-4">
            <p className="font-bold text-lg text-gray-200 truncate">Global Sustainability Summit</p>
            <p className="text-base text-gray-200 line-clamp-2">Description lorem ipsum, this text can be longer and will still stay aligned properly.</p>
          </div>

          {/* Right Section with Border */}
          <div className="flex flex-col justify-center items-center w-2/5 pl-2 border-l border-gray-600">
            <p className="font-bold text-base text-gray-200">December 9, 2024</p>
            <p className="text-base text-gray-200">2:00pm - 4:00pm</p>
          </div>
        </div>
      </div>



      <div className="flex flex-col mt-32 mb-32 w-full">
        <p className="text-3xl font-semibold mb-8 text-center">Upcoming Events</p>

        {/* Dynamically generate rows */}
        <div className="flex flex-col gap-8">
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