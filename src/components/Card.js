import React from 'react'

export default function Card() {
  return (
    <>
      <div className='movie'>
        <img src="https://images.unsplash.com/photo-1665263515157-e07dbcc7d2ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className='poster' alt="movie poster" />
        <div className='movie-details'>
          <div className='box'>
            <h4 className='title'>Movie Title</h4>
            <p className='rating'>9.7</p>
          </div>
        </div>
      </div>
    </>
  )
}
