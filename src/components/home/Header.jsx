import { Link } from "react-router-dom";
import "../../css/home/header.css";
export const Header = () => {
  return (
    <header className="header">
      <div className="page-container">
        <div className="header-content">
          <span className="header-subtitle">New product</span>
          <h2 className="header-title">XX99 Mark II Headphones</h2>
          <p className="header-paragraph">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/headphones/xx99-mark-ii" className="header-btn-headphones">
            See product
          </Link>
        </div>
      </div>
    </header>
  );
};
