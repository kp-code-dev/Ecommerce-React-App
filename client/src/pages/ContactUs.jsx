import Header from "../components/common/header";
import Footer from "../components/common/footer";
import "./css/ContactUs.css";

function ContactUs() {
  return (
    <>
      <Header />
      <div className="contact-us-container">
        <h1>Contact Us</h1>
        <p>
          Need assistance or have a question about an order? We're here to help.
          Fill out the form below or reach us through our direct contact
          channels.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-item">
              <strong>Email:</strong> kp.codeandlife@gmail.com
            </div>
            <div className="info-item">
              <strong>Phone:</strong> +91 70160 28198
            </div>
            <div className="info-item">
              <strong>Address:</strong> Ahmedabad, Gujarat, India - 380001
            </div>
            <div className="info-item">
              <strong>Hours:</strong> Mon-Fri: 9am-6pm IST
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn"
              onClick={() => alert("Message sent successfully!")}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
