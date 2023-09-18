import Link from "next/link";
import Slider from "@/components/slider";
import Image from "next/legacy/image";
import home from "../styles/Home.module.css";
import ColorIcon from "images/ColorIcon.jpg";
import Container from "@/components/container";
import Meta from "@/components/meta";
import currentClass from "images/currentClass.jpg";
import Accordion from "@/components/accordion";
import AccordionStyles from "../styles/accordion.module.css";
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
              <Image
                src={ColorIcon}
                alt=""
                layout="responsive"
                sizes="(min-width: 800px), 100vw"
                width={1200}
                height={800}
                placeholder="blur"
                style={{ transition: "1.5s" }}
              />
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

        <div className={AccordionStyles.accordion_area}>
          <div className={AccordionStyles.ttl_text}>よくあるご質問</div>
          <h2>QA</h2>
          <Accordion heading="色の知識がなくても大丈夫ですか？">
            <p>
              はい、色の知識がなくても大丈夫です。どの教室や講座でも色彩の知識が身に付く内容になっています。
            </p>
          </Accordion>
          <Accordion heading="まずは見学（体験）に行きたいのですが、どこで受けられますか？">
            <p>
              現在お住まいの近くの教室で、ご希望の場所に合う教室を ⇒
              「教室を探す」からご確認ください。
              曜日や時間帯を事前にチェック頂き、ご希望の教室へ直接お問い合わせ（申込み）ください。
            </p>
          </Accordion>
          <Accordion heading="こども色彩知育®︎教室では、どんなことをするのですか？">
            <p>
              こども色彩知育®︎教室では①呼吸法、②テーマの色分析、③制作、④発表が基本の流れです。
              毎回の色のテーマと材料は決まっていますが、見本はなく子供の自由な発想で制作します。発表では最初は恥ずかしくて発言できなくても徐々に人前に出ることに慣れていきます。楽しく遊びながら観察力・想像力・思いを伝える表現力・感じる力を育めるワークをご用意しています。毎回、お子様と作品の写真を撮り色彩理論シートに貼って記録していきます。
            </p>
          </Accordion>
          <br />
          <hr />
        </div>

        <div className={home.accessMap}>
          <Link href="https://www.google.com/maps?ll=34.839247,135.609817&z=15&t=m&hl=ja&gl=JP&mapclient=embed&cid=291306575015615215">
            ゆったりランドの場所はこちら
          </Link>

          <hr />
        </div>
      </Container>
    </>
  );
}
