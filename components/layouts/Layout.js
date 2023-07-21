import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../Container";

function Layout({ children, heightScreen = "", ...customMeta }) {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    // Get the base URL with the protocol from the 'window.location' object
    const { origin } = window.location;

    // Set the baseUrl state
    setBaseUrl(origin);
  }, []);

  const router = useRouter();
  const meta = {
    title: "Andhika Pramana - Web Developer",
    description: `Andhika Pramana | Software Engineer | Full-stack Developer | Laravel | ReactJS | Next.js | TailwindCSS  | github.com/vbuxx | linkedin.com/in/andhikapramana | Optify Indonesia`,
    image: `${baseUrl}/profile-andhika-pramana-putra.webp`,
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>
          {meta.customMeta?.title ? meta.customMeta.title : meta.title}
        </title>
        <meta name="robots" content="follow, index" />
        <meta
          name="google-site-verification"
          content="GPht8NK2bfNlSiWaQwNg-_feRA_eSzUbA9pHrRmUpiE"
        />
        <meta
          name="ahrefs-site-verification"
          content="fc1b50b953f3cfa6174706c5d1cae4692069489216b8d14dbf5e2115f12fd642"
        />

        <meta
          content={
            meta.customMeta?.description
              ? meta.customMeta.description
              : meta.description
          }
          name="description"
        />
        <meta property="og:url" content={`${baseUrl}${router.asPath}`} />
        <link rel="canonical" href={`${baseUrl}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Andhika Pramana" />
        <meta
          property="og:description"
          content={
            meta.customMeta?.description
              ? meta.customMeta.description
              : meta.description
          }
        />
        <meta
          property="og:title"
          content={meta.customMeta?.title ? meta.customMeta.title : meta.title}
        />
        <meta property="og:image" content={meta.image} />
      </Head>

      <Container>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G_GHXJCZHZCB" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G_GHXJCZHZCB');
        `}
        </Script>
        <div className={`flex flex-col min-h-screen ` + heightScreen}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default Layout;
