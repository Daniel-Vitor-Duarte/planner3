"use client";
import Image from "next/image";
import FirstSection from "./component/FirstSection";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";
import GifSection from "./component/GifSection";
import FourthSection from "./component/FourthSection";
import FifthSection from "./component/FifthSection";
import Footer from "./component/footer";
import { Inter } from "next/font/google";
import DataLayer from "./DataLayer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden  font-Inter">
      <DataLayer
        type_page="venda"
        id_produto="2677893"
        operacao="ppt"
        type_content="longa"
        versao_pico="ppt"
      />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <GifSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </main>
  );
}
