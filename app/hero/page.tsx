import Link from "next/link";
import Header from "../components/header/Header";
import styles from "../hero/Hero.module.css";
import Blog from "../blogs/page";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <Header />
        <div className={styles.overlay}>
          <div className={styles.bio}>
            <h1 className={styles.title}>
              Chioma Ubaezuonu, a Fullstack Engineer{" "}
              <span style={{ opacity: "0.7" }}> based in Uyo, Nigeria.</span>
            </h1>
            <span>
              I build thoughtful, scalable web applications with a strong focus
              on clean structure, performance, and maintainability.
            </span>
            <Link href="/about" style={{ textDecoration: "none" }}>
              {" "}
              <button className={styles.btn}>About me</button>
            </Link>
          </div>
          <div>
            <Image
              src="/images/portraitMain.png"
              className={styles.oma}
              alt="Oma"
              width={380}
              height={380}
            />
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/images/portraitMain.png"
          className={styles.omaMobile}
          alt="Joshua"
          width={36}
          height={36}
        />
      </div>
      <Blog />
    </div>
  );
};

export default Hero;
