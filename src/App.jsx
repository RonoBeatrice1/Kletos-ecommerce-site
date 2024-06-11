import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import CustomerAuth from "./pages/customerauth";
import MerchantAuth from "./pages/merchantauth";
// import HomePage from "./pages/homepage";
import ProductDetails from "./pages/productdetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductDetails />} />
        <Route path="/merchantauth" element={<MerchantAuth />} />
        <Route path="/customerauth" element={<CustomerAuth />} />
      </Routes>
    </Router>
  );
}

export default App;
