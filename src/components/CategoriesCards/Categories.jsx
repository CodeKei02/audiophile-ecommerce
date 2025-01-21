import { Link } from "react-router-dom";
import "../../css/components/categories.css";
export const Categories = () => {
  return (
    <section className="categories">

      <div className="category">
        <img src="../../src/assets/shared/desktop/image-category-thumbnail-headphones.png"/>
        <div className="category-content">
          <span className="category-name">Headphones</span>
          <button className="category-btn">
            <Link to="/headphones" className="category-cta">Shop</Link>
            <div className="category-arrow"></div>
          </button>
        </div>
      </div>
      <div className="category">
      <img src="../../src/assets/shared/desktop/image-category-thumbnail-speakers.png"/>
        <div className="category-content">
          <span className="category-name">Speakers</span>
          <button className="category-btn">
            <Link to="/speakers" className="category-cta">Shop</Link>
            <div className="category-arrow"></div>
          </button>
        </div>
      </div>
      <div className="category">
      <img src="../../src/assets/shared/desktop/image-category-thumbnail-earphones.png"/>
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
