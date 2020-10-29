import { Reducer } from "react";
import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: []
}

const cart: Reducer<ICartState, any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload;

      state.items.push({
        product,
        quantity: 1
      })

      return state;

      break;
    }
    default: {
      return state;
    }
  }
}

export default cart;