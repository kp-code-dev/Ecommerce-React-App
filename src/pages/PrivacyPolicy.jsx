import Header from "../components/common/header";
import Footer from "../components/common/footer";
import "./css/PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Effective Date:</strong> January 1, 2026
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          World of MSD ("we", "our", or "us") collects information that you
          provide directly to us when creating an account, making a purchase, or
          signing up for our newsletter. This includes your name, shipping
          address, email, and payment details.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>
            To process and fulfill your orders, including tracking and shipping.
          </li>
          <li>
            To communicate with you about your orders or promotional offers.
          </li>
          <li>To improve and secure our website and services.</li>
        </ul>

        <h2>3. Data Protection</h2>
        <p>
          We implement industry-standard encryption protocols (SSL/TLS) to
          secure your sensitive information during transmission. We do not sell
          your personal data to third parties.
        </p>

        <h2>4. Contact Us</h2>
        <p>
          If you have questions regarding this privacy policy, please contact us
          at:
          <br />
          <strong>kp.codeandlife@gmail.com</strong>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
