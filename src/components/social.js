import styles from "src/styles/social.module.css";
import Image from "next/legacy/image";
import twitter from "images/twitter_icon.png";
import facebook from "images/facebook_icon.png";
import instargam from "images/instagram_icon.png";
import youtube from "images/youtube_icon.png";

export default function Social() {
  return (
    <ul className={styles.list}>
      <li>
        <a href="https://twitter.com">
          <Image src={twitter} alt="" width="40em" height="40em" />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/yoko.horie.12">
          <Image src={facebook} alt="" width="40em" height="40em" />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/kids_artcolor/">
          <Image src={instargam} alt="" width="40em" height="40em" />
          <span className="sr-only">Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/kids_artcolor/">
          <Image src={youtube} alt="" width="40em" height="40em" />
          <span className="sr-only">Youtube</span>
        </a>
      </li>
    </ul>
  );
}
