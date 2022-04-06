import React, { useContext } from 'react'
import CurrencyFormat from 'react-currency-format';
import ShoppingContext from "../context/shopping/shoppingContext";
import "./Subtotal.css";

const Subtotal = () => {

    const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;
  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText = {(value) => (
                <>
                <p>
                    Subtotal ({basket?.length} items:) <strong>{value}</strong>
                </p>
                <small className="subtotal_gift"><input type="checkbox"/>This order contains a gift</small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            prefix={'$'}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;