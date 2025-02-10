import styles from "./Contact.module.scss";
import Link from "next/link";

export default function Contact({ content }) {
  return (
    <div className={"block-outer-container"}>
      <div className={`block-inner-container ${styles.contactContainer}`}>
        {content.field_image && (
          <div className={styles.imageContainer}>
            <img src={`https://nadialarcher.com/${content.field_image}`} />
          </div>
        )}
        <div className={styles.textContainer}>
          {content.field_title && <h2>{content.field_title}</h2>}
          {content.field_content && (
            <div className={styles.linksContainer}>
              {content.field_content.map((link, index) => {
                switch (link.field_icon) {
                  case "mail":
                    return (
                      <Link
                        key={index}
                        href={link.field_link.uri}
                        className={styles.linkContainer}
                      >
                        <div className={styles.iconContainer}>
                          <img
                            src="/assets/icons/mail-icon.svg"
                            alt="Mail Icon"
                          />
                        </div>
                        Mail
                      </Link>
                    );
                  case "instagram":
                    return (
                      <Link
                        key={index}
                        href={link.field_link.uri}
                        className={styles.linkContainer}
                      >
                        <div className={styles.iconContainer}>
                          <img
                            src="/assets/icons/instagram-icon.svg"
                            alt="Instagram Icon"
                          />
                        </div>
                        Instagram
                      </Link>
                    );
                  case "youtube":
                    return (
                      <Link
                        key={index}
                        href={link.field_link.uri}
                        className={styles.linkContainer}
                      >
                        <div className={styles.iconContainer}>
                          <img
                            src="/assets/icons/youtube-icon.svg"
                            alt="Youtube Icon"
                          />
                        </div>
                        Youtube
                      </Link>
                    );
                  case "spotify":
                    return (
                      <Link
                        key={index}
                        href={link.field_link.uri}
                        className={styles.linkContainer}
                      >
                        {" "}
                        <div className={styles.iconContainer}>
                          <img
                            src="/assets/icons/spotify-icon.svg"
                            alt="Spotify Icon"
                          />
                        </div>
                        Spotify
                      </Link>
                    );
                }
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
