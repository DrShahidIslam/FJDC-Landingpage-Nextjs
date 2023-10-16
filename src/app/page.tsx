"use client";
// Import the necessary libraries
import { useEffect, useLayoutEffect, useState } from "react";
import fjdc from "../../public/fjdcbanner.jpg";
import fjdcstandee from "../../public/fjdcstandee.jpg";
import landingblank from "../../public/sdaf.jpg";
import Sidebar from "./Components/sidebar";
import img from "../../public/scaled.jpg";
import hussain from "../../public/Hussain-Askary.jpeg";
import Image from "next/image";

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
    <>
      <Sidebar />
      <div
        className="flex flex-col items-center justify-center h-screen md:px-18 lg:px-12 px-4 "
        style={{
          backgroundImage: `url(${
            (size.width || 0) > 600 ? img.src : fjdcstandee.src
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <main className="flex flex-col items-center justify-center w-full h-full text-center">
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 p-2 flex flex-col -mt-40 lg:-mt-20 space-y-6 items-center max-w-screen-md justify-center">
              <h1 className="text-4xl flex flex-col md:text-3xl lg:text-4xl space-y-3 xl:text-5xl 2xl:text-5xl text-white font-bold mb-4">
                Welcome to<br></br>{" "}
                <span className="text-yellow-400 2xl:text-6xl">FJDC.AI</span>
              </h1>
              <p className="text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl text-white">
                Igniting a new ERA of{" "}
                <span className="text-yellow-400 font-bold">Leadership</span>{" "}
                and{" "}
                <span className="text-yellow-400 font-bold">
                  <br></br>Innovation
                </span>{" "}
                at FJDC
              </p>
              <p className="border-2 p-2 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl text-white">
                Center for Leadership and Innovation
              </p>
              <a
                href="https://forms.gle/iRpMT7QXyQ3AHCaaA"
                className=" w-auto bg-yellow-400 items-center justify-center duration-300 transition transform ease-in-out hover:bg-orange-400 hover:scale-105 font-bold text-2xl p-2 sm:px-4 md:px-8 rounded text-center whitespace-nowrap"
              >
                Register Now
              </a>
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
              <div></div>
            </div>
          </div>
        </main>
      </div>
      <div className="bg-white shadow-xl rounded-lg m-4 p-3 flex xl:flex-row flex-col">
        <Image
          className="mx-8 h-auto lg:h-96 xl:h-auto w-auto my-4"
          src={hussain}
          alt={"dr hussain askary"}
          width={400}
          height={350}
        ></Image>
        <div className="p-3">
        <h2 className="font-bold">
        Dr. Hussain Askary: Pioneering Healthcare, Inspiring Leadership, and
          Revolutionizing with Generative AI

        </h2>
        <p>
           In the ever-evolving landscape of
          healthcare and technology, one visionary stands out as a true
          trailblazer – Dr. Hussain Askary. With an illustrious background in
          the world of dentistry, Dr. Askary has dedicated more than two decades
          to reshaping the future of healthcare and dental education.<br></br> His
          journey of academic excellence is marked by the attainment of a Master
          of Science (MSc) in Dental Public Health from the esteemed University
          of London, coupled with the prestigious DDPH qualification from the
          Royal College of Surgeons, England. These credentials not only
          showcase his dedication but also his relentless pursuit of knowledge
          and advancement.<br></br> At the helm of Fatima Jinnah Dental College, as its
          CEO and Head of the Department of Community Dentistry, Dr. Hussain
          plays an instrumental role in propelling dental education and public
          health practices to new heights. His visionary leadership has
          transformed the institution into a beacon of dental education and
          cutting-edge research, not just in Pakistan, but worldwide.<br></br> However,
          what truly sets Dr. Hussain apart is his unbridled enthusiasm for
          innovation. He envisions a future where the worlds of medicine and
          dentistry converge with the boundless possibilities of Generative AI
          and Large Language Models (LLMs). With him at the helm, the Center for
          Leadership and Innovation emerges as a pioneer, placing Pakistan
          squarely at the forefront of healthcare's technological revolution.<br></br> In
          the spirit of knowledge sharing and innovation, Dr. Hussain has
          brought together the world's leading AI developers and trainers
          through fjdc.ai. This dynamic platform is the incubator for pushing
          the boundaries of AI's potential in healthcare. It serves as a
          testament to his dedication to innovation, as he strives to bring
          these cutting-edge technologies to the forefront of healthcare
          practices.<br></br> Dr. Hussain Askary's visionary approach and unwavering
          commitment to healthcare, leadership, and Generative AI are not just
          transformative but deeply inspirational. His work beckons others to
          join in the exploration of the limitless possibilities that lie at the
          intersection of medicine and technology. Be prepared to be inspired
          and captivated by the incredible journey that Dr. Hussain is paving
          for a brighter, healthier, and technologically advanced future for all.
        </p></div>
      </div>
    </>
  );
}
