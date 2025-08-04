import { useEffect, useState, useContext } from "react";
import { ProductCard, CartContext, Categories } from "../index";
import products from "../products.json";
import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  const params = useParams();
  const category = products[params.category];
  const productName = params.product;
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const { dispatch } = useContext(CartContext);
  const detailPage = true;

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

  const increaseItem = () => setCount((count) => count + 1);
  const decreaseItem = () => setCount((count) => (count > 1 ? count - 1 : 1));
  const categoryImages = {
    headphones: "/images/headphones/white/image-gallery-3.jpg",
    speakers:
      "../../public/images/speakers/product-zx7-speaker/image-gallery-3.jpg",
    earphones:
      "../../public/images/earphones/earphones-white/image-gallery-1.png",
  };
  const categoryImage = categoryImages[params.category];

  useEffect(() => {
    const currentName = category.find(
      (product) =>
        product.shortName.split(" ").join("-").toLowerCase() ===
        productName.toLowerCase()
    );
    setProduct(currentName);
  }, [category, productName]);
  return (
    <div className="page-container">
      <div
        className={
          detailPage
            ? "productCard__container--detail"
            : "productCard__container"
        }
      >
        <ProductCard
          quantity={count}
          increment={increaseItem}
          decrement={decreaseItem}
          product={product}
          onProductAdd={addToProduct}
          detailPage={true}
        />

        {categoryImage && (
          <div
            className="d-flex align-items-center gap-2 mt-5"
            style={{ marginBottom: "10rem" }}
          >
            <div>
              <h2 className="fw-bold">Precise sound, defined style</h2>
              <p>
                Embrace unparalleled clarity, whether you immerse yourself in
                meditation, tune into a podcast, or tackle a rigorous gym
                routine.
              </p>
            </div>
            <img
              src={categoryImage}
              alt={params.category}
              className="w-50 rounded-3"
            />
          </div>
        )}
      </div>
      <Categories />
    </div>
  );
};
