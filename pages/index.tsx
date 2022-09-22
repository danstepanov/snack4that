import React, { Key, useState } from "react"
import type { NextPage } from "next"

import Hyperlink from '../components/Hyperlink'
import SnackCard from '../components/SnackCard'
import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import Title from "../components/Title"

declare global {
  interface SnackCard {
    id: number;
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
    {
      id: 4,
      title: "Tailwind Playground via NativeWind",
      description: "Play with Tailwind styles in Expo Snack using NativeWind. Do not install the peer dependency when prompted at the bottom of the screen.",
      twitterUrl: "https://twitter.com/mark__lawlor",
      author: "Mark Lawlor",
      snackUrl: "https://snack.expo.dev/@mwlawlor/nativewind"
    }
  ])
  const sortedSnacks = snacks.sort((a, b) => b.id - a.id)
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Title>{`There's a Snack for That`}</Title>
        <div className="flex flex-col flex-wrap mt-4">
          <Hyperlink xl baseText="Create your own" urlText="Snack" url="https://snack.expo.dev" />
          <p className="text-xl text-black dark:text-white mt-4">Have a Snack to contribute?&nbsp;</p>
          <Hyperlink xl baseText="" urlText="Hit me up" url="https://twitter.com/danstepanov" />
        </div>
        <div className="flex flex-col w-full">
          <SectionTitle>Snack of the Day</SectionTitle>
          <SnackCard key={sortedSnacks[0].id} snack={snacks[0]} />
        </div>
        <SectionTitle>All Snacks</SectionTitle>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {sortedSnacks.map((snack: SnackCard) => (
            <SnackCard key={snack.id} snack={snack} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Home
