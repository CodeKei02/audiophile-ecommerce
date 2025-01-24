import { NavLink } from "react-router-dom";
import { CartIcon, useShowCart, Overlay, CartContext } from "../../index";
import "../../css/components/navbar.css";
import { useContext } from "react";
import buttonCartImage from "../../../public/images/shared/desktop/icon-cart.svg"
import logo from "../../../public/images/shared/desktop/logo.svg"

export const Navigation = () => {
  const { showCart, handleShowCart } = useShowCart(false);
  const { cart } = useContext(CartContext);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top `}>
      <div className="container-fluid">
        <div className="d-flex px-3 gap-5">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="#">
            <img
              src={logo}
              className="nav-logo"
            ></img>
          </a>
        </div>

        {/* <!-- Menú colapsable para desktop --> */}
        <div className="collapse navbar-collapse d-none d-lg-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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

        <div
          className="offcanvas offcanvas-end text-bg-dark d-lg-none bg-white"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-black"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
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
        </div>
        <div className="navbar_container-cart">
          <button onClick={handleShowCart} className="navbar_btn-cart">
            <img
              src={buttonCartImage}
              alt="cartIcon"
            />
          </button>
          <div
            className={`navbar_items-cart ${
              cart.items.length > 0 ? "" : "d-none"
            }`}
          >
            {cart.items.length}
          </div>
        </div>
      </div>
      <CartIcon display={showCart ? "" : "d-none"} />
      <Overlay display={showCart ? "overlay-active" : ""} />
    </nav>
  );
};
