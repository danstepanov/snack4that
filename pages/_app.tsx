import '../styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import * as Fathom from 'fathom-client'

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
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
