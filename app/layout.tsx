"use client";
import Navbar from "../components/Navbar";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Inter } from "@next/font/google";
const inter = Inter();
export default function RootLayout({ children, ...props }: any) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <SessionProvider session={props.session}>
          <header>
            <Navbar />
          </header>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
