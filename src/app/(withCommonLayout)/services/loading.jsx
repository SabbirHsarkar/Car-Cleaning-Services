import React from "react";

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4">

      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse"
        >
          
          {/* Image Skeleton */}
          <div className="relative">
            <div className="w-full h-[220px] bg-gray-300"></div>

            {/* Duration badge */}
            <div className="absolute top-4 right-4 w-20 h-6 bg-gray-400 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">

            {/* Title */}
            <div className="h-6 bg-gray-300 rounded w-2/3"></div>

            {/* Description */}
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>

            {/* Bottom */}
            <div className="flex justify-between items-center pt-3">
              <div className="h-6 w-20 bg-gray-300 rounded"></div>
              <div className="h-10 w-28 bg-gray-300 rounded-full"></div>
            </div>

          </div>

        </div>
      ))}

    </div>
  );
};

export default Loading;