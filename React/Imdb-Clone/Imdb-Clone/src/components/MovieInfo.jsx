import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import axios from 'axios';

const MovieInfo = ({ movie, handleCloseModal }) => {

    const { id, title, poster_path, release_date, overview, vote_average } =
        movie;
    const [loader, setLoader] = useState(false);
    const [trailarUrl, setTrailarUrl] = useState(null);
            const TMDB_API_KEY = import.meta.env.VITE_API_KEY; 

    useEffect(() => {
        const fetchTrailar = async () => {
            try {
                setLoader(true);
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDB_API_KEY}`
                );
                const trailerObj = response?.data?.results.find(
                    (video) => video.type === "Trailer" && video.site === "YouTube"
                );
                if (trailerObj) {
                    setTrailarUrl(`https://www.youtube.com/embed/${trailerObj?.key}`)
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoader(false);
            }

        };
        fetchTrailar();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-[35vw] max-h-[90vh]">
            {loader ? (<Spinner />
            ) : (<>
                <div className='flex flex-row gap-6'>
                    {poster_path ? (<img
                        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                        alt={`${title} poster`}
                        className='w-1/3 rounded-lg object-cover'
                    />) : (
                        <div>No Image Available</div>)}
                    <div>
                        <h2 className='text-3xl font-bold text-blue-500'>{title}</h2>
                        <p className='text-grey-500 font-bold'>
                            Relesae Date: {release_date}
                        </p>
                        <p className='text-gray-500'>
                            Average Vote: {vote_average ? vote_average.toFixed(1) : "N/A"}
                        </p>
                        <p className='text-gray-700'>
                            {overview ? overview : "No Overview Available"}
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-blue-500 mb-3'>Trailar</h3>
                    <div className='w-full h-60'>

                        {trailarUrl ? (<iframe src={trailarUrl}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            className='w-full h-full rounded-lg'
                        ></iframe>) : (
                            <p className='text-gray-500 text-center'>Trailar Not Available</p>)
                        }
                    </div>
                </div>
                <button className='mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:cursor-pointer'
                    onClick={handleCloseModal}
                >
                    Close
                </button>
            </>
            )}

        </div>);
};

export default MovieInfo
