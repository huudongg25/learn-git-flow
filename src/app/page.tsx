import Banner from "@/components/banners/banner";
import styles from "./page.module.css";
import About from "./about/page";

export default function Index() {
  return <main className={styles.main}>
    <Banner/>
    <About/>
  </main>;
}
