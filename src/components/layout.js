import Header from "@/components/header";
import Footer from "@/components/footer";
import style from "src/styles/main.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={style.area}>{children}</main>
      <Footer />
    </>
  );
}
