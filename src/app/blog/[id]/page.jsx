import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            nihil, nisi autem molestiae error labore expedita officia ab
            voluptatum odit vitae qui doloremque eligendi modi magnam fugiat
            sequi.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/13921686/pexels-photo-13921686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Random Image"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Smith</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16548621/pexels-photo-16548621/free-photo-of-arido-seco-desertico-monotono.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Random Image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae velit
          aliquid explicabo nihil magnam natus inventore neque. Veniam, tempore
          cupiditate totam beatae ipsum iure consequuntur saepe animi
          necessitatibus? Inventore, rerum?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae velit
          aliquid explicabo nihil magnam natus inventore neque. Veniam, tempore
          cupiditate totam beatae ipsum iure consequuntur saepe animi
          necessitatibus? Inventore, rerum?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae velit
          aliquid explicabo nihil magnam natus inventore neque. Veniam, tempore
          cupiditate totam beatae ipsum iure consequuntur saepe animi
          necessitatibus? Inventore, rerum?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
