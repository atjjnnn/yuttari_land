import { useState } from "react";
import Link from "next/link";
import styles from "src/styles/nav.module.scss";
import AccordionExam from "@/components/accordion-menu";
import Image from "next/legacy/image";
import kaiju from "images/kaiju.svg";
import kirin from "images/kirin.svg";
import kuma from "images/kuma.svg";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      <div>
        <button className={styles.btn} onClick={toggleNav}>
          <span className={styles.bar}></span>
          <span className="sr-only">MENU</span>
        </button>
      </div>

      <ul className={styles.list}>
        <li>
          <Image src={kaiju} alt="" width="50em" height="30em" />
          <AccordionExam title="施設のご紹介">
            <Link href="/">
              <p onClick={closeNav}>ゆったりランドって</p>
            </Link>
            <Link href="/news">
              <p onClick={closeNav}>ニュース</p>
            </Link>
          </AccordionExam>
        </li>
        <li>
          <Image src={kirin} alt="" width="50em" height="30em" />
          <AccordionExam title="色彩知育教室">
            <Link href="/children/child">
              <p onClick={closeNav}>こども色彩知育</p>
            </Link>
            <Link href="/children/baby">
              <p onClick={closeNav}>ベビー色彩知育</p>
            </Link>
            <Link href="/children/teacher">
              <p onClick={closeNav}>講師紹介</p>
            </Link>
            <Link href="/children/fee">
              <p onClick={closeNav}>料金案内</p>
            </Link>
          </AccordionExam>
        </li>
        <li>
          <Image src={kuma} alt="" width="50em" height="30em" />
          <AccordionExam title="資格を取りたい方">
            <Link href="/adults/facilitator">
              <p onClick={closeNav}>ファシリテーター養成講座</p>
            </Link>
            <Link href="/adults/fee">
              <p onClick={closeNav}>料金案内</p>
            </Link>
          </AccordionExam>
        </li>
        <li>
          <Image src={kuma} alt="" width="50em" height="30em" />
          <AccordionExam title="レンタルスペース">
            <Link href="/adults/rental/rental_for_classes">
              <p onClick={closeNav}>講座・教室を開きたい方</p>
            </Link>
            <Link href="/adults/rental/rental_space">
              <p onClick={closeNav}>レンタルスペースを探している方</p>
            </Link>
            <Link href="/adults/rental/rental_fee">
              <p onClick={closeNav}>料金案内</p>
            </Link>
            <Link href="/adults/rental/terms">
              <p onClick={closeNav}>利用規約</p>
            </Link>
          </AccordionExam>
        </li>
        <li>
          <Link
            href="https://tayori.com/form/bcf32d9cb0dc751781fc83b469ddc59208a92546/"
            className={styles.inquiry}
          >
            お問い合わせ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
