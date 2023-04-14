import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';
 import { IoClose } from 'react-icons/io5';



const Navbar = () => {

 const [nav , setNav] = useState(false)
 const handleNav = () => {
    setNav(!nav)
 }

    return (
        <header>
            <nav className='text-white flex justify-between items-center m-5 md:px-[10%]'>
                <label><img className='mt-1' src='logo.png'/></label>
                
                <ul className=' md:flex gap-10 text-md hidden z-30 md:gap-4 '>
                <li className='p-3 text-md  hover:bg-zinc-400 hover:text-[#1e1e1e]'><a href='#'>Home</a></li>
                    <li className='p-3 text-[#606060] hover:bg-zinc-400 hover:text-[#1e1e1e] text-md'><a href='#'>Services</a></li>
                    <li className='p-3 text-[#606060]  hover:bg-zinc-400 hover:text-[#1e1e1e] text-md'><a href='#'>Our Projects</a></li>
                    <li className='p-3 text-[#606060]  hover:bg-zinc-400 hover:text-[#1e1e1e] text-md'><a href='#'>About us</a></li>
               </ul>
              
               <a href='#'><button className='hidden md:px-5 py-2 md:block outline-[#5454D4] border-2 border-[#b9b9b9] rounded-md  items-center gap-3'>Contact us</button></a>
   

                <button onClick={handleNav} className='mt-2 cursor-pointer z-20 md:hidden ' >
                    {!nav ? <IoClose size={20}/> : <HiMenuAlt3 size={20}/> }
                </button>
            
           
    
        
           {/* MObile Menu */}

               <div className={!nav ? 'fixed left-0 top-0 w-full  bg-[#1e1e1e] z-10 text-center ease-in-out duration-500 ' : ' fixed  top-[-100%]  '}>
               <label><img className=' m-5 mt-6  md:hidden' src='./logo.png' /></label>
             
             
                <ul className='flex mt-2 p-4 flex-col w-full md:hidden'>
                    <li className='p-4 text-md border-gray-800 border-b  hover:bg-zinc-400 hover:text-[#1e1e1e]'><a href='#'>Home</a></li>
                    <li className='p-4 text-[#606060] border-gray-800 border-b hover:bg-zinc-400 hover:text-[#1e1e1e] text-md'><a href='#'>Services</a></li>
                    <li className='p-4 text-[#606060] border-gray-800 border-b hover:bg-zinc-400 hover:text-[#1e1e1e] text-md'><a href='#'>Our Projects</a></li>
                    <li className='p-4 text-[#606060] border-gray-800 border-b hover:bg-zinc-400 hover:text-[#1e1e1e] text-md'><a href='#'>About us</a></li>
                      <a href='#'><button className='px-5 py-2 outline-[#5454D4] border-2 border-[#b9b9b9] rounded-md flex items-center gap-3'>Contact us</button></a>
    </ul>

         
                </div>   
                
                </nav>
        </header>
    )
}

export default Navbar

