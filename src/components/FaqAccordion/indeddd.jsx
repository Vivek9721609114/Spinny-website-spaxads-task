import React from "react";
import Styles from "./index.module.css";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
const Faqsection = () => {
  return (
      <>
          
          
      <div className={Styles.faq_section}>
        <h2 className={Styles.heading}>Frequently Asked Questions</h2>
        <div className={Styles.section_content}>
          <div className={Styles.faqitems}>
            Q. What is used car valuation?{" "}
            <span>
              <FaChevronDown size={16} />
            </span>{" "}
            <span>
              <FaAngleUp size={18} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqsection;
