import "../../css/components/product_detail.css"
export const ProductDetailContent = ({
  featuresParagraph1,
  featuresParagraph2,
  number1,
  number2,
  number3,
  number4,
  number5,
  item1,
  item2,
  item3,
  item4,
  item5,
}) => {
  return (
    <div className="product_detail-content">
      <div className="product_detail-features">
        <h2 className="product_detail-title">Features</h2>
        <p className="product_detail-description">{featuresParagraph1}</p>
        <p className="product_detail-description">{featuresParagraph2}</p>
      </div>
      <div className="product_detail-in_the_box">
        <h2 className="product_detail-title">In the box</h2>
        <ul className="product_detail-list">
          <li className="product_detail-item">
            <span className="product_detail-number">{number1}</span>
            <p>{item1}</p>
          </li>
          <li className="product_detail-item">
            <span className="product_detail-number">{number2}</span>
            <p>{item2}</p>
          </li>
          <li className="product_detail-item">
            <span className="product_detail-number">{number3}</span>
            <p>{item3}</p>
          </li>
          <li className="product_detail-item">
            <span className="product_detail-number">{number4}</span>
            <p>{item4}</p>
          </li>
          <li className="product_detail-item">
            <span className="product_detail-number">{number5}</span>
            <p>{item5}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
