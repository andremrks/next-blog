"use client";

import React, { useContext } from "react";
import styles from "./darkMode.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkMode = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.button}
        style={mode === "dark" ? { right: "2px" } : { left: "2px" }}
      />
    </div>
  );
};

export default DarkMode;
