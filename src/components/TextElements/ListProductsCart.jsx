
export const ListProductsCart = (props) => {
  const { item } = props;
  return (
    <div className="cart-row">
      <figure>
        <img src={item.image} alt={item.name} />
      </figure>

      <div className="cart-product-info">
        <h3 className="cart-product-name">{item.shortName}</h3>
        <p className="cart-product-price">$ {item.price}</p>
      </div>
    </div>
  );
};
