// const productdetails = () => {
//   return (
//     <div>productdetails</div>
//   )
// }

// export default productdetails

import ProductDetails from "../components/productdetailscomponents/ProductDetails";
import NavBar from "../../src/components/layout/NavBar";

const ProductDetailPage = () => {
  return (
    <div>
      <NavBar />
      <main>
        <ProductDetails />
      </main>
    </div>
  );
};

export default ProductDetailPage;
