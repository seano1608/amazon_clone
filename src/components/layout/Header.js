import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material'
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
        <img src='' alt='amazon_logo'/>
        <div className='header_search'>
            <input className='header_input' type="text"/>
            <SearchIcon className='search_icon'/>
        </div>
        <div className="header_nav">
            <div className="header_option">
                <span className='header_optionOne'>Hello Guest</span>
                <span className='header_optionTwo'>Sign In</span>                
            </div>
            <div className="header_option">
                <span className='header_optionOne'>Returns</span>
                <span className='header_optionTwo'>Orders</span>                
            </div>
            <div className="header_option">
                <span className='header_optionOne'>Your</span>
                <span className='header_optionTwo'>Prime</span>                
            </div>
            <div className="header_optionBasket">
                <ShoppingBasketIcon className="basket_icon"/>
                <span className='header_optionTwo header_basketCount'>0</span>
            </div>
        </div>
    </header>
  )
}

export default Header