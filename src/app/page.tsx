"use client";
// Import the necessary libraries
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import fjdc from "../../public/fjdc.jpg";
import c from "../../public/IMG-20230902-WA0010.jpg";
import e from "../../public/IMG-20230902-WA0012.jpg";
import f from "../../public/IMG-20230920-WA0013.jpg";
import g from "../../public/IMG-20230920-WA0014.jpg";
import i from "../../public/IMG-20230920-WA0016.jpg";
import k from "../../public/IMG-20230920-WA0018.jpg";
import l from "../../public/IMG-20230920-WA0019.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Home() {
  const textContent = "Register now for our upcoming 3 months program.";
  const [text, setText] = useState("");

  useEffect(() => {
    let textIndex = 0;
    const textInterval = setInterval(() => {
      if (textIndex < textContent.length) {
        setText(textContent.slice(0, textIndex));
        textIndex++;
      } else {
        setTimeout(() => {
          setText("");
          textIndex = 0;
        }, 500); // Delay before starting over
      }
    }, 250); // Adjust speed as needed

    return () => clearInterval(textInterval);
  }, []);

  
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

    window.addEventListener('resize', updateDisplayCount);
    updateDisplayCount();

    return () => window.removeEventListener('resize', updateDisplayCount);
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
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2 md:px-20 px-4"
      style={{
        backgroundImage: `url(${fjdc.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <h1
          className="text-2xl md:text-5xl mb-3 p-2 font-bold"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            color: "black",
          }}
        >
          Igniting a new era of Leadership and Innovation
        </h1>

        <p
          className="mt-12 text-xs sm:text-xs md:text-lg lg:text-2xl typing-effect"
          style={{ color: "white", wordWrap: "break-word" }}
        >
          {text}
        </p>

        <div className="flex flex-col md:flex-row mt-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdYpU2nMSYKE2-gKKeahQ3ZEaakJgG_nfX3oHsbB9DlonrMMg/viewform"
            className="mx-4 my-2 md:my-0 bg-yellow-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded"
            style={{
              color: "black",
            }}
          >
            Register Now
          </a>
          <a
            href="https://docs.google.com/document/d/1HwSCgdMPQxNmVN3Y5PxQqLUeNYxxemH-EI8oGpxyyYc/"
            className="mx-4 my-2 md:my-0 bg-yellow-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded"
            style={{
              color: "black",
            }}
          >
            Course Outline
          </a>
          <a
            href="/Contact"
            className="mx-4 my-2 md:my-0 bg-yellow-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded"
            style={{
              color: "black",
            }}
          >
            Contact Us
          </a>
        </div>
        <div className="relative w-full cursor-pointer flex justify-center items-center mt-8 md:mt-32 max-w-full overflow-hidden">
      {currentIndex > 0 && (
        <button
          className="absolute left-2 md:left-6"
          onClick={handleLeftClick}
        >
          <ArrowLeft color="#ffffff" />
        </button>
      )}

      <div
        className="flex max-w-full justify-center cursor-pointer gap-3 flex-wrap overflow-x-scroll md:overflow-visible"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.slice(currentIndex, currentIndex + displayCount).map((image, index) => (
          <div
            key={index}
            className="w-[150px] md:w-[300px] h-[150px] relative mx-2"
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
          className="absolute right-2 md:right-6"
          onClick={handleRightClick}
        >
          <ArrowRight color="#ffffff" />
        </button>
      )}
    </div>
  
      </main>

      <footer className="w-full h-12 md:h-24 border-t text-white border-gray-200 flex justify-center items-center">
        © 2023 FJDC.AI
      </footer>
    </div>
  );
}
