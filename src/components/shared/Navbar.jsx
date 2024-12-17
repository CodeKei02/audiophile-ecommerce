import { NavLink } from "react-router-dom";
import { CartIcon, useShowCart } from "../../index";
import "../../css/components/navbar.css";
export const Navbar = () => {
  const {showCart, handleShowCart} = useShowCart(false);
  
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <img
          src="../../src/assets/shared/desktop/logo.svg"
          className="nav-logo"
        ></img>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/headphones"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Headphones
            </NavLink>
            <NavLink
              to="/speakers"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Speakers
            </NavLink>
            <NavLink
              to="/earphones"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Earphones
            </NavLink>
          </ul>
        </div>
        <button onClick={handleShowCart} className="navbar_btn-cart">
          <img src="../../src/assets/shared/desktop/icon-cart.svg" alt="" />
        </button>
      </div>
      <CartIcon 
        display={showCart ? "" : "d-none"}
      />
    </nav>
  );
};
