import { ProductBtn } from "./ProductBtn";
export const CardText = ({
  cardProductReverse,
  imageClass,
  text,
  model,
  category,
  description,
  productPrice,
  path,
  countClass,
  btnClass1,
  btnClass2
}) => {

  return (
    <div className={`card-product ${cardProductReverse}`}>
      <div className={`card-image ${imageClass}`}></div>

      <div className="card-body">
        <div className="card-text">{text}</div>
        <h2 className="card-title">
          {model} <br /> {category}
        </h2>
        <p className="card-paragraph">{description}</p>
        <span className="card-price">{productPrice}</span>
        <ProductBtn 
          path={path}
          countClass={countClass}
          btnClass1={btnClass1}
          btnClass2={btnClass2}
        />
      </div>
    </div>
  );
};
