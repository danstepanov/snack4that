import React, { useEffect, useState } from "react"
import type { NextPage } from "next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import Hyperlink from '../components/Hyperlink'
import SnackCard from '../components/SnackCard'
import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import SectionSubtitle from "../components/SectionSubtitle"
import Title from "../components/Title"
import Modal from "../components/Modal"
import useModal from "../hooks/useModal"
import { supabase } from "../utils/supabaseClient"
import Subscribe from "../components/Subscribe"

declare global {
  interface SnackCard {
    id: number;
    eventId: string;
    title: string;
    description: string;
    twitterUrl: string;
    author: string;
    snackUrl: string;
    type: string;
  }
}
const Home: NextPage = () => {  
  const [showModal, toggleModal] = useModal(false)
  const [isLoading, setLoading] = useState(true)
  const [snacks, setSnacks] = useState<SnackCard[]>([])
  const sortedSnacks = snacks.sort((a, b) => b.id - a.id)
  const expoSnacks = snacks.filter(snack => snack.type === 'expo')
  const visualSnacks = snacks.filter(snack => snack.type === 'visual')
  const componentSnacks = snacks.filter(snack => snack.type === 'component')
  const templateSnacks = snacks.filter(snack => snack.type === 'template')
  const performanceSnacks = snacks.filter(snack => snack.type === 'performance')
  const cursedSnacks = snacks.filter(snack => snack.type === 'cursed')  

  useEffect(() => {
    getSnacks()
  }, [])

  async function getSnacks() {
    try {
      setLoading(true)
      const { data, error, status } = await supabase
        .from('snacks')
        .select(`id, eventId, title, description, twitterUrl, author, snackUrl, type`)
      
      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setSnacks(data)
      }
    } catch (error) {
      if (typeof error === "string") {
        alert(error.toUpperCase())
      } else if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  function showModalClicked() {
    toggleModal()
  }

  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Title>{`There's a Snack for That`}</Title>
        <div className="flex flex-col w-full">
          <SectionTitle>Snack of the Day</SectionTitle>
          {isLoading ? null : (
            <SnackCard key={sortedSnacks[0].id} snack={sortedSnacks[0]} />
          )}
        </div>
        <Subscribe />
        <div className="flex justify-between w-full">
          <SectionTitle>All Snacks</SectionTitle>
          <button onClick={showModalClicked}>
            <FontAwesomeIcon icon={faCirclePlus} size="2x" className="flex self-center px-2 pt-2 text-black dark:text-white text-center font-bold" />
          </button>
        </div>
        <div className="flex flex-col flex-wrap mt-4">
          <p className="text-lg font-bold text-black dark:text-white mb-2">What is Expo Snack?</p>
          <p className="text-black dark:text-white mb-2">
            {`Expo Snack is an open-source platform for running React Native apps in the browser. It dynamically bundles and compiles code and runs it in the Expo Client or in a web-player. Code can be saved as "Snacks" and easily shared with others.`}
          </p>
          <Hyperlink baseText="Try creating your own" urlText="Snack" url="https://snack.expo.dev" />
        </div>
        {isLoading ? null : (
          <>
            <SectionSubtitle>🛝 Templates & Playgrounds</SectionSubtitle>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {templateSnacks.map((snack: SnackCard) => (
                <SnackCard key={snack.id} snack={snack} />
              ))}
            </div>
            
            <SectionSubtitle>🧰 Expo Tools</SectionSubtitle>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {expoSnacks.map((snack: SnackCard) => (
                <SnackCard key={snack.id} snack={snack} />
              ))}
            </div>

            <SectionSubtitle>⚡ Performance</SectionSubtitle>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {performanceSnacks.map((snack: SnackCard) => (
                <SnackCard key={snack.id} snack={snack} />
              ))}
            </div>

            <SectionSubtitle>✨ Design</SectionSubtitle>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {visualSnacks.map((snack: SnackCard) => (
                <SnackCard key={snack.id} snack={snack} />
              ))}
            </div>

            <SectionSubtitle>📱 One-off Components</SectionSubtitle>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {componentSnacks.map((snack: SnackCard) => (
                <SnackCard key={snack.id} snack={snack} />
              ))}
            </div>

            <SectionSubtitle>💀 Cursed Components</SectionSubtitle>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {cursedSnacks.map((snack: SnackCard) => (
                <SnackCard key={snack.id} snack={snack} />
              ))}
            </div>
          </>
        )}
        {showModal ? <Modal toggleModal={toggleModal} /> : null}
      </div>
    </Container>
  )
}

export default Home
