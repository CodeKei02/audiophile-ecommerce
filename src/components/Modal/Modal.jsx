import { useContext } from "react";
import { ListProductsCart, CartContext, } from "../../index";
import "../../css/components/modal.css";
import { Link } from "react-router-dom";
export const Modal = (props) => {
  const { display } = props;
  const { cart, dispatch } = useContext(CartContext);
  const shippingCost = 50;
  const subtotal = cart.items.reduce(
    (total, item) => parseFloat(total + item.price * item.quantity),
    0
  );
  const grandTotal = subtotal + shippingCost;

  const clearStorage = () => {
    dispatch({ type: "CLEAR_LOCAL_STORAGE" });
  };


  return (
    <div className={`modal__container ${display ? "" : "d-none"}`}>
      <div className="modal__header">
        <img
          src="/src/assets/checkout/icon-order-confirmation.svg"
          alt="icon-confirmation"
        />
        <h1 className="modal__title title">
          Thank you
          <br />
          for your order
        </h1>
        <p className="modal__subtitle">
          You will recieve an email confirmation shortly
        </p>
      </div>
      <div className="modal__grid">
        <div className="modal__products">
          <ul>
            {cart.items.map((item) => (
              <li key={item.id} id="summmary-item">
                <ListProductsCart item={item} />
                <div className="cart-product-quantity">x{item.quantity}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="modal__grand-total">
          <h3 className="text-uppercase">Grand Total</h3>
          <span>$ {grandTotal}</span>
        </div>
      </div>
      <Link to="/home" onClick={clearStorage} className="btn">
        Back to home
      </Link>
    </div>
  );
};
