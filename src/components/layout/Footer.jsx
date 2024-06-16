import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../../css/layoutcss/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>ABOUT US</h3>
          <a href="/story">Our Story</a>
          <a href="/commitment">Sustainability Commitment</a>
          <a href="/careers">Careers</a>
          <a href="/press">Press & Media</a>
        </div>
        <div className="footer-column">
          <h3>CUSTOMER SERVICE</h3>
          <a href="/shipping">Shipping Information</a>
          <a href="/returns">Returns & Exchanges</a>
          <a href="/faqs">FAQs</a>
          <a href="/contact">Contact Us</a>
          <a href="/order issues">Order Issues</a>
        </div>
        <div className="footer-column">
          <h3>ACCOUNT & ORDERS</h3>
          <a href="/tracking">Order Tracking</a>
          <a href="/account">Manage Account</a>
          <a href="/order-history">Order Histoey</a>
          <a href="/addresses">Addresses</a>
        </div>
        <div className="footer-column">
          <h3>SPECIAL PROGRAMS</h3>
          <a href="/loyalty">Loyalty Program</a>
          <a href="/seasonal-promotions">Seasonal Promotions</a>
          <a href="/affiliate">Affiliate Program</a>
        </div>
      </div>
      <div className="newsletter-signup">
        <h3>GET SPECIAL OFFERS IN OUR NEWSLETTER</h3>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="social-media-icons">
        <a href="https://facebook.com" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Kletos. All rights reserved.</p>
        <div className="payment-methods">
          <img
            src="/path-to-your-payment-method-icons/paypal.png"
            alt="PayPal"
          />
          <img src="/path-to-your-payment-method-icons/visa.png" alt="Visa" />
          <img
            src="/path-to-your-payment-method-icons/mastercard.png"
            alt="MasterCard"
          />
          {/* Add more payment icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
