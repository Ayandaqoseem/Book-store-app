import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Dashboard/Navbar';
import './home.scss';
import Image from '../../assets/images.jpeg';


const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className='home-content'>
            <div className='home-content-text'>
                <h1> Join online library</h1>
                <p> Libraree is a platform where you get access to quality books online, 
                join a community of online readers, get the latest information on new books of interest. </p>

                <Link to='/signup'> <button> Get started for free </button> </Link>


            </div>

            <div className='home-content-image'>
                <img src={Image} alt='icon' />
            </div>
        </div>
    </div>
  )
}

export default Home