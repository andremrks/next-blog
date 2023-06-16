import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©André Marques 2023</div>
      <div className={styles.social}>
        <Image
          src="/facebook.png"
          alt="Facebook"
          width={20}
          height={20}
          className={styles.icon}
        />
        <Image
          src="/instagram.png"
          alt="Instagram"
          width={20}
          height={20}
          className={styles.icon}
        />
        <Image
          src="/twitter.png"
          alt="Twitter"
          width={20}
          height={20}
          className={styles.icon}
        />
        <Image
          src="/youtube.png"
          alt="Youtube"
          width={20}
          height={20}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
