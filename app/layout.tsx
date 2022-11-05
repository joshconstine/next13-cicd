import Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {true ? (
        <body>
          <header>
            <Navbar session={false} />
          </header>
          {children}
        </body>
      ) : (
        <body>
          <header>
            <Navbar session={true} />
          </header>
          {children}
        </body>
      )}
    </html>
  );
}
