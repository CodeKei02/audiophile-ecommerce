import { NavLink } from "react-router-dom";
import "../../css/components/footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container page-container">
        <div className="color-bar"></div>
        <div className="footer_nav">
          <div className="footer_logo"></div>

          <ul className="footer_list">
            <NavLink to="/" className="footer_nav_link">
              Home
            </NavLink>
            <NavLink to="/headphones" className="footer_nav_link">
              Headphones
            </NavLink>
            <NavLink to="/speakers" className="footer_nav_link">
              Speakers
            </NavLink>
            <NavLink to="/earphones" className="footer_nav_link">
              Earphones
            </NavLink>
          </ul>
        </div>
        <p className="footer_paragraph">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <p className="footer_copyright">Copyright 2021. All Rights Reserved</p>
        <div className="footer_social-media">
          <a href="https://www.facebook.com" className="footer_fb">
            <img
              src="/src/assets/shared/desktop/icon-facebook.svg"
              alt="facebook"
            />
          </a>
          <a href="https://www.twitter.com" className="footer_x">
            <img src="/src/assets/shared/desktop/icon-x.png" alt="x" />
          </a>
          <a href="https://www.instagram.com" className="footer_insta">
            <img
              src="/src/assets/shared/desktop/icon-instagram.svg"
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
