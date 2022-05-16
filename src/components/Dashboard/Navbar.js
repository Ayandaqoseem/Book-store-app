import React from 'react'
import { Link } from 'react-router-dom';
// import Logo from '../../assets/Frame 45.png';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-header'>
            {/* <img src={Logo} alt='' /> */}
            <h1>BookStore</h1>

            <ul className='ul-light'>
                <li> Overview </li>
                <li> About Us </li>
                <li> Our Product </li>
                <li> Contact Us </li>
            </ul>
        </div>
        <div className='navbar-signins'>
            <p>Sign in</p>
            <Link to='signup'> <button> Sign Up </button></Link>
        </div>

    </div>
  )
}

export default Navbar
