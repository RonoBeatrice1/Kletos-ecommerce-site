import ProductInfo from "./ProductInfo";
import "../../css/layoutcss/navbar.css";

const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <img
          src="public/images/1.jpg"
          alt="Product"
          className="main-product-image"
        />
      </div>
      <ProductInfo />
    </div>
  );
};

export default ProductDetails;
