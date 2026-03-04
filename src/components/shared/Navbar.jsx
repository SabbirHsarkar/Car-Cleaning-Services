import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='py-4 bg-pink-400 font-bold text-3xl flex justify-between items-center'>
           <ul className='flex gap-10 font-semibold text-[18px] items-center ml-150'>
         <Link href="/">Home</Link>
         <Link href="/services">Services</Link>
         <Link href="/reviews">Reviews</Link>
          <Link href="/about">About</Link>
         

           </ul>

           <Link href={"/login"} className='font-semibold text-[18px] mr-5 '>
           <button>Login</button>
           </Link>

        </div>
    );
};

export default Navbar;