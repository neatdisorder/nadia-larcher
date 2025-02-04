"use client";
import styles from "@/components/Menu/Menu.module.scss";
import { useState } from "react";

export default function Menu({ content }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`${styles.menuContainer} ${!isMenuOpen ? styles.closed : ""}`}
    >
      <nav>
        <div
          className={styles.iconContainer}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src={
              isMenuOpen
                ? "/assets/icons/mobile-menu-close-icon.svg"
                : "/assets/icons/mobile-menu-icon.svg"
            }
          />
        </div>
        <div className={styles.internalLinks}>
          <a className={styles.titleLink} href="/">
            NADIA LARCHER
          </a>
          <p className={styles.menuSeparator}>•</p>
          <a className={styles.menuLink} href="/">
            MÚSICA
          </a>
          <p className={styles.menuSeparator}>•</p>
          <a className={styles.menuLink} href="/">
            INVESTIGACIÓN
          </a>
          <p className={styles.menuSeparator}>•</p>
          <a className={styles.menuLink} href="/">
            TALLERES
          </a>
          <p className={styles.menuSeparator}>•</p>
          <a className={styles.menuLink} href="/">
            CONTACTO
          </a>
          <p className={styles.menuSeparator}>•</p>
          <a className={styles.menuLink} href="/">
            ENGLISH
          </a>
        </div>
        <div className={styles.socialMediaContainer}>
          <a href="/">
            <img src="/assets/icons/youtube-icon.svg" alt="Youtube Icon" />
          </a>
          <a href="/">
            <img src="/assets/icons/instagram-icon.svg" alt="Instagram Icon" />
          </a>
          <a href="/">
            <img src="/assets/icons/spotify-icon.svg" alt="Spotify Icon" />
          </a>
        </div>
      </nav>
    </div>
  );
}
