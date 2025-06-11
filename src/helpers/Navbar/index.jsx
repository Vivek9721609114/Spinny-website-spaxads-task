import React, { useState } from "react";
import styles from "./index.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuHeartHandshake } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import logo from "../../assets/logo.svg";
import Login from "../../components/Login";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate("");
  const [show, setShow] = useState(false);
  const getfromShow = () => {
    setShow(true);
  };

  const getAttHome = () => {
    navigate("/");
  };
  return (
    <>
      {show && <Login setShow={setShow} />}
      <div className={styles.navbar}>
        <div className={styles.left} onClick={getAttHome}>
          <img src={logo} alt="logo" />
          <span>Spinny</span>
        </div>

        <div className={styles.right}>
          <div className={styles.right_1}>
            {/* Buy Car Dropdown */}
            <div
              style={{
                marginLeft: "12px",
                marginRight: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className={styles.dropdown}
            >
              <a href="#">Buy Car</a>
              <span>
                <IoMdArrowDropdown />
              </span>
              <ul
                style={{ height: "400px", width: "250px" }}
                className={styles.dropdownMenu}
              >
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  View All cars
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Banglore
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Delhi
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Noida
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Gaziabad
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Lucknow
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Odisha
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Kerla
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Asam
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Gowa
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Mumbai
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Chennai
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Faridabad
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Indore
                </Link>
                <Link to="https://www.spinny.com/used-cars-in-bangalore/s/?referrer=/used-cars-in-delhi/s/">
                  Used cars in Gurugram
                </Link>
              </ul>
            </div>

            {/* More Dropdown */}
            <div
              style={{
                marginLeft: "12px",
                marginRight: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className={styles.dropdown}
            >
              <a href="#">More</a>
              <span>
                <IoMdArrowDropdown />
              </span>
              <ul
                style={{ height: "400px", width: "200px" }}
                className={styles.dropdownMenu}
              >
                <Link to="https://www.spinny.com/about-us/">About Us</Link>
                <Link to="https://www.spinny.com/used-car-loan/?referrer=/sell-used-car/">
                  Car Finance
                </Link>
                <Link to="https://www.spinny.com/service-in-mumbai/">
                  Pro Service
                </Link>
                <Link to="https://www.spinny.com/how-it-works/">
                  How It Works
                </Link>
                <Link to="https://www.spinny.com/car-hub-locations/">
                  Car Hub Locations
                </Link>
                <Link to="https://www.spinny.com/blog/">Blog</Link>
                <Link to="https://www.spinny.com/customer-reviews/">
                  Customer Reviews
                </Link>
                <Link to="https://www.spinny.com/scrap-car/">Scrap Car</Link>
                <Link to="https://www.spinny.com/car-valuation/">
                  Car Valuation
                </Link>
                <Link to="https://www.spinny.com/e-challan/">
                  Check eChallan
                </Link>
                <Link to="https://www.spinny.com/rto-details/">
                  Check RTO Details
                </Link>
              </ul>
            </div>
          </div>

          <div className={styles.right_2}>
            <div
              style={{
                marginLeft: "12px",
                marginRight: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <a href="#">
                <LuHeartHandshake />
              </a>
              <div>Shortlisted</div>
            </div>

            {/* Account Dropdown */}
            <div
              style={{ marginLeft: "12px", marginRight: "12px" }}
              className={styles.dropdown}
            >
              <a href="#">
                <MdAccountCircle />
              </a>
              <div>Account</div>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link to="/youraccount">Your Account</Link>
                </li>

                <li onClick={getfromShow}>Login/Sign up</li>
              </ul>
            </div>
          </div>

          <div className={styles.right_3}>
            <div>Call us at</div>
            <div>727-727-7275</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
