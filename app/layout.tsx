import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/Navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AniStore",
  description: "An ecommerce store using nextjs 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
