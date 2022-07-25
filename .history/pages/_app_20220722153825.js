import React from 'react'
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components'
import '../styles/globals.css';
import DataContextProvider, { DataContext } from "./context/DataContext";
import { StateContext } from '../context/StateContext';


function MyApp({ Component, pageProps }) {
  return(
    <DataContextProvider>
    <Layout>
     <Component {...pageProps} />
     </Layout>
     </DataContextProvider>
    //  in react what happens is that if any component is inside another component then the inner one is considered to be the children and can be called at any point of time in the parent by passing simply the {children} prop and rendering it
  )
}

export default MyApp
