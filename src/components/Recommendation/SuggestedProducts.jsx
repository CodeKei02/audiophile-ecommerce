import { Link } from "react-router-dom";
import "../../css/components/suggest_product.css";
import suggestedImage1 from "../../../public/images/shared/desktop/image-xx99-mark-one-headphones.jpg"
import suggestedImage2 from "../../../public/images/shared/desktop/image-xx99-mark-two-headphones.jpg"
import suggestedImage3 from "../../../public/images/shared/desktop/image-xx59-headphones.jpg"
import suggestedImage4 from "../../../public/images/shared/desktop/image-zx9-speaker.jpg"
import suggestedImage5 from "../../../public/images/shared/desktop/image-zx9-speaker.jpg"
import suggestedImage6 from "../../../public/images/product-yx1-earphones/desktop/image-product.jpg"
export const SuggestedProducts = () => {
  const randomArray = (array) => {
    for (let i = array - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array.slice(0, 3);
  };

  const products = [
    {
      name: "xx99 mark i",
      shortName: "xx99 mk i",
      category: "headphones",
      img: suggestedImage1,
    },
    {
      name: "xx99 mark ii",
      shortName: "xx99 mk ii",
      category: "headphones",
      img: suggestedImage2,
    },
    {
      name: "xx59",
      shortName: "xx59",
      category: "headphones",
      img: suggestedImage3,
    },
    {
      name: "zx9",
      shortName: "zx9",
      category: "speaker",
      img: suggestedImage4,
    },
    {
      name: "zx7",
      shortName: "zx7",
      category: "speaker",
      img: suggestedImage5,
    },
    {
      name: "yx1 wireless",
      shortName: "yx1",
      category: "earphones",
      img: suggestedImage6,
    },
  ];

  const randomProducts = randomArray(products);

  return (
    <div className="suggested_products_container">
      <h2 className="title">You may also like</h2>
      <div className="suggested_products">
        {randomProducts.map((product, index) => {
          return (
            <div key={index} className={`suggested_product suggested_product--${index + 1}`}>
            <div className="background">
              <img className="suggested_product-image" src={product.img} alt={product.name} />
            </div>
            <div className="suggested_product_content">
              <h2 className="suggested_product-name">{product.name}</h2>
              <Link
                to={`/${product.category}/${product.name.split(` `).join(`-`)}`}
                className="product_btn"
              >
                See Product
              </Link>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};
