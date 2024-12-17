import { useContext } from "react";
import { CartContext } from "./CartContext";

export const CartIcon = ({ display }) => {
  const { state, dispatch } = useContext(CartContext);

  const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEM", payload: id});
  }

  const increaseItem = (id) => {
    dispatch({type: "INCREASE_QUANTITY", payload: id})
  }

  const decreaseItem = (id) => {
    dispatch({type: "DECREASE_QUANTITY", payload: id})
  }
  return (
    <div className={`cart-container ${display}`}>
      {state.items.length === 0 ? (
        <>
          <h3 className="cart-empty">Your cart is empty</h3>
          <div className="cart-image">
            <img
              src="/src/assets/shared/desktop/icon-cart-black.svg"
              alt="cartEmpty"
            />
          </div>
        </>
      ) : (
        <>
          
        </>
      )}
    </div>
  );
};
