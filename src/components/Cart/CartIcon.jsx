import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import "../../css/components/cart.css";
import { QuantityButton } from "../Button/QuantityButton";
import { useCounter } from "../../hooks/useCounter";
import { Link } from "react-router-dom";
import { ListProductsCart } from "../TextElements/ListProductsCart";
import { TotalCartInfo } from "../TextElements/TotalCartInfo";

export const CartIcon = (props) => {
  //3: Consumiendo el contexto de CartContext
  const { cart, dispatch } = useContext(CartContext);
  const { increaseItem, decreaseItem } = useCounter();
  const { display } = props;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItems = () => {
    dispatch({
      type: "REMOVE_ITEMS",
    });
  };

  return (
    <div className={`cart-container ${display}`}>
      {cart.items.length < 1 ? (
        <>
          <h3 className="cart-empty">Your cart is empty</h3>
          <div className="cart-image">
            <img
              src="../../assets/shared/desktop/icon-cart-black.svg"
              alt="cartEmpty"
            />
          </div>
        </>
      ) : (
        <>
          <div className="cart-header">
            <h3>
              Cart<small>{`(${cart.items.length})`}</small>
            </h3>
            <button onClick={() => removeItems(cart)} className="cart-remove">
              Remove all
            </button>
          </div>
          <ul
            className={`cart-product ${
              cart.items.length > 2 ? "overflow-y-scroll" : ""
            }`}
          >
            {cart.items.map((item) => (
              <li key={item.id} className="cart-item">
                <ListProductsCart item={item} />

                <div className="buttons">
                  <QuantityButton
                    quantity={item.quantity}
                    increment={() => increaseItem(item.id)}
                    decrement={() => decreaseItem(item.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
          <TotalCartInfo cart={cart} />
          <Link to="/checkout" className="button-checkout">
            Checkout
          </Link>
        </>
      )}
    </div>
  );
};
