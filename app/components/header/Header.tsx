"use client";
import styles from "./Header.module.css";
import Button from "../button/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const pathName = usePathname();
  const [isNavListOpen, setIsNavListOpen] = useState(false);

  // const headerBgColor = {
  //   backgroundColor: "bg-[#7d7d7d]",
  // };

  return (
    <div style={{ position: "relative" }}>
      <header
        className={
          pathName !== "/projects" ? styles.header : styles.headerProjects
        }
      >
        <Image
          width={120}
          height={120}
          src="/images/logo3.png"
          className={styles.logo}
          alt="logo"
        />

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
              pathName === "/projects" ? styles.activeLink : styles.inactiveLink
            }
          >
            Projects
          </Link>
          {/* <Link href="/test" className={({ isActive }) => isActive ? styles.inactiveLink : styles.inactiveLink}>test</Link> */}
        </div>

        <div className={styles.headerSocials}>
          <img className={styles.linkedin} src="/images/linkedin.svg" alt="" />
          <Link href="mailto:chiomaubaezuonu102@gmail.com">
            <Button
              type="primary_btn"
              text="Get in touch"
              className={styles.primary_btn}
            />
          </Link>
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
                      pathName === "/about"
                        ? styles.activeLink
                        : styles.inactiveLink
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
