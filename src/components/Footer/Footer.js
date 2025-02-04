import styles from "@/components/Footer/Footer.module.scss";

export default function Footer({ content }) {
  return (
    <footer className={styles.footerContainer}>
      <p>{content}</p>
    </footer>
  );
}
