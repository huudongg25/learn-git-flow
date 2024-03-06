import { FaFacebook } from "react-icons/fa";
import { FaHandPointer } from "react-icons/fa";
import { FaIntercom } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io5";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img
          src="https://template82525.motopreview.com/mt-demo/82500/82525/mt-content/uploads/2019/06/mt-1836-home-logo.png"
          alt=""
        />
        <p className={styles.contentRightHeader}>
          <strong>T - Booking</strong>
          <span>Electronic Book</span>
        </p>
      </div>
      <div className={styles.headerList}>
        <strong>BENEFITS</strong>
        <strong>PRICING</strong>
        <strong>CONTACTS</strong>
        <strong>ALL BLOCKS</strong>
        <strong className={styles.headerIcon}>
          <FaIntercom />
          <FaInternetExplorer />
          <FaFacebook />
          <IoLogoPinterest />
          <FaHandPointer />
        </strong>
      </div>
    </header>
  );
};
export default Header;
