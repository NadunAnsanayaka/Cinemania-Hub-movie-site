import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

function App() {

  const API_url = "https://api.themoviedb.org/3/discover/movie?" 
  const API_key = "api_key=909b545c84f120970366279d72236b82"
  const API_search = "https://api.themoviedb.org/3/search/movie?api_key=909b545c84f120970366279d72236b82&query="
 
 const [movies,setMovies] =useState([]);
 const [term,setTerm]=useState('');

 useEffect(()=>{
  fetch(API_url+API_key)
  .then(res=>res.json())
  .then(data =>setMovies(data.results))
 },[])

 const handleSearch =(e)=>{
  e.preventDefault()


  fetch(API_search+ term)
  .then(res=> res.json())
  .then(data =>setMovies(data.results))

 }

  return (
    <div className="App">
      <div className='serch_nav'>
        <div>
          <h1>Movies</h1>
        </div>

        <div>
          <form onSubmit={handleSearch}>
            <input onChange={(e)=>setTerm(e.target.value) }/>
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className='movies'>
          {movies.map((movie)=>
            <MovieCard {...movie}/>
          )}
      </div>
    </div>
  );
}

export default App;
