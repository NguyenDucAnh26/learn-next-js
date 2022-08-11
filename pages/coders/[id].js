import Head from "next/head";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((coder) => {
    return {
      params: { id: coder.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  console.log("🚀 ~ file: [id].js ~ line 20 ~ getStaticProps ~ data");
  console.log("🚀 ~ file: [id].js ~ line 20 ~ getStaticProps ~ data", data);
  return {
    props: { coder: data },
  };
};
function Detail({ coder }) {
  return (
    <>
      <Head>
        <title>Coder wikidepia | {coder.name}</title>
        <meta name="keywords" content="coders" />
      </Head>
      <div>
        <p>Email: {coder.email}</p>
        <p>Website: {coder.website}</p>
        <p>street: {coder.address.street}</p>
      </div>
    </>
  );
}

export default Detail;
