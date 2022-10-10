import Document, { Html, Head, Main, NextScript } from "next/document";

export default class _document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://font.gstatic.com" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
