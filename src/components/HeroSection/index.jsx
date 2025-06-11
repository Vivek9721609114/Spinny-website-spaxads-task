import React from "react";
import styles from "./index.module.css";
import selling_right from "../../assets/sell_right_new.svg";
import faster from "../../assets/faster.svg";
import carimg1 from "../../assets/car1.webp";
import carimg2 from "../../assets/car2.webp";
import carimg3 from "../../assets/car3.webp";
import carimg4 from "../../assets/car4.webp";
import carimg5 from "../../assets/car5.webp";
import carimg6 from "../../assets/car6.webp";
import carimg7 from "../../assets/car7.webp";
import carimg8 from "../../assets/car8.webp";
import carimg9 from "../../assets/car9.webp";
import carimg10 from "../../assets/car10.png";
import carimg11 from "../../assets/car11.png";
import image4 from "../../assets/p1.svg";
import image5 from "../../assets/p2.svg";
import image6 from "../../assets/p3.svg";
import { FaAngleRight } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <>
      <div className={styles.deskBack}>
        <div style={{ height: "230px" }}>
          <div className={styles.content}>
            <div className={styles.sellingRight}>
              <img src={selling_right} alt="" />
            </div>

            <h1>
              <span>Sell your car </span>
              <strong>at the best price</strong>
            </h1>
          </div>
        </div>
        <div className={styles.submitForm}>
          <div>
            <div>
              <div>
                <div style={{ position: "relative" }}>
                  <div className={styles.RcInput}>
                    <h4>
                      Enter your car registration number{" "}
                      <span>
                        <div style={{ marginLeft: "16px" }}>
                          <img src={faster} alt="faster" />
                        </div>
                      </span>{" "}
                    </h4>
                    <div className={styles.RcInput_input}>
                      <div className={styles.left_input}>
                        <div>
                          <input type="text" />
                        </div>
                      </div>
                      <div className={styles.right_btn}>
                        <button>Get your car Price</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.RC_input_driver}>
            <hr className={styles.RC_input_text} />
          </div>
          <div className={styles.car_sell}>
            <p>Select your car brand to get started</p>
            <div className={styles.carcontent}>
              <div className={styles.blur_container}>
                <div className={styles.relative_container}>
                  <div className={styles.sellcontainer}>
                    <button className={styles.btn1}>
                      <div className={styles.carbrandIcon}>
                        <img src={carimg1} alt="" className={styles.image} />
                      </div>
                    </button>
                    <button className={styles.btn1}>
                      <div className={styles.carbrandIcon}>
                        <img src={carimg2} alt="" className={styles.image} />
                      </div>
                    </button>
                    <button className={styles.btn1}>
                      <div className={styles.carbrandIcon}>
                        <img src={carimg3} alt="" className={styles.image} />
                      </div>
                    </button>
                    <button className={styles.btn1}>
                      <div className={styles.carbrandIcon}>
                        <img src={carimg4} alt="" className={styles.image} />
                      </div>
                    </button>
                    <button className={styles.btn1}>
                      <div className={styles.carbrandIcon}>
                        <img src={carimg5} alt="" className={styles.image} />
                      </div>
                    </button>
                    <button className={styles.btn1}>
                      <div className={styles.carbrandIcon}>
                        <img src={carimg6} alt="" className={styles.image} />
                      </div>
                    </button>
                    <button className={styles.btn1}>
                      <div className={styles.carbrandIcon}>
                        <img src={carimg7} alt="" className={styles.image} />
                      </div>
                    </button>
                    <button className={styles.btn1}>
                      <div className={styles.carbrandIcon}>
                        <img src={carimg8} alt="" className={styles.image} />
                      </div>
                    </button>
                    <button className={styles.btn1}>
                      <div className={styles.carbrandIcon}>
                        <img src={carimg9} alt="" className={styles.image} />
                      </div>
                    </button>
                    <button className={styles.btn1}>
                      <div className={styles.carbrandIcon}>
                        <img src={carimg10} alt="" className={styles.image} />
                      </div>
                    </button>
                    <button className={styles.btn1}>
                      <div className={styles.carbrandIcon}>
                        <img src={carimg11} alt="" className={styles.image} />
                      </div>
                    </button>
                    <div className={styles.carinnercont}>
                      <div className={styles.ripple_container}></div>
                      <div>
                        <span>
                          More brands&nbsp;
                          <FaAngleRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.landingformdesc}>
            <ul className={styles.marketingcontent}>
              <li className={styles.listItems}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img src={image4} alt="" />
                  <p className={styles.para}>Instant Payment</p>
                </div>
              </li>
              <li className={styles.listItems}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img src={image5} alt="" />
                  <p className={styles.para}>Free Car Evaluation</p>
                </div>
              </li>
              <li className={styles.listItems}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img src={image6} alt="" />
                  <p className={styles.para}>Free & Fast RC Transfer</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
