import { getAllPosts } from "lib/api";
import Meta from "src/components/meta";
import Container from "src/components/container";
import Posts from "@/components/posts";
import Styles from "src/styles/posts.module.css";

import { eyecatchLocal } from "lib/constants";

export default function Blog({ posts }) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesk="ブログの記事一覧" />

      <div className={Styles.title}>
        <h1>News</h1>
      </div>
      <Posts posts={posts} />
    </Container>
  );
}
export async function getStaticProps() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return {
    props: {
      posts: posts,
    },
  };
}
