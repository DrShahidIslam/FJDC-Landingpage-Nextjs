import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI in Healthcare",
  description:
    "Fatima Jinnah dental College artificial intelligence in healthcare course",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/ideogram.jpeg" />
      </Head>
      <body className={inter.className}>{children}  <Analytics /></body>
    </html>
  );
}
