import Link from "next/link";
import Button from "../components/button/Button";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.bio}>
        <h1 className={styles.title}>
          Chioma Ubaezuonu, a Fullstack Engineer{" "}
          <span style={{ opacity: "0.7" }}> based in Uyo, Nigeria.</span>
        </h1>
        <p>
          Welcome to my cybersecurity blog! I'm Joshua Amali, and in this blog
          we will be diving into the intriguing intersection of blockchain
          technology and cybersecurity vulnerabilities. While blockchain is
          often hailed for its robust security features and potential to
          revolutionize various industries, it's crucial to recognize that it's
          not impervious to threats. My motivation behind creating this blog is
          because I personally have been a victim of cybercrime where a bad
          actor has stolen various amounts of money from my 'secure' wallets. We
          will explore the various vulnerabilities that can compromise
          blockchain systems and discuss strategies to safeguard against them.
          Join me as we uncover the complexities of this rapidly evolving
          landscape and arm ourselves with the knowledge to navigate it safely.
        </p>
        <Link href="/" className={styles.button_link}>
          <Button
            text="Get in touch"
            type="about_btn"
            image="/images/arrow-right-white.svg"
          />
        </Link>
      </div>
     
        <img src="/images/about-potrait.png" className={styles.potrait} alt="joshua" />
      
    </div>
  );
};

export default About;
