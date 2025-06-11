import React, { useState } from "react";
import styles from "./index.module.css";
import Login from "../Login";
const Account = () => {
  const [show, setShow] = useState();
  return (
    <div className={styles.account}>
      <div className={styles.loginContainer}>
        {show ? <Login /> : ""}
        <div className={styles.content}>
          <form action="">
            <div className={styles.loginTop}>
              <div>
                <h3>Login to view Account</h3>
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
    </div>
  );
};

export default Account;
