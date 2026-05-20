import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

export enum CartActionTypes {
  ADDED,
  REMOVED,
  INCREASED,
  DECREASED,
}

export type CartAction = {
  type: CartActionTypes;
  payload: string;
};

export const CartReducer = (cart: CartItem[], action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.ADDED: {
      const productToAdd: Product = JSON.parse(action.payload);

      // Sök efter produkten i varukorgen
      const foundProduct = cart.find((ci) => ci.product.id === productToAdd.id);
      if (foundProduct) {
        // Ändra antalet
        return cart.map((ci) => {
          if (ci.product.id === productToAdd.id) {
            return { ...ci, amount: ci.amount + 1 };
          }
          return ci;
        });
      } else {
        return [...cart, { product: productToAdd, amount: 1 }];
      }
    }

    case CartActionTypes.DECREASED: {
      return cart.map((ci) => {
        if (ci.product.id === +action.payload) {
          if (ci.amount > 1) {
            return { ...ci, amount: ci.amount - 1 };
          } else return ci;
        }
        return ci;
      });
    }

    case CartActionTypes.INCREASED: {
      return cart.map((ci) => {
        if (ci.product.id === +action.payload) {
          return { ...ci, amount: ci.amount + 1 };
        }
        return ci;
      });
    }

    case CartActionTypes.REMOVED:
      return cart.filter((ci) => ci.product.id !== +action.payload);

    default:
      return cart;
  }
};
