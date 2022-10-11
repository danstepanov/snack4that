import { useEffect, useState, ReactElement } from 'react'
import { useTheme } from 'next-themes'
import * as Fathom from 'fathom-client'

import Hyperlink from './Hyperlink'

export default function Container({ children } : {children: ReactElement }) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => setMounted(true), [])
  
    return (
      <div className="bg-white dark:bg-black flex flex-col h-screen">  
        <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-opacity-60">
            <button aria-label="Toggle Dark Mode" type="button" className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {mounted && (
                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className="h-4 w-4 text-gray-800 dark:text-gray-200">
                        {theme === 'dark' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        ): (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />        
                        )}
                    </svg>
                )}
            </button>
        </nav>
        <div className='flex flex-col flex-grow justify-between'>
            <main className="flex flex-col mx-8">
                {children}
            </main>

            <footer className="flex justify-center mb-8" onClick={() => Fathom.trackGoal('ZYHRMFCH', 0)}>
                <Hyperlink baseText="Maintained by" urlText="Dan Stepanov" url="https://danstepanov.com" />
            </footer>
        </div>
    </div>
)
}