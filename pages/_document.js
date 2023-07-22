import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import GoogleAnalytics from "../components/GoogleAnalytics";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="pRIFpS4jHzp1SdOgd8MF7NhJaxKy9IljcJyNMj2dteI"
          />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G_GHXJCZHZCB`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
                'analytics_storage': 'denied'
            });

            gtag('config', 'G_GHXJCZHZCB', {
                page_path: window.location.pathname,
            });
            `,
            }}
          />
          <GoogleAnalytics GA_MEASUREMENT_ID="G_GHXJCZHZCB" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G_GHXJCZHZCB`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G_GHXJCZHZCB', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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
