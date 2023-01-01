"use client";
import Link from "next/link";
import classes from "./Navbar.module.css";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const handleLogoutClick = (e: MouseEventHandler<HTMLButtonElement>) => {
    signOut();
    router.push("/");
  };
  return (
    <nav className={classes.nav}>
      <div
        style={{
          position: "relative",
          display: "inline-block",
          width: "300px",
          height: "80px",
        }}
      >
        <Image src="/static/logo.png" alt="lgoo" width={200} height={70} />
      </div>
      <div>
        <Link href="/">
          <button
            style={{
              background: "#403D39",
              borderRadius: "999px",
              boxShadow: "#403D39 0 10px 20px -10px",
              boxSizing: "border-box",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
              outline: "none",
              border: "none",
              padding: "8px 18px",
            }}
          >
            Home
          </button>
        </Link>
        <Link href="/restaurants">
          {" "}
          <button
            style={{
              background: "#403D39",
              borderRadius: "999px",
              boxShadow: "#403D39 0 10px 20px -10px",
              boxSizing: "border-box",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
              outline: "none",
              border: "none",
              padding: "8px 18px",
            }}
          >
            Restaurants
          </button>
        </Link>
        {session ? (
          <>
            {" "}
            <button
              onClick={handleLogoutClick}
              style={{
                background: "#403D39",
                borderRadius: "999px",
                boxShadow: "#403D39 0 10px 20px -10px",
                boxSizing: "border-box",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
                outline: "none",
                border: "none",
                padding: "8px 18px",
              }}
            >
              Logout
            </button>
            <Link href="/profile">
              {" "}
              <button
                style={{
                  background: "#403D39",
                  borderRadius: "999px",
                  boxShadow: "#403D39 0 10px 20px -10px",
                  boxSizing: "border-box",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                  outline: "none",
                  border: "none",
                  padding: "8px 18px",
                }}
              >
                Profile
              </button>
            </Link>
          </>
        ) : (
          <Link href="/login">
            {" "}
            <button
              style={{
                background: "#403D39",
                borderRadius: "999px",
                boxShadow: "#403D39 0 10px 20px -10px",
                boxSizing: "border-box",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
                outline: "none",
                border: "none",
                padding: "8px 18px",
              }}
            >
              Log in
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
