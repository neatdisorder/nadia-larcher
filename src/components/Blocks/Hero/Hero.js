"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/components/Blocks/Hero/Hero.module.scss";

export default function Hero({ content }) {
  const settings = {
    infinite: true,
    autoplay: true,
    fade: true,
    arrows: false,
    speed: 750,
    adaptiveHeight: false,
    pauseonHover: false,
  };

  return (
    <Slider {...settings} className={styles.heroContainer}>
      {content.field_image_carousel.map((image, index) => {
        return (
          <img
            key={index}
            className={styles.heroImage}
            src={`https://nadialarcher.com/${image}`}
          />
        );
      })}
    </Slider>
  );
}
