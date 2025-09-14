import React, { useState,useEffect, children } from 'react'


// 1. craete an context object
export const MovieContext = React.createContext();



const MovieContextWrapper = ({ children }) => {

    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        // page refresh
        setWatchList(() => {
            if (localStorage.getItem("ImdbWatchListMovies")) {
                return JSON.parse(localStorage.getItem("ImdbWatchListMovies"));
            }
            return [];
        })
    }, [])

    const addToWatchList = (movie) => {
        setWatchList((prevMovieList) => {
            const updatedMovieList = [...prevMovieList, movie];
            return updatedMovieList;
        });

    };

    const removeFromWatchList = (movie) => {
        setWatchList((prevMovieList) => {
            const filteredWatchList = prevMovieList.filter((m) => m?.id != movie?.id);
            return filteredWatchList;
        });
    };

    useEffect(() => {
        localStorage.setItem("ImdbWatchListMovies", JSON.stringify(watchList)); // 1st set in Local storage and will be called when watchlisrt is changes 
    }, [watchList]);

    // 2. create a provided where you will add state and other utility functions
    return <MovieContext.Provider value={{ watchList, setWatchList, addToWatchList , removeFromWatchList}}>
        {children}
    </MovieContext.Provider>;
};

export default MovieContextWrapper
