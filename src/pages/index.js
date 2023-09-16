import Link from "next/link";
import Slider from "@/components/slider";
import Image from "next/legacy/image";
import home from "../styles/home.module.css";
import ColorIcon from "images/ColorIcon.jpg";
import Container from "@/components/container";
import Meta from "@/components/meta";
import currentClass from "images/currentClass.jpg";
export default function Home() {
  return (
    <>
      <Container>
        <Meta pageTitle="ゆったりランド" />
        <h1 className={home.maintitle}>
          色彩知育教室
          <br />
          高槻カレントクラス
        </h1>
        <br />

        <Slider />

        <div className={home.ttl_center}>
          <div className={home.areaCurrent}>
            <figure className={home.image}>
              <Image src={currentClass} alt="" />
            </figure>
            <br />
            <div>
              <p>
                ”色彩知育 カレントクラス”では、最新の脳科学をベースにした
                <br />
                日本こども色彩協会オリジナルメソッドである新しい教育『色彩知育法』を取り入れ、
                <br />
                こどもが自分で答えを出し、自らの人生をつくっていけるような環境を提供します。
                <br />
                また、親が”日常で出来ること”を学べる機会を作り、親も子も共に学べる環境づくりを目指しています。
                <br />
              </p>
              <Link href="https://kodomo-shikisai.com/" className={home.button}>
                日本こども色彩協会とは
              </Link>
            </div>
          </div>
        </div>

        <hr />

        <div className={home.areaMethod}>
          <div className={home.ttl_center}>
            <h2>ゆったりランドってなあに？</h2>
          </div>
          <div className={home.whattodo}>
            <figure>
              <Image src={ColorIcon} alt="" layout="responsive" />
            </figure>
            <div className={home.areaFeature}>
              <br />
              <h2>色彩教室</h2>
              <br />
              <p> 赤ちゃんから高齢者まで</p>
              <p>すべての人の知性と創造性を育み、</p>
              <p>自分らしく生きられる力</p>
              <p>[感情・視覚・行動]</p>
              <br />
            </div>
          </div>
        </div>

        <hr />

        <div className={home.floor}>
          <div>
            <h2>フロアマップ</h2>
            <br />
            <small>floor map</small>
          </div>

          <hr />
        </div>
      </Container>
    </>
  );
}
