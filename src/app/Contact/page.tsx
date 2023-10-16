"use client"
import React from 'react'
import fjdc from '../../../public/fjdc.jpg'
import Link from 'next/link';
import Navbar from '../Components/Sidebar-pages';

export default function Contact() {
  return (
    <><div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${fjdc.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ><Navbar/>
    <div
      className="flex flex-col items-center justify-center my-36 py-2 md:py-10 lg:py-6">
      <div className="bg-gray-800 bg-opacity-75 p-4 md:p-6 lg:p-10 rounded-lg shadow-md text-center text-white">
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-5 lg:mb-6">Contact Us</h2>
        <p className="text-sm md:text-base lg:text-lg m-1 md:m-2 lg:m-3"><strong>Address:</strong> AM/1-B, Block D, Bhittai Colony, Korangi Creek, Karachi, 74900</p>
        <p className="text-sm md:text-base lg:text-lg m-1 md:m-2 lg:m-3"><strong>Phone:</strong> +92-33-00-388039</p>
        <p className="text-sm md:text-base lg:text-lg m-1 md:m-2 lg:m-3"><strong>Email:</strong> info@fjdc.ai</p>
      </div>
      <button className='p-2 text-sm md:text-lg lg:text-xl hover:scale-105 bg-yellow-500 rounded-lg font-bold mt-20 md:mt-16 lg:mt-28'>
        <Link href='/'>
          Home
        </Link>
      </button>
    </div></div></>
  );
}