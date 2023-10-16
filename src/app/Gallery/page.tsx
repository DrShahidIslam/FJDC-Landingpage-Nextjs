"use client";
import React, { useEffect, useState } from "react";
import c from "../../../public/IMG-20230902-WA0010.jpg";
import e from "../../../public/IMG-20230902-WA0012.jpg";
import f from "../../../public/IMG-20230920-WA0013.jpg";
import g from "../../../public/IMG-20230920-WA0014.jpg";
import i from "../../../public/IMG-20230920-WA0016.jpg";
import k from "../../../public/IMG-20230920-WA0018.jpg";
import l from "../../../public/IMG-20230920-WA0019.jpg";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import fjdc from "../../../public/fjdc.jpg";
import Link from "next/link";
import Navbar from "../Components/Sidebar-pages";

export default function Gallery() {
  const images = [e, k, l, g, i, f, c]; // State to hold the images
  const [currentIndex, setCurrentIndex] = useState(0); // State to hold the current index
  const [displayCount, setDisplayCount] = useState(1);

  useEffect(() => {
    function updateDisplayCount() {
      if (window.innerWidth < 600) {
        setDisplayCount(1);
      } else if (window.innerWidth < 900) {
        setDisplayCount(2);
      } else {
        setDisplayCount(4);
      }
    }

    window.addEventListener("resize", updateDisplayCount);
    updateDisplayCount();

    return () => window.removeEventListener("resize", updateDisplayCount);
  }, []);

  // Function to handle left arrow click
  const handleLeftClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Function to handle right arrow click
  const handleRightClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

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
      className="flex flex-col items-center justify-center md:px-20 px-4">
      
      <div className="flex justify-center md:text-5xl lg:text-6xl font-semibold text-4xl text-white">
        Gallery
      </div>
      <div className="relative w-full cursor-pointer flex justify-center items-center mt-28 max-w-full overflow-hidden">
        {currentIndex > 0 && (
          <button
            className="absolute left-2 md:left-1"
            onClick={handleLeftClick}
          >
            <ArrowLeft color="#ffffff" />
          </button>
        )}

        <div
          className="flex max-w-full justify-center cursor-pointer gap-3 flex-wrap overflow-x-scroll md:overflow-visible"
          style={{ scrollBehavior: "smooth" }}
        >
          {images
            .slice(currentIndex, currentIndex + displayCount)
            .map((image, index) => (
              <div
                key={index}
                className="w-[200px] md:w-[300px] h-[200px] md:h-[250px] relative mx-2"
              >
                <Image
                  src={image}
                  alt="fjdc"
                  layout="fill"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
        </div>

        {currentIndex < images.length - displayCount && (
          <button
            className="absolute right-4 md:right-1"
            onClick={handleRightClick}
          >
            <ArrowRight color="#ffffff" />
          </button>
        )}
      </div>
      <button className='p-2 text-sm md:text-lg lg:text-xl hover:scale-105 bg-yellow-500 rounded-lg font-bold mt-24 md:mt-16 lg:mt-20'>
        <Link href='/'>
          Home
        </Link>
      </button>
    </div></div></>
  );
}
