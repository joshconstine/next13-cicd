import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "@next/font/google";
import AuthContext from "./AuthContext";
const inter = Inter();
export default function RootLayout({ children, ...props }: any) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </head>
      <body>
        <AuthContext session={props.session}>
          <header>
            <Navbar />
          </header>
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
