import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Coder.module.css";
export const getStaticProps = async (props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { coders: data },
  };
};

function AllCoders({ coders }) {
  return (
    <>
      <Head>
        <title>Coders wikidepia | All Coders </title>
      </Head>
      <h1>All Coders</h1>
      {coders.map((coder) => (
        <Link href={"coders/" + coder.id} key={coder.id}>
          <a className={styles.single}>
            <h3>{coder.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
}

export default AllCoders;
