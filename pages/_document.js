import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <meta charset="utf-8" />
          <link href="apple-touch-icon.png" rel="apple-touch-icon"/>
    <link href="apple-touch-icon.png" rel="apple-touch-icon" sizes="76x76"/>
<link href="apple-touch-icon.png" rel="apple-touch-icon" sizes="120x120"/>
<link href="apple-touch-icon.png" rel="apple-touch-icon" sizes="152x152"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
