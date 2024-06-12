import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "../../css/layoutcss/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-section left-section">
        <div className="logo">
          <a href="/">Kletos</a>
        </div>
        <div className="menu">
          <div className="menu-item">
            <a href="/about">About</a>
            <div className="sublinks">
              <a href="/team">Team</a>
              <a href="/history">History</a>
            </div>
          </div>
          <div className="menu-item">
            <a href="/shop">Shop</a>
            <div className="sublinks">
              <a href="/artifacts">Artefacts</a>
              <a href="/crafts">Crafts</a>
              <a href="/shields">Shields</a>
              <a href="/calabashes">Calabashes</a>
              <a href="/wood">Wood carvings and sculptures</a>
              <a href="/bracelet">Bracelets</a>
              <a href="/bags">Bags and mats</a>
            </div>
          </div>
          <div className="menu-item">
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="navbar-section center-section">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="navbar-section right-section">
        <div className="dropdown">
          <a href="/profile">
            <FontAwesomeIcon icon={faUser} /> Profile
          </a>
          <div className="dropdown-content">
            <a href="/profile">View Profile</a>
            <a href="/orders">Orders</a>
            <a href="/logout">Logout</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="/cart">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </a>
          <div className="dropdown-content">
            <a href="/cart">View Cart</a>
            <a href="/checkout">Checkout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
