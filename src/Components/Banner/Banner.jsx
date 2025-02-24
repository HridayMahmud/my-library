import React from 'react'
import titleimage from '../../assets/images/story8.jpg'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div className=' mx-12 bg-gray-100 rounded-3xl'>
   
      <div className="headerbody  mt-16 flex justify-center ">
        
       <div className="pt-[120px] flex flex-col md:flex-row lg:flex-row items-center ">
       <div className="text-section px-[120px] ">
          <h1 className="font bold text-[56px] text-[#131313]">Books to freshen <br></br>up your bookshelf</h1>
        </div>
       
       <div className="image-section ">
        <img className='w-[320px] h-[396px] border-2 border-gray-100 p-6 shadow-xl shadow-black rounded-xl' src={titleimage} alt="" />
       </div>
       </div>
     
      </div>
     <Link to={'/listedbooks'}><button class="bg-[#23BE0A] mx-[120px] mb-[120px] text-white font-semibold px-4  py-3 rounded-[8px]" type="button">View The List</button></Link>
    </div>
  )
}

export default Banner
