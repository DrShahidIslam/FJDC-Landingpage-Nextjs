import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="fixed w-full text-white p-2 md:hidden">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold"></span>
          <button
            onClick={toggleMenu}
            className="text-white p-6 focus:outline-none"
            
          ><Menu />
            
          </button>
        </div>
        {menuVisible && (
          <div className=" bg-yellow-400 flex rounded-b-2xl flex-col justify-center items-center">
            {/* Mobile Menu */}
            <Link href="/Course-Outline">
              <div className="my-1 font-bold text-black text-lg border-black py-2 duration-200 hover:scale-105 border-b-2 w-auto">
                Course Details
              </div>
            </Link>
            <Link href="/Contact">
              <div className="my-1 font-bold text-black border-b-2 border-black text-lg duration-200 hover:scale-105 py-2">
                Contact
              </div>
            </Link>
            <Link href="/Gallery">
              <div className="my-1 font-bold text-black border-black border-b-2 text-lg duration-200 hover:scale-105 py-2">
                Gallery
              </div>
            </Link>
          </div>
        )}
      </div>
      {/* Large Screen Buttons */}
      <div className="top-[26vh] fixed hidden lg:block">
        <Link href="/Course-Outline">
          <div className="hover:translate-x-2 my-2 transition transform duration-400 ease-in-out font-bold duration-200 flex text-lg justify-end items-end w-16 bg-yellow-500 py-6 rounded-r-lg">
            <span className="-rotate-90 transform origin-center">
              Course Details
            </span>
          </div>
        </Link>
        <Link href="/Contact">
          <div className="hover:translate-x-2 my-2 transition transform duration-400 ease-in-out font-bold flex text-lg justify-end items-end bg-yellow-500 py-6 w-16 rounded-r-lg">
            <span className="-rotate-90 transform origin-center">Contact</span>
          </div>
        </Link>
        <Link href="/Gallery">
          <div className="hover:translate-x-2 my-2 transition transform duration-400 ease-in-out font-bold flex text-lg justify-end items-end bg-yellow-500 py-6 w-16 rounded-r-lg">
            <span className="-rotate-90 transform origin-center">Gallery</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
