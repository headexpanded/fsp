import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '../components/typography'
import { Cards } from '../components/cards'
import styles from '../styles/Home.module.css'
import { ServicesCard } from '../components/cards/ServicesCard'

const Home: NextPage = () => {
  const serviceCards = [
    {
      key: "1",
      title: "Regular",
      content: "4x pints of lager"
    },
    {
      key: "2",
      title: "Strong",
      content: "5x pints of lager, 2x pints Ron's homebrew"
    },
    {
      key: "3",
      title: "Explosive",
      content: "5x pints of lager, 2x pints Ron's homebrew, 2x Moong Dhal"
    }
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>Fat Slob Plumbing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <Typography.SubHeader content="Welcome to"/>
        <Typography.MainTitle content="FAT SLOB PLUMBING"/>
        <Typography.Paragraph content="What's the capacity of YOUR home's sewage system?"/>
        <Typography.Paragraph content="Most people don't know. But you should! These days most homes
                  just can't deal with non-standard loads. Take our advice - you
                  need to stress test your system now. After all,
                  no-one wants an unplanned blockage!"/>

      {/* Services */}
      
        {/*  extract key from serviceCards, spread the rest into card component */}
        {serviceCards.map(({key,...other}) => {
          return <ServicesCard key={key} {...other}/>
        })}
       
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
