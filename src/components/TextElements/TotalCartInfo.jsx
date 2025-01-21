import "../../css/components/total_cart_info.css";
export const TotalCartInfo = (props) => {
  const { cart } = props;
  return (
    <div className="cart-total-info">
      <h3 className="subtitle">Total</h3>
      <p>
        $ {cart.items.reduce(
          (total, item) => parseFloat(total + item.price * item.quantity),
          0
        )}
      </p>
    </div>
  );
};
