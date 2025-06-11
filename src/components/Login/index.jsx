import React from "react";
import styles from "./index.module.css";
import { IoIosClose } from "react-icons/io";
const Login = ({ setShow }) => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.content}>
        <div
          className={styles.close}
          style={{ textAlign: "right" }}
          onClick={() => setShow(false)}
        >
          <IoIosClose size={30} />
        </div>
        <form action="">
          <div className={styles.loginTop}>
            <div>
              <h3>Login / Signup</h3>
            </div>
            <div className={styles.loginInput}>
              <div>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div className={styles.loginBottom}>
            <div>
              <div className={styles.btn_section}>
                <p>By proceeding, you agree to our terms and conditions</p>
                <button>Verify your number</button>
              </div>
            </div>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
