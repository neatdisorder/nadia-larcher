import styles from "@/components/Blocks/Hero/Hero.module.scss";

export default function Hero({ content }) {
  return (
    <div className={styles.heroContainer}>
      {content.field_image_carousel.map((image, index) => {
        return (
          <img
            key={index}
            className={styles.heroImage}
            src={`https://nadialarcher.com/${image}`}
          />
        );
      })}
    </div>
  );
}
