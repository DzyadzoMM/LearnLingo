import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
    <Header />
      <section className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.textContentTitle}>Unlock your potential with the best <span className={styles.spanTitle}>language </span>tutors</h1>
          <p className={styles.textContentDiscription}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
          <Link href="/teachers" className={styles.textContentButton}>Get started</Link>
        </div>
        <div className={`${styles.card} ${styles.bgOrange}`}>
          <img 
            src="/sticker.svg" 
            alt="Character" 
            className={styles.layerGirl} 
          />
          <img 
            src="/laptop.svg" 
            alt="Laptop" 
            className={styles.layerLaptop} 
          />
          <img 
            src="/aple.svg" 
            alt="Apple Logo" 
            className={styles.layerApple} 
          />
        </div>
      </section>    
      <section className={styles.statistics}>
        <div className={styles.statistic}>
          <p className={styles.statisticValue}>32,000 +</p>
          <p className={styles.statisticLabel}>Experienced tutors</p>
        </div>
        <div className={styles.statistic}>
          <p className={styles.statisticValue}>300,000 +</p>
          <p className={styles.statisticLabel}>5-star tutor reviews</p>
        </div>
        <div className={styles.statistic}>
          <p className={styles.statisticValue}>120 +</p>
          <p className={styles.statisticLabel}>Subjects taught</p>
        </div>
        <div className={styles.statistic}>
          <p className={styles.statisticValue}>200 +</p>
          <p className={styles.statisticLabel}>Tutor nationalities</p>
        </div>
      </section>
    </div>

  );
}
