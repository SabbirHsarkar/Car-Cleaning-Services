import React from 'react';

const getSingleServices = async (id) => {
    const res = await fetch(
        `https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${id}`
       
    );

    const data = await res.json();
    return data;
};

const serviceDetailsPage = async ({ params }) => {

    const { slug } = await params;

    const serviceRes = await getSingleServices(slug);
    const service = serviceRes?.data;

   
    console.log(slug,serviceRes);


    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-lg mt-10">
  {/* Header */}
  <h2 className="text-3xl font-bold mb-2 text-gray-800">{service?.name}</h2>
  <p className="text-gray-500 mb-4">Service ID: {service?._id}</p>

  {/* Featured Badge */}
  {service?.isFeatured && (
    <span className="inline-block bg-yellow-400 text-white px-3 py-1 rounded-full font-semibold mb-4">
      Featured
    </span>
  )}

  {/* Image */}
  <div className="flex justify-center mb-6">
    <img
      src={service?.img}
      alt={service?.name}
      className="rounded-2xl shadow-md w-full max-w-md object-cover"
    />
  </div>

  {/* Description */}
  <div
    className="prose prose-lg mb-6 text-gray-700"
    dangerouslySetInnerHTML={{ __html: service?.description }}
  ></div>

  {/* Details */}
  <div className="flex flex-wrap gap-4 mb-6">
    <div className="bg-gray-100 px-4 py-2 rounded-lg font-medium">
      Price: ৳{service?.price}
    </div>
    <div className="bg-gray-100 px-4 py-2 rounded-lg font-medium">
      Duration: {service?.duration} mins
    </div>
    <div className={`px-4 py-2 rounded-lg font-medium ${service?.isDeleted ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
      {service?.isDeleted ? 'Deleted' : 'Active'}
    </div>
  </div>


</div>
    );
};

export default serviceDetailsPage;