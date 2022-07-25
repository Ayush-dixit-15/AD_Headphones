import React from 'react'
import { Layout } from '../components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
     <Component {...pageProps} />
     </Layout>
    //  in react what happens is that if any component is inside another component then the inner one is considered to be the children and can be called at any point of time in the parent by passing simply the {children} prop and rendering it
  )
}

export default MyApp
