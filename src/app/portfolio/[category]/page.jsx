import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { catContent } from "@/utils/constants";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      {catContent.map((content) => (
        <div key={content.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{content.title}</h1>
            <p className={styles.desc}>{content.desc}</p>
            <Button url="/portfolio" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              fill={true}
              src={content.image}
              alt="Random Image"
              className={styles.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
