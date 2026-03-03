import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Button from "../components/ui/button";
import Productivity from "../assets/icons/productivity";
import { FaHeadphonesAlt } from "react-icons/fa";
import { SiIntel, SiAmd, SiYoutubegaming } from "react-icons/si";
import {
  BsAmd,
  BsDeviceHdd,
  BsDeviceSsd,
  BsKeyboard,
  BsMouse3Fill,
  BsNvidia,
} from "react-icons/bs";
import { MdScreenshotMonitor } from "react-icons/md";

import "./css/BuildPC.css";

function BuildPC() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [budget, setBudget] = useState(20000);

  const activeTab = searchParams.get("type");

  const handleSelectTab = (type) => {
    setSearchParams({ type });
  };

  return (
    <>
      <Header />

      {!activeTab ? (
        <div className="build-page-selection">
          <h1>Select Your Path</h1>
          <div className="selection-cards">
            <div
              className="select-card"
              onClick={() => handleSelectTab("custom")}
            >
              <h2>Custom Build PC</h2>
              <p>Pick specific components tailored to your needs.</p>
              <Button
                className="build-btn"
                title="Select Custom"
                onClick={() => handleSelectTab("custom")}
              />
            </div>
            <div
              className="select-card"
              onClick={() => handleSelectTab("budget")}
            >
              <h2>Budget PC</h2>
              <p>Set a price and let us find the best PC for you.</p>
              <Button
                className="build-btn"
                title="Select Budget"
                onClick={() => handleSelectTab("budget")}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="build-page-active">
          <div className="build-content-left">
            <div className="tab-header-container">
              <button
                className={`tablink ${activeTab === "custom" ? "active" : ""}`}
                onClick={() => handleSelectTab("custom")}
              >
                <h2>Custom PC</h2>
              </button>
              <button
                className={`tablink ${activeTab === "budget" ? "active" : ""}`}
                onClick={() => handleSelectTab("budget")}
              >
                <h2>Budget PC</h2>
              </button>
            </div>

            <div className="tab-content-container">
              {activeTab === "custom" && (
                <div className="tab-content custom-pc-content">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <p className="section-label">SELECT PURPOSE</p>
                    <div className="flex-row-wrap">
                      <Button
                        className="choice-btn"
                        title="Gaming"
                        icon={<SiYoutubegaming />}
                      />
                      <Button
                        className="choice-btn"
                        title="Productivity (Coding & Editing)"
                        icon={<Productivity />}
                      />
                    </div>

                    <p className="section-label">CHOOSE YOUR PLATFORM</p>
                    <div className="flex-row-wrap">
                      <Button
                        className="choice-btn"
                        title="Intel"
                        icon={<SiIntel />}
                      />
                      <Button
                        className="choice-btn"
                        title="AMD"
                        icon={<SiAmd />}
                      />
                    </div>

                    <p className="section-label">
                      SELECT YOUR PROCESSOR SERIES
                    </p>
                    <div className="flex-row-wrap">
                      <Button className="choice-btn" title="Intel Core i3" />
                      <Button className="choice-btn" title="Intel Core i5" />
                      <Button className="choice-btn" title="Intel Core i7" />
                      <Button className="choice-btn" title="Intel Core i9" />
                      <Button className="choice-btn" title="AMD Ryzen 3" />
                      <Button className="choice-btn" title="AMD Ryzen 5" />
                      <Button className="choice-btn" title="AMD Ryzen 7" />
                      <Button className="choice-btn" title="AMD Ryzen 9" />
                    </div>

                    <p className="section-label">SELECT YOUR MOTHERBOARD</p>
                    <div className="flex-row-wrap">
                      <Button className="choice-btn" title="Intel" />
                      <Button className="choice-btn" title="AMD" />
                    </div>

                    <p className="section-label">CHOOSE YOUR RAM</p>
                    <p className="sub-label">SELECT SIZE:</p>
                    <div className="flex-row-wrap">
                      <Button className="choice-btn" title="8GB" />
                      <Button className="choice-btn" title="16GB" />
                      <Button className="choice-btn" title="32GB" />
                      <Button className="choice-btn" title="64GB" />
                      <Button className="choice-btn" title="64GB+" />
                    </div>
                    <p className="sub-label">SELECT CATAGORY:</p>
                    <div className="flex-row-wrap">
                      <Button className="choice-btn" title="DDR4" />
                      <Button className="choice-btn" title="DDR5" />
                    </div>

                    <p className="section-label">CHOOSE YOUR STORAGE</p>
                    <div className="flex-row-wrap">
                      <Button
                        className="choice-btn"
                        title="SSD"
                        icon={<BsDeviceSsd />}
                      />
                      <Button
                        className="choice-btn"
                        title="HDD"
                        icon={<BsDeviceHdd />}
                      />
                    </div>

                    <p className="section-label">SELECT GRAPHICS CARD (GPU)</p>
                    <div className="flex-row-wrap">
                      <Button
                        className="choice-btn"
                        title="NVIDIA"
                        icon={<BsNvidia />}
                      />
                      <Button
                        className="choice-btn"
                        title="AMD"
                        icon={<BsAmd />}
                      />
                    </div>

                    <p className="section-label">
                      SELECT CPU COOLER (Thermal Solution)
                    </p>
                    <div className="flex-row-wrap">
                      <Button className="choice-btn" title="Air Cooler" />
                      <Button className="choice-btn" title="Liquid Cooler" />
                    </div>

                    <p className="section-label">SELECT POWER SUPPLY (PSU)</p>
                    <div className="flex-row-wrap">
                      <Button className="choice-btn" title="550W" />
                      <Button className="choice-btn" title="650W" />
                      <Button className="choice-btn" title="750W" />
                      <Button className="choice-btn" title="850W" />
                      <Button className="choice-btn" title="1000W" />
                    </div>

                    <p className="section-label">SELECT CABINET (PC Case)</p>
                    <div className="flex-row-wrap">
                      <Button className="choice-btn" title="ATX" />
                      <Button className="choice-btn" title="Micro ATX" />
                      <Button className="choice-btn" title="Mini ITX" />
                    </div>

                    <p className="section-label">
                      SELECT PERIPHERALS (Final Setup)
                    </p>
                    <p className="sub-label">
                      SELECT MONITOR (Display)
                      <MdScreenshotMonitor size={20} />
                    </p>
                    <div className="flex-row-wrap">
                      <Button className="choice-btn" title="24 inch" />
                      <Button className="choice-btn" title="27 inch" />
                      <Button className="choice-btn" title="32 inch" />
                    </div>
                    <p className="sub-label">
                      SELECT KEYBOARD (Input)
                      <BsKeyboard size={20} />
                    </p>
                    <div className="flex-row-wrap">
                      <Button className="choice-btn" title="Mechanical" />
                      <Button className="choice-btn" title="Membrane" />
                    </div>
                    <p className="sub-label">
                      SELECT MOUSE (Aim)
                      <BsMouse3Fill size={20} />
                    </p>
                    <div className="flex-row-wrap">
                      <Button className="choice-btn" title="Gaming" />
                      <Button className="choice-btn" title="Office" />
                    </div>
                    <p className="sub-label">
                      SELECT HEADSET (Audio)
                      <FaHeadphonesAlt size={20} />
                    </p>
                    <div className="flex-row-wrap">
                      <Button className="choice-btn" title="Gaming" />
                      <Button className="choice-btn" title="Office" />
                    </div>

                    <div className="reveal-box">
                      <p className="reveal-title">THE FINAL REVEAL</p>
                      <h3 className="reveal-subtitle">User's Custom Beast</h3>
                      <ul className="reveal-list">
                        <li>
                          <strong>Gaming:</strong> GTA V (Ultra): 110 FPS |
                          Valorant: 350+ FPS
                        </li>
                        <li>
                          <strong>Productivity:</strong> 4K Render Time: Fast |
                          Multitasking: Excellent
                        </li>
                        <li>
                          <strong>
                            System Health Check (Compatibility Seal) ✅
                          </strong>
                        </li>
                        <li>
                          [ ✅ 100% Compatible ] Motherboard, CPU, and RAM fit
                          perfectly.
                        </li>
                        <li>
                          [ ⚡ Power Check ] Your Build: 380W | PSU Capacity:
                          650W (Safe Buffer: 40%).
                        </li>
                        <li>
                          [ 🌡️ Thermal Check ] Airflow is optimized for this
                          Cabinet.
                        </li>
                      </ul>
                    </div>

                    <div className="final-reveal-buttons">
                      <Button
                        className="build-btn"
                        title="DOWNLOAD QUOTATION (PDF)"
                      />
                      <Button
                        className="build-btn"
                        title="SHARE CONFIGURATION"
                      />
                      <Button className="build-btn" title="Save for Later" />
                    </div>
                  </form>
                </div>
              )}

              {activeTab === "budget" && (
                <div className="tab-content budget-pc-content">
                  <div className="slidecontainer">
                    <p>Set The Gaming PC Budget:</p>
                    <div className="slider-container">
                      <p>20K</p>
                      <input
                        type="range"
                        min="20000"
                        max="200000"
                        step="5000"
                        value={budget}
                        className="slider"
                        id="myRange"
                        onChange={(e) => setBudget(e.target.value)}
                      />
                      <p>2Lakh+</p>
                    </div>
                    <p>₹{Number(budget).toLocaleString("en-IN")}</p>
                    <Button className="build-btn" title="Find PCs" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Total Price Summary */}
          <div className="build-sidebar-right">
            <div className="price-summary-card">
              <h3>Final Pricing & Actions</h3>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Selected Type:</span>
                  <span>
                    {activeTab === "custom" ? "Custom Parts" : "Pre-built Base"}
                  </span>
                </div>
                {activeTab === "budget" && (
                  <div className="summary-row">
                    <span></span>
                    <span>₹{Number(budget).toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="summary-row total-row">
                  <span>Subtotal:</span>
                  <span>
                    {activeTab === "budget"
                      ? `₹${Number(budget).toLocaleString("en-IN")}`
                      : "₹0"}
                  </span>
                </div>
                <div className="summary-row">
                  <span>GST (18% Included):</span>
                  <span>
                    {activeTab === "budget"
                      ? `₹${Number(0).toLocaleString("en-IN")}`
                      : "₹0"}
                  </span>
                </div>
                <div className="summary-row">
                  <span>Shipping & Handling:</span>
                  <span>FREE</span>
                </div>
                <div className="summary-row">
                  <span>Grand Total:</span>
                  <span>
                    {activeTab === "budget"
                      ? `₹${Number(budget).toLocaleString("en-IN")}`
                      : "₹0"}
                  </span>
                </div>
              </div>
              <Button
                title="Proceed to Checkout"
                className="build-btn"
                disabled={activeTab === "custom"}
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default BuildPC;
