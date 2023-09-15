import styles from "src/styles/container.module.css";

export default function Container({ children, large = false }) {
  return <div className={styles.default}>{children}</div>;
}
