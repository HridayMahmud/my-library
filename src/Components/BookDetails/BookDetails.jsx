import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { saveReadBooks } from '../HandleLocalStorage/HandlelocalstorageReadlist';
import { saveWishlistBooks } from '../HandleLocalStorageWishlist/HandleLocalStorage';
import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const [clicked, setclicked] = useState(false);
  const [count, setcount] = useState(1);
  const bookofdata = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const selectedData = bookofdata.find(book => book.id === intId);

  const handleReadButton = () => {
    setclicked(true);
    setcount(count + 1);
    if (count > 1) {
      toast.error("The book is already read!", {
        position: "top-center",
      });
    } else {
      saveReadBooks(intId);
      toast('Book added to Readlist');
    }
  };

  const handleWishButton = () => {
    if (!clicked) {
      saveWishlistBooks(intId);
      toast('Book added to Wishlist');
    } else {
      toast.error("The book is already read!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="mx-4 sm:mx-12 lg:mx-24 flex flex-col lg:flex-row gap-12 mt-[60px] mb-12">
      <div className="bg-gray-100 flex items-center rounded-2xl p-8 lg:p-[74px] justify-center lg:justify-start">
        <img className="w-[250px] h-[350px] sm:w-[300px] sm:h-[400px] md:w-[350px] md:h-[450px] lg:w-[425px] lg:h-[564px]" src={selectedData.image} alt="" />
      </div>

      <div className="text-container w-full lg:w-[550px]">
        <h1 className="text-[#131313] font-bold text-[32px] sm:text-[36px] lg:text-[40px]">{selectedData.title}</h1>
        <p className="text-[16px] mb-6 text-[#131313CC] font-normal">By: {selectedData.author}</p>
        <hr className="text-gray-200 mb-6" />
        <h1 className="mb-6 text-[18px]">{selectedData.genre}</h1>
        <hr className="text-gray-200 mb-6" />
        <span className="font-semibold text-lg">Review:</span>
        <span className="text-lg mb-2 font-normal">{selectedData.review}</span>

        {/* Responsive tags */}
        <div className="tags flex flex-wrap gap-3 mt-6 mb-6">
          <div className="flex items-center">
            <p className="font-bold text-lg">Tags:</p>
          </div>
          <div className="flex gap-3 flex-wrap justify-start">
            {selectedData.tags.map((tag, index) => (
              <p key={index} className="bg-[#F3F3F3] text-center px-4 py-3 rounded-4xl text-[#23BE0A] text-xl font-semibold mb-2 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]">
                #{tag}
              </p>
            ))}
          </div>
        </div>
        <hr className="text-gray-200 mb-6" />

        <div className="details font-normal text-lg flex flex-col sm:flex-row gap-6">
          <div className="row">
            <h1>Number of pages:</h1>
            <h1>Publisher:</h1>
            <h1>Year of Publishing:</h1>
            <h1>Rating:</h1>
          </div>
          <div className="col text-[#131313] font-semibold text-lg">
            <p>{selectedData.number_of_pages}</p>
            <p>{selectedData.publisher}</p>
            <p>{selectedData.year_of_publishing}</p>
            <p>{selectedData.rating}</p>
          </div>
        </div>

        {/* Responsive buttons */}
        <div className="buttons mt-6 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleReadButton}
            className="outline-0 font-semibold text-lg border-2 border-gray-200 btn btn-success rounded-lg w-full sm:w-auto"
            type="button"
          >
            Read
          </button>
          <button
            onClick={handleWishButton}
            className="btn btn-ash font-semibold text-lg text-white rounded-lg bg-[#50B1C9] w-full sm:w-auto"
            type="button"
          >
            Wishlist
          </button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default BookDetails;
