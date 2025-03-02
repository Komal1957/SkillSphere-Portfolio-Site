import React from "react";
import dune1 from "../../public/dune1.png";
import ethereum from "../../public/ethereum.png";
import nft from "../../public/nft.jpeg";
import blockchain from "../../public/blockchain.png"

function Projects() {
  const cardItems = [
    {
      id: 1,
      logo: dune1,
      name: "Dune",
      description:
        "This project is an NFT Collection Analytics Dashboard built using Dune Analytics. It provides on-chain data insights into various NFT collections, including market capitalization, trading volume, liquidity, and whale presence.",
      videoLink: "https://dune.com/rizwan82/nft-collection",
    },
    {
      id: 2,
      logo: ethereum,
      name: "Ethereum",
      description:
        "I have developed a powerful analytics dashboard that provides in-depth analysis of NFT transactions on the Ethereum and Optimism blockchains. This dashboard helps track key market trends, understand trading patterns, and detect suspicious activities such as wash trading.",
      videoLink: "https://dune.com/rizwan82/nft-market-trends-analysis",
    },
    {
      id: 3,
      logo: nft,
      name: "NFT",
      description:
        "This dashboard provides insights into the Treasure NFT ecosystem, including transaction trends, MAGIC token movements, and gas fee analysis. The data offers valuable insights for NFT buyers, sellers, and investors.",
      videoLink: "https://dune.com/rizwan82/treasure-nft-ecosystem",
    },
    {
      id: 4,
      logo: blockchain,
      name: "Blockchain",
      description:
        "This Dune Analytics dashboard provides a comprehensive analysis of the FlipOMatic dataset, highlighting key insights on NFT transactions, smart contract activity, token movements, and blockchain performance. The dashboard focuses on block-wise success rates, contract interactions, token usage, and transaction patterns to provide a clear picture of how the ecosystem functions.",
      videoLink: "https://lnkd.in/gjSQ3EVR",
    }
  ];

  return (
    <div
      name="Projects"
      className="w-full min-h-screen flex flex-col justify-center bg-white px-6 md:px-10 py-10"
    >
      <div className="max-w-screen-2xl container mx-auto">
        {/* Portfolio Title */}
        <h1 className="text-4xl font-bold mb-2 text-left">Projects</h1>
        <span className="underline font-semibold text-lg text-left block mb-6">
          Featured Projects
        </span>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardItems.map(({ id, logo, name, description, videoLink }) => (
            <div
              key={id}
              className="w-full sm:w-auto min-h-[480px] border-2 rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105 duration-300 p-6 flex flex-col items-center justify-between bg-white"
            >
              {/* Logo Image */}
              <img
                src={logo}
                className="w-[100px] h-[100px] object-contain rounded-lg mb-4"
                alt={name}
              />

              {/* Content */}
              <div className="text-center flex-grow">
                <h2 className="font-bold text-xl mb-2">{name}</h2>
                <p className="text-gray-700 text-sm leading-relaxed overflow-hidden text-ellipsis">
                  {description}
                </p>
              </div>

              {/* Video Button */}
              <div className="mt-4">
                <a href={videoLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
