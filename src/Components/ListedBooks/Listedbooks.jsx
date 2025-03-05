import React, { useEffect, useState } from 'react'
import { getReadedBooks } from '../HandleLocalStorage/HandlelocalstorageReadlist';
import { CiLocationOn } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { getWishListBooks } from '../HandleLocalStorageWishlist/HandleLocalStorage';

const Listedbooks = () => {
  const [savedBooks, setsavedBooks] = useState([]);
  // wishlist list useState
  const [savedWishlistbooks, setsavedWishlistbooks] = useState([]);
  const [activeTab, setActiveTab] = useState("readBooks"); // Track active tab

  // Filter function for sorting books
  const handleFilter = (filterText) => {
    if (filterText === 'rating') {
      const sortedBooks = [...savedBooks].sort((a, b) => b.rating - a.rating);
      setsavedBooks(sortedBooks);
      const sortedWishlistbooks = [...savedWishlistbooks].sort((c, d) => d.rating - c.rating);
      setsavedWishlistbooks(sortedWishlistbooks);
    } else if (filterText === 'number_of_pages') {
      const sortedBooks = [...savedBooks].sort((a, b) => b.number_of_pages - a.number_of_pages);
      setsavedBooks(sortedBooks);
      const sortedWishlistbooks = [...savedWishlistbooks].sort((c, d) => d.number_of_pages - c.number_of_pages);
      setsavedWishlistbooks(sortedWishlistbooks);
    } else if (filterText === 'year_of_publications') {
      const sortedBooks = [...savedBooks].sort((a, b) => b.year_of_publishing - a.year_of_publishing);
      setsavedBooks(sortedBooks);
      const sortedWishlistbooks = [...savedWishlistbooks].sort((c, d) => d.year_of_publishing - c.year_of_publishing);
      setsavedWishlistbooks(sortedWishlistbooks);
    }
  };

  const fetchingData = async () => {
    const response = await fetch('/Data.json');
    const allbooks = await response.json();

    // all stored wishlist books
    const storedWishlistBooks = getWishListBooks();
    const allstoredWishlistbooks = [];
    for (const id2 of storedWishlistBooks) {
      const filteredWishlistBooks = allbooks.filter(book => book.id === id2);
      if (filteredWishlistBooks.length > 0) {
        allstoredWishlistbooks.push(...filteredWishlistBooks);
      }
    }
    // update state 2
    setsavedWishlistbooks(allstoredWishlistbooks);

    // all stored Readlist
    const storedReadBooks = getReadedBooks();
    const allstoredReadbooks = [];
    for (const id of storedReadBooks) {
      const filteredbooks = allbooks.filter(book => book.id === id);
      if (filteredbooks.length > 0) {
        allstoredReadbooks.push(...filteredbooks);
      }
    }

    // set useState
    setsavedBooks(allstoredReadbooks);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <div className="bg-gray-100 mx-12 py-4 rounded-2xl text-[#131313] mb-5 text-center font-bold text-3xl">Books</div>

      <div className="flex justify-center mb-4">
        {/* Filter Dropdown */}
        <div className="dropdown">
          <details className="dropdown">
            <summary className="btn m-1 px-6 bg-[#23BE0A] text-white">Sort By</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><button onClick={() => handleFilter('rating')} type="button">Rating</button></li>
              <li><button onClick={() => handleFilter('number_of_pages')} type="button">Number of Pages</button></li>
              <li><button onClick={() => handleFilter('year_of_publications')} type="button">Year Publications</button></li>
            </ul>
          </details>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted mx-12">
        {/* Read Books Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          checked={activeTab === "readBooks"}
          onChange={() => setActiveTab("readBooks")}
        />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <div className="listedbooks mx-12">
            {savedBooks.length > 0 ? (
              <div className="">
                {savedBooks.map((book, index) => (
                  <div key={`${book.id}-${index}`} className="mb-5 flex flex-col md:flex-row gap-6 border-2 rounded-2xl border-gray-300 p-6">
                    {/* Book Image */}
                    <div className="image rounded-2xl bg-gray-100 w-full md:w-[300px] p-[50px] flex justify-center">
                      <img className='w-[230px] h-[228px]' src={book.image} alt="" />
                    </div>
                    {/* Book Details */}
                    <div className="text flex-1">
                      <h1 className='text-[#131313] font-bold text-[30px] md:text-[40px]'>{book.title}</h1>
                      <p className='text-[16px] mb-6 text-[#131313CC] font-normal'>By: {book.author}</p>
                      <div className="tag flex gap-3 mt-6 mb-6">
                        <div className="flex items-center">
                          <p className='font-bold text-lg'>Tag</p>
                        </div>
                        <div className="flex items-center gap-3">
                          {book.tags.map(tag => (
                            <p className='bg-[#F3F3F3] text-center w-[150px] p-1 rounded-4xl text-[#23BE0A] text-lg font-semibold'> #{tag}</p>
                          ))}
                        </div>
                      </div>
                      <div className="yearofpublication flex items-center gap-2 text-[#131313CC] text-lg font-normal">
                        <CiLocationOn />
                        <p>Year of Publishing: {book.year_of_publishing}</p>
                      </div>
                      <div className="publisherandpages mb-6 text-[#131313CC] text-lg font-normal flex gap-4">
                        <div className="flex items-center gap-2">
                          <FcBusinessman />
                          <p>Publisher: {book.publisher}</p>
                        </div>
                        <div className="flex items-center">
                          <MdOutlineInsertPageBreak />
                          <p>Page {book.number_of_pages}</p>
                        </div>
                      </div>
                      <hr className='text-gray-200 mb-6'></hr>
                      <div className="categoryRatingDetails flex gap-3">
                        <div className="text-center text-blue-500 flex items-center px-3 py-1 font-bold rounded-3xl bg-gray-200">
                          <p>Category : classic</p>
                        </div>
                        <div className='text-center text-yellow-400 flex items-center px-3 py-1 font-bold rounded-3xl bg-gray-200'>
                          <p>Rating : {book.rating}</p>
                        </div>
                        <div className="text-center text-white flex items-center bg-[#23BE0A] rounded-4xl px-3 py-1">
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

        {/* Wishlist Books Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
          checked={activeTab === "wishlistBooks"}
          onChange={() => setActiveTab("wishlistBooks")}
        />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          {/* Wishlist Book Cards */}
          {savedWishlistbooks.length > 0 ? (
            <div className="">
              {savedWishlistbooks.map((book2) => (
                <div className='mb-5 flex flex-col md:flex-row gap-6 border-2 rounded-2xl border-gray-300 p-6' key={book2.id}>
                  {/* Book Image */}
                  <div className="image rounded-2xl bg-gray-100 w-full md:w-[300px] p-[50px] flex justify-center">
                    <img className='w-[230px] h-[228px]' src={book2.image} alt="" />
                  </div>
                  {/* Book Details */}
                  <div className="text flex-1">
                    <h1 className='text-[#131313] font-bold text-[30px] md:text-[40px]'>{book2.title}</h1>
                    <p className='text-[16px] mb-6 text-[#131313CC] font-normal'>By: {book2.author}</p>
                    <div className="tag flex gap-3 mt-6 mb-6">
                      <div className="flex items-center">
                        <p className='font-bold text-lg'>Tag</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {book2.tags.map(tag => (
                          <p className='bg-[#F3F3F3] text-center w-[150px] p-1 rounded-4xl text-[#23BE0A] text-lg font-semibold'> #{tag}</p>
                        ))}
                      </div>
                    </div>
                    <div className="yearofpublication flex items-center gap-2 text-[#131313CC] text-lg font-normal">
                      <CiLocationOn />
                      <p>Year of Publishing: {book2.year_of_publishing}</p>
                    </div>
                    <div className="publisherandpages mb-6 text-[#131313CC] text-lg font-normal flex gap-4">
                      <div className="flex items-center gap-2">
                        <FcBusinessman />
                        <p>Publisher: {book2.publisher}</p>
                      </div>
                      <div className="flex items-center">
                        <MdOutlineInsertPageBreak />
                        <p>Page {book2.number_of_pages}</p>
                      </div>
                    </div>
                    <hr className='text-gray-200 mb-6'></hr>
                    <div className="categoryRatingDetails flex gap-3">
                      <div className="text-center text-blue-500 flex items-center px-3 py-1 font-bold rounded-3xl bg-gray-200">
                        <p>Category : classic</p>
                      </div>
                      <div className='text-center text-yellow-400 flex items-center px-3 py-1 font-bold rounded-3xl bg-gray-200'>
                        <p>Rating : {book2.rating}</p>
                      </div>
                      <div className="text-center text-white flex items-center bg-[#23BE0A] rounded-4xl px-3 py-1">
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
    </div>
  )
}

export default Listedbooks;
