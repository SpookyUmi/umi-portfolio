import Head from "next/head";

export default function Bookmarks() {
  return (
    <div>
      <Head>
        <title>Bookmarks</title>
        <meta name="description" content="All my favorites and useful recommandations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Bookmarks section !</h1>

        <p>
          Get started by editing <code>pages/helpful/bookmarks.js</code>
        </p>
      </main>

      <footer>
        <p>Powered by JAMstack and Spooky Umi</p>
      </footer>
    </div>
  );
}
