import * as type from "./types";

const initialState = {
  loading: false,
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case type.PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      };

    case type.PRODUCTS_COMPLETE:
      return {
        ...state,
        loading: false,
        products: action.payload
      };

    default:
      return state;
  }
};
