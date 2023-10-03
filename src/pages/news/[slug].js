import { getPostBySlug } from "lib/api";
import Container from "@/components/container";
import PostHeader from "@/components/post-header";
import PostBody from "@/components/post-body";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-column";
import Image from "next/image";
import ConvertBody from "@/components/convert-body";
import PostCategories from "@/components/post-categories";
import { extranctText } from "lib/extract-text";
import Meta from "@/components/meta";

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants";

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  desctiption,
}) {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={desctiption}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle="お知らせ" publish={publish} />

        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            width="500"
            height="250"
            sizes="(min-width: 1349pxpx) 1152px, 100vw"
            priority
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: ["/news/schedule", "/news/music", "/news/micro"],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const post = await getPostBySlug(slug);
  const desctiption = extranctText(post.content);
  const eyecatch = post.eyecatch ?? eyecatchLocal;

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      desctiption: desctiption,
    },
  };
}
