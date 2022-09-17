import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
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
          Have a Snack to contribute? <a href="https://twitter.com/danstepanov.com">Hit me up</a>.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <a href="https://snack.expo.dev/@danstepanov/app-update-available-banner?&platform=mydevice" target="_blank" rel="noopener noreferrer">
              <h2>App Update Available Banner &rarr;</h2>
              <p>Show a banner over your app when there is a new over-the-air update available.</p>
            </a>
            <a href="https://twitter.com/danstepanov" target="_blank" rel="noopener noreferrer">Created by Dan Stepanov</a>
          </div>

          <div className={styles.card}>
            <a href="https://snack.expo.dev/@danstepanov/auth-session-with-auth0?&platform=mydevice" target="_blank" rel="noopener noreferrer">
              <h2>User Authentication with Expo &rarr;</h2>
              <p>Set up user authentication using Expo AuthSession and Auth0.</p>
            </a>
            <a href="https://twitter.com/danstepanov" target="_blank" rel="noopener noreferrer">Created by Dan Stepanov</a>
          </div>

          <div className={styles.card}>
            <a href="https://snack.expo.dev/@bacon/cupertino-nav?&platform=mydevice" target="_blank" rel="noopener noreferrer">
              <h2>Cupertino/iOS Nav List &rarr;</h2>
              <p>Uses all the native platform colors so it can match styles across iOS versions.</p>
            </a>
            <a href="https://twitter.com/baconbrix" target="_blank" rel="noopener noreferrer">Created by Evan Bacon</a>
          </div>

          <div className={styles.card}>
            <a href="https://snack.expo.dev/@danstepanov/dynamic-button-and-text?&platform=mydevice" target="_blank" rel="noopener noreferrer">
              <h2>Dynamic Button and Text &rarr;</h2>
              <p>
                Highly reusable Tailwind-style components that allow for theme-based styles.
              </p>
            </a>
            <a href="https://twitter.com/danstepanov" target="_blank" rel="noopener noreferrer">Created by Dan Stepanov</a>
          </div>
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
