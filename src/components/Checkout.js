import React, { useContext } from "react";
import "./Checkout.css";
import ShoppingContext from "../context/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
            key={item.item.id}
              id={item.item.id}
              title={item.item.title}
              image={item.item.image}
              price={item.item.price}
              rating={item.item.rating}
            />
          ))};          
        </div>
      </div>

      <div className="checkout_right"><Subtotal/>

      </div>
    </div>
  );
};

export default Checkout;
