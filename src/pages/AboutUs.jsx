import Header from "../components/common/header";
import Footer from "../components/common/footer";
import "./css/AboutUs.css";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="about-us-container">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>World of MSD</strong>, your ultimate destination
          for high-performance gaming gear and premium PC components. Our
          mission is to equip gamers, creators, and enthusiasts with the tools
          they need to achieve greatness.
        </p>

        <h2>Our Story</h2>
        <p>
          Founded by gamers for gamers, World of MSD started with a simple
          vision: to make top-tier gaming accessories accessible without
          compromising on quality or aesthetics. We handpick every product in
          our catalog to ensure it meets our rigorous standards for performance
          and durability.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Premium Selection:</strong> From high-FPS gaming mice to
            stunning RGB cabinets, we offer only the best.
          </li>
          <li>
            <strong>Expert Guidance:</strong> Our team of tech enthusiasts is
            always here to help you build the rig of your dreams.
          </li>
          <li>
            <strong>Gamer-Centric Design:</strong> We understand the importance
            of aesthetics, ergonomics, and reliability.
          </li>
        </ul>

        <h2>Join Our Community</h2>
        <p>
          Whether you're ascending to PC master race or upgrading your battle
          station, World of MSD is your trusted partner. Level up your game with
          us today!
        </p>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
