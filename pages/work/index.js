import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Work() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Work</title>
        <meta name="description" content="Work section home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Work section !</h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/work/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Powered by JAMstack and Spooky Umi</p>
      </footer>
    </div>
  );
}
