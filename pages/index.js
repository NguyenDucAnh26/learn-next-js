import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>code coder Wikipedia | hone</title>
        <meta name="keywords" content="coders" />
      </Head>
      <div>
        <h1 className={styles.title}>this is home page</h1>
        <p className={styles.text}>hello guys !</p>
        <Link href="/coders">
          <a className="btn">See all coderss</a>
        </Link>
        <style jsx>
          {`
            .btn {
              display: block;
              width: 150px;
              padding: 8px 0;
              margin: 20px auto;
              background: #ffbf49;
              border-radius: 4px;
              color: black;
              text-align: center;
            }
          `}
        </style>
      </div>
    </>
  );
}
