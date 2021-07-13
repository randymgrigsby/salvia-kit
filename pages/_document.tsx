import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <body className="text-custom dark:text-white bg-body dark:bg-body-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
