import Link from "next/link";
import Header from "../components/header/Header";
import styles from "../hero/Hero.module.css";
import Blog from "../blogs/page";

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
            <p>
              While blockchain is often hailed for its robust security features
              and potential to revolutionize various industries, it's crucial to
              recognize that it's not impervious to threats.
            </p>
            <Link href="/about" style={{ textDecoration: "none" }}>
              {" "}
              <button className={styles.btn}>About me</button>
            </Link>
          </div>
          <div>
            <img
              src="/images/portraitMain.png"
              className={styles.oma}
              alt="Joshua"
            />
          </div>
        </div>
      </div>
      <div>
        <img
          src="/images/portraitMain.png"
          className={styles.omaMobile}
          alt="Joshua"
        />
      </div>
      <Blog />
    </div>
  );
};

export default Hero;
