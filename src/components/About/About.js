"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Frontend Developer</span> with
              3+ years of experience building scalable, high-performance web
              applications. Currently serving as{" "}
              <span className={styles.highlight}>SDE 2</span> at Trade Brains,
              where I shape the technical direction of a stock analytics
              platform serving 45K+ monthly users.
            </p>
            <p className={styles.paragraph}>
              I specialize in developing high-traffic platforms, leading
              multiple concurrent projects, and delivering internal tools with
              full-stack integrations. My approach focuses on driving technical
              decisions, optimizing development workflows, and delivering MVPs
              quickly while maintaining high code quality and performance.
            </p>
            <p className={styles.paragraph}>
              When I'm not coding, I enjoy experimenting with new technologies
              and finding ways to improve developer productivity. I'm passionate
              about creating intuitive user experiences and building tools that
              make a real impact.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>🚀</span>
                <div>
                  <h3>Reduced manual operations by 40%</h3>
                  <p>
                    Built 3 internal tools for research and compliance teams
                  </p>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>⚡</span>
                <div>
                  <h3>30-40% faster delivery</h3>
                  <p>Implemented MVP-first development strategy</p>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>💼</span>
                <div>
                  <h3>Complete developer lifecycle</h3>
                  <p>Hiring, onboarding, mentoring, and performance reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
