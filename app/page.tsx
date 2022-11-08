"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
  // return (
  //   <div
  //     className="container"
  //     style={{
  //       padding: "50px 0 100px 0",
  //       display: "flex",
  //       flexDirection: "column",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <h1>Welcome to Foodie </h1>
  //     <Link
  //       href={`/restaurants`}
  //       style={{
  //         fontSize: "22px",
  //         paddingTop: "20px",
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <button
  //         style={{
  //           background: "#d6ccc2",
  //           borderRadius: "999px",
  //           boxShadow: "#403D39 0 10px 20px -10px",
  //           boxSizing: "border-box",
  //           color: "black",
  //           cursor: "pointer",
  //           fontSize: "16px",
  //           outline: "none",
  //           border: "none",
  //           padding: "8px 18px",
  //         }}
  //       >
  //         Restaurants
  //       </button>
  //     </Link>
  //   </div>
  // );
}
