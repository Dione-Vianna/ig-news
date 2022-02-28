import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>

      <div>
        <h1 className={styles.title}>Init</h1>
      </div>
    </>
  );
}
