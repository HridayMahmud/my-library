import React, { useEffect, useState } from 'react'
import { getWishListBooks } from '../HandleLocalStorageWishlist/HandleLocalStorage';
import { CiLocationOn } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineInsertPageBreak } from "react-icons/md";
const ListedWishlistbooks = () => {
     const [savedWishlistbooks,setsavedWishlistbooks] = useState([]);

     const fetchiData = async () =>{
          const res = await fetch('/Data.json');
          const allbooks = await res.json();
          
             //all stored wishlist books
             const storedWishlistBooks = getWishListBooks();
             const allstoredWishlistbooks = [];
             for(const id2 of storedWishlistBooks){
              const filteredWishlistBooks = allbooks.filter(book=>book.id===id2);
              if(filteredWishlistBooks.length>0){
                allstoredWishlistbooks.push(...filteredWishlistBooks);
              }
             }
             //update state 2
             setsavedWishlistbooks(allstoredWishlistbooks);
     }
   
     useEffect(()=>{
          fetchiData();
     },[]);

  return (
    <div>
        <div className="listedWishlistbooks mx-12">
     
     {savedWishlistbooks.length > 0 ? (
       <div className=''>
         {savedWishlistbooks.map((book2) => (
           <div className='mb-5 flex gap-6 border-2 rounded-2xl border-gray-300 p-6'  key={book2.id}>
             <div className="image rounded-2xl bg-gray-100 w-[300px]  p-[50px]">
               <img className='w-[230px] h-[228px]' src={book2.image} alt="" />
             </div>
             <div className="text">
             <h1 className='text-[#131313] font-bold text-[40px]'>{book2.title}</h1>
             <p className='text-[16px] mb-6 text-[#131313CC] font-normal '>By:{book2.author}</p>
     <div className="tag flex gap-3 mt-6 mb-6  ">
     <div className="flex items-center ">
     <p className='font-bold  text-lg '>Tag</p>
     </div>
     <div className="flex items-center  gap-3">
         {
         book2.tags.map(tag=><p className=' bg-[#F3F3F3] text-center w-[150px] p-1 rounded-4xl text-[#23BE0A] text-lg font-semibold'> #{tag}</p>)
         }
     </div>

     <div className="yearofpublication flex items-center gap-2 text-[#131313CC] text-lg font-normal">
     <CiLocationOn />
     <p>Year of Publishing:{book2.year_of_publishing}</p>
     </div>
     </div>
     <div className="publisherandpages mb-6 text-[#131313CC] text-lg font-normal flex gap-4">
    <div className="flex items-center gap-2">
    <FcBusinessman />
    <p>Publisher: {book2.publisher}</p>
    </div>
    <div className="flex  items-center">
    <MdOutlineInsertPageBreak />
    <p className=''>Page {book2.number_of_pages}</p>
    </div>
     </div>
     <hr className='text-gray-200 mb-6 '></hr>
     <div className="categoryRatingDetails  flex gap-3">
      <div className="text-center text-blue-500  flex items-center px-3 py-1 font-bold rounded-3xl bg-gray-200">
      <p>Category : classic</p>
      </div>
     <div className='text-center text-yellow-400  flex items-center px-3 py-1 font-bold rounded-3xl bg-gray-200'>
       <p className=''>Rating : {book2.rating}</p></div>
    <div className="text-center text-white  flex items-center bg-[#23BE0A] rounded-4xl px-3 py-1">
    <button className='' type="button">View Details</button>
    </div>
     </div>
          </div>
           </div>
         ))}
       </div>
     ) : (
       <p>No saved books available.</p>
     )}
     </div>
    </div>
  )
}

export default ListedWishlistbooks
