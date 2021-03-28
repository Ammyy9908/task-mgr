export const intialState = {
  sidebar: false,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_SIDEBAR":
      return {
        ...state,
        sidebar: action.sidebar,
      };
    //   case "ADD_TO_BASKET":
    //     return {
    //       ...state,
    //       basket: [...state.basket, action.item],
    //     };

    //   case "SET_USER":
    //     return {
    //       ...state,
    //       user: action.user
    //     }

    default:
      return state;
  }
};

export default reducer;