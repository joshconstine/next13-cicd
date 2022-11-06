import Link from "next/link";
import classes from "./Navbar.module.css";
import Image from "next/image";

function Navbar({ session }: any) {
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
        {session ? (
          <>
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
          </>
        ) : (
          <ul>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/signup">Signup</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
