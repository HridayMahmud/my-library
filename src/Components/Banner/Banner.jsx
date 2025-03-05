import React from 'react';
import titleimage from '../../assets/images/story8.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='mx-4 md:mx-12 bg-gray-100 rounded-3xl'>
      <div className="headerbody mt-8 md:mt-16 flex justify-center">
        <div className="pt-8 md:pt-[120px] flex flex-col md:flex-row items-center">
          <div className="text-section px-6 md:px-[120px] text-center md:text-left">
            <h1 className="font-bold text-[32px] md:text-[56px] text-[#131313] leading-tight">
              Books to freshen <br /> up your bookshelf
            </h1>
          </div>

          <div className="image-section mt-6 md:mt-0">
            <img
              className='w-[240px] h-[300px] md:w-[320px] md:h-[396px] border-2 border-gray-100 p-4 md:p-6 shadow-xl shadow-black rounded-xl'
              src={titleimage}
              alt="Bookshelf"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 md:mt-12">
        <Link to={'/listedbooks'}>
          <button
            className="bg-[#23BE0A] text-white font-semibold px-6 py-3 rounded-[8px] hover:bg-[#1ea008] transition duration-300"
            type="button"
          >
            View The List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;