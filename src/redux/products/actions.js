import * as type from "./types";

const actionFetchProducts = products => {
  return {
    type: type.PRODUCTS_COMPLETE,
    payload: products
  };
};

export const fetchProducts = () => {
  return function(dispatch) {
    dispatch(
      actionFetchProducts([
        {
          id: 1,
          name: "Bose SoundSport Wireless  in-Ear",
          description: "Short description for product",
          price: 279.99
        }
      ])
    );
  };
};
