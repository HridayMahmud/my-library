import React, { useEffect, useState } from 'react'
import DisplayListedBooks from '../Displaybooks/Displaybooks';

const FetchingData = () => {
const [books,setBooks] = useState([]);
 const fetchingData=async()=>{
    const response = await fetch('/Data.json');
    const book = await response.json();
    setBooks(book);
   
 
 }
 useEffect(()=>{
 fetchingData();
 },[]);
  return (
    <div  className="mt-[100px]">
       <h1 className='font-bold text-3xl text-center mb-10'>Books</h1>
      <div className="allbooks mx-12 gap-3 grid grid-cols-1  md:grid-cols-3 ">
             
      {
        Array.isArray(books) && books.length>0 ?
       books.map(newbook=><DisplayListedBooks key={newbook.id} allbooks={newbook}></DisplayListedBooks>)
       :<p>no books are found</p>
      }
      </div>
    </div>
  )
}

export default FetchingData
