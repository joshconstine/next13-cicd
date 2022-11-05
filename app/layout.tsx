"use client";
import Navbar from "../components/Navbar";
import "./globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { AuthSession } from "@supabase/supabase-js";

export default function RootLayout({ children, pageProps }: any) {
  // const [session, setSession] = useState<AuthSession | null>(null);
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps?.initialSession}
    >
      <html lang="en">
        <head />
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
