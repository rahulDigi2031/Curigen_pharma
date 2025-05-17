// import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import Homepage from "./home";
import GlobalPresence from "./globalPresence";
import Gallery from "./gallery";
import ProductsList from "./products";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Homepage />
      {/* <GlobalPresence/> */}
      {/* <Gallery/> */}
      {/* <ProductsList/> */}
    </>
  );
}
