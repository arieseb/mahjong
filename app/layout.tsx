import Navbar from "@/app/ui/Navbar";
import Footer from "./ui/Footer";
import FallingTile from "./ui/FallingTile";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Riichi Mahjong",
  description: 
    "Explication simple et concise des règles du mahjong japonais ou riichi mahjong en français",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={
        `${inter.className} antialiased min-h-screen min-w-screen font-light print:bg-white`
      }>
        <div className="hidden lg:block">
          <FallingTile position="left"/>
          <FallingTile position="left"/>
          <FallingTile position="left"/>
          <FallingTile position="left"/>
          <FallingTile position="left"/>
        </div>
        <div className="flex flex-col items-center justify-between min-h-screen z-[100] relative">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </div>
        <div className="hidden lg:block">
          <FallingTile position="right"/>
          <FallingTile position="right"/>
          <FallingTile position="right"/>
          <FallingTile position="right"/>
          <FallingTile position="right"/>
        </div>
      </body>
    </html>
  );
}
