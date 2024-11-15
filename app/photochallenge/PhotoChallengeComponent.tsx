"use client";

import React, { useEffect, useState, useRef } from "react";

interface Story {
  id: number;
  text: string;
}

interface PhotoChallengeComponentProps {
  zoomLevel: number;
}

const PhotoChallengeComponent: React.FC<PhotoChallengeComponentProps> = ({ zoomLevel }) => {
  const [stories, setStories] = useState<Story[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Define the hexagonal grid parameters
  const circleRadius = 25;  // Radius of each circle
  const hexWidth = circleRadius * 2;  // Width of each hexagon (diameter of circle)
  const hexHeight = Math.sqrt(3) * circleRadius;  // Height of each hexagon

  // Margin around the logo to prevent overlap
  const logoMargin = 100;

  useEffect(() => {
    // Generate dummy stories for demonstration
    const dummyStories = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      text: "yes! love it",
    }));
    setStories(dummyStories);
  }, []);

  // Adjust the number of visible stories based on zoom level
  const getVisibleStories = () => {
    const visibleCount = Math.max(1, Math.floor(stories.length * zoomLevel));  // Ensure at least one story is visible
    return stories.slice(0, visibleCount);
  };

  // Calculate position for each bubble in a hexagonal grid pattern
  const calculatePosition = (row: number, col: number, centerX: number, centerY: number) => {
    // Offset each row by half the width of the hexagon to create the staggered brick pattern
    const xOffset = col * hexWidth + (row % 2 === 0 ? 0 : hexWidth / 2);
    const yOffset = row * hexHeight;

    // Position the hexagons around the logo's center, but with enough space to prevent overlap
    const offsetX = centerX - hexWidth / 2 - logoMargin;
    const offsetY = centerY - hexHeight / 2 - logoMargin;

    return { x: xOffset + offsetX, y: yOffset + offsetY };
  };

  // Calculate how many rows and columns are needed to fill the screen, adjusting for zoom
  const calculateGridSize = () => {
    const container = containerRef.current;
    if (!container) return { rows: 0, cols: 0 };

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Calculate the number of rows and columns needed to fill the screen based on hex dimensions
    const cols = Math.ceil(width / hexWidth);
    const rows = Math.ceil(height / hexHeight);

    return { rows, cols };
  };

  // Calculate the grid size dynamically based on container size
  const { rows, cols } = calculateGridSize();

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center bg-gray-200">
      {/* Central SDG Logo */}
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold">
        SDG Logo
      </div>

      {/* Generate hexagonal grid and position bubbles around the SDG Logo */}
      <div className="absolute flex items-center justify-center w-full h-full">
        {getVisibleStories().map((story, index) => {
          // Calculate row and column in the grid
          const row = Math.floor(index / cols);
          const col = index % cols;

          // Calculate position of each bubble (spread out from the logo in all directions)
          const container = containerRef.current;
          const centerX = container ? container.offsetWidth / 2 : 200;
          const centerY = container ? container.offsetHeight / 2 : 200;

          const position = calculatePosition(row, col, centerX, centerY);

          // Adjust position to avoid overlap with the logo
          const distanceFromLogo = Math.sqrt(Math.pow(position.x - centerX, 2) + Math.pow(position.y - centerY, 2));

          // Only render bubbles if they are far enough from the logo to avoid overlap
          const minDistance = logoMargin + Math.max(hexWidth, hexHeight); // Minimum distance from logo to bubble
          if (distanceFromLogo < minDistance) {
            return null;  // Skip rendering this bubble if it's too close to the logo
          }

          return (
            <div
              key={story.id}
              className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-xs"
              style={{
                left: `${position.x}px`, // Position adjusted from center
                top: `${position.y}px`,
                transform: "translate(-50%, -50%)", // Center the bubble
              }}
            >
              {story.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoChallengeComponent;
