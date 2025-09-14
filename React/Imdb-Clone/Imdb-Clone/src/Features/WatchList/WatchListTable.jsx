import React, { useEffect, useState } from 'react'
import genreids from "../Helpers/Genraids"
import { ArrowUp, ArrowDown } from 'lucide-react';

const WatchListTable = () => {

  const [watchList, setWatchList] = useState([]);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genre"]);
  const [currGenre, setCurrGenre] = useState("All Genre");


  useEffect(() => {
    const watchListData =
      JSON.parse(localStorage.getItem("ImdbWatchListMovies"));
    const genreList = new Set(
      watchListData?.map((movie) => genreids[movie?.genre_ids[0]])
    );
    setGenreList(["All Genre", ...genreList]);
    setWatchList(watchListData);
  }, [])

  const handleAscendingOrderRatings = () => {
    const sortedMovies = watchList?.sort(
      (A, B) => A?.vote_average - B?.vote_average
    );
    setWatchList([...sortedMovies]);
  };
  const handleDecendingOrderRatings = () => {
    const sortedMovies = watchList?.sort(
      (A, B) => B?.vote_average - A?.vote_average
    );
    setWatchList([...sortedMovies]);
  };

  const removeFromWatchList = (movie) => {
    setWatchList((prevMovieList) => {
      const filteredWatchList = prevMovieList.filter((m) => m?.id != movie?.id);
      localStorage.setItem(
        "ImdbWatchListMovies",
        JSON.stringify(filteredWatchList)
      );
      return filteredWatchList;
    });
  };

  return (
    <div className='my-10 mz-5'>
      <div className='flex justify-center'>
        {genreList?.map((genre, idx) => {
          return <div
            key={idx}
            className={`mx-4 flex justify-center items-center h-[3rem] w-[9rem] font-bold border rounded-xl cursor-pointer ${currGenre === genre ? "bg-blue-400 text-white" : "bg-gray-300"
              }`}
            onClick={() => setCurrGenre(genre)}
          >
            {genre}
          </div>
        })}
      </div>
      <div className="flex justify-center my-10">
        <input type='text'
          placeholder='Search By Movie Name'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-[3rem] w-[18rem] px-4 outline-none border border-slate-700 rounded-lg bg-gray-300"
        />
      </div>
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className='bg-gray-200'>
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th className="px-6 py-4 font-medium text-gray-900">
              <div className="flex gap-2">
                <ArrowUp
                  size={24}
                  strokeWidth={2}
                  onClick={handleAscendingOrderRatings} />
                <div>Rating</div>
                <ArrowDown
                  size={24}
                  strokeWidth={2}
                  onClick={handleDecendingOrderRatings} />
              </div>

            </th>
            <th className="px-6 py-4 font-medium text-gray-900">Popularity</th>
            <th className="px-6 py-4 font-medium text-gray-900">Genre</th>
            <th className="px-6 py-4 font-medium text-gray-900">
              Action Button
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList?.length > 0 &&
            watchList.filter((movie) => {
              return (
                currGenre === "All Genre" ||
                genreids[movie.genre_ids[0]] === currGenre
              );
            })
              .filter((movie) => {
                return movie?.title
                  .toLowerCase()
                  .trim()
                  .includes(search.toLowerCase());
              })
              .map((movie, idx) => {
                return <tr key={idx}>
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                      alt="Poster of Movie"
                      className="h-[6rem] w-[10rem] object-cover"
                    />
                    <div>{movie?.title}</div>
                  </td>
                  <td className="pl-6 py-4">{movie?.vote_average}</td>
                  <td className="pl-6 py-4">{movie?.popularity}</td>
                  <td className="pl-6 py-4">{genreids[movie?.genre_ids[0]]}</td>
                  <td className="pl-6 py-4 text-red-500 text-bold hover:cursor-pointer"
                    onClick={() => removeFromWatchList(movie)}
                  >
                    REMOVE
                  </td>
                </tr>;
              })}
        </tbody>
      </table>
    </div>
  )
}

export default WatchListTable
