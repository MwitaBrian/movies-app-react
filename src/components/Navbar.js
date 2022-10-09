import React from 'react'

export default function Navbar() {
  return (
    <>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Action</a></li>
        <li><a href="#">Drama</a></li>
        <li><a href="#">Comedy</a></li>
        <li><a href="#">Kids</a></li>
      </ul>
      <form>
        <div className='search-btn'>
          <input type="text" placeholder='Search Movie Name' className='inputText' />
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </form>
    </>
  )
}
