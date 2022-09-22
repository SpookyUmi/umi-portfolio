import Head from "next/head";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Blog section !</h1>

        <p>
          Get started by editing <code>pages/blog/index.js</code>
        </p>
      </main>

      <footer>
        <p>Powered by JAMstack and Spooky Umi</p>
      </footer>
    </div>
  );
}
