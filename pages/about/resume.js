import Head from "next/head";

export default function Resume() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume</title>
        <meta name="description" content="My resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Resume section !</h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/about/resume.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Powered by JAMstack and Spooky Umi</p>
      </footer>
    </div>
  );
}
