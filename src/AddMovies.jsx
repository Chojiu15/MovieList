import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'
import Movie from './Movie'

const AddMovies = () =>{
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext)

    const updateName = (e) =>{
        setName(e.target.value)
    }

     const updatePrice = (e) =>{
        setPrice(e.target.value)
    }

    const addMovies = (e) =>{
        e.preventDefault()
        setMovies([... movies, {name: name, price : price}  ])
    }



    return(
        <div style={{textAlign : 'center'}}>
        <form onSubmit={addMovies}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <button type="submit">Add Movies</button>
        </form>
     </div>
    )
}
export default AddMovies