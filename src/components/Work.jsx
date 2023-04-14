import React from 'react'
import { GrFormPrevious , GrFormNext } from 'react-icons/gr';
const Work = () => {
  return (
    <div>
      
      <div className="content text-[#fefefe] m-5 md:mt-20 md:px-[10%]">
      <h1 className='text-3xl font-bold  py-10 pb-5 md:text-[48px]'>Our Awesome Portfolio</h1>
      <img className='ml-[90%] w-[34px]' src='./Circles.png'/>
      
      {/* Caurousel Cards and Controllers Here */}
     <div className="works py-5 m-auto ">
<div className="images  mx-14 md:flex md:gap-20 md:mx-0 ">
    <img src='./carousel.png'/>
    <img className='hidden md:block' src='./image2.png'/>
    <img className='hidden md:block ' src='./image3.png'/>
</div>
<div className="controllers flex mt-10  justify-center gap-3">
    <div className="prev p-2 bg-[#fefefe] opacity-20 rounded-[50px]"><GrFormPrevious size={'20px'} /></div>
    <div className="next p-2 bg-[#5454D4] rounded-[50px]"><GrFormNext className='icon-color text-[20px]' /></div>
</div>
     </div>

      <img className=' w-[34px]' src='./Vector.png'/>



      </div>






    </div>
  )
}

export default Work
