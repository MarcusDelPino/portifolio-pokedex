import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
      <link rel="icon" href="/poke.png" sizes="any" />
      </Head>
      <title>PokeDex</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
