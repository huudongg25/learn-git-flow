import Banner from "@/components/banners/banner";
import Footer from "@/components/footer/footer";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar/sidebar";

const Home = () => {
  return (
    <main>
      <Header />
      <h1>This is Home</h1>
      <Sidebar />
      <Banner />
      <Footer />
    </main>
  );
};
export default Home;
