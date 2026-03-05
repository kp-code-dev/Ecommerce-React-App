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
  const [selections, setSelections] = useState({
    purpose: "",
    platform: "",
    processor: "",
    motherboard: "",
    ramSize: "",
    ramCategory: "",
    storageType: "",
    gpu: "",
    cooler: "",
    psu: "",
    cabinet: "",
    monitor: "",
    keyboard: "",
    mouse: "",
    headset: "",
  });

  const activeTab = searchParams.get("type");

  const handleSelectTab = (type) => {
    setSearchParams({ type });
  };

  const categoryOrder = [
    "purpose",
    "platform",
    "processor",
    "motherboard",
    "ramSize",
    "ramCategory",
    "storageType",
    "gpu",
    "cooler",
    "psu",
    "cabinet",
    "monitor",
    "keyboard",
    "mouse",
    "headset",
  ];

  const handleSelect = (category, value) => {
    setSelections((prev) => {
      const newSelections = { ...prev, [category]: value };

      // If we change a choice, clear all subsequent choices in the cascade
      if (prev[category] !== value) {
        const categoryIndex = categoryOrder.indexOf(category);
        for (let i = categoryIndex + 1; i < categoryOrder.length; i++) {
          newSelections[categoryOrder[i]] = "";
        }
      }

      return newSelections;
    });
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
                        className={`choice-btn ${selections.purpose === "Gaming" ? "selected" : ""}`}
                        title="Gaming"
                        icon={<SiYoutubegaming />}
                        onClick={() => handleSelect("purpose", "Gaming")}
                      />
                      <Button
                        className={`choice-btn ${selections.purpose === "Productivity" ? "selected" : ""}`}
                        title="Productivity (Coding & Editing)"
                        icon={<Productivity />}
                        onClick={() => handleSelect("purpose", "Productivity")}
                      />
                    </div>

                    {selections.purpose && (
                      <>
                        <p className="section-label">CHOOSE YOUR PLATFORM</p>
                        <div className="flex-row-wrap">
                          <Button
                            className={`choice-btn ${selections.platform === "Intel" ? "selected" : ""}`}
                            title="Intel"
                            icon={<SiIntel />}
                            onClick={() => handleSelect("platform", "Intel")}
                          />
                          <Button
                            className={`choice-btn ${selections.platform === "AMD" ? "selected" : ""}`}
                            title="AMD"
                            icon={<SiAmd />}
                            onClick={() => handleSelect("platform", "AMD")}
                          />
                        </div>
                      </>
                    )}

                    {selections.platform && (
                      <>
                        <p className="section-label">
                          SELECT YOUR PROCESSOR SERIES
                        </p>
                        <div className="flex-row-wrap">
                          {selections.platform === "Intel" && (
                            <>
                              <Button
                                className={`choice-btn ${selections.processor === "Intel Core i3" ? "selected" : ""}`}
                                title="Intel Core i3"
                                onClick={() =>
                                  handleSelect("processor", "Intel Core i3")
                                }
                              />
                              <Button
                                className={`choice-btn ${selections.processor === "Intel Core i5" ? "selected" : ""}`}
                                title="Intel Core i5"
                                onClick={() =>
                                  handleSelect("processor", "Intel Core i5")
                                }
                              />
                              <Button
                                className={`choice-btn ${selections.processor === "Intel Core i7" ? "selected" : ""}`}
                                title="Intel Core i7"
                                onClick={() =>
                                  handleSelect("processor", "Intel Core i7")
                                }
                              />
                              <Button
                                className={`choice-btn ${selections.processor === "Intel Core i9" ? "selected" : ""}`}
                                title="Intel Core i9"
                                onClick={() =>
                                  handleSelect("processor", "Intel Core i9")
                                }
                              />
                            </>
                          )}
                          {selections.platform === "AMD" && (
                            <>
                              <Button
                                className={`choice-btn ${selections.processor === "AMD Ryzen 3" ? "selected" : ""}`}
                                title="AMD Ryzen 3"
                                onClick={() =>
                                  handleSelect("processor", "AMD Ryzen 3")
                                }
                              />
                              <Button
                                className={`choice-btn ${selections.processor === "AMD Ryzen 5" ? "selected" : ""}`}
                                title="AMD Ryzen 5"
                                onClick={() =>
                                  handleSelect("processor", "AMD Ryzen 5")
                                }
                              />
                              <Button
                                className={`choice-btn ${selections.processor === "AMD Ryzen 7" ? "selected" : ""}`}
                                title="AMD Ryzen 7"
                                onClick={() =>
                                  handleSelect("processor", "AMD Ryzen 7")
                                }
                              />
                              <Button
                                className={`choice-btn ${selections.processor === "AMD Ryzen 9" ? "selected" : ""}`}
                                title="AMD Ryzen 9"
                                onClick={() =>
                                  handleSelect("processor", "AMD Ryzen 9")
                                }
                              />
                            </>
                          )}
                        </div>
                      </>
                    )}

                    {selections.processor && (
                      <>
                        <p className="section-label">SELECT YOUR MOTHERBOARD</p>
                        <div className="flex-row-wrap">
                          {selections.platform === "Intel" && (
                            <Button
                              className={`choice-btn ${selections.motherboard === "Intel" ? "selected" : ""}`}
                              title="Intel"
                              onClick={() =>
                                handleSelect("motherboard", "Intel")
                              }
                            />
                          )}
                          {selections.platform === "AMD" && (
                            <Button
                              className={`choice-btn ${selections.motherboard === "AMD" ? "selected" : ""}`}
                              title="AMD"
                              onClick={() => handleSelect("motherboard", "AMD")}
                            />
                          )}
                        </div>
                      </>
                    )}

                    {selections.motherboard && (
                      <>
                        <p className="section-label">CHOOSE YOUR RAM</p>
                        <p className="sub-label">SELECT SIZE:</p>
                        <div className="flex-row-wrap">
                          {["8GB", "16GB", "32GB", "64GB", "64GB+"].map(
                            (size) => (
                              <Button
                                key={size}
                                className={`choice-btn ${selections.ramSize === size ? "selected" : ""}`}
                                title={size}
                                onClick={() => handleSelect("ramSize", size)}
                              />
                            ),
                          )}
                        </div>
                        {selections.ramSize && (
                          <>
                            <p className="sub-label">SELECT CATEGORY:</p>
                            <div className="flex-row-wrap">
                              {["DDR4", "DDR5"].map((cat) => (
                                <Button
                                  key={cat}
                                  className={`choice-btn ${selections.ramCategory === cat ? "selected" : ""}`}
                                  title={cat}
                                  onClick={() =>
                                    handleSelect("ramCategory", cat)
                                  }
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}

                    {selections.ramCategory && (
                      <>
                        <p className="section-label">CHOOSE YOUR STORAGE</p>
                        <div className="flex-row-wrap">
                          <Button
                            className={`choice-btn ${selections.storageType === "SSD" ? "selected" : ""}`}
                            title="SSD"
                            icon={<BsDeviceSsd />}
                            onClick={() => handleSelect("storageType", "SSD")}
                          />
                          <Button
                            className={`choice-btn ${selections.storageType === "HDD" ? "selected" : ""}`}
                            title="HDD"
                            icon={<BsDeviceHdd />}
                            onClick={() => handleSelect("storageType", "HDD")}
                          />
                        </div>
                      </>
                    )}

                    {selections.storageType && (
                      <>
                        <p className="section-label">
                          SELECT GRAPHICS CARD (GPU)
                        </p>
                        <div className="flex-row-wrap">
                          <Button
                            className={`choice-btn ${selections.gpu === "NVIDIA" ? "selected" : ""}`}
                            title="NVIDIA"
                            icon={<BsNvidia />}
                            onClick={() => handleSelect("gpu", "NVIDIA")}
                          />
                          <Button
                            className={`choice-btn ${selections.gpu === "AMD" ? "selected" : ""}`}
                            title="AMD"
                            icon={<BsAmd />}
                            onClick={() => handleSelect("gpu", "AMD")}
                          />
                        </div>
                      </>
                    )}

                    {selections.gpu && (
                      <>
                        <p className="section-label">
                          SELECT CPU COOLER (Thermal Solution)
                        </p>
                        <div className="flex-row-wrap">
                          {["Air Cooler", "Liquid Cooler"].map((cooler) => (
                            <Button
                              key={cooler}
                              className={`choice-btn ${selections.cooler === cooler ? "selected" : ""}`}
                              title={cooler}
                              onClick={() => handleSelect("cooler", cooler)}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    {selections.cooler && (
                      <>
                        <p className="section-label">
                          SELECT POWER SUPPLY (PSU)
                        </p>
                        <div className="flex-row-wrap">
                          {["550W", "650W", "750W", "850W", "1000W"].map(
                            (psu) => (
                              <Button
                                key={psu}
                                className={`choice-btn ${selections.psu === psu ? "selected" : ""}`}
                                title={psu}
                                onClick={() => handleSelect("psu", psu)}
                              />
                            ),
                          )}
                        </div>
                      </>
                    )}

                    {selections.psu && (
                      <>
                        <p className="section-label">
                          SELECT CABINET (PC Case)
                        </p>
                        <div className="flex-row-wrap">
                          {["ATX", "Micro ATX", "Mini ITX"].map((cab) => (
                            <Button
                              key={cab}
                              className={`choice-btn ${selections.cabinet === cab ? "selected" : ""}`}
                              title={cab}
                              onClick={() => handleSelect("cabinet", cab)}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    {selections.cabinet && (
                      <>
                        <p className="section-label">
                          SELECT PERIPHERALS (Final Setup)
                        </p>
                        <p className="sub-label">
                          SELECT MONITOR (Display)
                          <MdScreenshotMonitor size={20} />
                        </p>
                        <div className="flex-row-wrap">
                          {["24 inch", "27 inch", "32 inch"].map((mon) => (
                            <Button
                              key={mon}
                              className={`choice-btn ${selections.monitor === mon ? "selected" : ""}`}
                              title={mon}
                              onClick={() => handleSelect("monitor", mon)}
                            />
                          ))}
                        </div>

                        {selections.monitor && (
                          <>
                            <p className="sub-label">
                              SELECT KEYBOARD (Input)
                              <BsKeyboard size={20} />
                            </p>
                            <div className="flex-row-wrap">
                              {["Mechanical", "Membrane"].map((kb) => (
                                <Button
                                  key={kb}
                                  className={`choice-btn ${selections.keyboard === kb ? "selected" : ""}`}
                                  title={kb}
                                  onClick={() => handleSelect("keyboard", kb)}
                                />
                              ))}
                            </div>
                          </>
                        )}

                        {selections.keyboard && (
                          <>
                            <p className="sub-label">
                              SELECT MOUSE (Aim)
                              <BsMouse3Fill size={20} />
                            </p>
                            <div className="flex-row-wrap">
                              {["Gaming", "Office"].map((mouse) => (
                                <Button
                                  key={mouse}
                                  className={`choice-btn ${selections.mouse === mouse ? "selected" : ""}`}
                                  title={mouse}
                                  onClick={() => handleSelect("mouse", mouse)}
                                />
                              ))}
                            </div>
                          </>
                        )}

                        {selections.mouse && (
                          <>
                            <p className="sub-label">
                              SELECT HEADSET (Audio)
                              <FaHeadphonesAlt size={20} />
                            </p>
                            <div className="flex-row-wrap">
                              {["Gaming", "Office"].map((hs) => (
                                <Button
                                  key={hs}
                                  className={`choice-btn ${selections.headset === hs ? "selected" : ""}`}
                                  title={hs}
                                  onClick={() => handleSelect("headset", hs)}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}

                    {selections.headset && (
                      <>
                        <div className="reveal-box">
                          <p className="reveal-title">THE FINAL REVEAL</p>
                          <h3 className="reveal-subtitle">
                            User's Custom Beast
                          </h3>
                          <ul className="reveal-list">
                            <li>
                              <strong>Gaming:</strong> GTA V (Ultra): 110 FPS |
                              Valorant: 350+ FPS
                            </li>
                            <li>
                              <strong>Productivity:</strong> 4K Render Time:
                              Fast | Multitasking: Excellent
                            </li>
                            <li>
                              <strong>
                                System Health Check (Compatibility Seal) ✅
                              </strong>
                            </li>
                            <li>
                              [ ✅ 100% Compatible ] Motherboard, CPU, and RAM
                              fit perfectly.
                            </li>
                            <li>
                              [ ⚡ Power Check ] Your Build: 380W | PSU
                              Capacity: 650W (Safe Buffer: 40%).
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
                          <Button
                            className="build-btn"
                            title="Save for Later"
                          />
                        </div>
                      </>
                    )}
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
                {activeTab === "custom" && (
                  <div className="summary-row">
                    <span></span>
                    <span>₹{Number(budget).toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="summary-row total-row">
                  <span>Subtotal:</span>
                  <span>
                    {activeTab === "custom"
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
