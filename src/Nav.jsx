import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'


const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Chojiu Dev</h3>
            <p>List of Movies : {movies.length} </p>

        </div>
    )
}

export default Nav