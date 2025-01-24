import { Link } from "react-router-dom";
import "../../css/components/categories.css";
import imageCategory1 from "../../../public/images/shared/desktop/image-category-thumbnail-headphones.png"
import imageCategory2 from "../../../public/images/shared/desktop/image-category-thumbnail-speakers.png"
import imageCategory3 from "../../../public/images/shared/desktop/image-category-thumbnail-earphones.png"
export const Categories = () => {
  return (
    <section className="categories">

      <div className="category">
        <img src={imageCategory1}/>
        <div className="category-content">
          <span className="category-name">Headphones</span>
          <button className="category-btn">
            <Link to="/headphones" className="category-cta">Shop</Link>
            <div className="category-arrow"></div>
          </button>
        </div>
      </div>
      <div className="category">
      <img src={imageCategory2}/>
        <div className="category-content">
          <span className="category-name">Speakers</span>
          <button className="category-btn">
            <Link to="/speakers" className="category-cta">Shop</Link>
            <div className="category-arrow"></div>
          </button>
        </div>
      </div>
      <div className="category">
      <img src={imageCategory3}/>
        <div className="category-content">
          <span className="category-name">Earphones</span>
          <button className="category-btn">
            <Link to="/earphones" className="category-cta">Shop</Link>
            <div className="category-arrow"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
