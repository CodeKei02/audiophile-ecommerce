import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { ListProductsCart } from "../TextElements/ListProductsCart";
import { TotalCartInfo } from "../TextElements/TotalCartInfo";
import "../../css/components/list_products_cart.css"

export const Summary = (props) => {
  const {handleShowModal} = props;
  const { cart } = useContext(CartContext);
  const shippingCost = 50;

  const subtotal = cart.items.reduce(
    (total, item) => parseFloat(total + item.price * item.quantity),
    0
  );

  const vatAmount = subtotal * 0.2;
  const grandTotal = subtotal + shippingCost;

  return (
    <div className="summary__container bg-white px-5 py-1">
      <h1 className="title py-4 text-start fs-5">Summary</h1>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id} id="summmary-item">
            <ListProductsCart item={item} />
            <div className="cart-product-quantity">x{item.quantity}</div>
          </li>
        ))}
      </ul>
      
      <div className="mb-5 text-center">
        <TotalCartInfo cart={cart}/>
        <div className="cart-total-info">
            <h3 className="subtitle">shipping</h3>
            <p className="cart-product-price">$ {shippingCost}</p>
        </div>
        <div className="cart-total-info">
            <h3 className="subtitle">vat (include)</h3>
            <p className="cart-product-price">$ {vatAmount}</p>
        </div>
        <div className="cart-total-info">
            <h3 className="subtitle">grand total</h3>
            <p className="cart-product-price">$ {grandTotal}</p>
        </div>
        <button type="submit" className="button-continue text-uppercase" onClick={handleShowModal} >continue & pay</button>
      </div>
    </div>
  );
};
