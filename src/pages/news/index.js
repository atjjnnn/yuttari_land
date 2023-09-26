import Meta from "src/components/meta";
import Container from "src/components/container";
import Hero from "src/components/hero";

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesk="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  );
}
