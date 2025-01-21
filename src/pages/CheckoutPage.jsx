import { CheckoutForm, Summary, Modal, Overlay, useShowCart } from "../index";
import "../../src/css/checkout/checkout.css";

export const CheckoutPage = () => {
  const { showCart, handleShowCart } = useShowCart();

  return (
    <div className="checkout__container page-container py-5 mt-5">
      <CheckoutForm />
      <Summary handleShowModal={handleShowCart} />
      <Modal display={showCart} />

      {showCart && <Overlay display="overlay-active" />}
    </div>
  );
};
