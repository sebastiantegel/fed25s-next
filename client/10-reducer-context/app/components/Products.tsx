"use client";

import { useContext } from "react";
import { WebshopContext } from "../contexts/WebshopContext";
import { CartActionTypes } from "../reducers/CartReducer";

export const Products = () => {
  const { products, dispatch } = useContext(WebshopContext);

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <span>{p.name}</span>
          <button
            onClick={() => {
              dispatch({
                type: CartActionTypes.ADDED,
                payload: JSON.stringify(p),
              });
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
