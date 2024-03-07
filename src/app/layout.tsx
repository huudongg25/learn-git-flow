import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< Updated upstream
import Header from "@/components/header";
import Sidebar from "@/components/sidebar/sidebar";
=======
>>>>>>> Stashed changes
import Profile from "./profile/page";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
<<<<<<< Updated upstream
      <Header/>
      <Sidebar/>
      {children}
      <Footer/>
=======
>>>>>>> Stashed changes
        <Profile></Profile>
        <Footer></Footer>
      </body>
    </html>
  );
}
