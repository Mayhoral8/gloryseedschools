import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Modal from "../components/modal";
import { ContextComp } from "./context/context";
import Footer from "./footer";
import "./globals.css";
import Navbar from "./navbar";
import ReactQueryProvider from "./reactqueryProvider";

import { raleway } from "./ui/fonts";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gloryseed schools",
  description: "A Learning Citadel Where Every Learner is important and thrives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className}`}
      >
        <ReactQueryProvider >
        <ReactQueryDevtools initialIsOpen={false}/>
        <ContextComp>
          <section>
            <Modal/>
            <Navbar />
            {children}
            <Footer />
          </section>
        </ContextComp>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
