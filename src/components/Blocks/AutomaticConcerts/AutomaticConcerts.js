import styles from "./AutomaticConcerts.module.scss";

export default function AutomaticConcerts({ content }) {
  return (
    <div
      className={`block-outer-container ${styles.concertsOuterContainer}`}
      style={{
        backgroundImage: `url(https://www.nadialarcher.com/${content.field_image})`,
      }}
    >
      <div className={styles.concertsContainerOverlay}></div>
      <div className={`block-inner-container ${styles.concertsContainer}`}>
        {content.field_title && <h2>{content.field_title}</h2>}
        {content.field_content &&
          content.field_content.map((concert, index) => {
            return (
              <div key={index} className={styles.concertContainer}>
                <p>
                  {`${concert.field_date} • ${concert.field_city}, ${concert.field_country}`}
                </p>
                <p>{`${concert.field_artist} / ${concert.field_venue}`}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
