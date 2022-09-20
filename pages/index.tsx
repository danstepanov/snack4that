import React, { Key, useState } from "react"
import type { NextPage } from "next"

import Hyperlink from '../components/Hyperlink'
import SnackCard from '../components/SnackCard'
import Container from "../components/Container"

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
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="animate-move-bg bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 bg-400% bg-clip-text md:text-5xl text-4xl font-bold text-transparent">{`There's a Snack for That`}</h1>
        <div className="flex flex-col flex-wrap mt-4">
          <p className="text-xl text-black dark:text-white">Have a Snack to contribute?&nbsp;</p>
          <Hyperlink xl baseText="" urlText="Hit me up" url="https://twitter.com/danstepanov" />
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black pt-8 dark:text-white">Snacks</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {snacks.map((snack: SnackCard) => (
            <SnackCard key={snack.id} snack={snack} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Home
