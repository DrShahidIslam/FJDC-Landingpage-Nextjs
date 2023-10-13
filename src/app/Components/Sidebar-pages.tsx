import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="fixed w-full text-white p-2">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold"></span>
          <button
            onClick={toggleMenu}
            className="text-white p-6 focus:outline-none relative"
            
          ><Menu />
            
          </button>
        </div>
        {menuVisible && (
          <div className=" bg-black absolute p-4 top-16 right-8 flex rounded-b-2xl flex-col justify-center items-center">
            {/* Mobile Menu */}
            <Link href="/">
              <div className="my-1 font-bold text-white text-lg border-white py-2 duration-200 hover:bg-yellow-400 hover:scale-105 hover:text-white border-b-2 w-auto">
                Home
              </div>
            </Link><Link href="/Course-Outline">
              <div className="my-1 font-bold text-white text-lg border-white py-2 duration-200 hover:bg-yellow-400 hover:scale-105 hover:text-white border-b-2 w-auto">
                Course Details
              </div>
            </Link>
            <Link href="/Contact">
              <div className="my-1 font-bold text-white border-b-2 border-white text-lg duration-200 hover:scale-105 hover:bg-yellow-400 hover:text-white py-2">
                Contact
              </div>
            </Link>
            <Link href="/Gallery">
              <div className="my-1 font-bold text-white border-white border-b-2 text-lg duration-200 hover:scale-105 hover:bg-yellow-400 hover:text-white py-2">
                Gallery
              </div>
            </Link>
          </div>
        )}
      </div>
          </>
  );
};

export default Navbar;
