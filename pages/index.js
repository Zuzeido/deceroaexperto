import Head from 'next/head'
import {PostCard, Categories, PostWidget} from '../components'
import { FeaturedPosts } from '../sections'
import {getPosts} from '../services'

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



export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>De Cero a Experto - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post) => (<PostCard post={post.node} key={post.title}/>))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: {posts}
  }
}