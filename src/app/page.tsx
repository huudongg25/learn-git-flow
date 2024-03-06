import Banner from "@/components/banners/banner";
import styles from "./page.module.css";
<<<<<<< Updated upstream
import About from "./about/page";

export default function Index() {
  return <main className={styles.main}>
    <Banner/>
    <About/>
  </main>;
=======
import Profile from "./profile/page";

export default function Index() {
  return (
    <main className={styles.main}>
      <Profile></Profile>
    </main>
  );
>>>>>>> Stashed changes
}
