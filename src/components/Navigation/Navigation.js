"use client";

import styles from "./Navigation.module.css";

export default function Navigation({ activeSection }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>GD</div>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ""}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
