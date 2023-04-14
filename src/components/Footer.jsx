import React from 'react'

const Footer = () => {
    return (
        <div>

            <div className="content  text-[#fefefe] m-5 font-new md:px-[10%] md:mt-20">
                <img className='ml-[90%] mt-[68px] w-[34px]' src='./add.png' />
                <div className='md:flex items-center justify-between'>
                    <h1 className='text-3xl font-bold  py-10 md:text-[48px] md:w-[50%] leading-[140%]'>Contact us for the service you want to use</h1>
                    <a href='#'><button className='px-10 py-2 bg-[#5454D4] flex items-center gap-3'>Contact us </button></a>
                </div>
                <img className='mt-5 w-[34px]' src='./Circles.png' />
            </div>

<div className="footer pt-20 pb-2 m-5 text-[#fefefe] font-new md:px-[10%]">
<div className="footer-content flex gap-10 flex-col justify-center  items-center text-center md:flex-row md:w-[100] md:justify-between">
    <img className='w-[100px]'   src='./logo.png'/>
    <div className="lists list-none opacity-70 flex flex-col gap-5 md:flex-row">
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Privacy Policy</a></li>
        <li><a href='#'>Terms and Conditions</a></li>
    </div>
    <div className="copyright opacity-70">
        <p>© 2020 Enver, All Rights Reserved</p>
    </div>
</div>

</div>

        </div>
    )
}

export default Footer
