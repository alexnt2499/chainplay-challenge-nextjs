import React from "react";
import NavBar from "./navbar";
import { Poppins } from "@next/font/google";
import Footer from "./footer";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={poppins.className + " flex flex-col min-h-screen"}>
      <Head>
        <title>Chainplay challenge NextJS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
