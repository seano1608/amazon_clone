import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

const Header = () => {
  const ctx = useContext(AuthContext);
  return (
    <header className="header">
      <Link to="/home">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        {ctx.isLoggedIn ? (
          <Link to="/">
            <div className="header_option" onClick={ctx.onLogout}>
              <span className="header_optionOne">Hello Guest</span>
              <span className="header_optionTwo">Sign Out</span>
            </div>
          </Link>
        ) : (
          <Link to="/signin">
            <div className="header_option">
              <span className="header_optionOne">Hello Guest</span>
              <span className="header_optionTwo">Sign In</span>
            </div>
          </Link>
        )}

        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionOne">Returns</span>
            <span className="header_optionTwo">Orders</span>
          </div>
        </Link>
        <Link to="/prime">
          <div className="header_option">
            <span className="header_optionOne">Your</span>
            <span className="header_optionTwo">Prime</span>
          </div>
        </Link>
        <Link to="/basket">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
