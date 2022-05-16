import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="All my previous, current or future projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Projects section !</h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/work/projects/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Powered by JAMstack and Spooky Umi</p>
      </footer>
    </div>
  );
}
