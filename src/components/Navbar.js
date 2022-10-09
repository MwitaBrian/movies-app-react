import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className='header'>
        <ul className='navbar-ul'>
          <li className='navbar-ul-li'><a href="#" className='navbar-ul-li-a'>Home</a></li>
          <li className='navbar-ul-li'><a href="#" className='navbar-ul-li-a'>Action</a></li>
          <li className='navbar-ul-li'><a href="#" className='navbar-ul-li-a'>Drama</a></li>
          <li className='navbar-ul-li'><a href="#" className='navbar-ul-li-a'>Comedy</a></li>
          <li className='navbar-ul-li'><a href="#" className='navbar-ul-li-a'>Kids</a></li>
        </ul>
        <form>
          <div className='search-btn'>
            <input type="text" placeholder='Search Movie Name' className='inputText' />
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </form>
      </div>
    </>
  )
}
