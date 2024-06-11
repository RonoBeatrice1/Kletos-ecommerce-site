import "../../css/layoutcss/navbar.css";

const NavBar = () => {
  return (
    <header>
      <div className="left-header">
        <button className="open-menu-btn">
          <img className="menu" src="/images/icon-menu.svg" alt="menu-icon" />
        </button>
        <img className="logo" src="/images/logo.svg" alt="logo" />
      </div>
      <nav className="navigation-desktop">
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About </a>
        <a href="#">Contact</a>
      </nav>
      <nav className="navigation-mobile">
        <button className="close-menu-btn">
          <img src="/images/icon-close.svg" alt="close-menu-icon" />
        </button>
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About </a>
        <a href="#">Contact</a>
      </nav>
      <div className="right-header">
        <img className="cart" src="/images/icon-cart.svg" alt="cart" />
        <span className="cart-count" id="cart-count">
          0
        </span>
        <img className="avatar" src="/images/image-avatar.png" alt="avatar" />
      </div>
    </header>
  );
};

export default NavBar;
