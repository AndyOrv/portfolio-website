import react from 'react'
import Link from 'next/link'
import { PlayIcon } from '@heroicons/react/solid'
import { useSpring, animated } from 'react-spring'

import Header from '../components/Header'
import WebGLView from '../components/WebGLView'
import Hero from '../components/Hero'
import WhatDo from '../components/WhatDo'
import Gallery from '../components/Gallery'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

export default function Home() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 100
  })
  return (
    <animated.div style={props}>
      <Header />

      <Hero />
      <WhatDo />

      <div className="m-auto w-1/4">
        <Link className="m-auto h-12 w-2" href="/blunder" passHref>
          <button
            type="button"
            className=" py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Play BlunderBuster
          </button>
        </Link>
      </div>

      <Gallery />
      <Blog />
      <Footer />
    </animated.div>
  )
}
