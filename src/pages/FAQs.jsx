import Header from "../components/common/header";
import Footer from "../components/common/footer";
import "./css/FAQs.css";

function FAQs() {
  const faqs = [
    {
      q: "Do you ship internationally?",
      a: "Currently, we only ship within India. We plan to expand internationally in the near future.",
    },
    {
      q: "How long does shipping take?",
      a: "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days.",
    },
    {
      q: "Can I return a customized PC?",
      a: "Custom-built PCs are non-refundable unless there is a critical hardware failure upon arrival. Please refer to our Return Policy.",
    },
    {
      q: "Do your products come with a warranty?",
      a: "Yes! All individual components carry their standard manufacturer warranty. Our custom builds carry an exclusive 3-year warranty covering labor and assembly defects.",
    },
  ];

  return (
    <>
      <Header />
      <div className="faqs-container">
        <h1>Frequently Asked Questions</h1>
        <p>
          Find answers to common questions about our products, shipping, and
          returns.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>Q: {faq.q}</h3>
              <p>A: {faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQs;
