import { Html, Head, Main, NextScript } from "next/document";

import { siteMeta } from "lib/constants";
const { siteLang } = siteMeta;

export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
