import React from 'react'
import fjdc from '../../../public/fjdc.jpg'
import Link from 'next/link';

export default function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2"
      style={{
        backgroundImage: `url(${fjdc.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-800 bg-opacity-75 p-10 rounded-lg shadow-md text-center text-white">
        <h2 className="text-3xl mb-6">Contact Us</h2>
        <p className="text-lg m-2"><strong>Address:</strong> AM/1-B, Block D, Bhittai Colony, Korangi Creek, Karachi, 74900</p>
        <p className="text-lg m-2"><strong>Phone:</strong> +92-35111963-4-5</p>
        <p className="text-lg m-2"><strong>Email:</strong> info@fjdc.ai</p>
      </div>
      <button className='p-2 text-lg rounded-lg font-bold mt-20'
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