import React from 'react'
import { FaPlay } from 'react-icons/fa';
const About = () => {
  return (
    <div>
      <div className="content m-5 mt-10 md:px-[10%] md:mt-24">
        <div className="heading text-[#fefefe] md:flex items-center justify-between gap-20">
            <h1 className='text-3xl font-bold  py-10 pb-5 md:pb-10 md:w-[35%] md:text-[48px] md:leading-[140%]'>Why Enver Is The Best Choice?</h1>
            <p className='opacity-70 pb-10 md:pb-0 md:w-[40%]'>Watch this one minute video so you understand why you should use our services!</p>
        </div>
        <div className="about-vid bg-vidBg h-[270px] bg-center bg-cover flex justify-center items-center md:h-[500px]">
            <a className="p-5 bg-[#5454D4] rounded-[50px]"   href='#'><FaPlay color='#fefefe' /></a>
        </div>
        <div className="clip mt-3">
            <img className='w-14' src='./triangle.png'/>
        </div>
      </div>
    </div>
  )
}

export default About
