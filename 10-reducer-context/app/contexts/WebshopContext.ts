"use client";

import { createContext, Dispatch } from "react";
import { Product } from "../models/Product";
import { CartItem } from "../models/CartItem";
import { CartAction } from "../reducers/CartReducer";

type WebshopContextType = {
  products: Product[];
  cart: CartItem[];
  dispatch: Dispatch<CartAction>;
};

export const WebshopContext = createContext<WebshopContextType>({
  products: [],
  cart: [],
  dispatch: () => {},
});
