import Head from "next/head";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <meta name="description" content="My resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Resume section !</h1>

        <p>
          Get started by editing <code>pages/about/resume.js</code>
        </p>
      </main>

      <footer>
        <p>Powered by JAMstack and Spooky Umi</p>
      </footer>
    </div>
  );
}
