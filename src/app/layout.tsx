import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import {  Poppins } from 'next/font/google'
import "./globals.css";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";

// const inter = Inter({ subsets: ["latin"] });
const poppins =  Poppins({weight:'400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "London Construction",
  description: "Generated by create Ali Abas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
