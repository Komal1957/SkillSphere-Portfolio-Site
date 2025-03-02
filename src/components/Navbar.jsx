import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 5, text: "Experience" },
    { id: 6, text: "Contact" },
  ];

  return (
    <>
      {/* Navbar Container */}
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-3 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center">
        
        {/* Logo & Name */}
        <div className="flex items-center space-x-2">
          <img src="./fig.webp" className="h-10 w-10 md:h-12 md:w-12 rounded-full" alt="Logo" />
          <div className="leading-tight">
            <h1 className="font-semibold text-sm md:text-lg lg:text-xl">
              Mohammad Rizwan Shaik
              <span className="text-green-500 text-lg md:text-2xl">h</span>
            </h1>
            <p className="text-xs md:text-sm text-gray-600">Dune Analytics</p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ id, text }) => (
            <li key={id} className="list-none cursor-pointer hover:text-red-600 transition duration-200">
              <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                {text}
              </Link>
            </li>
          ))}
        </div>

        {/* Hamburger Menu Button (Fully Visible) */}
        <div
          onClick={() => setMenu(!menu)}
          className="md:hidden cursor-pointer fixed top-4 right-4 z-50 p-2  "
        >
          {menu ? <RxCross2 size={28} /> : <TiThMenu size={28} />}
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col h-screen items-center justify-center">
          <ul className="text-lg space-y-6">
            {navItems.map(({ id, text }) => (
              <li key={id} className="cursor-pointer hover:text-red-600 transition duration-200">
                <Link onClick={() => setMenu(false)} to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
