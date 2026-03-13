"use client";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.sectionSubtitle}>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className={styles.contactGrid}>
          <a
            href="mailto:ghanashyamdevadig59@gmail.com"
            className={styles.contactCard}
          >
            <div className={styles.icon}>📧</div>
            <h3 className={styles.cardTitle}>Email</h3>
            <p className={styles.cardValue}>ghanashyamdevadig59@gmail.com</p>
          </a>

          <a href="tel:+918792201668" className={styles.contactCard}>
            <div className={styles.icon}>📱</div>
            <h3 className={styles.cardTitle}>Phone</h3>
            <p className={styles.cardValue}>+91 8792201668</p>
          </a>

          <div className={styles.contactCard}>
            <div className={styles.icon}>📍</div>
            <h3 className={styles.cardTitle}>Location</h3>
            <p className={styles.cardValue}>Bengaluru, Karnataka</p>
          </div>
        </div>

        <div className={styles.languages}>
          <h3 className={styles.languagesTitle}>Languages</h3>
          <div className={styles.languagesList}>
            <span className={styles.language}>English</span>
            <span className={styles.language}>Kannada</span>
            <span className={styles.language}>Hindi</span>
            <span className={styles.language}>Tulu</span>
          </div>
        </div>

        <footer className={styles.footer}>
          <p className={styles.footerText}>
            © 2026 Ghanashyam Govind Devadig. Built with Next.js
          </p>
        </footer>
      </div>
    </section>
  );
}
