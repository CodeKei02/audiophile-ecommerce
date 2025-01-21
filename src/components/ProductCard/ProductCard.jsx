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
    <div className="productCard">
      <div className="productCard__image-frame">
        <img
          className="productCard__image desktop-image"
          src={product.image?.product}
          alt={`${product.name} ${product.category}`}
        />

        <img
          className="productCard__image tablet-image "
          src={product.image?.productTablet}
          alt={`${product.name} ${product.category}`}
        />

        <img
          className="productCard__image mobile-image "
          src={product.image?.productMobile}
          alt={`${product.name} ${product.category}`}
        />
      </div>

      <div className="productCard__content">
        <Overline/>
        <ProductHeadline
          name={product.name}
          category={product.category}
        />
        <p>{product.description}</p>
        {detailPage && (
          <p className="productCard__price">{`$ ${product.price}`}</p>
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
          >
            {detailPage ? "Add to cart" : "See Product"}
          </Button>
        </div>
      </div>
    </div>
  );
};
