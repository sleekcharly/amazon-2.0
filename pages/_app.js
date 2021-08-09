import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import "../styles/globals.css";
import { StoreProvider } from "../utils/store";

function MyApp({ Component, pageProps }) {
  // remove css for server side rendering of material-ui elements
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <StoreProvider>
        <PayPalScriptProvider
          options={{ "client-id": process.env.PAYPAL_CLIENT_ID }}
          deferLoading={true}
        >
          <Component {...pageProps} />
        </PayPalScriptProvider>
      </StoreProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
