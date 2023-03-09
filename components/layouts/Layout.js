import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../Container";

function Layout({
  children,
  heightScreen = "",
  ...customMeta
}) {
  const router = useRouter();
  const meta = {
    title: "Andhika Pramana Putra - Web Developer",
    description: `Andhika Pramana Putra | Tech Enthusiast | Software Engineer | Web Development | Front-End | Back-End | github.com/vbuxx | linkedin.com/in/andhikapramana | Bachelor of Enginnering | Electrical Engineering | Universitas Brawijaya`,
    image: "/andhikapramanaputra.png",
    type: "website",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="google-site-verification"
          content="GPht8NK2bfNlSiWaQwNg-_feRA_eSzUbA9pHrRmUpiE"
        />
        <meta name="ahrefs-site-verification" content="fc1b50b953f3cfa6174706c5d1cae4692069489216b8d14dbf5e2115f12fd642"/>
        <meta
          content={meta.description}
          name="description"
        />
        <meta
          property="og:url"
          content={`https://andhikapramana.my.id/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://andhikapramana.my.id/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta
          property="og:site_name"
          content="Andhika Pramana"
        />
        <meta
          property="og:description"
          content={meta.description}
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <Container>
        <div
          className={
            `flex flex-col min-h-screen ` + heightScreen
          }
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default Layout;
