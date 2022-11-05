import Link from "next/link";
import classes from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/restaurants">Restaurants</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
