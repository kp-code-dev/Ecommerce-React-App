import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaMapLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-copyright">
          <p>
            &copy; 2026-{new Date().getFullYear()} Gaming Gear Ecommerce Store.
            All rights reserved.
          </p>
        </div>
        <div className="footer-social">
          <div className="footer-social-icons">
            <p>Follow Us</p>
            <a
              href="https://www.facebook.com/codeandlifekp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@CoderLifeKP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/code_and_life_kp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-info-container">
        <div className="footer-info">
          <div className="footer-info-item">
            <FaMapLocationDot size={20} />
            <span>Ahmedabad, Gujarat, India - 380001</span>
          </div>
          <div className="footer-info-item">
            <IoIosMail size={20} />
            <a href="mailto:kp.codeandlife@gmail.com">
              kp.codeandlife@gmail.com
            </a>
          </div>
          <div className="footer-info-item">
            <FaPhone size={20} />
            <a href="tel:+917016028198">+917016028198</a>
          </div>
          <div className="footer-info-item">
            <IoTime size={20} />
            <span>Mon-Fri: 9am-6pm</span>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/about-us">About</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/contact-us">Contact</Link>
          <Link to="/return-policy">Return Policy</Link>
          <Link to="/faqs">FAQ</Link>
          <Link to="/term-of-use">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
