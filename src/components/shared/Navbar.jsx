"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">CarCleanify</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-[17px] items-center text-gray-300">
          <Link href="/" className="hover:text-aqua transition">Home</Link>
          <Link href="/services" className="hover:text-aqua transition">Services</Link>
          <Link href="/reviews" className="hover:text-aqua transition">Reviews</Link>
          <Link href="/about" className="hover:text-aqua transition">About</Link>
        </ul>

        {/* Login Button Desktop */}
        <div className="hidden md:block">
          <Link href="/login">
            <button className="bg-white text-pink-600 px-5 py-2 rounded-xl font-semibold hover:bg-black hover:text-white transition">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-pink-400 px-6 pb-4 space-y-4 font-semibold text-[17px]">
          <Link href="/" className="block">Home</Link>
          <Link href="/services" className="block">Services</Link>
          <Link href="/reviews" className="block">Reviews</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/login">
            <button className="w-full bg-white text-pink-600 py-2 rounded-xl mt-2">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;