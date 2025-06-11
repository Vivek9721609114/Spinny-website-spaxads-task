import React from "react";
import Styles from "./index.module.css";
import logo from "../../assets/logo.svg";
import MultiCarousel from "../Carousel";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import FaqAccordion from "../FaqAccordion";
import PageViewPort from "../PageViewPort";
const Desktopcontent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className={Styles.content_desktop}>
        <div className={Styles.header_viewwrapper}>
          <div className={Styles.love_story}>
            <h3 className={Styles.heading}>Over 2 Lakh Spinny Love Stories</h3>
            <div className={Styles.caraousal_container}>
              <MultiCarousel
                arrows={true}
                infinite={true}
                showDots={true}
                autoPlay={true}
                responsive={responsive}
                customLeftArrow={
                  <button
                    style={{
                      position: "absolute",
                      left: 15,
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent", // changed here
                      color: "#fff",
                      border: "none",
                      borderRadius: "50%",
                      padding: "10px",
                      zIndex: 2,
                      cursor: "pointer",
                      outline: "none",
                      boxShadow: "none",
                    }}
                  >
                    <MdOutlineArrowBackIos size={30} />
                  </button>
                }
                customRightArrow={
                  <button
                    style={{
                      position: "absolute",
                      right: 15,
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent", // changed here
                      color: "#fff",
                      border: "none",
                      borderRadius: "50%",
                      padding: "10px",
                      zIndex: 2,
                      cursor: "pointer",
                    }}
                  >
                    <MdOutlineArrowForwardIos size={30} />
                  </button>
                }
              >
                <div className={Styles.caraousal_horizental}>
                  <li className={Styles.lists}>
                    <div className={Styles.topdesc}>
                      <img src={logo} alt="" />
                      <span>myspinny</span>
                    </div>
                    <div className={Styles.bottomdesc}>
                      <ul className={Styles.ulitem}>
                        <li>Murthy Kasturi, Sold 2016 Honda City</li>
                        <li>Chennai</li>
                      </ul>
                      <div className={Styles.text}>
                        The entire process was seamless and very quick. I
                        checked the quote online and Spinny executive came for
                        evaluation the same day. The entire process took less
                        than 24 hours.
                      </div>
                    </div>
                  </li>
                  <li className={Styles.lists}>
                    <div className={Styles.topdesc}>
                      <img src={logo} alt="" />
                      <span>myspinny</span>
                    </div>
                    <div className={Styles.bottomdesc}>
                      <ul className={Styles.ulitem}>
                        <li>Murthy Kasturi, Sold 2016 Honda City</li>
                        <li>Chennai</li>
                      </ul>
                      <div className={Styles.text}>
                        The entire process was seamless and very quick. I
                        checked the quote online and Spinny executive came for
                        evaluation the same day. The entire process took less
                        than 24 hours.
                      </div>
                    </div>
                  </li>
                  <li className={Styles.lists}>
                    <div className={Styles.topdesc}>
                      <img src={logo} alt="" />
                      <span>myspinny</span>
                    </div>
                    <div className={Styles.bottomdesc}>
                      <ul className={Styles.ulitem}>
                        <li>Murthy Kasturi, Sold 2016 Honda City</li>
                        <li>Chennai</li>
                      </ul>
                      <div className={Styles.text}>
                        The entire process was seamless and very quick. I
                        checked the quote online and Spinny executive came for
                        evaluation the same day. The entire process took less
                        than 24 hours.
                      </div>
                    </div>
                  </li>
                  <li className={Styles.lists}>
                    <div className={Styles.topdesc}>
                      <img src={logo} alt="" />
                      <span>myspinny</span>
                    </div>
                    <div className={Styles.bottomdesc}>
                      <ul className={Styles.ulitem}>
                        <li>Murthy Kasturi, Sold 2016 Honda City</li>
                        <li>Chennai</li>
                      </ul>
                      <div className={Styles.text}>
                        The entire process was seamless and very quick. I
                        checked the quote online and Spinny executive came for
                        evaluation the same day. The entire process took less
                        than 24 hours.
                      </div>
                    </div>
                  </li>
                  <li className={Styles.lists}>
                    <div className={Styles.topdesc}>
                      <img src={logo} alt="" />
                      <span>myspinny</span>
                    </div>
                    <div className={Styles.bottomdesc}>
                      <ul className={Styles.ulitem}>
                        <li>Murthy Kasturi, Sold 2016 Honda City</li>
                        <li>Chennai</li>
                      </ul>
                      <div className={Styles.text}>
                        The entire process was seamless and very quick. I
                        checked the quote online and Spinny executive came for
                        evaluation the same day. The entire process took less
                        than 24 hours.
                      </div>
                    </div>
                  </li>
                </div>
              </MultiCarousel>
            </div>
          </div>
          <div className={Styles.faq_section}>
            <FaqAccordion />
          </div>
        </div>
        <PageViewPort />
      </div>
    </>
  );
};

export default Desktopcontent;
