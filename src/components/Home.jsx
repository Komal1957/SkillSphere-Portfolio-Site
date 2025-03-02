import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name ="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 min-h-screen flex flex-col items-center justify-center mt-20 md:mt-24 z-10" >
        
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          
          {/* Image Section (Centered & Visible) */}
          <div className="w-full flex justify-center mb-6 md:mb-0 md:w-1/2 order-1 md:order-2">
            <img
              src="./fig.webp"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
              alt="Profile"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 mt-6 md:mt-12 space-y-2 order-2 md:order-1 text-center md:text-left">
            <span className="text-lg md:text-xl">Welcome In My Feed</span>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-1 text-2xl md:text-4xl justify-center md:justify-start">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Dune Analytics", "Blockchain Data Analyst"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I specialize in analyzing on-chain data using Dune Analytics, SQL, and other
              blockchain data tools to uncover insights, track trends, and create interactive
              dashboards. With expertise in blockchain ecosystems, DeFi, and Web3 analytics, I
              help projects and investors make data-driven decisions.
            </p>
            <br />

            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2 text-center md:text-left">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mohammad-rizwan-shaikh-7b7b9a27b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/MdRizwan662819" target="_blank" rel="noopener noreferrer">
                      <FaSquareXTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="http://t.me/Rizwan_49" target="_blank" rel="noopener noreferrer">
                      <BsTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Current Projects */}
              <div className="space-y-2 text-center md:text-left">
                <h1 className="font-bold">Currently Working on</h1>
                <div className="flex space-x-5">
                  <img
                    src="./blockchain.png"
                    alt="blockchain"
                    className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 duration-200 object-contain rounded-full border-2"
                  />
                  <img
                    src="./defi.png"
                    alt="defi"
                    className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 duration-200 object-contain rounded-full border-2"
                  />
                  <img
                    src="./nft.png"
                    alt="nft"
                    className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 duration-200 object-contain rounded-full border-2"
                  />
                  <img
                    src="./ethereum.png"
                    alt="ethereum"
                    className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 duration-200 object-contain rounded-full border-2"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
