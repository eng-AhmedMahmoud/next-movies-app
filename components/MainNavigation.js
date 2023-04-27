import classes from "./MainNavigation.module.css";
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
function MainNavigation() {
  const { data: session } = useSession();
  if (session) {
    return (
      <nav className={` ${classes.header}`}>
        <div>
          <Link href="/" className={classes.logo}>
            FilmFrenzy
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/">All Movies</Link>
            </li>
            <li>
              <Link href="/addamovie">Add Movie</Link>
            </li>
            <li>
              <Link
                class="nav-link active"
                aria-current="page"
                href="/api/auth/signout"
                onClick={() => signOut()}
              >
                signOut
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  return (
    <nav className={` ${classes.header}`}>
      <div>
        <Link href="/" className={classes.logo}>
          FilmFrenzy
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/">All Movies</Link>
          </li>
          <li>
            <Link
              className="nav-link active"
              aria-current="page"
              href="/api/auth/signin"
              onClick={() => signIn()}
            >
              signIn
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavigation;
