import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "coderakhand",
  description: "Portfolio Website of coderakhand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-white`}
      >
        <div className="fixed z-0 w-full h-full bg-linear-to-br from-black/95 via-black/90 to-black/95"/>
        <div className="relative w-full max-w-[max(100vw, 300px)] flex justify-center">
          {children}
          {/* <NavBar /> */}
        </div>
      </body>
    </html>
  );
}
