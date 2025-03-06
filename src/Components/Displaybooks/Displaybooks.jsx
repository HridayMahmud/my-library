import { Link } from 'react-router-dom';
import { CiStar } from 'react-icons/ci'; 

const DisplayListedBooks = ({ allbooks }) => {
  const { title, author, id, image, tags, genre, rating } = allbooks;

  return (
    <div className="w-full">
      <Link to={`/book/${id}`}>
        <div className="allbooks p-6 border-2 border-gray-300 rounded-xl">
          <div className="px-6 py-8 flex justify-center rounded-xl bg-[#F3F3F3]">
            <img className="w-[150px] h-[200px] sm:w-[180px] sm:h-[240px] md:w-[200px] md:h-[260px]" src={image} alt={title} />
          </div>
          <ul className="mt-6 flex flex-col md:flex-row gap-3 mb-4  justify-center items-center">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-[#F3F3F3] text-center w-[150px] sm:w-[200px] px-4 py-3 rounded-4xl text-[#23BE0A] text-xl font-semibold mb-2"
              >
                {tag}
              </li>
            ))}
          </ul>
          <h1 className="text-[#131313] font-bold text-2xl sm:text-xl md:text-2xl">{title}</h1>
          <p className="text-[16px] text-[#131313CC] font-normal">By: {author}</p>
          <div className="mt-4 border-b-gray-200 border-b-4 border-dotted border-w"></div>

          <div className="genreAndRating mt-5 flex text-[#131313CC] text-[16px] font-semibold justify-between">
            <h1>{genre}</h1>
            <div className="flex gap-4 items-center">
              <span>{rating}</span>
              <CiStar />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DisplayListedBooks;
