import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { portfolioItems } from "@/utils/constants";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = portfolioItems[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="/portfolio" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              fill={true}
              src={item.image}
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
