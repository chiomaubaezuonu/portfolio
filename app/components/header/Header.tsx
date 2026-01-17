"use client";
import styles from "./Header.module.css";
import Button from "../button/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const pathName = usePathname();
  const [isNavListOpen, setIsNavListOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
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
              pathName === "/about" ? styles.activeLink : styles.inactiveLink
            }
          >
            About
          </Link>
          <Link
            href="/projects"
            className={
              pathName === "/projects"
                ? styles.activeLink
                : styles.inactiveLink
            }
          >
            Projects
          </Link>
          {/* <Link href="/test" className={({ isActive }) => isActive ? styles.inactiveLink : styles.inactiveLink}>test</Link> */}
        </div>

        <div className={styles.headerSocials}>
          <img className={styles.linkedin} src="/images/linkedin.svg" alt="" />
          <Button
            type="primary_btn"
            text="Get in touch"
            className={styles.primary_btn}
          />
        </div>
        <div className={styles.mobile}>
          {!isNavListOpen && (
            <img
              src="/images/menu.svg"
              alt="menu icon"
              onClick={() => setIsNavListOpen(true)}
              className={styles.menu}
            />
          )}

          {isNavListOpen && (
            <div>
              <div className={styles.menu_overlay}>
                <img
                  onClick={() => setIsNavListOpen(false)}
                  className={styles.close_icon}
                  src="/images/close.svg"
                  alt="close icon"
                />
                <div className={styles.menu_dropdown}>
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
                      pathName === "/about" ? styles.activeLink : styles.inactiveLink
                    }
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className={
                      pathName === "/projects"
                        ? styles.activeLink
                        : styles.inactiveLink
                    }
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
