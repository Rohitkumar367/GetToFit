import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import './Navbar.css';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {

    const {isAuthenticated, logout} = useAuthStore();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout=()=>{
        logout();
    }

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
                    <Link to="/" className='nav-link home-link'>Home</Link>
                    <Link to="/wishlist" className='nav-link home-link'>Wishlist</Link>
                    { isAuthenticated ? 
                        (
                            <Link to="/" className='nav-link' onClick={handleLogout}>LogOut</Link>
                        )
                        :
                        (
                            <>
                                <Link to="/login" className='nav-link home-link'>Login</Link>
                                <Link to="/signup" className='nav-link home-link'>SignUp</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;
