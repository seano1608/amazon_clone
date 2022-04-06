import { useReducer } from "react";
import ShoppingContext from "./shoppingContext";
import { shoppingReducer } from "./shoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  //Selectors
  const getBasketTotal = (basket) => {
    basket?.reduce((amount, item) => item.price + amount, 0);
  };
  
  const addToBasket = async (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };

  const setUser = (user) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  const removeFromBasket = (item) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: item,
    })
  }

  const emptyBasket = (item) => {
    dispatch({
      type: "EMPTY_BASKET",
      payload: item,
    })
  }

  return (
    <ShoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        getBasketTotal,
        addToBasket,
        setUser,
        removeFromBasket,
        emptyBasket,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
