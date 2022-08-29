import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "../components/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
