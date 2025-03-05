import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className='flex items-center justify-between mt-1 p-4 mx-4 md:mx-12'>
        <h1 className='text-xl font-semibold'>Book Vibe</h1>

        <div className="midheader hidden md:block">
          <ul className='flex items-center gap-8'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink className='text-[#131313CC]' to={'/listedbooks'}>Listed Books</NavLink>
            <NavLink className='text-[#131313CC]' to={'/pagestoread'}>Pages to Read</NavLink>
          </ul>
        </div>

        <div className="signUpSignIn hidden md:flex gap-4">
          <button className="bg-[#23BE0A] text-white font-semibold px-3 py-2 rounded-[8px] btn btn-accent" type="button">Sign Up</button>
          <button className="bg-[#59C6D2] text-white font-semibold px-3 py-2 rounded-[8px] btn btn-accent" type="button">Sign In</button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <span className="text-xl">&#x2715;</span> // Close icon
            ) : (
              <span className="text-xl">&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 bg-gray-100 p-4 md:hidden">
          <NavLink to={'/'} onClick={toggleMenu}>Home</NavLink>
          <NavLink className='text-[#131313CC]' to={'/listedbooks'} onClick={toggleMenu}>Listed Books</NavLink>
          <NavLink className='text-[#131313CC]' to={'/pagestoread'} onClick={toggleMenu}>Pages to Read</NavLink>
          <div className="flex flex-col gap-4">
            <button className="bg-[#23BE0A] text-white font-semibold px-3 py-2 rounded-[8px] btn btn-accent" type="button">Sign Up</button>
            <button className="bg-[#59C6D2] text-white font-semibold px-3 py-2 rounded-[8px] btn btn-accent" type="button">Sign In</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
