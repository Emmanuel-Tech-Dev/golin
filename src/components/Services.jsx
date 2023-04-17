import React from 'react'

let services = [
     
  { images: '/icon2.png' ,  name:'Development' , desc:'Create a platform with the best and coolest quality from us.'},
  { images: '/icon.png' ,  name:'Ui/Ux Designer' , desc:'We provide UI/UX Design services, and of course with the best quality'},
  { images: '/icon1.png' ,  name:'Graphik Designer' , desc:'We provide Graphic Design services, with the best designers.'},
  { images: '/icon4.png' ,  name:'Motion Graphik' , desc:'Create a platform with the best and coolest quality from us.'},
  { images: '/icon5.png' ,  name:'Photography' , desc:'We provide Photography services, and of course with the best quality.'},
  { images: '/icon3.png' ,  name:'Videography' , desc:'Create a platform with the best and coolest quality from us.'}


]



const Services = () => {
  return (
    <div>
      <div className="content font-new text-[#fefefe] m-5 md:px-[10%] md:mt-20">
        <h1 className='text-3xl font-bold  py-10 pb-5 md:text-[48px] md:text-center'>The Service We Provide For You</h1>
      <img className='ml-[90%] w-[34px]' src='./add.png'/>
      
      <div className="card-container font-new md:flex md:gap-20 md:flex-wrap md:mt-10">


             {
              services.map((service =>(
            <div className="cards w-[300px] m-auto text-center py-12 ">
            <img className='m-auto' src={service.images}/>
            <h3 className='text-xl py-4'>{service.name}</h3>
            <p className='text-center opacity-70'>{service.desc}</p>
        </div> 
              )
              ))

             }
       
      </div>
 <img className=' w-[34px]' src='./add.png'/>
    
      </div>



    </div>
  )
}

export default Services
