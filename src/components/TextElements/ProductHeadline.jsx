export const ProductHeadline = (props) => {
  const { name, category, rating, color } = props;

  return (
      <div className="productCard__headline-container">
        <div className="productCard__headline">
          <strong>
            {name} <br/>{category}
          </strong>
          
          <span className="productCard__color"> - {color} </span>
        </div>
        <span className="productCard__rating">{rating && (<span>{rating}⭐</span>)}</span>
      </div>
      

    
  );
};
