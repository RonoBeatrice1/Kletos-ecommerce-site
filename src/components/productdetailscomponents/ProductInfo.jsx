// src/components/ProductDetails/ProductInfo.jsx
import { useState } from "react";
import "../../css/productdetailscss/productdetails.css";

const ProductInfo = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="product-details">
      <h1 className="product-name">PRODUCT NAME</h1>
      <p className="price">PRICE: Ksh. 5500</p>
      <p className="description">
        Embrace the trend with this versatile layered necklace. Delicate chains
        adorned with [charm/pendant descriptions] create a unique and
        personalized look.
      </p>
      <button
        type="submit"
        aria-label="Add to cart"
        className="add-to-cart-btn"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
