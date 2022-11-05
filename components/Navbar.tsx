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
        <Image src="/static/logo.png" alt="lgoo" layout="fill" />
      </div>
      <div>
        {session ? (
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/restaurants">Restaurants</Link>
            </li>
          </ul>
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
