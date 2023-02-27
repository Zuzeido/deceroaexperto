import '../styles/globals.scss'
import React, {useEffect, useState} from 'react'
import {Layout} from '../components'
import { inject } from '@vercel/analytics';

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component { ...pageProps} />
    </Layout>
  )
}
inject()
export default MyApp
