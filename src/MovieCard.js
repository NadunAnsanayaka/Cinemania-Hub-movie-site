import React from 'react'
import './MovieCard.css'

function MovieCard(props) {

    const API_IMG ="https://image.tmdb.org/t/p/w500/"
    const def_IMG ="https://images.unsplash.com/photo-1560109947-543149eceb16?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className='card'>
        <div className='poster'>
            <img src={props.poster_path? API_IMG+props.poster_path : def_IMG}/>
        </div>

        <div className='info'>
            <p className='title'> {props.title}</p>
            <p className='vote'>{props.vote_average}</p>
        </div>

        <div className='overview'>
          <h2 className='title_overview'>{props.title}</h2>
          <h3 className='overview_info'>{props.overview}</h3>

        </div>
    </div>

  )
}

export default MovieCard