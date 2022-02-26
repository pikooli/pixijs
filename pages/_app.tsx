import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min" as string);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
