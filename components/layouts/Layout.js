import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../Container";

function Layout({ children, heightScreen = "h-auto", ...customMeta }) {
  const router = useRouter();
  const meta = {
    title: "Andhika Pramana Putra - Web Developer",
    description: `A 24-year-old web developer based in Jombang, Indonesia.`,
    image: "/andhikapramana.png",
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
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://andhikapramana.my.id/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://andhikapramana.my.id/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Andhika Pramana" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <div className="text-slate-800">
        <Container>
          <div className={`flex flex-col ` + heightScreen}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Layout;
