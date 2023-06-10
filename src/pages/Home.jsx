import React from 'react';
import background1 from "../images/background1.jpg";
import { FaUserPlus, 
         FaVideo,
        FaStreetView } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header className='header'>
        <div className='header-left-side'>
            <div className='header-content'>
                <h1>Virtual Fitting Room. Anywhere, Anytime.</h1>
                <p>We have brought online shopping to the next level. Now you won’t have to worry about purchasing the wrong size for your clothes.</p>
                <div className='btns' >
                    <Link to='/register'>
                        <button className='btn1' type='button'><FaUserPlus size={20} />     Sign Up Now!</button>
                    </Link>
                    <Link to=''>
                        <button className='btn2' type='button'><FaVideo size={20} />     Learn More</button>
                    </Link>
                </div>
            </div>
        </div>

        <div className='header-right-side'>
            <div className='header-circle'>
                <img className='header-img' src={background1}  alt='header image' />
            </div>
        </div>
        </header>
    );
};

export default Home;