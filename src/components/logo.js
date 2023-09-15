import Link from "next/link";
import styles from "src/styles/logo.module.css";
import Image from "next/legacy/image";
import icon from "images/kaiju.svg";

export default function Logo({ boxOn = false }) {
  return (
    <>
      <div className={styles.header}>
        <Image src={icon} alt="" width="50em" height="30em" />
        <Link href="/" className={boxOn ? styles.box : styles.basic}>
          ゆったりランド
        </Link>
      </div>
    </>
  );
}
