import '../styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import * as Fathom from 'fathom-client'
import { ThemeProvider } from 'next-themes'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false; 

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('JIAXQCSF', {
      includedDomains: ['snackforthat.com', 'www.snackforthat.com']
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
  
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
