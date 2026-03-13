"use client";

import styles from "./Skills.module.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Redux",
      ],
    },
    {
      title: "UI Libraries",
      skills: ["Ant Design", "Material UI", "Tailwind CSS", "shadcn/ui"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "AWS", "Coolify"],
    },
    {
      title: "Concepts",
      skills: [
        "Server-Side Rendering (SSR)",
        "Performance Optimization",
        "Component Architecture",
        "REST API Integration",
      ],
    },
    {
      title: "Data & Visualization",
      skills: ["Chart.js", "Data Tables", "Financial Visualizations"],
    },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className={styles.skillItem}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
