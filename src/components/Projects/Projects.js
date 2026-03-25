"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Projects.module.css";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const projects = [
    {
      title: "Trade Brains Portal",
      description:
        "Led the rebuild of Trade Brains Portal using Next.js, Redux, and Ant Design. Created scalable UI architecture with complex financial data tables and interactive visualizations.",
      tech: ["Next.js", "Redux", "Ant Design", "Chart.js", "SSR"],
      features: [
        "Server-Side Rendering (SSR) for improved SEO",
        "Schema.org structured data implementation",
        "Dynamic financial data visualizations with Chart.js",
        "Reusable component libraries",
        "Export to Excel functionality",
        "OTP login and Google One Tap authentication",
      ],
      impact: "45K+ monthly users",
      url: "https://portal.tradebrains.in",
      period: "Jul 2023 - Present",
    },
    {
      title: "Research Report Admin Panel",
      description:
        "Architected and developed an internal research publishing platform using Next.js and CKEditor for analysts to create rich-text reports with media uploads, tables, and draft management.",
      tech: ["Next.js", "CKEditor", "RBAC", "Workflow Management"],
      features: [
        "Rich-text editor with media upload support",
        "Role-Based Access Control (RBAC)",
        "Multi-stage review and approval workflow",
        "Customized dashboards for different roles",
        "Draft management system",
        "Direct publishing to live portal",
      ],
      impact: "40% reduction in manual operations",
      //   url: "https://admin.tradebrains.in",
      period: "Jul 2024 - Present",
    },
    {
      title: "Human Resource Management System (HRMS)",
      description:
        "Designed and developed a comprehensive HR management system to streamline employee lifecycle operations, automate workflows, and centralize organizational data.",
      tech: ["Next.js", "RBAC", "Workflow Management", "ANTD"],
      features: [
        "Role-Based Access Control (Admin, Managers, HRs, Employees)",
        "Employee document management system (upload, access, verification)",
        "Leave management system with apply, approve, and reject workflows",
        "Integrated calendar for attendance, holidays, and events tracking",
        "Daily login/logout tracking with detailed time logs",
        "Reimbursement management for employees and admin approvals",
        "Leave encashment handling and processing",
        "Customized dashboards based on user roles",
        "Centralized employee data and lifecycle management",
      ],
      impact:
        "Significantly improved HR efficiency by automating manual processes and reducing administrative overhead",
      period: "Mar 2025 - Present",
    },
  ];

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionSubtitle}>
          Building scalable solutions for high-traffic platforms
        </p>

        <div className={styles.carouselContainer}>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {projects.map((project, idx) => (
                <div key={idx} className={styles.emblaSlide}>
                  <div className={styles.projectCard}>
                    <div className={styles.projectHeader}>
                      <div>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectPeriod}>{project.period}</p>
                      </div>
                      {project?.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          <span className={styles.linkText}>View Live</span>
                          <span className={styles.linkIcon}>→</span>
                        </a>
                      )}
                    </div>

                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>

                    <div className={styles.techStack}>
                      {project.tech.map((tech, techIdx) => (
                        <span key={techIdx} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={styles.features}>
                      <h4 className={styles.featuresTitle}>Key Features:</h4>
                      <ul className={styles.featuresList}>
                        {project.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className={styles.featureItem}>
                            <span className={styles.featureIcon}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.impact}>
                      <span className={styles.impactLabel}>Impact:</span>
                      <span className={styles.impactValue}>
                        {project.impact}
                      </span>
                    </div>

                    {project.url && (
                      <div className={styles.projectUrl}>
                        <span className={styles.urlLabel}>🔗 Hosted at:</span>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.url}
                        >
                          {project.url}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.emblaButton} ${styles.emblaPrev}`}
            onClick={scrollPrev}
          >
            ‹
          </button>
          <button
            className={`${styles.emblaButton} ${styles.emblaNext}`}
            onClick={scrollNext}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
