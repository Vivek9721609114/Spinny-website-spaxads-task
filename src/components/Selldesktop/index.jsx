import React from "react";
import Styles from "./index.module.css";
import img1 from "../../assets/pic_1.svg";
import img2 from "../../assets/pic_2.svg";
import img3 from "../../assets/pic_3.svg";
import img4 from "../../assets/pic_4.svg";
import { FaAngleRight } from "react-icons/fa6";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const Selldesktop = () => {
  return (
    <>
      <div className={Styles.sell_desktop}>
        <div className={Styles.sell_page}>
          <div className={Styles.desktopview}>
            <div className={Styles.flexcol}>
              <h2 className={Styles.heading}>
                Sell your car for the Best Price
              </h2>
              <div className={Styles.listwrap}>
                <div className={Styles.lists}>
                  <img src={img1} alt="" />
                  <div className={Styles.content_section}>
                    <h3 className={Styles.head1}>Let's talk about your car</h3>
                    <p className={Styles.para1}>
                      Tell us about your beloved and get an instant online quote
                    </p>
                    <a href="" className={Styles.btn}>
                      Get Quote <FaAngleRight />
                    </a>
                  </div>
                </div>
                <div className={Styles.lists}>
                  <img src={img2} alt="" />
                  <div className={Styles.content_section}>
                    <h3 className={Styles.head1}>Pick a day</h3>
                    <p className={Styles.para1}>
                      Tell us about your beloved and get an instant online quote
                    </p>
                    <a href="" className={Styles.btn}>
                      Get Quote <FaAngleRight />
                    </a>
                  </div>
                </div>
                <div className={Styles.lists}>
                  <img src={img3} alt="" />
                  <div className={Styles.content_section}>
                    <h3 className={Styles.head1}>Credited, the same day</h3>
                    <p className={Styles.para1}>
                      Tell us about your beloved and get an instant online quote
                    </p>
                    <a href="" className={Styles.btn}>
                      Get Quote <FaAngleRight />
                    </a>
                  </div>
                </div>
                <div className={Styles.lists}>
                  <img src={img4} alt="" />
                  <div className={Styles.content_section}>
                    <h3 className={Styles.head1}>
                      Sit back, relax. Car in Transit
                    </h3>
                    <p className={Styles.para1}>
                      Tell us about your beloved and get an instant online quote
                    </p>
                    <a href="" className={Styles.btn}>
                      Get Quote <FaAngleRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className={Styles.button_container}>
                <button className={Styles.videobtn}>
                  <span className={Styles.texthead}>
                    Watch how it works <MdSlowMotionVideo />
                  </span>
                </button>
              </div>
              <a
                href="https://www.spinny.com/how-it-works/selling/?referrer=/sell-used-car/"
                className={Styles.learncontent}
              >
                Learn more <FaAngleRight />
              </a>
            </div>
          </div>
          <div className={Styles.user_reviews}>
            <h2 className={Styles.user_reviewsheading}>
              User Reviews & Ratings
            </h2>
            <div className={Styles.reviewscontainer}>
              <div className={Styles.caraousalbutton}>
                <button aria-label="privious" type="button">
                  <FaAngleLeft />
                </button>
                <button aria-label="next" type="button">
                  <FaAngleRight />
                </button>
              </div>
              <div className={Styles.collective_reviews}>
                <h3>4.9</h3>
                <div className={Styles.starcont}>
                  <span className={Styles.span2}>
                    <FaRegStar />
                  </span>
                  <span className={Styles.span2}>
                    <FaRegStar />
                  </span>
                  <span className={Styles.span2}>
                    <FaRegStar />
                  </span>
                  <span className={Styles.span2}>
                    <FaRegStar />
                  </span>
                  <span className={Styles.span2}>
                    <FaRegStar />
                  </span>
                </div>
              </div>
              <div className={Styles.caraousalcontainer}>
                <div className={Styles.reviewcard}>
                  <div className={Styles.topsection}>
                    <div className={Styles.topleftsection}>
                      <h4>Manish Kumar</h4>
                      <span className={Styles.span3}>
                        May 31, 2025 | Gurgaon
                      </span>
                    </div>
                    <div className={Styles.starcont}>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                    </div>
                  </div>
                  <div className={Styles.textsection}>
                    <p className={Styles.para2}>
                      This was a great platform to sell my car. I had a
                      wonderful experience. Thanks Spinny!
                    </p>
                  </div>
                </div>

                <div className={Styles.reviewcard}>
                  <div className={Styles.topsection}>
                    <div className={Styles.topleftsection}>
                      <h4>Manish Kumar</h4>
                      <span className={Styles.span3}>
                        May 31, 2025 | Gurgaon
                      </span>
                    </div>
                    <div className={Styles.starcont}>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                    </div>
                  </div>
                  <div className={Styles.textsection}>
                    <p className={Styles.para2}>
                      This was a great platform to sell my car. I had a
                      wonderful experience. Thanks Spinny!
                    </p>
                  </div>
                </div>

                <div className={Styles.reviewcard}>
                  <div className={Styles.topsection}>
                    <div className={Styles.topleftsection}>
                      <h4>Manish Kumar</h4>
                      <span className={Styles.span3}>
                        May 31, 2025 | Gurgaon
                      </span>
                    </div>
                    <div className={Styles.starcont}>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                    </div>
                  </div>
                  <div className={Styles.textsection}>
                    <p className={Styles.para2}>
                      This was a great platform to sell my car. I had a
                      wonderful experience. Thanks Spinny!
                    </p>
                  </div>
                </div>

                <div className={Styles.reviewcard}>
                  <div className={Styles.topsection}>
                    <div className={Styles.topleftsection}>
                      <h4>Manish Kumar</h4>
                      <span className={Styles.span3}>
                        May 31, 2025 | Gurgaon
                      </span>
                    </div>
                    <div className={Styles.starcont}>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                    </div>
                  </div>
                  <div className={Styles.textsection}>
                    <p className={Styles.para2}>
                      This was a great platform to sell my car. I had a
                      wonderful experience. Thanks Spinny!
                    </p>
                  </div>
                </div>

                <div className={Styles.reviewcard}>
                  <div className={Styles.topsection}>
                    <div className={Styles.topleftsection}>
                      <h4>Manish Kumar</h4>
                      <span className={Styles.span3}>
                        May 31, 2025 | Gurgaon
                      </span>
                    </div>
                    <div className={Styles.starcont}>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                      <span className={Styles.span4}>
                        <FaRegStar />
                      </span>
                    </div>
                  </div>
                  <div className={Styles.textsection}>
                    <p className={Styles.para2}>
                      This was a great platform to sell my car. I had a
                      wonderful experience. Thanks Spinny!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selldesktop;
