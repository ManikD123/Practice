import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react"
import Spinner from './Spinner';

const Banner = () => {

    const [movies, setMovies] = useState();
    const [loader, setLoader] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        try {

            setLoader(true);
            const url =
                "https://api.themoviedb.org/3/trending/movie/day?api_key=6bff8263ed68de3e11417a70842f3190"
            axios.get(url).then((response) => {
                /// getting data for 5 movies
                let moviedata = response?.data?.results?.slice(0, 5);
                // updating the state
                setMovies(moviedata.map((movie) => {
                    return {
                        title: movie?.title,
                        bannerImage: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
                    }
                })
                );

                //console.log(response)
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }, [])

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1) % movies.length)
    };
    const handleNext = () => {
        // incrementing the counter by 1 but 1%5 = 1, 4 = 5%% = 0making a loop for correct index
        setCurrentIndex((prevIndex) => prevIndex == 0 ? movies.length - 1 : prevIndex - 1)
    };

    return (<div>{loader ? (<div><Spinner /></div>

    ) : (
        <>{movies?.length > 0 && (
            <div className="relative h-[50vh]">
                <div
                    className="h-full bg-cover bg-center flex items-end"
                    style={{ backgroundImage: `url(${movies[currentIndex]?.bannerImage})` }}
                >
                    <div className="text-white w-full text-center text-2xl p-4 bg-black/50 ">
                        {movies[currentIndex].title}
                    </div>
                </div>
                <button
                    className="absolute left-2 top-1/2 text-white p-2 rounded-full bg-black/50  hover:cursor-pointer"
                    onClick={handlePrev}>
                    <ChevronLeft />
                </button>
                <button
                    className="absolute right-2 top-1/2 text-white p-2 rounded-full bg-black/50 hover:cursor-pointer"
                    onClick={handleNext}>
                    <ChevronRight />
                </button>
            </div>
        )}
        </>
    )}

    </div>
    )
}

export default Banner
