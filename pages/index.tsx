import React, { Key, useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"

import Hyperlink from '../components/Hyperlink'
import SnackCard from '../components/SnackCard'

declare global {
  interface SnackCard {
    id: Key;
    title: string;
    description: string;
    twitterUrl: string;
    author: string;
    snackUrl: string;
  }
}
const Home: NextPage = () => {
  const [snacks] = useState<SnackCard[]>([
    {
      id: 0,
      title: "App Update Available Banner",
      description: "Optionally present a banner over your app when there is a new over-the-air update available.",
      twitterUrl: "https://twitter.com/danstepanov",
      author: "Dan Stepanov",
      snackUrl: "https://snack.expo.dev/@danstepanov/app-update-available-banner"
    },
    {
      id: 1,
      title: "User Auth with Expo",
      description: "As AuthSession uses the auth.expo.io proxy, you'll need to enable Tracking Services, this is not recommended for production.",
      twitterUrl: "https://twitter.com/danstepanov",
      author: "Dan Stepanov",
      snackUrl: "https://snack.expo.dev/@danstepanov/auth-session-with-auth0"
    },
    {
      id: 2,
      title: "Cupertino/iOS Nav List",
      description: "Visually native iOS list. Uses all the native platform colors so it can match styles across iOS versions.",
      twitterUrl: "https://twitter.com/baconbrix",
      author: "Evan Bacon",
      snackUrl: "https://snack.expo.dev/@bacon/cupertino-nav"
    },
    {
      id: 3,
      title: "Dynamic Button and Text",
      description: "Highly reusable Tailwind-style components that allow for theme-based styles.",
      twitterUrl: "https://twitter.com/danstepanov",
      author: "Dan Stepanov",
      snackUrl: "https://snack.expo.dev/@danstepanov/dynamic-button-and-text"
    },
  ])

  return (
    <div className="bg-white dark:bg-slate-800 flex flex-col h-screen justify-between">
      <Head>
        <title>Snack for That</title>
        <meta name="description" content="Helpful Expo Snacks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col mx-2">
        <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{`There's a Snack for That`}</p>
        <Hyperlink baseText="Have a Snack to contribute?" urlText="Hit me up" url="https://twitter.com/danstepanov" />
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4">
          {snacks.map((snack: SnackCard) => (
            <SnackCard key={snack.id} snack={snack} />
          ))
          }
        </div>
      </main>

      <footer className="flex justify-center items-center mb-2">
        <Hyperlink baseText="Maintained by" urlText="Dan Stepanov" url="https://twitter.com/danstepanov" />
      </footer>
    </div>
  )
}

export default Home
