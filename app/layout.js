"use client";
import { Header } from "@/components/Header";
// import "./globals.css";
import "./main.css";
// import favicon from "./favicon.ico";
// import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { DataContext } from "@/components/DataContext";
import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "WebStudio",
//   description: "This site created by Next js",
// };

export default function RootLayout({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const modalIsOpen = (data) => {
    setModalOpen(data);
  };
  const mobileIsOpen = (data) => {
    setMobileOpen(data);
  };

  return (
    <html lang="en">
      <body className="">
        <DataContext.Provider
          value={{
            modalOpen,
            mobileOpen,
            modalIsOpen,
            mobileIsOpen,
          }}
        >
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </DataContext.Provider>
      </body>
    </html>
  );
}
