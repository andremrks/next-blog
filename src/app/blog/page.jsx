import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <div key={item.id} className={styles.container}>
          <Link href="/blog/1" className={styles.container}>
            <div className={styles.imgContainer}>
              <Image
                src="https://images.pexels.com/photos/17237121/pexels-photo-17237121/free-photo-of-antigo-antepassados-anciao-arquitetura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Random Image"
                width={400}
                height={250}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.body}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
