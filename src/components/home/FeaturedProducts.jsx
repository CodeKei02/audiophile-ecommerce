import { Link } from "react-router-dom";
import "../../css/home/featured_products.css";

export const FeaturedProducts = () => {
  return (
    <section className="featured_products">
      <div className="featured_product_1">
        <div className="featured_product_image"></div>
        <div className="featured_product_text">
          <span className="featured_product_name">
            ZX9 <br />
            speaker
          </span>
          <p className="featured_product_paragraph">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
          to="/speakers/zx9"
           className="featured_product_btn">See Product</Link>
        </div>
      </div>

      <div className="featured_product_2">
        <div className="featured_product_text">
          <span className="featured_product_name">ZX7 speaker</span>
          <Link
          to="/speakers/zx7"
          className="featured_product_btn">See Product</Link>
        </div>
      </div>

      <div className="featured_product_image_3"></div>
      <div className="featured_product_3_container">
        <div className="featured_product_text">
          <span className="featured_product_name">YX1 earphones</span>
          <Link 
          to="/earphones/yx1-wireless"
          className="featured_product_btn">See Product</Link>
        </div>
      </div>
    </section>
  );
};
