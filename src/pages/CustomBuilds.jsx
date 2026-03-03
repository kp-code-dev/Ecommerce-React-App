import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Heading from "../components/ui/heading";
import Button from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import "./css/CustomBuild.css";

function CustomBuilds() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="custom-build-page">
        {/* How It Works */}
        <section className="build-steps-section">
          <Heading title="How It Works" />
          <div className="build-steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Choose Platform</h3>
              <p>Select between Intel or AMD latest generation platforms.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Pick Components</h3>
              <p>Mix and match premium GPUs, RAM, and cooling solutions.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Expert Assembly</h3>
              <p>
                Our technicians build, cable-manage, and stress-test your rig.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h3>Plug & Play</h3>
              <p>Delivered securely to your door, ready for instant action.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="build-features-section">
          <div className="feature-row">
            <div className="feature-text">
              <h2>Flawless Cable Management</h2>
              <p>
                We believe the inside of your PC should look as good as the
                outside. Every custom build features meticulous routing, custom
                sleeved cables, and optimized airflow paths.
              </p>
            </div>
            <div className="feature-text">
              <h2>Rigorous Stress Testing</h2>
              <p>
                We don't just put parts together. We run a 48-hour burn-in
                phase, testing thermals, stability, and acoustics to ensure your
                system performs flawlessly under maximum load.
              </p>
            </div>
          </div>
          <div className="build-cta-bottom">
            <p>Ready to dominate the leaderboard?</p>
            <h1 className="glitch-title">Build Your Dream PC</h1>
            <p>
              Design a machine that perfectly matches your workflow, gaming
              style, and aesthetic. Step into the future of custom computing
            </p>
            <Button
              title="START BUILDING NOW"
              onClick={() => navigate("/build-pc")}
              id="build-btn-sub"
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default CustomBuilds;
