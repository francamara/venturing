import React, {useState, useEffect} from 'react';
import axios from 'axios'

import MovieCard from '../components/MovieCard';


export default function MovieList() {
  const [movies, setMovies] = useState([]);

  const request = async () => {
    const {data} = await axios.get('http://localhost:2000/api/v1/movies')
    setMovies(data.movies)
  }
  
  useEffect(() => {
        request()
  },[])


  return (
   <div>
      <h1>Movie List</h1>
      {
        movies.map(({ id, ...otherprops }) => (<MovieCard key={id} {...otherprops}/>))
      }
     </div>
  );
}