"use client";

import styles from "./HorizontalCard.module.scss";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function HorizontalCard({ content }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.horizontalCardContainer}>
        {content.image && (
          <div className={styles.imageContainer}>
            <img src={`https://nadialarcher.com/${content.image}`} />
          </div>
        )}
        {content.embed && (
          <div dangerouslySetInnerHTML={{ __html: content.embed }} />
        )}
        <div className={styles.textContainer}>
          {content.title && <h2>{content.title}</h2>}
          {content.subtitle && (
            <p className={styles.subtitle}>{content.subtitle}</p>
          )}
          {content.description && <p>{content.description}</p>}
          {content.links && (
            <div className={styles.linksContainer}>
              {content.links.map((link, index) => {
                return (
                  <Fragment key={index}>
                    <Link href={link.uri} target="_blank">
                      {link.title}
                    </Link>
                    <p className={styles.linksSeparator}>•</p>
                  </Fragment>
                );
              })}
              {content.modal && (
                <>
                  <p className={styles.linksSeparator}>•</p>
                  <a onClick={() => setIsModalOpen(true)}>Créditos</a>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      {content.modal && isModalOpen && (
        <div
          className={styles.modalOuterContainer}
          onClick={() => setIsModalOpen(false)}
        >
          <div className={styles.modalInnerContainer}>
            <div
              className={styles.modalContent}
              dangerouslySetInnerHTML={{ __html: content.modal }}
            />
          </div>
        </div>
      )}
    </>
  );
}
