import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div className='h-[300px] flex items-center justify-center  bg-amber-50'>
{children}
            </div>
            
            <Footer/>
        </div>
    );
};

export default layout;