export const shoppingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        state,
        basket: [...state.basket, action.payload],
      };

    case "SET_USER":
      return {
        state,
        user: action.payload,
      };
    default:
      return state;
  }
};
