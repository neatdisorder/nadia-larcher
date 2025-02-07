"use client";

import styles from "./VerticalCard.module.scss";
import { useState } from "react";

export default function VerticalCard({ content }) {
  const [isEmbedOpen, setIsEmbedOpen] = useState(false);

  return (
    <>
      <div
        className={styles.verticalCardContainer}
        onClick={() => setIsEmbedOpen(true)}
      >
        {content.image && (
          <img src={`https://nadialarcher.com/${content.image}`} />
        )}
        {content.title && <p className={styles.cardTitle}>{content.title}</p>}
        {content.description && (
          <p>
            {content.subtitle && (
              <span className={styles.boldSubtitle}>{content.subtitle} · </span>
            )}
            {content.description}
          </p>
        )}
      </div>
      {content.embed && isEmbedOpen && (
        <div
          className={styles.embedContainer}
          onClick={() => setIsEmbedOpen(false)}
        >
          <div
            className={styles.videoEmbed}
            dangerouslySetInnerHTML={{ __html: content.embed }}
          />
        </div>
      )}
    </>
  );
}
