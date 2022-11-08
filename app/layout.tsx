"use client";
import Navbar from "../components/Navbar";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Inter } from "@next/font/google";
const inter = Inter();
export default function RootLayout({ children, ...props }: any) {
  return (
    <SessionProvider session={props.session}>
      <html lang="en" className={inter.className}>
        <body>
          <header>
            <Navbar />
          </header>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
