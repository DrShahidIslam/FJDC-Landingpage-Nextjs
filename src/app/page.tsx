"use client";
// Import the necessary libraries
import { useEffect, useLayoutEffect, useState } from "react";
import fjdc from "../../public/fjdcbanner.jpg";
import fjdcstandee from "../../public/fjdcstandee.jpg";
import landingblank from "../../public/sdaf.jpg";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function Home() {
  const size = useWindowSize();
  const textContent =
    "Register now for our upcoming 3 months program. Limited seats available on First come First serve basis";
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

  return (
    <><div
      className="flex flex-col items-center justify-center min-h-screen py-2 md:px-18 lg:px-12 px-4"
      style={{
        backgroundImage: `url(${(size.width || 0) > 600 ? landingblank.src : fjdcstandee.src})`,
        backgroundSize: (size.width || 0) > 600 ? "cover" : "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <div className="flex flex-col md:flex-row md:justify-end w-full">
          <div className="md:w-1/2 p-2 flex flex-col m-12 space-y-3 items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-bold mb-4">
              Welcome to <span className="text-yellow-500">FJDC.AI</span>
            </h1>
            <p className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white">
              Igniting a new ERA of{" "}
              <span className="text-yellow-500 font-bold">Leadership</span> and{" "}
              <span className="text-yellow-500 font-bold">Innovation</span> at FJDC
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div
              style={{
                minHeight: "2em",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              <p
                className="mt-12 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl typing-effect"
                style={{
                  color: "white",
                  wordWrap: "break-word",
                  position: "fixed",
                  top: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {text}
              </p>
            </div>
            <div className="mx-10 flex flex-col gap-8 items-center justify-center sm:mx-10 md:mx-40">
              <a
                href="https://forms.gle/iRpMT7QXyQ3AHCaaA"
                className=" w-full mt-10 bg-yellow-500 hover:bg-orange-400 hover:scale-105 font-bold text-xl py-1 px-2 sm:px-4 md:px-8 rounded text-center whitespace-nowrap"
              >
                Register Now
              </a>
              <a
                href="/Course-Outline"
                className="w-full bg-yellow-500 hover:bg-orange-400 hover:scale-105 font-bold text-xl py-1 px-2 sm:px-4 md:px-8 rounded text-center whitespace-nowrap"
              >
                Course Outline
              </a>
              <a
                href="/Contact"
                className="w-full bg-yellow-500 hover:bg-orange-400 hover:scale-105 font-bold text-xl py-1 px-2 sm:px-4 md:px-8 rounded text-center whitespace-nowrap"
              >
                Contact Us
              </a>
              <a
                href="/Gallery"
                className="w-full bg-yellow-500 hover:bg-orange-400 hover:scale-105 font-bold text-xl py-1 px-2 sm:px-4 md:px-8 rounded text-center text-overflow:ellipsis whitespace-nowrap"
              >
                Gallery
              </a>
            </div>
          </div>
        </div>
      </main>


    </div><footer className="w-full h-12 md:h-24 text-white flex justify-center items-center">
        © 2023 FJDC.AI
      </footer></>
      
  );
}
