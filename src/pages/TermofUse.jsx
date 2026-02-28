import Header from "../components/common/header";
import Footer from "../components/common/footer";
import "./css/TermofUse.css";

function TermofUse() {
  return (
    <>
      <Header />
      <div className="term-of-use-container">
        <h1>Terms of Use</h1>
        <p>
          <strong>Last Updated:</strong> February 2026
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the World of MSD website ("Website"), you agree
          to be bound by these Terms of Use and all applicable laws and
          regulations. If you do not agree, you are prohibited from using this
          site.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          All content included on this Website, such as text, graphics, logos,
          button icons, and images, is the property of World of MSD or its
          content suppliers and protected by international copyright laws.
        </p>

        <h2>3. User Account</h2>
        <p>
          If you create an account on our Website, you are responsible for
          maintaining the confidentiality of your account and password and for
          restricting access to your computer. You agree to accept
          responsibility for all activities that occur under your account.
        </p>

        <h2>4. Pricing and Availability</h2>
        <p>
          All prices are subject to change without notice. We make every effort
          to ensure that our inventory availability is accurate, but errors may
          occur. We reserve the right to cancel any orders made on pricing
          errors or out of stock items.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default TermofUse;
