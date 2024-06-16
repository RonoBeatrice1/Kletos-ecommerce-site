// src/pages/ProductDetailPage.jsx
import ProductDetails from "../components/productdetailscomponents/ProductDetails";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: "650px" }}>
        {/* Add padding to ensure content doesn't overlap with fixed navbar */}
        <ProductDetails />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
