import React from 'react'
import styles from "./App.module.css";
import main_img from "./assets/dices 1.png"
import LandingPage from './components/LandingPage';
const App = () => {
  return (
    <div className={styles.container}>
      <LandingPage main_img={main_img}/>
    </div>
  )
}

export default App;
