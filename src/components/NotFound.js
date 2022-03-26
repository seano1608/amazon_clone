import React from "react";
import { Link } from "react-router-dom"; 
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not_found">
      <Link to="/">
        <div className="img_top">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png"
            alt="not found"
          />
        </div>
        <div className="img_bottom">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/5._TTD_.jpg"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
