import { useEffect, useState, useContext } from "react";
import {
  ProductCard,
  ProductGallery,
  Paragraph,
  Accesories,
  SuggestedProducts,
  Categories,
  CartContext,
} from "../index";
import products from "../products.json";
import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  const params = useParams();
  const category = products[params.category];
  const productName = params.product;
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const { dispatch } = useContext(CartContext);
  const [detailPage, setDetailPage] = useState(false);

  const addToProduct = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        image: product.image?.product,
        shortName: product.shortName,
        price: product.price,
        quantity: count, 
      },
    });
  };

  const increaseItem = () => setCount((count) => count + 1)
  const decreaseItem = () => setCount((count) => count > 1 ? count - 1 : 1)
  
  useEffect(() => {
    const currentName = category.find(
      (product) => product.shortName.split(" ").join("-").toLowerCase() === productName.toLowerCase()
    );
    setProduct(currentName);

  }, [category, productName]);

  useEffect(() => {
    if (productName) {
      setDetailPage(true);
    } else {
      setDetailPage(false);
    }
  }, [productName]);
  return (
    <div className="page-container">
      <div className={detailPage ? "productCard__container productCard__container--detail" : "productCard__container"}>
        <ProductCard
          quantity={count}
          increment={increaseItem}
          decrement={decreaseItem}
          product={product}
          onProductAdd={addToProduct}
          detailPage={detailPage}
        />
      </div> 
  
      {/* <Paragraph paragraph={product.features} /> */}
      {/* <Accesories product={product} /> */}
      {/* <ProductGallery product={product} /> */}
      {/* <SuggestedProducts />
      <Categories /> */}
    </div>
  );
};
