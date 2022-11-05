import Link from "next/link";
import classes from "./Navbar.module.css";
import Image from "next/image";

function Navbar() {
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
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/restaurants">Restaurants</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
