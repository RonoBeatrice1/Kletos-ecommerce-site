import { useState } from "react";
import ProductCounter from "./ProductCounter";
import "../../css/productdetailscss/productdetails.css";

const ProductInfo = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="sneaker-details">
      <p className="company">Sneaker Company</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="prices">
        <span className="current">$125.00</span>
        <span className="discount">50%</span>
        <span className="previous">$250.00</span>
      </div>
      <ProductCounter />
      <button
        type="submit"
        aria-label="Add to cart"
        className="add-to-cart-btn"
        onClick={addToCart}
      >
        <img className="add" src="/images/icon-carts.svg" alt="add-to-cart" />
        Add to cart
      </button>
      <span className="cart-count">Cart: {cartCount}</span>
    </div>
  );
};

export default ProductInfo;
