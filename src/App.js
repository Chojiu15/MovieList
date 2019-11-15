import React from 'react'
import MovieList from './MovieList'
import Nav from './Nav'
import { MovieProvider } from './MovieContext'
import AddMovies from './AddMovies'



const App = () => {
  return (
    <>
      <MovieProvider>
        <Nav />
        <MovieList />
        <AddMovies />
      </MovieProvider>
    </>
  )
}

export default App