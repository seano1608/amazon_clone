import React from "react";
import "./Product.css";

const Product = ({ id, image, title, rating, price }) => {
  return (
    <div className="product">
      <img className="product_image" src={image} alt="Product Image" />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          <p>{rating}</p>
        </div>
        <p className="prduct_price">{price}</p>
      </div>
      <button className="product_button">Add to Basket</button>
    </div>
  );
};

export default Product;
