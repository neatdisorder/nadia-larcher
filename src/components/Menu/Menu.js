"use client";
import styles from "@/components/Menu/Menu.module.scss";
import { useState } from "react";
import Link from "next/link";

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
          <Link className={styles.titleLink} href="/">
            NADIA LARCHER
          </Link>
          <p className={styles.menuSeparator}>•</p>
          <Link className={styles.menuLink} href="/es/musica">
            MÚSICA
          </Link>
          <p className={styles.menuSeparator}>•</p>
          <Link className={styles.menuLink} href="/es/videos">
            VIDEOS
          </Link>
          <p className={styles.menuSeparator}>•</p>
          <Link className={styles.menuLink} href="/">
            TALLERES
          </Link>
          <p className={styles.menuSeparator}>•</p>
          <Link className={styles.menuLink} href="/">
            CONTACTO
          </Link>
          <p className={styles.menuSeparator}>•</p>
          <Link className={styles.menuLink} href="/">
            ENGLISH
          </Link>
        </div>
        <div className={styles.socialMediaContainer}>
          <Link href="https://www.youtube.com/@nadia.larcher">
            <img src="/assets/icons/youtube-icon.svg" alt="Youtube Icon" />
          </Link>
          <Link href="https://www.instagram.com/nadia_larcher/">
            <img src="/assets/icons/instagram-icon.svg" alt="Instagram Icon" />
          </Link>
          <Link href="https://open.spotify.com/artist/7qCEjoCmUjJ0F8ACB0WUX5?si=C0xiV61TSemzzp6crbM8Bw">
            <img src="/assets/icons/spotify-icon.svg" alt="Spotify Icon" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
