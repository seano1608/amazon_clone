import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>                    
                </li>
                <li>
                <Link to="/products">Products</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header