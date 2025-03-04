
import { useLoaderData, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { saveReadBooks } from '../HandleLocalStorage/HandlelocalstorageReadlist';
import { saveWishlistBooks } from '../HandleLocalStorageWishlist/HandleLocalStorage';
import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
const BookDetails = () => {

  const [clicked,setclicked] = useState(false);
  const [count,setcount] = useState(1);
  const bookofdata = useLoaderData();
  const {id} = useParams();
  const intId = parseInt(id);
  const selectedData = bookofdata.find(book=>book.id===intId);


  //function handleReadButton
  
  const handleReadButton = ()=>{
    setclicked(true);
    setcount(count+1);
    if(count>1){
      toast.error("The book is alredy read!", {
        position: "top-center",
    });
    }
    else{
    saveReadBooks(intId);
    toast('Books added to Readlist');
    }
    
  }

  //handleWishButton
 
  const handleWishButton = () =>{
    if(!clicked){
      saveWishlistBooks(intId);
      toast('books added to Wishlist');
    }
    else{
      toast.error("The book is alredy read!", {
        position: "top-center",
    });
    }
   
  }

  return (
    <div className='mx-12 flex gap-24 mt-[60px] mb-12'>
     <div className="bg-gray-100 flex items-center rounded-2xl p-[74px] ">
     <img className='w-[425px] h-[564px] ' src={selectedData.image}  alt="" />
     </div>

     <div className="text container w-[550px]">
     <h1 className='text-[#131313] font-bold text-[40px]'>{selectedData.title}</h1>
     <p className='text-[16px] mb-6 text-[#131313CC] font-normal '>By:{selectedData.author}</p>
     <hr className='text-gray-200 mb-6'></hr>
     <h1 className='mb-6'>{selectedData.genre}</h1>
     <hr className='text-gray-200 mb-6 '></hr>
     <span className='font-semibold text-lg '>Review:</span><span className='text-lg mb-2 font-normal'>{selectedData.review}</span>
     
     <div className="tag flex gap-3 mt-6 mb-6  ">
      <div className="flex items-center ">
      <p className='font-bold  text-lg '>Tag</p>
      </div>
      <div className="flex gap-3">
          {
          selectedData.tags.map(tag=><p className=' bg-[#F3F3F3] text-center w-[200px] px-4 py-3 rounded-4xl text-[#23BE0A] text-xl font-semibold'> #{tag}</p>)
          }
      </div>
     </div>
     <hr className='text-gray-200 mb-6'></hr>
     <div className=" font-normal text-lg flex gap-[60px]">
      
       <div className="row">
       <h1>Number of pages:
        </h1>
        <h1>Publisher:
        </h1>
        <h1>Year of Publishing:
        </h1>
        <h1>Rating:
        </h1>
       </div>
       
       <div className="col text-[#131313] font-semibold text-lg">
       <p>{selectedData.number_of_pages}</p>
        <p>{selectedData.publisher}</p>
        <p>{selectedData.year_of_publishing}</p>
        <p>{selectedData.rating}</p>
       </div>
     
     </div>
     <div className="button">
        <button onClick={handleReadButton} className=' outline-0 font-semibold mr-4 mt-8 text-lg border-2 border-gray-200  btn btn-success rounded-lg' type="button">Read</button>
        <button onClick={handleWishButton} className='btn btn-ash font-semibold text-lg  text-white rounded-lg bg-[#50B1C9] ' type="button">Wishlist</button>
      </div>
      <ToastContainer></ToastContainer>
     </div>
    </div>
  )
}

export default BookDetails
