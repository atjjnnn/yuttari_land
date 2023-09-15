import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）

import Image from "next/legacy/image";
import childclass from "images/childclass2.jpg";
import color from "images/color.jpg";
import child from "images/childclass.jpg";
import style from "src/styles/slider.module.css";

export default function Slider() {
  return (
    <div className={style.slider}>
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 4000, // 自動再生の間隔を3秒に設定
          arrows: false, // 左右の矢印ボタンを非表示にする
          type: "loop", // ループする
          rewind: true, // 最後のスライドに到達したら最初のスライドに戻る
        }}
      >
        <SplideSlide>
          <Image
            src={color}
            alt=""
            width="1200"
            height="600"
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src={child}
            alt=""
            width="1200"
            height="600"
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src={childclass}
            alt=""
            width="1200"
            height="600"
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}
