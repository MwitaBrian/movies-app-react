import React from 'react'

export default function Card() {
  return (
    <>
      <div className='movie'>
        <img src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80" className='poster' alt="movie poster" />
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
