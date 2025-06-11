import React from "react";
import Styles from "./index.module.css";
import image from "../../assets/pichead.svg";
import image1 from "../../assets/ar1.svg";
import image2 from "../../assets/ar2.svg";
const Desktoprate = () => {
  return (
    <>
      <div className={Styles.Desktop_purple}>
        <div className={Styles.viewsellpage}>
          <div className={Styles.backgroundimg}>
            <div className={Styles.heading}>
              <h2>Recommended by 1 Lakh+ sellers across India</h2>
              <img src={image} alt="" />
            </div>
            <ul className={Styles.ullist}>
              <div className={Styles.desktop_listitem}>
                <li className={Styles.listitems}>
                  <img src={image1} alt="" className={Styles.img1} />
                  <div className={Styles.content}>
                    <strong>1 Lakh+</strong>
                    <span>s purchased</span>
                  </div>
                </li>
              </div>
              <div className={Styles.desktop_listitem}>
                <li className={Styles.listitems}>
                  <img src={image2} alt="" className={Styles.img1} />
                  <div className={Styles.content}>
                    <strong>4.7</strong>
                    <span>average rating</span>
                  </div>
                </li>
              </div>
              <div className={Styles.desktop_listitem}>
                <li className={Styles.listitems}>
                  <img src={image1} alt="" className={Styles.img1} />
                  <div className={Styles.content}>
                    <strong>40+</strong>
                    <span>cities in india</span>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktoprate;
