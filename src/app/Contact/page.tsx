import React from 'react'
import fjdc from '../../../public/fjdc.jpg'
import Link from 'next/link';

export default function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2 md:py-10 lg:py-20"
      style={{
        backgroundImage: `url(${fjdc.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-800 bg-opacity-75 p-4 md:p-6 lg:p-10 rounded-lg shadow-md text-center text-white">
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-5 lg:mb-6">Contact Us</h2>
        <p className="text-sm md:text-base lg:text-lg m-1 md:m-2 lg:m-3"><strong>Address:</strong> AM/1-B, Block D, Bhittai Colony, Korangi Creek, Karachi, 74900</p>
        <p className="text-sm md:text-base lg:text-lg m-1 md:m-2 lg:m-3"><strong>Phone:</strong> +92-35111963-4-5</p>
        <p className="text-sm md:text-base lg:text-lg m-1 md:m-2 lg:m-3"><strong>Email:</strong> info@fjdc.ai</p>
      </div>
      <button className='p-2 text-sm md:text-base lg:text-lg hover:scale-105 rounded-lg font-bold mt-10 md:mt-15 lg:mt-20'
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        color: "black",
      }}>
        <Link href='/'>
          Home
        </Link>
      </button>
    </div>
  );
}