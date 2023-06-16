import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Lorem ipsum dolor, sit amet consectetur.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quas, consequuntur mollitia velit molestias eligendi.
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image src="/Hero.png" alt="Hero" width={450} height={450} />
      </div>
    </div>
  );
}
