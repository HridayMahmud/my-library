import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='flex items-center justify-between  mt-1 p-4 mx-12'>
        <h1 className='text-xl font-semibold'>Book Vibe</h1>

        <div className="midheader ">
        <ul className='flex items-center gap-8'>
          <a href="" className='active'>
          <Link to={'/'}>Home</Link>
          </a>
          <a href="">
          <Link className='text-[#131313CC]' to={'/listedbooks'} >Listed Books</Link>
        
          </a>
          <a href="">
          <Link className='text-[#131313CC]' to={'/pagestoread'} >Pages to Read</Link>
          </a>
          </ul>
        </div>

        <div className="signUpSignIn flex gap-4">
          <button class="bg-[#23BE0A] text-white font-semibold px-3 py-2 rounded-[8px] btn btn-accent" type="button">Sign Up</button>
          <button class=" bg-[#59C6D2] text-white font-semibold px-3 py-2 rounded-[8px] btn btn-accent" type="button">Sign In</button>
        </div>
      
      </header>
    </div>
  )
}

export default Header
