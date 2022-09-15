import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Snack 4 That</title>
        <meta name="description" content="Helpful Expo Snacks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Have a Snack to contribute? <a className={styles.link} href="https://twitter.com/danstepanov.com">Hit me up</a>.
        </p>

        <div className={styles.grid}>
          <a href="https://snack.expo.dev/@danstepanov/app-update-available-banner&platform=mydevice" className={styles.card}>
            <h2>App Update Available Banner &rarr;</h2>
            <p>Show a banner over your app when there is a new over-the-air update available.</p>
            <a href="https://twitter.com/danstepanov">Created by Dan Stepanov</a>
          </a>
          

          <a href="https://snack.expo.dev/@danstepanov/auth-session-with-auth0&platform=mydevice" className={styles.card}>
            <h2>User Authentication with Expo &rarr;</h2>
            <p>Set up user authentication using Expo AuthSession and Auth0.</p>
            <a href="https://twitter.com/danstepanov">Created by Dan Stepanov</a>
          </a>

          <a
            href="https://snack.expo.dev/@bacon/cupertino-nav&platform=mydevice"
            className={styles.card}
          >
            <h2>Cupertino/iOS Nav List &rarr;</h2>
            <p>Uses all the native platform colors so it can match styles across iOS versions.</p>
            <a href="https://twitter.com/baconbrix">Created by Evan Bacon</a>
          </a>

          <a
            href="https://snack.expo.dev/@danstepanov/dynamic-button-and-text&platform=mydevice"
            className={styles.card}
          >
            <h2>Dynamic Button and Text &rarr;</h2>
            <p>
              Highly reusable Tailwind-style components that allow for theme-based styles.
            </p>
            <a href="https://twitter.com/danstepanov">Created by Dan Stepanov</a>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://danstepanov.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maintained by {' '} Dan Stepanov
        </a>
      </footer>
    </div>
  )
}

export default Home
