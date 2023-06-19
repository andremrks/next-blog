import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { blogPost } from "@/utils/constants";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      {blogPost.map((post) => (
        <div key={post.id} className={styles.container}>
          <Link href="/blog/testId" className={styles.container}>
            <div className={styles.imgContainer}>
              <Image
                src={post.image}
                alt="Random Image"
                width={400}
                height={250}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.desc}>{post.desc}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
