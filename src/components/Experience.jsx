import React from 'react'
import dune1 from "../../public/dune1.png"
import nft from "../../public/nft.png"
import blockchain from "../../public/blockchain.png"
import web3 from "../../public/web-analysis.webp"
import powerbi from "../../public/powerbi.png"
import sql from "../../public/sql.jpg"
import excel from "../../public/excel.png"

function Experience() {
    const cardItems=[
        {
            id:1,
            logo:dune1,
            name:"Dune"
        },
        {
            id:2,
            logo:nft,
            name:"NFT"
        },
        {
            id:3,
            logo:blockchain,
            name:"Blockchain"
        },
        {
            id:4,
            logo:web3,
            name:"Web Analysis"
        },
        {
            id:5,
            logo:powerbi,
            name:"Power BI"
        },
        {
            id:6,
            logo:sql,
            name:"SQL"
        },
        {
            id:7,
            logo:excel,
            name:"Excel"
        }
    ]
  return (
    <div name='Experience' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <p className=''>
                I've more than 2 years of experiance in below technologies.
            </p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
               {cardItems.map(({id,logo,name})=> (
                <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] cursor-pointer hover:scale-110 duration-300'
                 key={id}>
                    <img src={logo} className='w-[150px] rounded-full' alt="" />
                    <div>
                    <div className=''>{name}</div>
                    
                </div>
                
                </div>
               ))}
            </div>
        </div>
      
    </div>
  )
}

export default Experience
