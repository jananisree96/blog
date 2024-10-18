import React from 'react';
import NavBar from '../Navbar/NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Hunky Dory Solutions</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="navbar-icons">
                <input type="text" className="search-bar" placeholder="Search..." />
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
        </nav>
    );
};

export default Navbar;
