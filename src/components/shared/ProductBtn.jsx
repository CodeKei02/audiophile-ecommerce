import { Link } from "react-router-dom";
import { useCounter } from "../../index";

export const ProductBtn = ({
  path = "",
  countClass = "",
  btnClass1 = "",
  btnClass2 = "",
}) => {

  const { counter, increment, decrement } = useCounter(0);
  
  return (
    <div className="card_product_btns">
      <div className={`card_count_container ${countClass} `}>
        <button
          onClick={() => decrement(counter)}
          className="count-btn minus_btn"
        >
          -
        </button>
        <span className="number">{counter}</span>
        <button
          onClick={() => increment(counter)}
          className="count-btn plus_btn"
        >
          +
        </button>
      </div>
      <Link className={`card_btn ${btnClass1}`} to={path}>
        See Product
      </Link>
      <button 
      
      className={`card_btn ${btnClass2} addToCart`}>Add To Cart</button>
    </div>
  );
};
