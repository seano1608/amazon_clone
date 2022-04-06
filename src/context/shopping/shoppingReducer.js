export const shoppingReducer = (state, action) => {
  switch (action.type) {

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cannot remove item ");
      }
      return {
        ...state,
        basket: newBasket,
      };

      case "EMPTY_BASKET":
        return {
          ...state,
          basket: [],
        };
        
    default:
      return state;
  }
};
