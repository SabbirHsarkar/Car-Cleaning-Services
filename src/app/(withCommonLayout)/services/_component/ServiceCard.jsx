import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">

      
      <div className="relative overflow-hidden">
        <img
          src={service.img}
          alt={service.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />

        <span className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          ⏱ {service.duration} mins
        </span>
      </div>

     
      <div className="p-6 flex flex-col flex-grow">

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {service.name}
        </h3>

        <p className="text-gray-500 text-sm mb-4 flex-grow">
          {service.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="text-2xl font-bold text-indigo-600">
            ৳ {service.price}
          </span>

          
          <Link href={`/services/${service?._id}`}>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition duration-300">
              Book Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServiceCard;