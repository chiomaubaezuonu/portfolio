"use client";
import styles from "./Header.module.css";
import Button from "../button/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathName = usePathname();
  return (
    <div>
      <header className={styles.header}>
        <img src="/images/my-logo.svg" className={styles.logo} alt="logo" />
        
        <div className={styles.navList}>
          <Link
            href="/"
            className={
              pathName === "/" ? styles.activeLink : styles.inactiveLink
            }
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              pathName === "/about" ? styles.inactiveLink : styles.inactiveLink
            }
          >
            About
          </Link>
          <Link
            href="/projects"
            className={
              pathName === "/projects"
                ? styles.inactiveLink
                : styles.inactiveLink
            }
          >
            Projects
          </Link>
          {/* <Link href="/test" className={({ isActive }) => isActive ? styles.inactiveLink : styles.inactiveLink}>test</Link> */}
        </div>

        <div className={styles.headerSocials}>
          <img className={styles.linkedin} src="/images/linkedin.svg" alt="" />
          <Button type="primary_btn" text="Get in touch" />
        </div>
      </header>
    </div>
  );
};

export default Header;
