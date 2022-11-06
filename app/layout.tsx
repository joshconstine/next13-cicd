"use client";
import Navbar from "../components/Navbar";
import "./globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

export default function RootLayout({ children, pageProps }: any) {
  // const [session, setSession] = useState<AuthSession | null>(null);
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps?.initialSession}
    >
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
        </head>
        {false ? (
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
    </SessionContextProvider>
  );
}
