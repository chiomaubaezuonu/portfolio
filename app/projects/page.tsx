"use client";
import styles from "./Projects.module.css";
import { Button, Modal } from "antd";
import Link from "next/link";

interface Project {
  image: string;
  projectName: string;
  projectLink: string;
  desc: string;
}
const projects: Project[] = [
  {
    projectName: "MERN E-Commerce",
    image: "/images/mern-ecommerce.png",
    projectLink: "https://mern-ecommerce-chicodes.netlify.app/",
    desc: "",
  },
  {
    projectName: "Kwaba App",
    image: "/images/kwaba.png",
    projectLink: "https://kwaba-chicodes.netlify.app/",
    desc: "",
  },
  {
    projectName: "Personal Finance App",
    image: "/images/personal-finance-app.png",
    projectLink: "https://mern-ecommerce-chicodes.netlify.app/",
    desc: "Fullstack financial application, built with Next.js and PostgreSQL, for managing transactions, budgets, pots, and recurring bills, while also providing user authentication and an at-a-glance data overview on the dashboard.",
  },
  {
    projectName: "Invoice App",
    image: "/images/Invoice-app.png",
    projectLink: "/images/title_icon.svg",
    desc: "",
  },
  {
    projectName: "Audiophile App",
    image: "/images/audiophile.png",
    projectLink: "https://chicodes-audiophile.netlify.app/",
    desc: "",
  },
  {
    projectName: "Designo App",
    image: "/images/Designo.png",
    projectLink: "https://designo-project-chicodes.netlify.app/",
    desc: "",
  },
];

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        {projects.map((project, index) => {
          return (
            <div key={index} className={styles.card}>
              <Link href={project.projectLink} target="_blank">
                <img src={project.image} alt="" className={styles.card_img} />
                <div className={styles.caption}>
                  {" "}
                  <p>{project.projectName}</p>
                  <img
                    src="/images/project-arrow.png"
                    className={styles.project_arrow}
                    alt="project-arrow"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
