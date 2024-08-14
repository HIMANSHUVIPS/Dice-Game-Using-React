import React from "react";
import styles from "./LandingPage.module.css";
const LandingPage = ({ main_img, handleGamePlay }) => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.main_img}>
          <img src={main_img} alt=""  />
        </div>
        <div className={styles.main_heading}>
          <h1>DICE GAME</h1>
          <button type="button" onClick={handleGamePlay}>
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
