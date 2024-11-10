import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import Paragraph from '../components/Paragraph';
import Search from '../components/Search';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Assignment Lauren Gamber's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Welcome welcome <a href="https://nextjs.org"> nextjs info!</a>
      </h1>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Counter incrementBy={1} buttonStyle={{ backgroundColor: 'lightblue' }} />
        <Counter incrementBy={2} buttonStyle={{ backgroundColor: 'lightgreen' }} />
      </div>

      <Paragraph />

      <h2>Product Search</h2>
      <Search />
    </div>
  );
}