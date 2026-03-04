import React from 'react';

const serviceDetailsPage = async({params}) => {
    // const resParam = await params;
    const {slug} = await params;
    console.log(slug);
    return (
        <div>
            <h2>Service Details Page {slug}</h2>   
        </div>
    );
};

export default serviceDetailsPage;