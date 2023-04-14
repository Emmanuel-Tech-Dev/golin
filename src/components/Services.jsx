import React from 'react'

const Services = () => {
  return (
    <div>
      <div className="content font-new text-[#fefefe] m-5 md:px-[10%] md:mt-20">
        <h1 className='text-3xl font-bold  py-10 pb-5 md:text-[48px] md:text-center'>The Service We Provide For You</h1>
      <img className='ml-[90%] w-[34px]' src='./add.png'/>
      
      <div className="card-container font-new md:flex md:gap-20 md:flex-wrap md:mt-10">
        <div className="cards w-[300px] m-auto text-center py-12 ">
            <img className='m-auto' src='./icon-2.png'/>
            <h3 className='text-xl py-4'>Development</h3>
            <p className='text-center opacity-70'>Create a platform with the best and coolest quality from us.</p>
        </div>
         <div className="cards w-[300px] m-auto text-center py-12 ">
            <img className='m-auto' src='./icon.png'/>
            <h3 className='text-xl py-4'>Ui/Ux Designer</h3>
            <p className='text-center opacity-70'>We provide UI/UX Design services, and of course with the best quality.</p>
        </div> 
        <div className="cards w-[300px] m-auto text-center py-12 ">
            <img className='m-auto' src='./icon-1.png'/>
            <h3 className='text-xl py-4'>Graphik Designer</h3>
            <p className='text-center opacity-70'>We provide Graphic Design services, with the best designers.</p>
        </div> 
        <div className="cards w-[300px] m-auto text-center py-12 ">
            <img className='m-auto' src='./icon-4.png'/>
            <h3 className='text-xl py-4'>Motion Graphik</h3>
            <p className='text-center opacity-70'>Create a platform with the best and coolest quality from us.</p>
        </div>
         <div className="cards w-[300px] m-auto text-center py-12 ">
            <img className='m-auto' src='./icon-5.png'/>
            <h3 className='text-xl py-4'>Photography</h3>
            <p className='text-center opacity-70'>We provide Photography services, and of course with the best quality.</p>
        </div>
         <div className="cards w-[300px] m-auto text-center py-12 ">
            <img className='m-auto' src='./icon-3.png'/>
            <h3 className='text-xl py-4'>Videography</h3>
            <p className='text-center opacity-70'>Create a platform with the best and coolest quality from us.</p>
        </div>
       
      </div>
 <img className=' w-[34px]' src='./add.png'/>
    
      </div>



    </div>
  )
}

export default Services
