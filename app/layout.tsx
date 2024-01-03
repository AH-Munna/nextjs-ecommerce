import NavInfo from "@/components/header/info";
import Navbar from "@/components/header/navbar";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alzaf Ecommerce",
  description: "we ship everything",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-secondary text-secondary-foreground`}
      >
        <NavInfo />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
