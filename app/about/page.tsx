import Link from "next/link";
import Button from "../components/button/Button";
import styles from "./About.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.bio}>
        <h1 className={styles.title}>
          Chioma Ubaezuonu, a Fullstack Engineer{" "}
          <span style={{ opacity: "0.7" }}> based in Uyo, Nigeria.</span>
        </h1>
        <p>
          I&apos;m a software engineer who enjoys building thoughtful, scalable
          web applications. I care about clean structure, performance, and
          writing code that is easy to understand and maintain. I learn by
          building, breaking things and refining my approach, and this portfolio
          is a reflection of that journey.
        </p>

        <Link href="/" className={styles.button_link}>
          <Button
            className={styles.about_btn}
            text="Get in touch"
            type="about_btn"
            image="/images/arrow-right-white.svg"
          />
        </Link>
      </div>

      <Image
        width={80}
        height={80}
        src="/images/portrait1.jpeg"
        className={styles.potrait}
        alt="joshua"
      />
    </div>
  );
};

export default About;
