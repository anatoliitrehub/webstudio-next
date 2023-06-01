import { Header } from "@/components/Header";
// import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebStudio",
  description: "This site created by Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
