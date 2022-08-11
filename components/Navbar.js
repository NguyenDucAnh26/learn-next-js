import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>Coder Wikipedia</a>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/coders">
          <a>All coders</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
