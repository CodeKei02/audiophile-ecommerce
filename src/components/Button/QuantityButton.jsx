import "../../css/components/quantity_button.css"
export const QuantityButton = (props) => {
  const { quantity, increment, decrement } = props;
  return (
    <div className="count_buttons">
        <div 
        onClick={decrement}
        className="button decrement">
            -
        </div>
        <div className="quantity_text">{quantity}</div>
        <div 
        onClick={increment}
        className="button increment">
            +
        </div>
    </div>
  )
}
