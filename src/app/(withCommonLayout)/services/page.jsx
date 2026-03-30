import React from 'react';
import ServiceCard from './_component/ServiceCard';
 

const getAllServices = async () => {
    const res = await fetch("https://car-washing-system-cleanify-server.vercel.app/api/v1/services");

    await new Promise((resolve) => setTimeout(resolve, 500));

    const data = await res.json();
    return data;
}

const ServicesPage = async () => {
    const services = await getAllServices();
    console.log(services);

    return (
        <div>
           

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{services?.data?.map((service) => (
             <ServiceCard key={service._id} service={service} />
            ))}

            </div>

            

        </div>
    );
};

export default ServicesPage;