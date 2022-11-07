"use client";
import Navbar from "../components/Navbar";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, ...props }: any) {
  return (
    <SessionProvider session={props.session}>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
        </head>
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
