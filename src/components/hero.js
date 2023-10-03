import styles from "src/styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.title}>
        <h1>ゆったりランド</h1>
        <p>ゆったりできる場所</p>
      </div>
    </section>
  );
}
