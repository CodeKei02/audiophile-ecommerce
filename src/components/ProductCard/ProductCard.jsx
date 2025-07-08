import {
  Button,
  QuantityButton,
  Overline,
  ProductHeadline
} from "../../index";
import "../../css/components/card_category.css"
export const ProductCard = (props) => {
  const {
    linkTo,
    detailPage = false,
    onProductAdd = () => {},
    product,
    quantity,
    increment,
    decrement
  } = props;
   return (
    <div className={`productCard ${detailPage ? "productCard--detail" : ""}`}>
      <div className="productCard__image-frame">
        <img
          className="productCard__image "
          src={product.image?.product}
          alt={`${product.name} ${product.category}`}
        />
      </div>

      <div className="productCard__content">
        <ProductHeadline
          name={product.name}
          category={product.category}
          // rating={product.rating.toFixed(1)}
          color={product.color}
        />

        <p className="productCard__price">{`$${product.price}`} USD</p>
        {product.colors && (
          <div className="productCard__colors">
            {product.colors.map((color, index) => (   
                <Button
                  key={index}
                  className="productCard__color"
                  style={{ backgroundColor: color }}
                  value={color}
                  
                ></Button>
            ))}
          </div>
        )}
        <div className="buttons">
          {detailPage && (
            <QuantityButton 
              quantity={quantity}
              increment={increment}
              decrement={decrement}
            />
          )}
          <Button
            onClick={() => onProductAdd(product)}
            linkTo={linkTo}
            className="productCard__button"
          >
            {detailPage ? "Add to cart" : "See Product"}
          </Button>
        </div>
        {detailPage && (
          <>
            <p className="productCard__description">{product.description}</p>
          </>
        )}
      </div>
    </div>
  );
};
