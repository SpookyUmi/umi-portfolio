import Head from "next/head";
import Resume from "./resume";

export default function About() {
  return (
    <div>
      <Head>
        <title>About me</title>
        <meta name="description" content="If you want to learn more about me, you're in the right place." />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Resume />
    </div>
  );
}
