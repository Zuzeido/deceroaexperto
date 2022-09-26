import '../styles/globals.scss'
import React, {useEffect, useState} from 'react'
import {Layout} from '../components'
import 'tailwindcss/tailwind.css'
import ReactGA from 'react-ga'
//const TRACKING_ID = "UA-242789382-1"
ReactGA.initialize('UA-242789382-1')


const pageViewsTracking = (props) => {
  const pathname = props.match.path;  

let pageView;
if (pathname === "*") pageView = '/not-found'
else pageView = pathname

ReactGA.pageview(pageView)
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component { ...pageProps} />
    </Layout>
  )
}

export default MyApp
