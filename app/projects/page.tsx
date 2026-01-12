"use client"
import { useState } from "react";
import styles from "./Projects.module.css";   
import { Button, Modal } from "antd";

interface Project {
  image: string;
  projectName: string;
  titleIcon: string;
  desc: string;
}
const projects: Project[] = [
  {
    projectName: "MERN E-Commerce",
    image: "/images/mern-ecommerce.png",
    titleIcon: "/images/title_icon.svg",
    desc: "",
  },
  {
    projectName: "Personal Finance App",
    image: "/images/personal-finance-app.png",
    titleIcon: "/images/title_icon.svg",
    desc: "Fullstack financial application, built with Next.js and PostgreSQL, for managing transactions, budgets, pots, and recurring bills, while also providing user authentication and an at-a-glance data overview on the dashboard.",
  },
  {
    projectName: "Invoice App",
    image: "/images/Invoice-app.png",
    titleIcon: "/images/title_icon.svg",
    desc: "",
  },
   {
    projectName: "Audiophile App",
    image: "/images/audiophile.png",
    titleIcon: "https://chicodes-audiophile.netlify.app/",
    desc: "",
  },
   {
    projectName: "Designo App",
    image: "/images/Designo.png",
    titleIcon: "https://designo-project-chicodes.netlify.app/",
    desc: "",
  },
   {
    projectName: "Invoice App",
    image: "/images/Invoice-app.png",
    titleIcon: "/images/title_icon.svg",
    desc: "",
  }
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.card}
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              <div className={styles.overlay}></div>
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
              {/* {isModalOpen && (
                <Modal
                  closable={false}
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
               
                  <img
                    src={project.image}
                    className={styles.modal_img}
                    alt="project image"
                  />
                 
                </Modal>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
// https://mern-ecommerce-chicodes.netlify.app/
