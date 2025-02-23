import React, { useEffect, useState} from 'react'
import { getReadedBooks } from '../HandleLocalStorage/HandlelocalstorageReadlist';
import { CiLocationOn } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import ListedWishlistbooks from '../ListedWishlistbooks/ListedWishlistbooks';

const Listedbooks = () =>{
      const [savedBooks,setsavedBooks] = useState([]);
      const [savedWishlistbooks,setsavedWishlistbooks]= useState([]);
      const fetchingData=async()=>{
         const response = await fetch('/Data.json');
         const allbooks = await response.json();
        

         //all storedReadlist
         const storedReadBooks = getReadedBooks();
         const allstoredReadbooks = [];
         for(const id of storedReadBooks){
          const filteredbooks = allbooks.filter(book=>book.id===id);
          if(filteredbooks.length>0){
           allstoredReadbooks.push(...filteredbooks);
          }
          }
          
          //set usestate
          setsavedBooks(allstoredReadbooks);

          
       }
      

        
     useEffect(()=>{
          fetchingData();
         
     },[])
  return (
    <div>
      <div className="bg-gray-100 mx-12 py-4 rounded-2xl text-[#131313] mb-5 text-center font-bold text-3xl">Books</div>
      <div className="flex justify-center">
      <div className="dropdown ">
      <details class="dropdown  ">
      <summary class="btn m-1 px-6 bg-[#23BE0A] text-white">Sort By</summary>
    <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    </ul>
    </details>
      </div>
      </div>

    <div role="tablist" class="tabs tabs-lifted mx-12">
  <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Read Books" />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <div className="listedbooks mx-12">
     
     {savedBooks.length > 0 ? (
       <div className=''>
         {savedBooks.map((book) => (
           <div className='mb-5 flex gap-6 border-2 rounded-2xl border-gray-300 p-6'  key={book.id}>
             <div className="image rounded-2xl bg-gray-100 w-[300px]  p-[50px]">
               <img className='w-[230px] h-[228px]' src={book.image} alt="" />
             </div>
             <div className="text">
             <h1 className='text-[#131313] font-bold text-[40px]'>{book.title}</h1>
             <p className='text-[16px] mb-6 text-[#131313CC] font-normal '>By:{book.author}</p>
     <div className="tag flex gap-3 mt-6 mb-6  ">
     <div className="flex items-center ">
     <p className='font-bold  text-lg '>Tag</p>
     </div>
     <div className="flex items-center  gap-3">
         {
         book.tags.map(tag=><p className=' bg-[#F3F3F3] text-center w-[150px] p-1 rounded-4xl text-[#23BE0A] text-lg font-semibold'> #{tag}</p>)
         }
     </div>

     <div className="yearofpublication flex items-center gap-2 text-[#131313CC] text-lg font-normal">
     <CiLocationOn />
     <p>Year of Publishing:{book.year_of_publishing}</p>
     </div>
     </div>
     <div className="publisherandpages mb-6 text-[#131313CC] text-lg font-normal flex gap-4">
    <div className="flex items-center gap-2">
    <FcBusinessman />
    <p>Publisher: {book.publisher}</p>
    </div>
    <div className="flex  items-center">
    <MdOutlineInsertPageBreak />
    <p className=''>Page {book.number_of_pages}</p>
    </div>
     </div>
     <hr className='text-gray-200 mb-6 '></hr>
     <div className="categoryRatingDetails  flex gap-3">
      <div className="text-center text-blue-500  flex items-center px-3 py-1 font-bold rounded-3xl bg-gray-200">
      <p>Category : classic</p>
      </div>
     <div className='text-center text-yellow-400  flex items-center px-3 py-1 font-bold rounded-3xl bg-gray-200'>
       <p className=''>Rating : {book.rating}</p></div>
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

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    class="tab"
    aria-label="Wishlist Books"
    checked="checked" />
  <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <ListedWishlistbooks></ListedWishlistbooks>
  </div>
</div>
    </div>
  )
}

export default Listedbooks
