import { useState } from "react";
import { FaChevronDown, FaAngleUp } from "react-icons/fa";
import Styles from "./index.module.css"; // Adjust the path as needed

const faqData = [
  {
    question: "What is used car valuation?",
    answer:
      "Used car valuation is the process of estimating the market value of a pre-owned vehicle based on its condition, make, model, year, mileage, and other factors.",
  },
  {
    question: "How does Spinny evaluate used cars?",
    answer:
      "Spinny uses AI-driven pricing along with physical inspections to evaluate your car’s value fairly and accurately.",
  },
  {
    question: "Can I check my car's value online?",
    answer:
      "Yes, you can check it easily through Spinny’s website by entering your car details.",
  },
  {
    question: "Does valuation affect resale price?",
    answer:
      "Yes, accurate valuation ensures you get the best resale price based on current market trends.",
  },
  {
    question: "Is car valuation free?",
    answer: "Yes, Spinny offers free used car valuation services.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={Styles.faq_section}>
      <h2 className={Styles.heading}>Frequently Asked Questions</h2>
      <div className={Styles.section_content}>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={Styles.faqitems}
            onClick={() => toggleAccordion(index)}
          >
            <div className={Styles.question}>
              Q. {faq.question}
              <span>
                {openIndex === index ? (
                  <FaAngleUp size={18} />
                ) : (
                  <FaChevronDown size={16} />
                )}
              </span>
            </div>
            {openIndex === index && (
              <div className={Styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
