"use client";
import styles from "@/components/Menu/Menu.module.scss";
import { useState, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu({ content }) {

  // Traemos el pathname de la URL

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`${styles.menuContainer} ${
          !isMenuOpen ? styles.closed : ""
        }`}
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
            <Link className={styles.titleLink + (pathname === '/es' ? styles.active : "")} href="/es">
              {content.title}
            </Link>
            {content.links.map((link, key) => {
              return (
                <Fragment key={key}>
                  <p className={styles.menuSeparator}>•</p>
                  <Link className={styles.menuLink + (pathname === link.url ? styles.active : "")} href={link.url}>
                    {link.title}
                  </Link>
                </Fragment>
              );
            })}
          </div>
          <div className={styles.socialMediaContainer}>
            <Link href="https://www.youtube.com/@nadia.larcher">
              <img src="/assets/icons/youtube-icon.svg" alt="Youtube Icon" />
            </Link>
            <Link href="https://www.instagram.com/nadia_larcher/">
              <img
                src="/assets/icons/instagram-icon.svg"
                alt="Instagram Icon"
              />
            </Link>
            <Link href="https://open.spotify.com/artist/7qCEjoCmUjJ0F8ACB0WUX5?si=C0xiV61TSemzzp6crbM8Bw">
              <img src="/assets/icons/spotify-icon.svg" alt="Spotify Icon" />
            </Link>
          </div>
        </nav>
      </div>
      {isMenuOpen && <div className={styles.menuOverlay}></div>}
    </>
  );
}
