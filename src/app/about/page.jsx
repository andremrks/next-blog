import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="About Image"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Lorem Ipsum</h1>
          <h2 className={styles.imgDesc}>Lorem ipsum dolor sit amet</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            atque distinctio fuga suscipit debitis molestias, blanditiis
            consequatur sint doloremque voluptatum! Voluptates necessitatibus ab
            quis iure totam quaerat, laborum deserunt voluptate.
          </p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            nisi voluptatibus sed. Corporis itaque, eos ducimus soluta voluptas
            consequuntur? Nesciunt aut exercitationem doloribus sapiente nisi
            voluptatem non? Perspiciatis, alias vitae.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            atque distinctio fuga suscipit debitis molestias, blanditiis
            consequatur sint doloremque voluptatum! Voluptates necessitatibus ab
            quis iure totam quaerat, laborum deserunt voluptate.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
