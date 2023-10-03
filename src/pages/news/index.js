import { getAllPosts } from "lib/api";
import Meta from "src/components/meta";
import Container from "src/components/container";
import Posts from "@/components/posts";
import Styles from "src/styles/posts.module.css";

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

  return {
    props: {
      posts: posts,
    },
  };
}
