"use client";

import styles from "./Hero.module.css";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={`${styles.heroText} ${mounted ? styles.fadeIn : ""}`}>
          <div className={styles.greeting}>Hi! I'm Ghanashyam</div>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>Frontend</span>
            <span className={styles.titleLine}>Developer</span>
          </h1>
          <p className={styles.subtitle}>Crafting Digital Experiences</p>
          <p className={styles.description}>
            Co-Tech Lead with 3+ years of experience building scalable,
            high-performance web applications at Trade Brains
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>45K+</div>
              <div className={styles.statLabel}>Monthly Users</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Features Delivered</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>40%</div>
              <div className={styles.statLabel}>Efficiency Boost</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}
