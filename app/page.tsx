"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import WelcomeCard from "./components/WelcomeCard";
import classes from "./page.module.css";
export default function Home() {
  const { data: session } = useSession();

  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session?.user?.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // );
  return (
    <div className={classes.main}>
      <WelcomeCard />
    </div>
  );
}
