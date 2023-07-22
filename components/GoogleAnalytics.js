import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router"; // Correct import for useRouter
import { pageview } from "../lib/gtagHelper";

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  const router = useRouter();
  console.log("gaaa");

  useEffect(() => {
    if (router) {
      const handleRouteChange = (url) => {
        pageview(GA_MEASUREMENT_ID, url);
      };

      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
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

            gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
            });
            `,
        }}
      />
    </>
  );
}
