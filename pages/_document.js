// change the way pages are rendered using next js to fix issue with material-ui. This ensures the stylings of material-ui are server side rendered
import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  // get original rendered page
  const originalRenderpage = ctx.renderPage;
  ctx.renderpage = () => {
    return originalRenderpage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });
  };

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  };
};
