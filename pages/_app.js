import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // remove css for server side rendering of material-ui elements
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
