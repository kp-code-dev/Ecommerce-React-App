import Header from "../components/common/header";
import Footer from "../components/common/footer";
import "./css/ReturnPolicy.css";

function ReturnPolicy() {
  return (
    <>
      <Header />
      <div className="return-policy-container">
        <h1>Return Policy</h1>
        <p>
          Our commitment to you doesn't end when your package ships. We want you
          to be fully satisfied with your gear.
        </p>

        <h2>14-Day Return Window</h2>
        <p>
          You have <strong>14 calendar days</strong> to return an item from the
          date you received it. To be eligible for a return, your item must be
          unused, in the same condition that you received it, and in its
          original packaging.
        </p>

        <h2>Exceptions</h2>
        <ul>
          <li>
            <strong>Custom PCs:</strong> Non-refundable due to the labor and
            custom configuration involved. We do, however, fully support them
            under our 3-Year Warranty.
          </li>
          <li>
            <strong>Digital Goods:</strong> Game codes or software keys cannot
            be returned once delivered.
          </li>
        </ul>

        <h2>How to initiate a return:</h2>
        <ol>
          <li>
            Email us at <strong>kp.codeandlife@gmail.com</strong> with your
            order number.
          </li>
          <li>
            Provide a brief reason for the return (and photos if the item is
            damaged).
          </li>
          <li>
            We will provide you with a Return Merchandise Authorization (RMA)
            number and shipping instructions.
          </li>
        </ol>

        <h2>Refunds</h2>
        <p>
          Once we receive your item, we will inspect it and notify you. If
          approved, we will initiate a refund to your credit card (or original
          method of payment). You will receive the credit within a certain
          amount of days, depending on your card issuer's policies.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default ReturnPolicy;
