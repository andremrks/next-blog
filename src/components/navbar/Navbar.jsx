"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { links } from "@/utils/constants";
import DarkMode from "../darkMode/DarkMode";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        AndréMarques
      </Link>
      <div className={styles.links}>
        <DarkMode />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
