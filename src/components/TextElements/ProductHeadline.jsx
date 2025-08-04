export const ProductHeadline = (props) => {
  const { name, category, rating, color } = props;

  return (
    <div className="productCard__headline-container">
      <div className="productCard__headline">
        <span className="productCard__title">
          {name} <br />
          {category}
        </span>

        <span className="productCard__color"> - {color} </span>
      </div>
      <span className="productCard__rating">
        {rating && <span>{rating.toFixed(1)}⭐</span>}
      </span>
    </div>
  );
};
