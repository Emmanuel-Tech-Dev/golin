import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi';
const Hero = () => {
  return (
    <div>
     
      <div className="hero m-5 flex flex-col mt-10 text-[#fefefe] md:flex-row md:px-[10%] justify-between ">
        <div className="content md:w-[40%]">
            <h1 className='text-5xl  font-bold py-10 leading-[140%] md:mt-[50px] md:text-[68px]'>Build Your Awesome Platform</h1>
            <p className='font-new pb-10 opacity-70'>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
            <a href='#'><button className='px-5 py-2 bg-[#5454D4] flex items-center gap-3'>Our Service <FiArrowUpRight/></button></a>
        </div>
        <div className="image mt-5">
            <img className='md:w-[700px]' src="./heroImage.png" alt="" />
        </div>
      </div>


    </div>
  )
}

export default Hero
