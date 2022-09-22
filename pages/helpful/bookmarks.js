import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Bookmarks() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bookmarks</title>
        <meta name="description" content="All my favorites and useful recommandations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Bookmarks section !</h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/helpful/bookmarks.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Powered by JAMstack and Spooky Umi</p>
      </footer>
    </div>
  );
}
