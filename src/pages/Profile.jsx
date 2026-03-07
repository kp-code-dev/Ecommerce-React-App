import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Button from "../components/ui/button";
import "./css/Profile.css";

function Profile() {
  return (
    <div>
      <Header />
      <h1>Profile</h1>
      <div className="profile-container">
        <form className="profile-form">
          <div className="profile-image">
            <input
              className="profile-image-input"
              type="file"
              accept="image/jpg/png"
            />
            <img src="" alt="" />
          </div>
          <div className="profile-info">
            <div className="profile-info-input">
              <label>Name</label>
              <input type="text" />
            </div>
            <div className="profile-info-input">
              <label>Email</label>
              <input type="email" />
            </div>
          </div>
          <Button className="update" title="Save Changes" />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
