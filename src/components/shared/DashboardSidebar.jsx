import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const DashboardSidebar = () => {
    return (
        <div className=' w-[200px] bg-purple-600 text-black h-screen px-3 py-4 fixed top-0 left-0'>

        <Link href={"/"}>
         <Image src={"/assets/730-removebg-preview.png"} alt='logo' width={250} height={250} className='rounded-full mx-auto mb-4'/>
        </Link>
           
         <p className='text-amber-200 text-3xl'>Car Cleanify </p>

         <div className='flex flex-col gap-2 mt-7'>
 <Link href={"/dashboard/profile"}>Profile</Link>
 <Link href={"/dashboard/about"}>About</Link>
 

         </div>

        </div>
    );
};

export default DashboardSidebar;