// css
import "../css/customerauthcss/customerauthpage.css";
// pages
import CustomerSignInComponent from "../components/customerauthcomponents/CustomerSignInComponent";
import CustomerRegisterComponent from "../components/customerauthcomponents/CustomerRegisterComponent";
import { useState } from "react";

// Rename function to start with an uppercase letter
const CustomerAuth = () => {
  // Helps toggle the components
  const [toggle, setToggle] = useState(false);

  return (
    <div className="customer-auth-page flex-col">
      {toggle ? (
        <CustomerRegisterComponent onToggle={() => setToggle(!toggle)} />
      ) : (
        <CustomerSignInComponent onToggle={() => setToggle(!toggle)} />
      )}
    </div>
  );
};

export default CustomerAuth;
