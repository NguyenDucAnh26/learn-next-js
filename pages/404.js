import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>oh noo</h1>
      <h2>That page cannot be found :</h2>
      <Link href="/">
        <a>Going back</a>
      </Link>
    </div>
  );
}

export default NotFound;
