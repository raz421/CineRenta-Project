import { useState } from "react";
import getMovieImage from "../../utills/getMovieImage";
import MovieDetails from "./MovieDetails";
import Ratings from "./Rating";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleMovie = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <MovieDetails onClose={handleCloseModal} movie={selectedMovie} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a
          onClick={() => {
            handleMovie(movie);
          }}
        >
          <img
            className="w-full object-cover"
            src={getMovieImage(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Ratings value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>$100 | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
