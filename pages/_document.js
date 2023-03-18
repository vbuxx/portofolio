import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="pRIFpS4jHzp1SdOgd8MF7NhJaxKy9IljcJyNMj2dteI" />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-C6J8M7NT3R"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'GA_MEASUREMENT_ID');
            `}
          </Script>

        </Head>
        <body className="text-slate-800 dark:text-slate-100 dark:bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
