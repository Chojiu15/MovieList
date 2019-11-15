import React, { useContext } from 'react'
import Movie from './Movie'
import {MovieContext} from './MovieContext'

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext)

    return (
        <>
            {movies.map(x => {
                return <Movie key={x.name} name ={x.name} price={x.price} />
            }
            )}
        </>
    )
}

export default MovieList 