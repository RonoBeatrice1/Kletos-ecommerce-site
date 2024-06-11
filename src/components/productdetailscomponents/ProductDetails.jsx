import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import "../../css/productdetailscss/productdetails.css";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <ProductImages />
      <ProductInfo />
    </div>
  );
};

export default ProductDetails;
