import React from 'react'

function About() {
  return (
    <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p>
          Hi, I'm Mohammad Rizwan Shaikh, a Blockchain Data Analyst specializing in Dune Analytics. 
          I analyze on-chain data, create interactive dashboards, 
          and provide insights into DeFi, NFTs, and Web3 trends. 
          With expertise in SQL and blockchain analytics, 
          I turn raw data into actionable intelligence for informed decision-making.
        </p>

        {/* Education & Training */}
        <h1 className='text-green-600 font-semibold text-xl mt-6'>
          Education & Training
        </h1>
        <div>
          <ul className='list-disc pl-5'>
            <li>Tata DAV School Sijua Dhanbad, (2020)</li>
            <li>Diploma in Electronic & Communication Engineering, Al-Kabir Polytechnic, (2020 - 2023)</li>
            <li>Data Analytics, DataSpace Academy, (Oct 2023 - Mar 2024) [Course]</li>
          </ul>
        </div>

        {/* Skills & Expertise */}
        <h1 className='text-green-600 font-semibold text-xl mt-6'>
          Skills & Expertise
        </h1>
        <div>
          <ul className='list-disc pl-5'>
            <li>Proficient in SQL for querying blockchain data and analyzing on-chain metrics</li>
            <li>Experienced with Dune Analytics, blockchain explorers, and Web3 data analysis tools.</li>
            <li>Strong grasp of decentralized finance (DeFi), NFT market trends, and Web3 ecosystem dynamics.</li>
            <li>Excellent problem-solving skills in identifying blockchain patterns, detecting anomalies, and deriving actionable insights</li>
            <li>Effective communicator and collaborator in presenting data-driven insights to investors, developers, and Web3 communities.</li>
          </ul>
         
        </div>

        {/* Professional Experience */}
        <h1 className='text-green-600 font-semibold text-xl mt-6'>
          Professional Experience
        </h1>
        <div>
          <p className='font-bold'>Dataspace Academy, Kolkata (March 2024 – June 2024)</p>
          <h5 className='text-green-600 font-light text-sm'>Brief description of responsibilities and achievements</h5>
          <ul className='list-disc pl-5'>
            <li>Assisted in analyzing blockchain and Web3 data using Dune Analytics and SQL.</li>
            <li>Developed interactive dashboards to visualize on-chain trends, NFT markets, and DeFi analytics.</li>
            <li>Conducted market research and data extraction to identify investor and community insights.</li>
            <li>Collaborated with teams to optimize data queries and improve analytical workflows.</li>
          </ul>
        </div>

        {/* Achievements & Awards */}
        <h1 className='text-green-600 font-semibold text-xl mt-6'>
          Achievements & Awards
        </h1>
        <div>
          <ul className='list-disc pl-5'>
            <li>Successfully developed interactive blockchain data dashboards using Dune Analytics & SQL, helping teams derive actionable insights.</li>
            <li>Contributed to on-chain market analysis for Web3 trends, supporting data-driven decision-making.</li>
            <li>Completed an intensive Data Analytics Internship at Dataspace Academy, gaining hands-on experience in blockchain analytics.</li>
          </ul>
        </div>

        {/* Mission Statement */}
        <h1 className='text-green-600 font-semibold text-xl mt-6'>
          Mission Statement
        </h1>
        <p>
          My mission is to leverage data analytics to uncover meaningful insights in the blockchain and Web3 ecosystem.
          I am committed to continuous learning and innovation, using tools like Dune Analytics and SQL to analyze trends,
          optimize decision-making, and contribute to the growth of decentralized technologies. My goal is to help investors,
          communities, and businesses make data-driven decisions while staying ahead in the evolving digital landscape.
        </p>
      </div>
    </div>
  )
}

export default About
