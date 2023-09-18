import Container from "@/components/container";
import Logo from "@/components/logo";
import Social from "@/components/social";
import styles from "src/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.flexContainer}>
        <Logo />
        <Social />
      </div>
      <div className={styles.info}>
        <br />
        <p>
          〒569-0822 大阪府高槻市津之江町１丁目９−２７
          <br />
          TEL: 072-668-3939　
          <br />
        </p>
      </div>
    </footer>
  );
}
