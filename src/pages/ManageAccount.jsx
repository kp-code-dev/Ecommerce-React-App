import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Button from "../components/ui/button";
import { FaPlus } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

function ManageAccount() {
  return (
    <div>
      <Header />
      <h1>Manage Account</h1>
      <div className="manage-account-container">
        <div className="login-security">
          Login & Security
          <Button title="Change password" />
          <Button title="Enable Two-Step Verification (MFA)" />
          <Button title="Social media account linking" />
        </div>

        <div className="address-book">
          <h2>Address Book</h2>
          <Button icon={<FaPlus />} />
          <div>
            <Button icon={<BsPencilSquare />} />
            <input
              type="textarea"
              placeholder="00, Street, City, State, Country, Zip Code"
              width={"100%"}
              height={"100px"}
              style={{ resize: "none" }}
            />
            <Button title="Update" />
          </div>
        </div>

        <div className="payment-methods">
          <h2>Payment Methods</h2>
          <Button title="Add Payment Method" />
        </div>

        <div className="account-controls">
          <h2>Language and currency settings</h2>
        </div>

        <div className="account-controls">
          <h2>Deactivate or delete account</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ManageAccount;
