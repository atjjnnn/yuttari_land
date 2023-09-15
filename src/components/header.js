import Logo from "@/components/logo";
import Nav from "@/components/nav";
import styles from "src/styles/header.module.css";
import Container from "./container";

export default function Header() {
  return (
    <header className={styles.fixedHeader}>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  );
}
