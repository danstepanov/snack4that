import React, { useState } from "react"
import type { NextPage } from "next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import Hyperlink from '../components/Hyperlink'
import SnackCard from '../components/SnackCard'
import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import Title from "../components/Title"
import Modal from "../components/Modal"
import useModal from "../hooks/useModal"

declare global {
  interface SnackCard {
    id: number;
    eventId: string;
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
      eventId: "QYQWKZ5X",
      title: "App Update Available Banner",
      description: "Optionally present a banner over your app when there is a new over-the-air update available.",
      twitterUrl: "https://twitter.com/danstepanov",
      author: "Dan Stepanov",
      snackUrl: "https://snack.expo.dev/@danstepanov/app-update-available-banner"
    },
    {
      id: 1,
      eventId: "CQ0VVTQO",
      title: "User Auth with Expo",
      description: "As AuthSession uses the auth.expo.io proxy, you'll need to enable Tracking Services, this is not recommended for production.",
      twitterUrl: "https://twitter.com/danstepanov",
      author: "Dan Stepanov",
      snackUrl: "https://snack.expo.dev/@danstepanov/auth-session-with-auth0"
    },
    {
      id: 2,
      eventId: "4DAIRFIS",
      title: "Cupertino/iOS Nav List",
      description: "Visually native iOS list. Uses all the native platform colors so it can match styles across iOS versions.",
      twitterUrl: "https://twitter.com/baconbrix",
      author: "Evan Bacon",
      snackUrl: "https://snack.expo.dev/@bacon/cupertino-nav"
    },
    {
      id: 3,
      eventId: "EN8VLV0I",
      title: "Dynamic Button and Text",
      description: "Highly reusable Tailwind-style components that allow for theme-based styles.",
      twitterUrl: "https://twitter.com/danstepanov",
      author: "Dan Stepanov",
      snackUrl: "https://snack.expo.dev/@danstepanov/dynamic-button-and-text"
    },
    {
      id: 4,
      eventId: "SZV4VPEB",
      title: "Tailwind Playground via NativeWind",
      description: "Play with Tailwind styles in Expo Snack using NativeWind. Do not install the peer dependency when prompted at the bottom of the screen.",
      twitterUrl: "https://twitter.com/mark__lawlor",
      author: "Mark Lawlor",
      snackUrl: "https://snack.expo.dev/@mwlawlor/nativewind"
    },
    {
      id: 5,
      eventId: "P7UYITDF",
      title: "Animated Price Ticker",
      description: "A beautiful price ticker component made with react-native-reanimated. This is just a taste of the beauty of the BeatGig mobile app.",
      twitterUrl: "https://twitter.com/FernandoTheRojo",
      author: "Fernando Rojo",
      snackUrl: "https://snack.expo.dev/@beatgig/reanimated-price-ticker"
    },
    {
      id: 6,
      eventId: "AAK4EX9G",
      title: "Text Input above Keyboard",
      description: "This snack uses a hook to present an input above the keyboard. My only suggestion is to have the keyboard open upon clicking the button.",
      twitterUrl: "https://twitter.com/nishanbende",
      author: "Nishan Bende",
      snackUrl: "https://snack.expo.dev/@nishanbende/keyboard-avoid-hook"
    }
  ])
  const sortedSnacks = snacks.sort((a, b) => b.id - a.id)
  const [showModal, toggleModal] = useModal(false)

  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Title>{`There's a Snack for That`}</Title>
        <div className="flex flex-col flex-wrap mt-4">
          <p className="text-black dark:text-white mb-2">
            {`Expo Snack is an open-source platform for running React Native apps in the browser. It dynamically bundles and compiles code and runs it in the Expo Client or in a web-player. Code can be saved as "Snacks" and easily shared with others.`}
          </p>
          <Hyperlink xl baseText="Try creating your own" urlText="Snack" url="https://snack.expo.dev" />
        </div>
        <div className="flex flex-col w-full">
          <SectionTitle>Snack of the Day</SectionTitle>
          <SnackCard key={sortedSnacks[0].id} snack={sortedSnacks[0]} />
        </div>
        <div className="flex justify-between w-full">
          <SectionTitle>All Snacks</SectionTitle>
          <button onClick={toggleModal}>
            <FontAwesomeIcon icon={faCirclePlus} size="2x" className="flex self-center px-2 pt-2 text-black dark:text-white text-center font-bold" />
          </button>
          
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {sortedSnacks.map((snack: SnackCard) => (
            <SnackCard key={snack.id} snack={snack} />
          ))}
        </div>
        {showModal ? <Modal toggleModal={toggleModal} /> : null}
      </div>
    </Container>
  )
}

export default Home
