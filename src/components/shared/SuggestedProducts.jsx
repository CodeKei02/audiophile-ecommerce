import { Link } from "react-router-dom";
import "../../css/components/suggested_product.css";

export const SuggestedProducts = ({
  name1,
  name2,
  name3,
  image1,
  image2,
  image3,
  path1,
  path2,
  path3,
}) => {
  return (
    <div className="suggested_products_container">
      <h2 className="title">You may also like</h2>
      <div className="suggested_products">
        <div className="suggested_product">
          <div className="background">
            <div className={`suggested_product_image ${image1}`}></div>
          </div>

          <div className="suggested_product_content">
            <h2 className="suggested_product-name">{name1}</h2>
            <Link to={path1} className="product_btn">
              See Product
            </Link>
          </div>
        </div>

        <div className="suggested_product">
          <div className="background">
            <div className={`suggested_product_image ${image2}`}></div>
          </div>
          <div className="suggested_product_content">
            <h2 className="suggested_product-name">{name2}</h2>
            <Link to={path2} className="product_btn">
              See Product
            </Link>
          </div>
        </div>
        <div className="suggested_product">
          <div className="background">
            <div className={`suggested_product_image ${image3}`}></div>
          </div>
          <div className="suggested_product_content">
            <h2 className="suggested_product-name">{name3}</h2>
            <Link to={path3} className="product_btn">
              See Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
