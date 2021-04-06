import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WebDev News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to NextJS</h1>
    </div>
  )
}
