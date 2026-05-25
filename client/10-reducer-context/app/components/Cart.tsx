import { useContext } from "react";
import { WebshopContext } from "../contexts/WebshopContext";
import { CartActionTypes } from "../reducers/CartReducer";

export const Cart = () => {
  const { cart, dispatch } = useContext(WebshopContext);

  return (
    <>
      <div>Cart</div>
      {cart.map((ci) => (
        <div key={ci.product.id} className="flex gap-1">
          <button
            onClick={() => {
              dispatch({
                type: CartActionTypes.DECREASED,
                payload: ci.product.id.toString(),
              });
            }}
          >
            -
          </button>
          <span>
            {ci.product.name} - {ci.amount}
          </span>
          <button
            onClick={() => {
              dispatch({
                type: CartActionTypes.INCREASED,
                payload: ci.product.id.toString(),
              });
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch({
                type: CartActionTypes.REMOVED,
                payload: ci.product.id.toString(),
              });
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};
