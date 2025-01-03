import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='navbar-container'>
            <Link to="/" className='logo-link'>
                <img src={Logo} alt='logo' className='logo'/>
            </Link>

            {/* Menu Toggle Button */}
            <div>
                <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                </div>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" className='nav-link home-link'>HOME</Link>
                    <a href='#exercises' className='nav-link exercise-link'>EXERCISES</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
